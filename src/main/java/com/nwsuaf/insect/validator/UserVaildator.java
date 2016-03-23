package com.nwsuaf.insect.validator;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import com.nwsuaf.insect.model.query.User;

public class UserVaildator implements Validator{

	public boolean supports(Class cla) {
		return cla.equals(User.class);
	}

	public void validate(Object obj, Errors error) {
		User user = (User)obj;
		if(!"ximan".equals(user.getUserName())){
			error.rejectValue("userName", "userNameError", null, "用户名不正确");
		}
		if(!"abc".equals(user.getPassword())){
			error.rejectValue("password", "passwordError", null, "密码不挣钱");
		}
	}

}
