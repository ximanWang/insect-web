package com.nwsuaf.insect.web.news;

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
import com.nwsuaf.insect.mapper.InsectNewsMapper;
import com.nwsuaf.insect.model.InsectNews;
import com.nwsuaf.insect.model.InsectOnlineTest;
import com.nwsuaf.insect.model.ToastMessage;
import com.nwsuaf.insect.model.query.InsctNewsAddOprData;
import com.nwsuaf.insect.model.query.InsectNewsUpdateOprData;
import com.nwsuaf.insect.model.query.UserQuery;
import com.nwsuaf.insect.service.InsectNewsService;

@Controller
@RequestMapping("/admin/insectNews")
public class InsectNewsCtrl {

	@Autowired
	private InsectNewsMapper newsMapper;
	@Autowired
	private InsectNewsService newsService;
	
	@RequestMapping(value="/list")
	public String loadList(ModelMap model){
		

		return "backNews/list";
	}
	
	@RequestMapping(value="/listData", method = RequestMethod.POST)
	public String queryListData(@RequestBody Pagination pagination, ModelMap modelMap,
			HttpServletRequest request) {
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");

		if (userq == null)
			throw new InsectException("未登录");

		ListResult result = newsService.getNews(pagination);
		modelMap.addAttribute("newsList",result.getResult());
		pagination.setTotal(result.getTotalItem());
		modelMap.addAttribute("pagination", pagination);

		return "backNews/listData";
	}
	
	@RequestMapping("/loadModify")
	public String loadModify(@RequestBody Map<String, Object> requestMap, ModelMap model,
			HttpServletRequest request) {
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");

		if (userq == null)
			throw new InsectException("未登录");
		int newsId = (Integer) requestMap.get("userroleId");
		InsectNews insectNews = newsMapper.selectByPrimaryKey(newsId);
		model.addAttribute("insectNews", insectNews);
		return "backNews/modifyModalData";
	}
	
	@RequestMapping("/modify")
	@ResponseBody
	public ToastMessage modify(@RequestBody InsectNewsUpdateOprData updateData,
			HttpServletRequest request) {
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");
		if (userq == null)
			throw new InsectException("未登录");
		
		InsectNews insectNews = newsMapper.selectByPrimaryKey(updateData.getNewsId());
		insectNews.setTitle(updateData.getTitle());
		insectNews.setContent(updateData.getContent());

		newsMapper.updateByPrimaryKey(insectNews);
		
		return new ToastMessage(ToastMessageType.SUCCESS, "操作已生效成功!");
	}

	@RequestMapping("/loadAdd")
	public String loadAdd(HttpServletRequest request) {
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");

		if (userq == null)
			return "login/login";
		return "backNews/addModalData";
	}
	
	@RequestMapping("/add")
	@ResponseBody
	public ToastMessage add(@RequestBody InsctNewsAddOprData addOprData, HttpServletRequest request) {
		
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");
		if (userq == null)
			throw new InsectException("未登录");
		
		InsectNews insectNews = new InsectNews();
		insectNews.setAdduser(userq.getUserName());
		insectNews.setTitle(addOprData.getTitle());
		insectNews.setContent(addOprData.getContent());
		newsMapper.insert(insectNews);
		return new ToastMessage(ToastMessageType.SUCCESS, "操作已生效成功!");
	}
}
