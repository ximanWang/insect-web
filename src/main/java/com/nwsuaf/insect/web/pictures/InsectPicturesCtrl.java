package com.nwsuaf.insect.web.pictures;

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
import com.nwsuaf.insect.model.AlbumPictures;
import com.nwsuaf.insect.model.InsectAlbum;
import com.nwsuaf.insect.model.query.UserQuery;
import com.nwsuaf.insect.service.InsectAlbumService;
import com.nwsuaf.insect.service.InsectPicturesSearchService;

@Controller
@RequestMapping("/admin/searchPictures")
public class InsectPicturesCtrl {

	@Autowired
	private InsectAlbumService insectAlbumService;
	@Autowired
	private InsectPicturesSearchService insectPiceturesSearchService;

	@RequestMapping(value = "/list")
	public String loadList(ModelMap model, HttpServletRequest request) {
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");

		if (userq == null)
			throw new InsectException("未登录");

		model.addAttribute("isRoot", userq.getIsRoot() ? 1 : 0);

		return "searchPictures/list";
	}

	@RequestMapping(value = "/listData", method = RequestMethod.POST)
	public String queryListData(@RequestBody Pagination pagination, ModelMap modelMap,
			HttpServletRequest request) {
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");

		if (userq == null)
			throw new InsectException("未登录");

		ListResult result = insectPiceturesSearchService.getPictures(pagination);
		modelMap.addAttribute("pictures",result.getResult());
		pagination.setTotal(result.getTotalItem());
		modelMap.addAttribute("pagination", pagination);

		return "searchPictures/listData";
	}
	
	@RequestMapping(value= "/loadAdd")
	public String loadAdd(HttpServletRequest request){
		UserQuery userq = (UserQuery) request.getSession().getAttribute("user");

		if (userq == null)
			throw new InsectException("未登录");
		
		return "searchPictures/addPicturesData";
	}
}
