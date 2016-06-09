package com.nwsuaf.insect.web.front;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.nwsuaf.insect.model.FrontUser;
import com.nwsuaf.insect.model.InsectOnlineTest;
import com.nwsuaf.insect.model.query.JsonList;
import com.nwsuaf.insect.model.query.JsonResult;
import com.nwsuaf.insect.service.OnlineTestService;

@Controller
@RequestMapping("/")
public class OnlineTestCtrl {

	@Autowired
	private OnlineTestService onlineTestService;
	
	@RequestMapping(value = "/testOnline")
	public ModelAndView testOnline(HttpServletRequest request, ModelMap  model){
		
		FrontUser userq = (FrontUser) request.getSession().getAttribute("user");

		if (userq == null)
			return new ModelAndView("frontLogin/login");
		
		return new ModelAndView("onlineTest/test");
		
	}
	
	@RequestMapping(value = "/printjson")
	public @ResponseBody JsonList  testJson(){
		List<InsectOnlineTest> testList = onlineTestService.getTestList();
		JsonResult result = null;
		List<JsonResult> resultList = new ArrayList<JsonResult>();
		for (InsectOnlineTest insectOnlineTest : testList) {
			result = new JsonResult();
			result.setQuestion(insectOnlineTest.getQuestion());
			List<String> answers = new ArrayList<String>();
			if(insectOnlineTest.getAnswera() != null && !"".equals(insectOnlineTest.getAnswera())){
				answers.add(insectOnlineTest.getAnswera());
			}
			if(insectOnlineTest.getAnswerb() != null && !"".equals(insectOnlineTest.getAnswerb())){
				answers.add(insectOnlineTest.getAnswerb());
			}
			if(insectOnlineTest.getAnswerc() != null && !"".equals(insectOnlineTest.getAnswerc())){
				answers.add(insectOnlineTest.getAnswerc());
			}
			if(insectOnlineTest.getAnswerd() != null && !"".equals(insectOnlineTest.getAnswerd())){
				answers.add(insectOnlineTest.getAnswerd());
			}
			result.setAnswers(answers);
			result.setCorrectAnswer(insectOnlineTest.getCorrectanswer());
			resultList.add(result);
		}
		JsonList jsonList = new JsonList();
		jsonList.setQuestions(resultList);
		return jsonList;
	} 
	 
}
