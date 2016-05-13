package com.nwsuaf.insect.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nwsuaf.insect.mapper.InsectCateRoleMapper;
import com.nwsuaf.insect.model.InsectCateRole;
import com.nwsuaf.insect.service.CateRoleService;

@Service("CateRoleService")
public class CateRoleServiceImpl implements CateRoleService{
	
	@Autowired
	private InsectCateRoleMapper roleMapper;
	@Override
	public List<InsectCateRole> getAllCates() {

		List<InsectCateRole> roleList = roleMapper.findAll();
		return roleList;
	}

}
