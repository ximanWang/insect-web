package com.nwsuaf.insect.service;

import java.util.List;

import com.nwsuaf.insect.model.InsectCategory;
import com.nwsuaf.insect.model.query.InsectCategoryQuery;

/**
 * 昆虫类目服务接口
 * @author ximan
 *
 */
public interface InsectCategoryService {
	
	List<InsectCategoryQuery> getInsectCategoryTree(List<Integer> categoryIds, boolean isRoot);
	
	Integer insertCategory(InsectCategory insectCategory);

}
