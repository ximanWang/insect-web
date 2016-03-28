package com.nwsuaf.insect.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nwsuaf.insect.mapper.UserMapper;
import com.nwsuaf.insect.model.InsectCateUserRole;
import com.nwsuaf.insect.model.query.UserQuery;
import com.nwsuaf.insect.service.UserService;
import com.sun.tools.internal.xjc.reader.xmlschema.bindinfo.BIConversion.User;

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
