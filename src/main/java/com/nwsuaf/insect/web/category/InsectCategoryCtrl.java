package com.nwsuaf.insect.web.category;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nwsuaf.insect.model.query.UserQuery;
import com.nwsuaf.insect.service.InsectCategoryService;
import com.nwsuaf.insect.service.InsectUserRoleService;
import com.nwsuaf.insect.service.TreeBuilderService;
import com.nwsuaf.insect.service.UserService;

@Controller
@RequestMapping("/insectCategory")
public class InsectCategoryCtrl {

	@Autowired
	private InsectCategoryService insectCategoryService;

	@Autowired
	private TreeBuilderService treeBuilderService;

	@Autowired
	private InsectUserRoleService insectUserRoleService;
	@Autowired
	private UserService userService;

	@RequestMapping(value = "/tree")
	public String getTree(ModelMap model, HttpServletRequest request) {
//		UserQuery user = (UserQuery) request.getSession().getAttribute("user");
		UserQuery userq = new UserQuery();
		userq.setIsRoot(true);
	/*	List<Integer> categoryIds = insectUserRoleService
				.getBackCategoryIds(userq.getInsectCateUserRoles());*/
		List<Integer> categoryIds = new ArrayList<Integer>();
		categoryIds.add(2);
		categoryIds.add(3);
		String poiCategoryHTML = treeBuilderService
				.buildInsectTree(insectCategoryService.getInsectCategoryTree(
						categoryIds, userq.getIsRoot()));
		model.addAttribute("poiCategoryHTML", poiCategoryHTML);
		return "insectCategoryTree/tree";
	}
}
