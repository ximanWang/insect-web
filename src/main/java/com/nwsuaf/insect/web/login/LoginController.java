package com.nwsuaf.insect.web.login;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nwsuaf.insect.model.query.UserQuery;
import com.nwsuaf.insect.service.UserService;

@Controller
@RequestMapping("/")
public class LoginController{

	@Autowired
	private UserService userService;

	@RequestMapping(value = "/toLogin" )
	public ModelAndView toLogin() {
		return new ModelAndView("login/login");
	}

	@RequestMapping(value = "/admin/index")
	public ModelAndView handleRequest(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		UserQuery user = getUser(username, password);
		if(username==null && password==null){
			return new ModelAndView("login/login");
		}
		if (user != null) {
			request.getSession().setAttribute("user", user);
			String roleType = user.getRoleType();
			Boolean isRoot = user.getIsRoot();
			if ("ROOT".equals(roleType)) {
				isRoot = true;
			} else {
				isRoot = false;
			}
			request.getSession().setAttribute("isRoot", isRoot);
			return new ModelAndView("main");
		} else {
			 Map map = new HashMap(); 
			 map.put("error", "用户名或密码不正确，请重新输入！");
			return new ModelAndView("login/login","map",map);
		}
	}
	
	
	private UserQuery getUser(String username, String password) {
		UserQuery userQuery = userService.findUserByName(username);
		if (userQuery != null) {
			if (password.equals(userQuery.getPassword())) {
				return userQuery;
			}
		}
		return null;
	}

	public UserQuery getLoginUser(HttpServletRequest request) {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		UserQuery userQuery = getUser(username, password);
		return userQuery;
	}

	@RequestMapping("/admin/logout")
	public ModelAndView loginOut(HttpServletRequest request, HttpServletResponse response) {
		HttpSession session = request.getSession(false);// 防止创建Session
		if (session != null) {
			session.removeAttribute("user");
		}
		return new ModelAndView("login/login");
	}

}
