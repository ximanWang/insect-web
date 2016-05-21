package com.nwsuaf.insect.web.front;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/")
public class IndexController {
	
	@RequestMapping(value = "/index")
	public ModelAndView showIndex(){
		return new ModelAndView("frontIndex");
	}
	@RequestMapping(value = "/detail")
	public ModelAndView showDetail(){
		return new ModelAndView("front/insectDetail");
	}
}
