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
@RequestMapping("/searchPictures")
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

		Integer insectId = (Integer) pagination.getCondition().get("insectId");
		ListResult result = insectPiceturesSearchService.getAlbums(pagination);
		if(insectId != null){
			List<InsectAlbum> albumList = insectAlbumService.getAlbmList(insectId);
			if (albumList.get(0) != null) {
				ListResult result1 = insectPiceturesSearchService.getPictures((InsectAlbum) result.getResult().get(0));
				List<AlbumPictures> typeApictures = result1.getResult();
				modelMap.addAttribute("typeApictures", typeApictures);
			}
			
			if (albumList.get(1) != null) {
				ListResult result2 = insectPiceturesSearchService.getPictures(albumList.get(1));
				List<AlbumPictures> typeBpictures = result2.getResult();
				modelMap.addAttribute("typeBpictures", typeBpictures);
			}
		}
		pagination.setTotal(result.getTotalItem());
		modelMap.addAttribute("pagination", pagination);

		return "searchPictures/listData";

	}
}