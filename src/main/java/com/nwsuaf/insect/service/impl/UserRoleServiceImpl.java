package com.nwsuaf.insect.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.nwsuaf.insect.dto.ListResult;
import com.nwsuaf.insect.dto.Pagination;
import com.nwsuaf.insect.mapper.InsectCateRoleMapper;
import com.nwsuaf.insect.mapper.InsectCateUserRoleMapper;
import com.nwsuaf.insect.model.InsectCateUserRole;
import com.nwsuaf.insect.service.UserRoleService;
import com.nwsuaf.insect.util.PaginationUtil;

@Service("UserRoleService")
public class UserRoleServiceImpl implements UserRoleService{

	@Autowired
	private InsectCateRoleMapper insectCateRoleMapper;
	@Autowired
	private InsectCateUserRoleMapper userRoleMapper;
	
	@Override
	public ListResult getUsers(Pagination pagination) {

		String roleCode = (String)pagination.getCondition().get("roleCode");
		String userCode = (String)pagination.getCondition().get("userCode");
		String userName = (String)pagination.getCondition().get("userName");
		
		PaginationUtil.initDateQueryCondition(pagination);
		//设置分页区间，并设置第三个参数为true，计算总记录数
	    PageHelper.startPage(pagination.getCurrentPage(), pagination.getPageCount(), true);
	    
	    InsectCateUserRole userRole = toUserRole(roleCode, userCode, userName);
	    List<InsectCateUserRole> userRoleList = userRoleMapper.selectByCondition(userRole);
	    
	    PageInfo page = new PageInfo(userRoleList);
		ListResult listResult = new ListResult(userRoleList,page.getTotal());
		return listResult;
	}

	private InsectCateUserRole toUserRole(String roleCode, String userCode, String userName) {

		InsectCateUserRole userRole = new InsectCateUserRole();
		
		userRole.setRoleCode(roleCode);
		userRole.setUserName(userName);
		userRole.setUserCode(userCode);
		
		return userRole;
	}
	
	
	
}
