package com.nwsuaf.insect.web.front;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nwsuaf.insect.dto.ListResult;
import com.nwsuaf.insect.dto.Pagination;
import com.nwsuaf.insect.mapper.AlbumPicturesMapper;
import com.nwsuaf.insect.mapper.InsectAlbumMapper;
import com.nwsuaf.insect.model.Insect;
import com.nwsuaf.insect.service.InsectMappingSearchService;
import com.nwsuaf.insect.service.InsectService;


@Controller
@RequestMapping("/")
public class SearchCtrl {

	@Autowired
	private InsectMappingSearchService insectMappingSearchService;
	@Autowired
	private InsectService insectService;
	@Autowired
	private InsectAlbumMapper albumMapper;
	@Autowired
	private AlbumPicturesMapper picturesMapper;

	@RequestMapping(value = "/searchDetail/{id}")
	public String loadList(@PathVariable Integer id, ModelMap model) {
		
		Insect insect = insectService.selectById(id);
		model.addAttribute("insect",insect);
		return "frontSearch/insectDetail";
	}
	
	@RequestMapping(value = "/insectSearch")
	public String qryListData( Pagination pagination, ModelMap model,
			HttpServletRequest request) {

		
		ListResult resultList = insectService.getAllInsect(pagination);

		@SuppressWarnings("unchecked")
		List<Insect> fbMappingList = resultList.getResult();

		model.addAttribute("fbMappingList", fbMappingList);

		// 设置总条数
		pagination.setTotal(resultList.getTotalItem());

		model.addAttribute("pagination", pagination);

		return "frontSearch/search";
	}

}
