package com.nwsuaf.insect.mapper;

import com.nwsuaf.insect.model.TestTb;

public interface TestTbDao {
	int addTestTb(TestTb testTb);
	TestTb selectById(int id);
	void deleteById(int id);
	void insertSelective(TestTb testTb);
	void updateByPrimaryKeySelective(TestTb testTb);
	void updateByPrimaryKey(TestTb testTb);
}
