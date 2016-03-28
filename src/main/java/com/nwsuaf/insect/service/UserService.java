package com.nwsuaf.insect.service;

import com.nwsuaf.insect.model.InsectCateUserRole;
import com.nwsuaf.insect.model.query.UserQuery;

public interface UserService {
	
	public UserQuery findUserByName(String username);
	
	public String selectPasswdbyName(String name);
	
	public InsectCateUserRole selectUserById(Integer id);
}
