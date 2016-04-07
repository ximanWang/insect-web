package com.nwsuaf.insect.web.category;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.nwsuaf.insect.enums.ToastMessageType;
import com.nwsuaf.insect.exception.InsectException;
import com.nwsuaf.insect.model.ToastMessage;
import com.nwsuaf.insect.model.query.ErrorLog;
import com.nwsuaf.insect.model.query.InsectOprData;
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
		UserQuery userq = new UserQuery();
		userq.setIsRoot(true);
		// UserQuery userq = (UserQuery)
		// request.getSession().getAttribute("user");
		// List<Integer> categoryIds = insectUserRoleService
		// .getBackCategoryIds(userq.getInsectCateUserRoles());
		List<Integer> categoryIds = new ArrayList<Integer>();
		categoryIds.add(2);
		categoryIds.add(3);
		String insectCategoryHTML = treeBuilderService.buildInsectTree(insectCategoryService
				.getInsectCategoryTree(categoryIds, userq.getIsRoot()));
		model.addAttribute("insectCategoryHTML", insectCategoryHTML);
		return "insectCategoryTree/tree";
	}

	@RequestMapping(value = "/addProcess")
	@ResponseBody
	public ToastMessage addProcess(@RequestBody InsectOprData insectOprData) {

		try {
			insectCategoryService.addProcess(insectOprData);
			return new ToastMessage(ToastMessageType.SUCCESS, "操作已生效成功!");
		} catch (InsectException e) {
			return new ToastMessage(ToastMessageType.ERROR, e.getErrMsg());
		} catch (Exception e) {
			return new ToastMessage(ToastMessageType.ERROR, "系统异常，请联系管理员");
		}
	}
}
