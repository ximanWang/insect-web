package com.nwsuaf.insect.mapper.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.nwsuaf.insect.mapper.InsectMapper;
import com.nwsuaf.insect.mapper.UserMapper;
import com.nwsuaf.insect.model.Insect;
import com.nwsuaf.insect.model.query.InsectQuery;
import com.nwsuaf.insect.service.InsectService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:spring.xml",
		"classpath:spring-mybatis.xml" })
public class TestInsectService {

	@Autowired
	private InsectService insectServcie;
	@Autowired
	private InsectMapper insectMapper;
	@Autowired
	private UserMapper userMapper;
	
	@Test
	public void testFindById(){
		Insect insect = insectServcie.selectById(1001);
		System.out.println(insect.getChineseName());
	}
	
	@Test
	public void testFindByIdMapper(){
		 insectMapper.selectByPrimaryKey(1001);
	}
	
	@Test
	public void testUserMapper(){
		userMapper.selectByName("wxm");
	}
}
