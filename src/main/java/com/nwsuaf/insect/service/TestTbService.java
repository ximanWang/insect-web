package com.nwsuaf.insect.service;

import com.nwsuaf.insect.model.TestTb;

public interface TestTbService {
	int insertTestTb(TestTb testTb);
	TestTb selectById(int id);
}
