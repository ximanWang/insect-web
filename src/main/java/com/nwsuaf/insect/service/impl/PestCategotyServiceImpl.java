package com.nwsuaf.insect.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nwsuaf.insect.model.query.InsectCategoryQuery;
import com.nwsuaf.insect.model.query.PestCategoryQuery;
import com.nwsuaf.insect.service.pest.PestCategoryBizService;
import com.nwsuaf.insect.service.pest.PestCategoryService;

@Service("PestService")
public class PestCategotyServiceImpl implements PestCategoryService{
	
	@Autowired
	private PestCategoryBizService pestCategoryBizService;
	@Override
	public List<PestCategoryQuery> getInsectCategoryTree(List<Integer> categoryIds, boolean isRoot) {
		Map<Integer, List<PestCategoryQuery>> cateMap = pestCategoryBizService.getAllInsectCategoriesGroupByParentId();
		List<PestCategoryQuery> categories = pestCategoryBizService.buildCategoryTree(1,categoryIds, cateMap, false, isRoot);
		return categories;
	}
	
	
}
