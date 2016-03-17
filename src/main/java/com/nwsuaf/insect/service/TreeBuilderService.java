package com.nwsuaf.insect.service;

import java.util.List;

import com.nwsuaf.insect.model.query.InsectCategoryQuery;

/**
 * 构建HTML树形结构
 * @author ximan
 *
 */
public interface TreeBuilderService {
	
	public String buildInsectTree(List<InsectCategoryQuery> insectCategoryQuery);
}
