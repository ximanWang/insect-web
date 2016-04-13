package com.nwsuaf.insect.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nwsuaf.insect.enums.OprTypeEnum;
import com.nwsuaf.insect.exception.InsectException;
import com.nwsuaf.insect.mapper.InsectCategoryMapper;
import com.nwsuaf.insect.model.InsectCategory;
import com.nwsuaf.insect.model.query.InsectCategoryQuery;
import com.nwsuaf.insect.model.query.InsectOprData;
import com.nwsuaf.insect.model.query.InsectOprQuery;
import com.nwsuaf.insect.service.InsectCategoryBizService;
import com.nwsuaf.insect.service.InsectCategoryService;

@Service("InsectCategoryService")
public class InsectCategoryServiceImpl implements InsectCategoryService {

	@Autowired
	private InsectCategoryBizService insectCategoryBizService;
	@Autowired
	private InsectCategoryMapper insectCategoryMapper;

	/**
	 * 根据类目集合id查询所有的类目树
	 */
	public List<InsectCategoryQuery> getInsectCategoryTree(List<Integer> categoryIds, boolean isRoot) {
		Map<Integer, List<InsectCategoryQuery>> cateMap = insectCategoryBizService
				.getAllInsectCategoriesGroupByParentId();
		List<InsectCategoryQuery> categories = insectCategoryBizService.buildCategoryTree(0,
				categoryIds, cateMap, false, isRoot);
		return categories;
	}

	/**
	 * 处理异步操作
	 */
	public void addProcess(InsectOprData insectOprData) throws InsectException {

		// 先校验参数的合法性
		insectCategoryBizService.validateOprJsonData(insectOprData);
		for (InsectOprQuery insectOprQuery : insectOprData.getInsectOprs()) {
			if (insectOprQuery.getOprType().equals(OprTypeEnum.UPD_CATE_NAME.val())) {
				insectCategoryBizService.updateCataName(insectOprQuery);
			}
			if (insectOprQuery.getOprType().equals(OprTypeEnum.DEL_CATE.val())) {
				insectCategoryBizService.delCate(insectOprQuery);
			}
		}
	}

	/**
	 * 获取频道列表
	 */
	public List<InsectCategoryQuery> getAncestorList() {
		List<InsectCategoryQuery> ancestorList = insectCategoryMapper.selectByParentId(1);
		return ancestorList;
	}

	/**
	 * 获取某频道下的类目清单
	 */
	public List<InsectCategoryQuery> getFlatCategoryList(Integer ancestorId) {

		return getFlatCategoryLisByAncestorId(ancestorId, false);
	}

	@Override
	public List<InsectCategoryQuery> getFlatCategoryLisByAncestorId(int ancestorId,
			boolean isRootUser) throws InsectException {
		List<InsectCategoryQuery> flatCateList = insectCategoryBizService
				.getFlatCategoryListByAncestor(ancestorId, new ArrayList<Integer>(), isRootUser);

		return flatCateList;
	}

	@Override
	public List<InsectCategoryQuery> getFlatCategoryList() {
		List<InsectCategoryQuery> flatCateList = insectCategoryBizService.getFlatCategoryListByAncestor(
				1, new ArrayList<Integer>(), false);

		return flatCateList;
	}

	@Override
	@Transactional
	public void addCategory(InsectCategory insectCategory, Integer parentId) throws InsectException {
		InsectCategory insectCategoryParent = insectCategoryMapper.selectByPrimaryKey(parentId);
		if(insectCategoryParent.getIsLeaf() == 1){
			insectCategoryParent.setIsLeaf(0);
			insectCategoryMapper.updateByPrimaryKeySelective(insectCategoryParent);
		}
		
		insectCategory.setParentId(parentId);
		insectCategory.setLft(insectCategoryParent.getRgt());
		insectCategory.setRgt(insectCategoryParent.getRgt()+1);
		insectCategoryMapper.updateRightData(insectCategoryParent.getRgt());
		insectCategory.setCategoryLevel(insectCategoryParent.getCategoryLevel()+1);
		insectCategory.setIsLeaf(1);
		insectCategoryMapper.insert(insectCategory);
		InsectCategory newInsectCategory = insectCategoryMapper.selectByCategoryName(insectCategory.getCategoryName());
		newInsectCategory.setCategoryId(newInsectCategory.getId());
		insectCategoryMapper.updateByPrimaryKeySelective(newInsectCategory);
		
	}

}
