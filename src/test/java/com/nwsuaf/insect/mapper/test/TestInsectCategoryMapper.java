package com.nwsuaf.insect.mapper.test;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.nwsuaf.insect.mapper.AreaMapper;
import com.nwsuaf.insect.mapper.InsectCategoryMapper;
import com.nwsuaf.insect.model.query.InsectCategoryQuery;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:spring.xml",
		"classpath:spring-mybatis.xml" })
public class TestInsectCategoryMapper {

	@Autowired
	public InsectCategoryMapper insectCategoryMapper; 
	
	@Autowired
	private AreaMapper areaMapper;
	
	@Test
	public void testGet(){
//		insectCategoryMapper.selectByPrimaryKey(1);
//		areaMapper.selectByPrimaryKey(10);
		insectCategoryMapper.getParents(43);
	}
	
	@Test
	public void testSelectAll(){
		List<InsectCategoryQuery> list = insectCategoryMapper.selectAllInsectCategories();
		System.out.println(list.size());
	}

}
