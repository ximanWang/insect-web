package com.nwsuaf.insect.web.search;

import java.util.List;
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
import com.nwsuaf.insect.model.Insect;
import com.nwsuaf.insect.model.InsectCategory;
import com.nwsuaf.insect.model.ToastMessage;
import com.nwsuaf.insect.model.query.InsectUpdateOprData;
import com.nwsuaf.insect.model.query.UserQuery;
import com.nwsuaf.insect.service.InsectMappingSearchService;
import com.nwsuaf.insect.service.InsectService;

@Controller
@RequestMapping("/insectSearch")
public class InsectSearchCtrl {

	@Autowired
	private InsectMappingSearchService insectMappingSearchService;
	@Autowired
	private InsectService insectService;

	@RequestMapping(value = "/list")
	public String loadList(ModelMap model, HttpServletRequest request) {
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");

		if (userq == null)
			throw new InsectException("未登录");

		model.addAttribute("isRoot", userq.getIsRoot() ? 1 : 0);

		return "searchInsect/list";
	}

	@RequestMapping(value = "/listData", method = RequestMethod.POST)
	public String qryListData(@RequestBody Pagination pagination, ModelMap model,
			HttpServletRequest request) {

		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");

		if (userq == null)
			throw new InsectException("未登录");
		ListResult resultList = insectMappingSearchService.getFBMappings(pagination, userq);

		@SuppressWarnings("unchecked")
		List<InsectCategory> fbMappingList = resultList.getResult();

		model.addAttribute("fbMappingList", fbMappingList);

		// 设置总条数
		pagination.setTotal(resultList.getTotalItem());

		model.addAttribute("pagination", pagination);

		return "searchInsect/listData";
	}

	@RequestMapping("/loadAdd")
	public String loadAdd(HttpServletRequest request) {
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");

		if (userq == null)
			throw new InsectException("未登录");
		return "searchInsect/addModalData";
	}

	@RequestMapping("/loadModify")
	public String loadModify(@RequestBody Map<String, Object> requestMap, ModelMap model,
			HttpServletRequest request) {
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");

		if (userq == null)
			throw new InsectException("未登录");
		int cateId = (Integer) requestMap.get("mid");
		Insect insect = insectService.selectByCategotyId(cateId);
		model.addAttribute("insect", insect);
		return "searchInsect/modifyModalData";
	}

	@RequestMapping("/modify")
	@ResponseBody
	public ToastMessage modify(@RequestBody InsectUpdateOprData updateData,HttpServletRequest request) {
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");
		if (userq == null)
			throw new InsectException("未登录");
		Insect insectq = new Insect();
		insectq.setId(updateData.getMid());
		insectq.setChineseName(updateData.getChineseName());
		insectq.setAlias(updateData.getAlias());
		insectq.setDistribution(updateData.getDistribution());
		insectq.setEnglishName(updateData.getEnglishName());
		insectq.setLationName(updateData.getLationName());
		insectq.setHost(updateData.getHost());
		insectq.setFeatures(updateData.getFeatures());
		insectq.setGatherPlace(updateData.getGatherPlace());
		insectService.updateSelective(insectq);
		return new ToastMessage(ToastMessageType.SUCCESS, "操作已生效成功!");

	}
}