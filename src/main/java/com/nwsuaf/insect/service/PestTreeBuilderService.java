package com.nwsuaf.insect.service;

import java.util.List;

import com.nwsuaf.insect.model.query.PestCategoryQuery;

public interface PestTreeBuilderService {
	
	public String buildPestTree(List<PestCategoryQuery> pestCategoryQuery);
}
