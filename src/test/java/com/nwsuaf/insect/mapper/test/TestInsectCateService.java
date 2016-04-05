package com.nwsuaf.insect.mapper.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.nwsuaf.insect.model.InsectCategory;
import com.nwsuaf.insect.service.InsectCategoryService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:spring.xml",
		"classpath:spring-mybatis.xml" })
public class TestInsectCateService {

	@Autowired
	private InsectCategoryService insectCategoryService;
	@Test
	public void testInsert(){
		InsectCategory insectCategory = new InsectCategory();
		insectCategory.setCategoryName("缨尾目 ");
		insectCategory.setLationName("Thysanura");
		insectCategory.setIsLeaf(0);
		insectCategory.setCategoryId(46);
		insectCategoryService.insertCategory(insectCategory, 1);
	}
}
