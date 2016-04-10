package com.nwsuaf.insect.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nwsuaf.insect.mapper.UserMapper;
import com.nwsuaf.insect.model.InsectCateUserRole;
import com.nwsuaf.insect.model.query.InsectCateUserRoleQuery;
import com.nwsuaf.insect.model.query.UserQuery;
import com.nwsuaf.insect.service.UserService;

@Service("UserService")
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserMapper userMapper;
	
	public UserQuery findUserByName(String username){
		InsectCateUserRole user = userMapper.selectByName(username);
		if(user != null){
			UserQuery userQuery = toUserQuery(user);
			return userQuery;
		}
		return null;
	}
	
	private UserQuery toUserQuery(InsectCateUserRole user) {
		UserQuery userQuery = new UserQuery();
		userQuery.setUserName(user.getUserName());
		userQuery.setPassword(user.getUserPasswd());
		userQuery.setEmail(user.getUserEmail());
		userQuery.setRealName(user.getUserName());
		InsectCateUserRoleQuery insectCateUserRoleQuery = new InsectCateUserRoleQuery();
		if("ROOT".equals(user.getRoleCode())){
			userQuery.setIsRoot(true);
			insectCateUserRoleQuery.setRoleName("ROOT");
			insectCateUserRoleQuery.setEnableDelete(true);
			insectCateUserRoleQuery.setEnableEdit(true);
			List<Integer> categorys = new ArrayList<Integer>();
			categorys.add(2);
			categorys.add(3);
			insectCateUserRoleQuery.setCategoryIds(categorys);
		}else {
			userQuery.setIsRoot(true);
			insectCateUserRoleQuery.setRoleName("ROOT");
			insectCateUserRoleQuery.setEnableDelete(true);
			insectCateUserRoleQuery.setEnableEdit(false);
			List<Integer> categorys = new ArrayList<Integer>();
			categorys.add(2);
			categorys.add(3);
			insectCateUserRoleQuery.setCategoryIds(categorys);
		}
		List<InsectCateUserRoleQuery> insectCateUserRoles = new ArrayList<InsectCateUserRoleQuery>();
		insectCateUserRoles.add(insectCateUserRoleQuery);
		userQuery.setInsectCateUserRoles(insectCateUserRoles);
		return userQuery;
	}

	public String selectPasswdbyName(String name) {
		// TODO selectPasswdbyName
		return null;
	}

	public InsectCateUserRole selectUserById(Integer id) {
		InsectCateUserRole user = userMapper.selectByPrimaryKey(id);
		return user;
	}

}
