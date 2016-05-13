package com.nwsuaf.insect.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nwsuaf.insect.dto.ListResult;
import com.nwsuaf.insect.dto.Pagination;
import com.nwsuaf.insect.mapper.InsectCateRoleMapper;
import com.nwsuaf.insect.model.InsectCateRole;
import com.nwsuaf.insect.service.UserRoleService;

@Service("UserRoleService")
public class UserRoleServiceImpl implements UserRoleService{

	@Autowired
	private InsectCateRoleMapper insectCateRoleMapper;
	
	@Override
	public List<InsectCateRole> getUserRoleList() {

		List<InsectCateRole> roleList = insectCateRoleMapper.findAll();
		return roleList;
	}

	@Override
	public ListResult getUsers(Pagination pagination) {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	
}
