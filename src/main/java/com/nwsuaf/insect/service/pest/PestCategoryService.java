package com.nwsuaf.insect.service.pest;

import java.util.List;

import com.nwsuaf.insect.model.query.InsectCategoryQuery;
import com.nwsuaf.insect.model.query.PestCategoryQuery;

public interface PestCategoryService {
	
	/**
	 * 获取类目树
	 * @param categoryIds
	 * @param isRoot
	 * @return
	 */
	List<PestCategoryQuery> getInsectCategoryTree(List<Integer> categoryIds, boolean isRoot);
}
