package com.nwsuaf.insect.web.login;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;
import org.springframework.web.servlet.view.RedirectView;

import com.nwsuaf.insect.model.query.UserQuery;
import com.nwsuaf.insect.service.UserService;

@Controller
@RequestMapping("/loginController")
public class LoginController extends AbstractController{
	
	@Autowired
	private UserService userService;
	
	@RequestMapping("/toLogin")
	public ModelAndView toLogin(){
		return new ModelAndView("login");
	}
	@Override
	@RequestMapping("/login")
	protected ModelAndView handleRequestInternal(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		UserQuery user = getUser(username,password);
		if(user != null){
			request.getSession().setAttribute("user", user);
			return new ModelAndView(new RedirectView("/insect-web/insectCategory/tree"));
		}else{
			return new ModelAndView("login");
		}
	}

	private UserQuery getUser(String username, String password) {
		UserQuery userQuery = userService.findUserByName(username);
		if(userQuery!=null){
			if(password.equals(userQuery.getPassword())){
				return new UserQuery();
			}
		}	
		return null;
	}
	public  UserQuery getLoginUser(HttpServletRequest request) {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		UserQuery userQuery = getUser(username,password);
		return userQuery;
	}
	
}
