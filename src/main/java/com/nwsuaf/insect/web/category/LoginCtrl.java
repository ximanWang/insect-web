package com.nwsuaf.insect.web.category;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("toLogin")
public class LoginCtrl {

	@RequestMapping(value = "/login")
	public ModelAndView toLogin() {
		ModelAndView mv = new ModelAndView("login");
		return mv;
	}
	
	@RequestMapping(value = "/loginCtl")
	public ModelAndView loginCtl() {
		ModelAndView mv = new ModelAndView("hello");
		return mv;
	}

}
