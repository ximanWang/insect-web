package com.nwsuaf.insect.web.front;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nwsuaf.insect.model.InsectNews;
import com.nwsuaf.insect.service.InsectCategoryService;
import com.nwsuaf.insect.service.PestTreeBuilderService;
import com.nwsuaf.insect.service.TreeBuilderService;
import com.nwsuaf.insect.service.pest.PestCategoryService;

@Controller
@RequestMapping("/")
public class TreeShowCtrl {
	
	@Autowired
	private InsectCategoryService insectCategoryService;
	@Autowired
	private PestCategoryService pestCategoryService;
	@Autowired
	private TreeBuilderService treeBuilderService;
	@Autowired
	private PestTreeBuilderService pestTreeBuilderService;

	@RequestMapping(value = "/showTree")
	public ModelAndView showIndex(ModelMap model){
		List<Integer> categoryIds = new ArrayList<Integer>();
		categoryIds.add(1);
		categoryIds.add(2);
		String insectCategoryHTML = treeBuilderService.buildInsectTree(insectCategoryService
				.getInsectCategoryTree(categoryIds, true));
		model.addAttribute("insectCategoryHTML", insectCategoryHTML);
		
		String pestCategoryHTML = pestTreeBuilderService.buildPestTree(pestCategoryService
				.getInsectCategoryTree(categoryIds, true));
		model.addAttribute("pestCategoryHTML", pestCategoryHTML);
		
		return new ModelAndView("frontTree/tree");
	}
}
