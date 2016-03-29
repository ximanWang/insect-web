package com.nwsuaf.insect.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nwsuaf.insect.mapper.InsectCategoryMapper;
import com.nwsuaf.insect.mapper.InsectMapper;
import com.nwsuaf.insect.model.Insect;
import com.nwsuaf.insect.model.InsectCategory;
import com.nwsuaf.insect.model.query.InsectQuery;
import com.nwsuaf.insect.service.InsectService;

@Service("InsectService")
public class InsectServiceImpl implements InsectService{
	
	@Autowired
	private InsectMapper insectMapper;
	@Autowired
	private InsectCategoryMapper insectCategoryMapper;

	public Insect selectById(Integer id) {
		Insect insect = insectMapper.selectByPrimaryKey(id);
		return insect;
	}

}
