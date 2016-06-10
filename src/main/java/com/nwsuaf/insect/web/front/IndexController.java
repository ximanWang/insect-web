package com.nwsuaf.insect.web.front;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nwsuaf.insect.mapper.InsectNewsMapper;
import com.nwsuaf.insect.model.InsectNews;
import com.nwsuaf.insect.model.query.UserQuery;
import com.nwsuaf.insect.service.InsectCategoryService;
import com.nwsuaf.insect.service.InsectUserRoleService;
import com.nwsuaf.insect.service.PestTreeBuilderService;
import com.nwsuaf.insect.service.TreeBuilderService;
import com.nwsuaf.insect.service.UserService;
import com.nwsuaf.insect.service.pest.PestCategoryService;

@Controller
@RequestMapping("/")
public class IndexController {
	
	@Autowired
	private InsectUserRoleService insectUserRoleService;
	@Autowired
	private InsectNewsMapper newsMapper;
	
	@RequestMapping(value = "/index")
	public ModelAndView showIndex(ModelMap model){
		List<InsectNews> newsList = newsMapper.getAllNews();
		InsectNews news = newsList.get(0);
		model.addAttribute("news",news);
		return new ModelAndView("frontIndex");
	}
	@RequestMapping(value = "/detail")
	public ModelAndView showDetail(){
		return new ModelAndView("front/insectDetail");
	}
	@Autowired
	private UserService userService;

	@RequestMapping(value = "/userToLogin" )
	public ModelAndView toLogin() {
		return new ModelAndView("frontLogin/login");
	}

	@RequestMapping(value = "/userLogin")
	public ModelAndView handleRequest(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		UserQuery user = getUser(username, password);
		if(username==null && password==null){
			return new ModelAndView("frontLogin/login");
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
			return new ModelAndView("redirect:/askLoad");
		} else {
			 Map map = new HashMap(); 
			 map.put("error", "用户名或密码不正确，请重新输入！");
			return new ModelAndView("frontLogin/login","map",map);
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

	@RequestMapping("/userLogout")
	public ModelAndView loginOut(HttpServletRequest request, HttpServletResponse response) {
		HttpSession session = request.getSession(false);// 防止创建Session
		if (session != null) {
			session.removeAttribute("user");
		}
		return new ModelAndView("login/login");
	}

}
