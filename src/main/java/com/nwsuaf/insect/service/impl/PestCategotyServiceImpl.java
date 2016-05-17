package com.nwsuaf.insect.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nwsuaf.insect.model.query.InsectCategoryQuery;
import com.nwsuaf.insect.service.pest.PestCategoryService;

@Service("PestService")
public class PestCategotyServiceImpl implements PestCategoryService{

	@Override
	public List<InsectCategoryQuery> getInsectCategoryTree(List<Integer> categoryIds, boolean isRoot) {
		// TODO Auto-generated method stub
		return null;
	}
	
	
}
