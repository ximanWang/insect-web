package com.nwsuaf.insect.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nwsuaf.insect.exception.InsectException;
import com.nwsuaf.insect.mapper.InsectCategoryMapper;
import com.nwsuaf.insect.model.InsectCategory;
import com.nwsuaf.insect.model.query.InsectCategoryQuery;
import com.nwsuaf.insect.service.InsectCategoryBizService;
import com.nwsuaf.insect.service.InsectCategoryService;

@Service("InsectCategoryService")
public class InsectCategoryServiceImpl implements InsectCategoryService {
	
	@Autowired
	private InsectCategoryBizService insectCategoryBizService;
	@Autowired
	private InsectCategoryMapper insectCategoryMapper;
	
	/**
	 *根据类目集合id查询所有的类目树
	 */
	public List<InsectCategoryQuery> getInsectCategoryTree(
			List<Integer> categoryIds, boolean isRoot) {
		Map<Integer, List<InsectCategoryQuery>> cateMap = insectCategoryBizService.getAllInsectCategoriesGroupByParentId();
		List<InsectCategoryQuery> categories = insectCategoryBizService.buildCategoryTree(0, categoryIds, cateMap, false, isRoot);
		return categories;
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

	public List<InsectCategory> getParents(Integer id) {
		List<InsectCategory> insectCateList = insectCategoryMapper.getParents(id);
		//去掉ROOT
		insectCateList.remove(0);
		return insectCateList;
	}

}
