package com.nwsuaf.insect.mapper.test;

import static org.junit.Assert.*;

import org.junit.Test;
import org.springframework.web.servlet.ModelAndView;

import com.nwsuaf.insect.web.category.UserTestCtrl;

public class TestController {
	
	@Test
	public void testCtrl(){
		UserTestCtrl userCtrl = new UserTestCtrl();
		ModelAndView mv = userCtrl.getUser();
		assertEquals("/view/hello",mv.getViewName());
	}
}
