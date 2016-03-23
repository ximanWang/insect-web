package com.nwsuaf.insect.service;

import com.nwsuaf.insect.model.User;

public interface UserService {
	
	public String selectPasswdbyName(String name);
	
	public User selectUserById(Integer id);
}
