package com.nwsuaf.insect.service;

import java.util.List;

import com.nwsuaf.insect.dto.ListResult;
import com.nwsuaf.insect.dto.Pagination;
import com.nwsuaf.insect.model.Insect;

public interface InsectService {
	
	public Insect selectById(Integer id);
	
	public Insect selectByCategotyId(Integer categoryId);
	
	public List<Insect> selectAllInsects();
	
	public ListResult<Insect> getAllInsect(Pagination pagination);
	
	public Integer updateSelective(Insect insect);
	
}
