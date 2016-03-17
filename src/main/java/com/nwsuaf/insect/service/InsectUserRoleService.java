package com.nwsuaf.insect.service;

import java.util.List;

import com.nwsuaf.insect.model.query.InsectCateUserRoleQuery;

/**
 * 
 * @author ximan
 *
 */
public interface InsectUserRoleService {
	
	public List<Integer> getBackCategoryIds(List<InsectCateUserRoleQuery> insectCateUserRoles );
}
