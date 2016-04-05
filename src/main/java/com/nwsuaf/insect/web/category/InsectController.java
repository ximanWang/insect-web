package com.nwsuaf.insect.web.category;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nwsuaf.insect.model.Insect;
import com.nwsuaf.insect.model.InsectCategory;
import com.nwsuaf.insect.service.InsectCategoryService;
import com.nwsuaf.insect.service.InsectService;

@Controller
@RequestMapping("/insect")
public class InsectController {
	
	@Autowired
	private InsectService insectService;
	@Autowired
	private InsectCategoryService insectCategoryService;
	
	@RequestMapping(value="/showInsect/{id}")
	public ModelAndView showInsect(@PathVariable Integer id){
		ModelAndView mv = new ModelAndView();
		Insect insect = insectService.selectById(id);
		List<InsectCategory> insectCateList =  insectCategoryService.getParents(insect.getCategoryId());
		mv.addObject("insectCateList", insectCateList);
		mv.addObject("insectQuery", insect);
		mv.setViewName("backInsect/backinsect");
		return mv;
	}
}
