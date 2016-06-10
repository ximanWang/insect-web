package com.nwsuaf.insect.web.onlinetest;

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
import com.nwsuaf.insect.mapper.InsectOnlineTestMapper;
import com.nwsuaf.insect.model.InsectCateUserRole;
import com.nwsuaf.insect.model.InsectOnlineTest;
import com.nwsuaf.insect.model.ToastMessage;
import com.nwsuaf.insect.model.query.OnlineTestAddOprData;
import com.nwsuaf.insect.model.query.OnlineTestUpdateOprData;
import com.nwsuaf.insect.model.query.UserQuery;
import com.nwsuaf.insect.service.OnlineTestService;

@Controller
@RequestMapping("/admin/onlineTest")
public class BackOnlineTestCtrl {

	@Autowired
	private InsectOnlineTestMapper testMapper;
	@Autowired
	private OnlineTestService testService;
	
	@RequestMapping(value="/list")
	public String loadList(ModelMap model){
		
		model.addAttribute("cateRoleList", testMapper.getAllTests());

		return "backOnlineTest/list";
	}
	
	@RequestMapping(value="/listData", method = RequestMethod.POST)
	public String queryListData(@RequestBody Pagination pagination, ModelMap modelMap,
			HttpServletRequest request) {
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");

		if (userq == null)
			throw new InsectException("未登录");

		ListResult result = testService.getTests(pagination);
		modelMap.addAttribute("onlineTestList",result.getResult());
		pagination.setTotal(result.getTotalItem());
		modelMap.addAttribute("pagination", pagination);

		return "backOnlineTest/listData";
	}
	
	@RequestMapping("/loadModify")
	public String loadModify(@RequestBody Map<String, Object> requestMap, ModelMap model,
			HttpServletRequest request) {
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");

		if (userq == null)
			throw new InsectException("未登录");
		int testId = (Integer) requestMap.get("userroleId");
		InsectOnlineTest onlineTest = testMapper.selectByPrimaryKey(testId);
		model.addAttribute("onlineTest", onlineTest);
		return "backOnlineTest/modifyModalData";
	}

	@RequestMapping("/modify")
	@ResponseBody
	public ToastMessage modify(@RequestBody OnlineTestUpdateOprData updateData,
			HttpServletRequest request) {
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");
		if (userq == null)
			throw new InsectException("未登录");
		
		InsectOnlineTest onlineTest = new InsectOnlineTest();
		onlineTest.setId(updateData.getId());
		onlineTest.setQuestion(updateData.getQuestion());
		onlineTest.setAnswera(updateData.getAnswerA());
		onlineTest.setAnswerb(updateData.getAnswerB());
		onlineTest.setAnswerc(updateData.getAnswerC());
		onlineTest.setAnswerd(updateData.getAnswerD());
		onlineTest.setCorrectanswer(Integer.parseInt(updateData.getCorrectAnswer()));
		
		testMapper.updateByPrimaryKeySelective(onlineTest);
		
		return new ToastMessage(ToastMessageType.SUCCESS, "操作已生效成功!");
	}
	
	@RequestMapping("/loadAdd")
	public String loadAdd(HttpServletRequest request) {
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");

		if (userq == null)
			return "login/login";
		return "backOnlineTest/addModalData";
	}
	
	@RequestMapping("/add")
	@ResponseBody
	public ToastMessage add(@RequestBody OnlineTestAddOprData addOprData, HttpServletRequest request) {
		
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");
		if (userq == null)
			throw new InsectException("未登录");
		
		InsectOnlineTest onlineTest = new InsectOnlineTest();
		onlineTest.setQuestion(addOprData.getQuestion());
		onlineTest.setAnswera(addOprData.getAnswerA());
		onlineTest.setAnswerb(addOprData.getAnswerB());
		onlineTest.setAnswerc(addOprData.getAnswerC());
		onlineTest.setAnswerd(addOprData.getAnswerD());
		onlineTest.setCorrectanswer(Integer.parseInt(addOprData.getCorrectAnswer()));
		testMapper.insertSelective(onlineTest);
		return new ToastMessage(ToastMessageType.SUCCESS, "操作已生效成功!");
	}
}
