package com.nwsuaf.insect.web.front;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nwsuaf.insect.mapper.FrontUserMapper;
import com.nwsuaf.insect.model.FrontUser;

@Controller
public class FrontLoginController {

	@Autowired
	private FrontUserMapper fUserMapper;
	
	@RequestMapping(value = "/login")
	public ModelAndView handleRequest(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		FrontUser user = getUser(username, password);
		if(username==null && password==null){
			return new ModelAndView("frontLogin/login");
		}
		if (user != null) {
			request.getSession().setAttribute("user", user);
			
			return new ModelAndView("frontIndex");
		} else {
			 Map map = new HashMap(); 
			 map.put("error", "用户名或密码不正确，请重新输入！");
			return new ModelAndView("login/login","map",map);
		}
	}

	private FrontUser getUser(String username, String password) {
		
		FrontUser fUser = fUserMapper.findByUserName(username);
		if(fUser != null){
			if(password.equals(fUser.getUserPasswd())){
				return fUser;
			}
		}
		return null;
	}
	
	@RequestMapping("/logout")
	public String loginOut(HttpServletRequest request, HttpServletResponse response) {
		HttpSession session = request.getSession(false);// 防止创建Session
		if (session != null) {
			session.removeAttribute("user");
		}
		return "frontIndex";
	}
}
