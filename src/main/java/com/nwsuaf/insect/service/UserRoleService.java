package com.nwsuaf.insect.service;

import java.util.List;

import com.nwsuaf.insect.dto.ListResult;
import com.nwsuaf.insect.dto.Pagination;
import com.nwsuaf.insect.model.InsectCateRole;

public interface UserRoleService {
	

	public ListResult getUsers(Pagination pagination);
}
