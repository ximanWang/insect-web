package com.nwsuaf.insect.web.category;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nwsuaf.insect.model.User;
import com.nwsuaf.insect.service.InsectCategoryService;
import com.nwsuaf.insect.service.InsectUserRoleService;
import com.nwsuaf.insect.service.TreeBuilderService;

@Controller
@RequestMapping("/insectCategory")
public class InsectCategoryCtrl {

	@Autowired
	private InsectCategoryService insectCategoryService;

	@Autowired
	private TreeBuilderService treeBuilderService;

	@Autowired
	private InsectUserRoleService insectUserRoleService;

	public String getTree(ModelMap model, HttpServletRequest request) {
		User user = (User) request.getSession().getAttribute("user");
		List<Integer> categoryIds = insectUserRoleService
				.getBackCategoryIds(user.getInsectCateUserRoles());
		String poiCategoryHTML = treeBuilderService.buildInsectTree(insectCategoryService
				.getInsectCategoryTree(categoryIds,user.getIsRoot()));
		model.addAttribute("poiCategoryHTML", poiCategoryHTML);
		return "insectCategoryTree/tree";
	}
}
