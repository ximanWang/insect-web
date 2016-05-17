package com.nwsuaf.insect.web.login;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;

import com.nwsuaf.insect.model.query.UserQuery;
import com.nwsuaf.insect.service.UserService;

@Controller
public class LoginController extends AbstractController {

	@Autowired
	private UserService userService;

	@RequestMapping(value = { "/toLogin" })
	public ModelAndView toLogin() {
		return new ModelAndView("login/login");
	}

	@Override
	@RequestMapping("/admin/index")
	protected ModelAndView handleRequestInternal(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		UserQuery user = getUser(username, password);
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
			return new ModelAndView("login/login");
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
