package com.nwsuaf.insect.service;

import java.util.List;

import com.nwsuaf.insect.dto.ListResult;
import com.nwsuaf.insect.dto.Pagination;
import com.nwsuaf.insect.model.InsectOnlineTest;


public interface OnlineTestService {

	List<InsectOnlineTest> getTestList();
	
	public ListResult getTests(Pagination pagination);
}
