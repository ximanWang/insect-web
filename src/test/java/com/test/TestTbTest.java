package com.test;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.alibaba.fastjson.JSON;
import com.nwsuaf.insect.model.TestTb;
import com.nwsuaf.insect.service.TestTbService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:spring.xml",
		"classpath:spring-mybatis.xml" })
public class TestTbTest {
	private static final Logger LOGGER = Logger.getLogger(TestTbService.class);

	@Autowired
	public TestTbService testTbService;

	@Test
	public void testAdd() throws Exception {
		TestTb testTb = new TestTb();
		testTb.setName("测试1");
		testTb.setBirthday("2013-01-21");
		int result = testTbService.insertTestTb(testTb);
		System.out.println(result);
		// LOGGER.info(JSON.toJSON(testInfos));
	}

	@Test
	public void testSelectById() {
		TestTb testTb = testTbService.selectById(1);
		System.out.println(testTb.getName() + "," + testTb.getBirthday());
		LOGGER.info(JSON.toJSON(testTb));
	}
}
