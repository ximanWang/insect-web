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
	
	/**
	 * 添加类目
	 * @param insectCategory
	 * @return
	 */
	Integer insertCategory(InsectCategory insectCategory);
	
	/**
	 * 获取族谱
	 * @param id
	 * @return
	 */
	List<InsectCategory> getParents(Integer id);

}
