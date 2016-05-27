package com.nwsuaf.insect.web.talk;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.nwsuaf.insect.dto.ListResult;
import com.nwsuaf.insect.dto.Pagination;
import com.nwsuaf.insect.enums.ToastMessageType;
import com.nwsuaf.insect.exception.InsectException;
import com.nwsuaf.insect.mapper.InsectTalkMapper;
import com.nwsuaf.insect.model.InsectTalk;
import com.nwsuaf.insect.model.ToastMessage;
import com.nwsuaf.insect.model.query.TalkUpdateOprData;
import com.nwsuaf.insect.model.query.UserQuery;
import com.nwsuaf.insect.service.InsectTalkService;

@Controller
@RequestMapping("admin/insectTalk")
public class InsectTalkCtrl {
	
	@Autowired
	private InsectTalkService talkService;
	
	@Autowired
	private InsectTalkMapper insectTalkMapper;

	@RequestMapping(value="/list")
	public String loadList(ModelMap model){
		
		return "insectTalk/list";
	} 
	@RequestMapping(value="/listData", method = RequestMethod.POST)
	public String queryListData(@RequestBody Pagination pagination, ModelMap modelMap,
			HttpServletRequest request) {
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");

		if (userq == null)
			throw new InsectException("未登录");

		ListResult result = talkService.getTalks(pagination);
		modelMap.addAttribute("talkList",result.getResult());
		pagination.setTotal(result.getTotalItem());
		modelMap.addAttribute("pagination", pagination);

		return "insectTalk/listData";
	}
	@RequestMapping("/loadModify")
	public ModelAndView loadModify(@RequestBody Map<String, Object> requestMap, ModelMap model,
			HttpServletRequest request) {
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");

		if (userq == null)
			return new ModelAndView( "login/login");
		int id = (Integer) requestMap.get("userroleId");
		InsectTalk insectTalk = insectTalkMapper.selectByPrimaryKey(id);
		model.addAttribute("insectTalk", insectTalk);
		return new ModelAndView("insectTalk/modifyModalData");
	}

	@RequestMapping("/modify")
	@ResponseBody
	public ToastMessage modify(@RequestBody TalkUpdateOprData updateData,
			HttpServletRequest request) {
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");
		if (userq == null)
			throw new InsectException("未登录");
		InsectTalk insectTalk = new InsectTalk();
		insectTalk.setId(updateData.getTid());
		insectTalk.setAnswer(updateData.getAnswer());
		insectTalk.setIsAnswer(1);
		insectTalk.setAnswerUser(userq.getUserName());
		insectTalkMapper.updateByPrimaryKeySelective(insectTalk);

		return new ToastMessage(ToastMessageType.SUCCESS, "操作已生效成功!");

	}
}
