package com.nwsuaf.insect.web.search;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nwsuaf.insect.dto.ListResult;
import com.nwsuaf.insect.dto.Pagination;
import com.nwsuaf.insect.exception.InsectException;
import com.nwsuaf.insect.model.InsectCategory;
import com.nwsuaf.insect.model.query.UserQuery;
import com.nwsuaf.insect.service.InsectMappingSearchService;

@Controller
@RequestMapping("/insectSearch")
public class InsectSearchCtrl {
	
	@Autowired
	private InsectMappingSearchService insectMappingSearchService;

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
	public String loadAdd(HttpServletRequest request){
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");

		if (userq == null)
			throw new InsectException("未登录");
		return "searchInsect/addModalData";
	}
}