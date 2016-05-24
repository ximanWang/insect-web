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

import com.nwsuaf.insect.dto.ListResult;
import com.nwsuaf.insect.dto.Pagination;
import com.nwsuaf.insect.enums.ToastMessageType;
import com.nwsuaf.insect.exception.InsectException;
import com.nwsuaf.insect.mapper.InsectTalkMapper;
import com.nwsuaf.insect.model.Insect;
import com.nwsuaf.insect.model.InsectTalk;
import com.nwsuaf.insect.model.ToastMessage;
import com.nwsuaf.insect.model.query.InsectUpdateOprData;
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
	public String loadModify(@RequestBody Map<String, Object> requestMap, ModelMap model,
			HttpServletRequest request) {
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");

		if (userq == null)
			return "login/login";
		int id = (Integer) requestMap.get("tid");
		InsectTalk insectTalk = insectTalkMapper.selectByPrimaryKey(id);
		model.addAttribute("insectTalk", insectTalk);
		return "insectTalk/modifyModalData";
	}

	@RequestMapping("/modify")
	@ResponseBody
	public ToastMessage modify(@RequestBody InsectUpdateOprData updateData,
			HttpServletRequest request) {
//		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");
//		if (userq == null)
//			throw new InsectException("未登录");
//		Insect insectq = new Insect();
//		insectq.setId(updateData.getMid());
//		insectq.setChineseName(updateData.getChineseName());
//		insectq.setAlias(updateData.getAlias());
//		insectq.setDistribution(updateData.getDistribution());
//		insectq.setEnglishName(updateData.getEnglishName());
//		insectq.setLationName(updateData.getLationName());
//		insectq.setHost(updateData.getHost());
//		insectq.setFeatures(updateData.getFeatures());
//		insectq.setGatherPlace(updateData.getGatherPlace());
//		insectService.updateSelective(insectq);
		return new ToastMessage(ToastMessageType.SUCCESS, "操作已生效成功!");

	}
}
