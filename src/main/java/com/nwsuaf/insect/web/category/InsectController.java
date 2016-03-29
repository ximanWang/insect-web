package com.nwsuaf.insect.web.category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nwsuaf.insect.model.Insect;
import com.nwsuaf.insect.service.InsectService;

@Controller
@RequestMapping("/insect")
public class InsectController {
	
	@Autowired
	private InsectService insectService;
	
	@RequestMapping(value="/showInsect/{id}")
	public ModelAndView showInsect(@PathVariable Integer id){
		ModelAndView mv = new ModelAndView();
		Insect insect = insectService.selectById(id);
		mv.addObject("insect", insect);
		mv.setViewName("insectCategoryTree/tree");
		return mv;
	}
}
