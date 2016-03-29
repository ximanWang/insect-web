package com.nwsuaf.insect.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.nwsuaf.insect.model.query.UserQuery;
import com.nwsuaf.insect.web.login.LoginController;

public class LoginInterceptor extends HandlerInterceptorAdapter {
	private String location = "/insect-web/loginController/toLogin";
	@Autowired
	private LoginController loginController;

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
			Object handler) throws Exception {
		// 从session 里面获取用户名的信息
		UserQuery userQuery = loginController.getLoginUser(request);
		// 判断如果没有取到用户信息，就跳转到登陆页面，提示用户进行登陆
		if (userQuery == null || "".equals(userQuery.toString())) {
			response.sendRedirect(location);
		}
		return true;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response,
			Object handler, ModelAndView modelAndView) throws Exception {
		super.postHandle(request, response, handler, modelAndView);
	}

}
