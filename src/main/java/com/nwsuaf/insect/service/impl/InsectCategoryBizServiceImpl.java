package com.nwsuaf.insect.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.alibaba.fastjson.JSON;
import com.nwsuaf.insect.enums.OprTypeEnum;
import com.nwsuaf.insect.exception.InsectException;
import com.nwsuaf.insect.mapper.InsectCategoryMapper;
import com.nwsuaf.insect.mapper.InsectMapper;
import com.nwsuaf.insect.model.Insect;
import com.nwsuaf.insect.model.InsectCategory;
import com.nwsuaf.insect.model.query.ErrorLog;
import com.nwsuaf.insect.model.query.InsectCategoryQuery;
import com.nwsuaf.insect.model.query.InsectOprData;
import com.nwsuaf.insect.model.query.InsectOprQuery;
import com.nwsuaf.insect.model.query.OprJsonData;
import com.nwsuaf.insect.service.InsectCategoryBizService;

@Service("InsectCategoryBizService")
public class InsectCategoryBizServiceImpl implements InsectCategoryBizService {

	@Autowired
	private InsectCategoryMapper insectCategoryMapper;
	
	@Autowired
	private InsectMapper insectMapper;
	
	public Map<Integer, List<InsectCategoryQuery>> getAllInsectCategoriesGroupByParentId() {
		Map<Integer, List<InsectCategoryQuery>> cateMap = new TreeMap<Integer, List<InsectCategoryQuery>>();
		List<InsectCategoryQuery> categories = insectCategoryMapper.selectAllInsectCategories();
		
		for(InsectCategoryQuery category : categories) {
			if(cateMap.containsKey(category.getParentId())) {
				cateMap.get(category.getParentId()).add(category);
			} else {
				List<InsectCategoryQuery> subCategories = new ArrayList<InsectCategoryQuery>();
				subCategories.add(category);
				cateMap.put(category.getParentId(), subCategories);
			}
		}
		return cateMap;
	}

	public List<InsectCategoryQuery> buildCategoryTree(Integer parentId,
			List<Integer> categoryIds,
			Map<Integer, List<InsectCategoryQuery>> caegoryMap,
			boolean privilege, boolean isRoot) {
		List<InsectCategoryQuery> categories = caegoryMap.get(parentId);
		for(InsectCategoryQuery category : categories) {
			boolean flag = privilege || isRoot;
			if(!flag) {
				flag = categoryIds.contains(category.getCategoryId());
			}
			category.setPrivilege(flag);
			if(category.getIsLeaf()==0) {
				category.setChildern(buildCategoryTree(category.getCategoryId(), categoryIds, caegoryMap, flag, isRoot));
			}
		}
		
		return categories;
	}

	public void validateOprJsonData(InsectOprData insectOprData) throws InsectException {
		for (InsectOprQuery insectOprQuery : insectOprData.getInsectOprs()) {
			OprJsonData operJsonData = JSON.parseObject(insectOprQuery.getOprDate(),OprJsonData.class);
			if(insectOprQuery.getOprType().equals(OprTypeEnum.UPD_CATE_NAME.val())){
				if(operJsonData.getCategoryId() == null)
					throw new InsectException("需要修改的类目id为空");
				if(!StringUtils.hasText(operJsonData.getNewCategoryName()))
					throw new InsectException("修改的新类目名称为空");
			}
			if(insectOprQuery.getOprType().equals(OprTypeEnum.DEL_CATE.val())){
				if(operJsonData.getCategoryId()==null)
					throw new InsectException("需要删除的类目id为空");
			}
		}
	}
	

	public List<InsectCategory> getParents(Integer id) {
		List<InsectCategory> insectCateList = insectCategoryMapper.getParents(id);
		//去掉ROOT
		insectCateList.remove(0);
		return insectCateList;
	}
	
	@Transactional
	public void updateCataName(InsectOprQuery insectOprQuery) throws InsectException {
		OprJsonData oprJsonData = JSON.parseObject(insectOprQuery.getOprDate(),OprJsonData.class);
		InsectCategory insectCategory = new InsectCategory();
		insectCategory.setCategoryName(oprJsonData.getNewCategoryName());
		insectCategoryMapper.updateByPrimaryKeySelective(insectCategory);
		//修改Insect详情表中信息
		Insect insect = insectMapper.selectByCategoryId(oprJsonData.getCategoryId());
		if(insect != null){
			insectMapper.updateByPrimaryKeySelective(insect);
		}
		// TODO 修改害虫表中信息
	}

	public List<ErrorLog> delCate(InsectOprQuery insectOprQuery) throws InsectException {
		// TODO Auto-generated method stub
		return null;
	}

	@Transactional
	public Integer insertCategory(InsectCategory insectCategory, Integer parentId) {
		InsectCategory insectParent = insectCategoryMapper.selectByPrimaryKey(parentId);
		insectCategory.setParentId(parentId);
		insectCategory.setLft(insectParent.getRgt());
		insectCategory.setRgt(insectParent.getRgt()+1);
		insectCategory.setCategoryLevel(insectParent.getCategoryLevel()+1);
		insectCategoryMapper.updateRightData(insectParent.getRgt());
		Integer result = insectCategoryMapper.insert(insectCategory);
		return result;
	}

}
