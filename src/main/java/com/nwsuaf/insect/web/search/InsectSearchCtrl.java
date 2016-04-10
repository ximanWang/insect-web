package com.nwsuaf.insect.web.search;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nwsuaf.insect.exception.InsectException;
import com.nwsuaf.insect.model.query.UserQuery;

@Controller
@RequestMapping("/insectSearch")
public class InsectSearchCtrl {

	@RequestMapping(value = "/list")
	public String loadList(ModelMap model, HttpServletRequest request) {
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");

		if (userq == null)
			throw new InsectException("未登录");

		model.addAttribute("isRoot", userq.getIsRoot() ? 1 : 0);

		return "searchInsect/list";
	}
	
	@RequestMapping("/loadAdd")
	public String loadAdd(HttpServletRequest request){
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");

		if (userq == null)
			throw new InsectException("未登录");
		return "searchInsect/addModalData";
	}
}