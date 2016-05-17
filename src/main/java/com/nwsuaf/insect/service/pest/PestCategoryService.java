package com.nwsuaf.insect.service.pest;

import java.util.List;

import com.nwsuaf.insect.model.query.InsectCategoryQuery;

public interface PestCategoryService {
	
	/**
	 * 获取类目树
	 * @param categoryIds
	 * @param isRoot
	 * @return
	 */
	List<InsectCategoryQuery> getInsectCategoryTree(List<Integer> categoryIds, boolean isRoot);
}
