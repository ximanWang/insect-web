package com.nwsuaf.insect.web.role;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.nwsuaf.insect.dto.ListResult;
import com.nwsuaf.insect.dto.Pagination;
import com.nwsuaf.insect.enums.ToastMessageType;
import com.nwsuaf.insect.exception.InsectException;
import com.nwsuaf.insect.mapper.InsectCateUserRoleMapper;
import com.nwsuaf.insect.model.InsectCateUserRole;
import com.nwsuaf.insect.model.ToastMessage;
import com.nwsuaf.insect.model.query.RoleUpdateOprData;
import com.nwsuaf.insect.model.query.UserAddOprData;
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
	
	@Autowired
	private InsectCateUserRoleMapper userRoleMapper;
	
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
		modelMap.addAttribute("userRoleList",result.getResult());
		pagination.setTotal(result.getTotalItem());
		modelMap.addAttribute("pagination", pagination);

		return "userRole/listData";
	}
	
	@RequestMapping("/loadModify")
	public String loadModify(@RequestBody Map<String, Object> requestMap, ModelMap model,
			HttpServletRequest request) {
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");

		if (userq == null)
			throw new InsectException("未登录");
		int userRoleId = (Integer) requestMap.get("userroleId");
		InsectCateUserRole userRole = userRoleService.findById(userRoleId);
		model.addAttribute("userRole", userRole);
		model.addAttribute("cateRoleList", roleService.getAllCates());
		return "userRole/modifyModalData";
	}

	@RequestMapping("/modify")
	@ResponseBody
	public ToastMessage modify(@RequestBody RoleUpdateOprData updateData,
			HttpServletRequest request) {
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");
		if (userq == null)
			throw new InsectException("未登录");
		InsectCateUserRole userRole = new InsectCateUserRole();
		userRole.setId(updateData.getId());
		userRole.setUserName(updateData.getUserName());
		userRole.setUserEmail(updateData.getUserEmail());
		userRole.setRemark(updateData.getRoleCode());
		userRole.setUpdateUser(userq.getUserName());
		userRole.setRoleCode(updateData.getRoleCode());
		if("ROOT".equals(updateData.getRoleCode())){
			userRole.setRoleType("ROOT");
		}else{
			userRole.setRoleType("BACK");
		}
		
		userRoleService.updateSelective(userRole);
		
		return new ToastMessage(ToastMessageType.SUCCESS, "操作已生效成功!");
	}
	
	@RequestMapping("/loadAdd")
	public String loadAdd(HttpServletRequest request) {
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");

		if (userq == null)
			return "login/login";
		return "userRole/addModalData";
	}
	
	@RequestMapping("/add")
	@ResponseBody
	public ToastMessage add(@RequestBody UserAddOprData addOprData, HttpServletRequest request) {
		
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");
		if (userq == null)
			throw new InsectException("未登录");
		
		InsectCateUserRole userRole = new InsectCateUserRole();
		userRole.setAddUser(userq.getUserName());
		userRole.setRoleCode(addOprData.getRoleCode());
		userRole.setRemark(addOprData.getRemark());
		userRole.setUserEmail(addOprData.getUserEmail());
		userRole.setUserCode(addOprData.getUserCode());
		userRole.setUserName(addOprData.getUserName());
		if("ROOT".equals(addOprData.getRoleCode())){
			userRole.setRoleType("ROOT");
		}else{
			userRole.setRoleType("BACK");
		}
		userRole.setUserPasswd("88888888");
		
		userRoleMapper.insert(userRole);
		return new ToastMessage(ToastMessageType.SUCCESS, "操作已生效成功!");
	}
}
