package com.nwsuaf.insect.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nwsuaf.insect.mapper.TestTbDao;
import com.nwsuaf.insect.model.TestTb;
import com.nwsuaf.insect.service.TestTbService;

@Service("testTbService")
public class TestTbServiceImpl implements TestTbService {

	@Autowired
	private TestTbDao testTbDao;

	public int insertTestTb(TestTb testTb) {
		int result = testTbDao.addTestTb(testTb);

		System.out.println(result);
		return result;

	}

	public TestTb selectById(int id) {
		TestTb testTb = testTbDao.selectById(id);
		return testTb;
	}

}
