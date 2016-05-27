package com.nwsuaf.insect.web.front;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.nwsuaf.insect.dto.ListResult;
import com.nwsuaf.insect.dto.Pagination;
import com.nwsuaf.insect.mapper.InsectTalkMapper;
import com.nwsuaf.insect.model.InsectTalk;
import com.nwsuaf.insect.model.query.UserQuery;
import com.nwsuaf.insect.service.InsectTalkService;


@Controller
@RequestMapping("/")
public class TalkController {

	@Autowired
	private InsectTalkService talkService;
	@Autowired
	private InsectTalkMapper talkMapper;
	
	@RequestMapping(value = "/talkList")
	public String loadList( Pagination pagination, ModelMap modelMap,
			HttpServletRequest request) {
		
		ListResult result = talkService.getAllTalks(pagination);
		modelMap.addAttribute("talkList",result.getResult());
		pagination.setTotal(result.getTotalItem());
		modelMap.addAttribute("pagination", pagination);

		return "frontTalk/talkList";
	}
	@RequestMapping(value = "/askLoad")
	public String loadAdd(){
		
		return "frontTalk/askLoad";
 	}
	@RequestMapping("/askAdd")
	@ResponseBody
	public ModelAndView addNews(@ModelAttribute("SpringWeb") InsectTalk addOprData, HttpServletRequest request, ModelMap  model) {
		
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");

		if (userq == null)
			return new ModelAndView("frontLogin/login");

		InsectTalk record = new InsectTalk();
		record.setAskContent(addOprData.getAskContent());
		// TODO setAddUser setAddTime
		record.setAddUser(userq.getUserName());
		talkMapper.insert(record);
		
		return new ModelAndView("redirect:/talkList");
	} 
}
