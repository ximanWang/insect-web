package com.nwsuaf.insect.mapper.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.nwsuaf.insect.mapper.AreaMapper;
import com.nwsuaf.insect.model.Area;
import com.nwsuaf.insect.service.AreaService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:spring.xml",
		"classpath:spring-mybatis.xml" })
public class AreaServiceTest {
	
	@Autowired
	private AreaService areaService;
	@Autowired
	private AreaMapper areaMapper;
	
	@Test
	public void testInsert(){
		Area area = new Area();
		area.setName("保定");
		areaService.insectArea(area, 10);
	}
}
