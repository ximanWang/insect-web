package com.nwsuaf.insect.mapper.test;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.nwsuaf.insect.model.InsectCategory;
import com.nwsuaf.insect.service.InsectCategoryService;

public class TestInsectCateService {

	@Autowired
	private InsectCategoryService insectCategoryService;
	@Test
	public void testInsert(){
		InsectCategory insectCategory = null;
		Integer result = insectCategoryService.insertCategory(insectCategory);
	}
}
