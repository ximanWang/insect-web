package com.nwsuaf.insect.service;

import com.nwsuaf.insect.model.Insect;

public interface InsectService {
	
	public Insect selectById(Integer id);
	
	public Insect selectByCategotyId(Integer categoryId);
	
	public Integer updateSelective(Insect insect);
	
}
