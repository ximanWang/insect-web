package com.nwsuaf.insect.web.role;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nwsuaf.insect.dto.ListResult;
import com.nwsuaf.insect.dto.Pagination;
import com.nwsuaf.insect.exception.InsectException;
import com.nwsuaf.insect.model.query.UserQuery;
import com.nwsuaf.insect.service.CateRoleService;
import com.nwsuaf.insect.service.UserRoleService;

@Controller
@RequestMapping("admin/userRole")
public class InsectRolesCtrl {
	
	@Autowired
	private UserRoleService userRoleService;
	
	@Autowired
	private CateRoleService roleService;
	
	@RequestMapping(value="/list")
	public String loadList(ModelMap model){
		
		model.addAttribute("cateRoleList", roleService.getAllCates());

		return "userRole/list";
	}
	
	@RequestMapping(value="/listData", method = RequestMethod.POST)
	public String queryListData(@RequestBody Pagination pagination, ModelMap modelMap,
			HttpServletRequest request) {
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");

		if (userq == null)
			throw new InsectException("未登录");

		ListResult result = userRoleService.getUsers(pagination);
		modelMap.addAttribute("pictures",result.getResult());
		pagination.setTotal(result.getTotalItem());
		modelMap.addAttribute("pagination", pagination);

		return "userRole/listData";
	} 
}
