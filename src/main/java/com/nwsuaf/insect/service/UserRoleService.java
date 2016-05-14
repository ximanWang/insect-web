package com.nwsuaf.insect.service;

import com.nwsuaf.insect.dto.ListResult;
import com.nwsuaf.insect.dto.Pagination;
import com.nwsuaf.insect.model.InsectCateUserRole;

public interface UserRoleService {
	

	public ListResult getUsers(Pagination pagination);
	
	public InsectCateUserRole findById(Integer id);
	
	public void updateSelective(InsectCateUserRole userRole);
}
