package com.nwsuaf.insect.web.pest;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nwsuaf.insect.model.query.UserQuery;
import com.nwsuaf.insect.service.InsectUserRoleService;
import com.nwsuaf.insect.service.PestTreeBuilderService;
import com.nwsuaf.insect.service.UserService;
import com.nwsuaf.insect.service.pest.PestCategoryService;

@Controller
@RequestMapping("admin/pestCategory")
public class PestCategoryCtrl {
	
	@Autowired
	private UserService userService;
	@Autowired
	private InsectUserRoleService insectUserRoleService;
	@Autowired
	private PestTreeBuilderService treeBuilderService;
	@Autowired
	private PestCategoryService pestCategoryService;	
	
	@RequestMapping(value = "/adminTree")
	public String getTreeAdmin(ModelMap model, HttpServletRequest request) {
		UserQuery userq = (UserQuery)request.getSession().getAttribute("user");
		userq = userService.findUserByName(userq.getUserName());
		List<Integer> categoryIds = insectUserRoleService.getBackCategoryIds(userq.getInsectCateUserRoles());
		String pestCategoryHTML = treeBuilderService.buildPestTree(pestCategoryService
				.getInsectCategoryTree(categoryIds, userq.getIsRoot()));
		model.addAttribute("pestCategoryHTML", pestCategoryHTML);
		return "pestCategoryTree/tree-admin";
	}
	
	@RequestMapping(value = "/tree")
	public String getTree(ModelMap model, HttpServletRequest request) {
		UserQuery userq = (UserQuery)request.getSession().getAttribute("user");
		userq = userService.findUserByName(userq.getUserName());
		List<Integer> categoryIds = insectUserRoleService.getBackCategoryIds(userq.getInsectCateUserRoles());
		String pestCategoryHTML = treeBuilderService.buildPestTree(pestCategoryService
				.getInsectCategoryTree(categoryIds, userq.getIsRoot()));
		model.addAttribute("pestCategoryHTML", pestCategoryHTML);
		return "pestCategoryTree/tree";
	}
}
