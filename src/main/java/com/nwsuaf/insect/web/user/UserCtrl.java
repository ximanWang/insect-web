package com.nwsuaf.insect.web.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nwsuaf.insect.model.User;
import com.nwsuaf.insect.service.UserService;

@Controller
@RequestMapping("/user")
public class UserCtrl {

	@Autowired
	private UserService userService;

	@RequestMapping(value = "/{id}")
	public User selectByUserId(@PathVariable("id") Integer id) {
		User user = userService.selectUserById(id);
		return user;
	}
}
