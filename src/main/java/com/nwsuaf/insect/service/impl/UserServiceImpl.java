package com.nwsuaf.insect.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nwsuaf.insect.mapper.UserMapper;
import com.nwsuaf.insect.model.User;
import com.nwsuaf.insect.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserMapper userMapper;
	
	public String selectPasswdbyName(String name) {
		// TODO selectPasswdbyName
		return null;
	}

	public User selectUserById(Integer id) {
		User user = userMapper.selectByPrimaryKey(id);
		return user;
	}

}
