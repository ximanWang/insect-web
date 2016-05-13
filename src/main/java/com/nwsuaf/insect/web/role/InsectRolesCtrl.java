package com.nwsuaf.insect.web.role;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("admin/userRole")
public class InsectRolesCtrl {
	
	@RequestMapping(value="/list")
	public String loadList(ModelMap model){
		
//		map.addAttribute("cateRoleList", legoParamService.getCateRoleList());

		return "userRole/list";
	}
}
