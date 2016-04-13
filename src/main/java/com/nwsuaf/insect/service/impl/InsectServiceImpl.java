package com.nwsuaf.insect.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nwsuaf.insect.mapper.InsectCategoryMapper;
import com.nwsuaf.insect.mapper.InsectMapper;
import com.nwsuaf.insect.model.Insect;
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

	@Override
	public Insect selectByCategotyId(Integer categoryId) {
		Insect insect = insectMapper.selectByCategoryId(categoryId);
		return insect;
	}

	@Override
	@Transactional
	public Integer updateSelective(Insect insect) {
		Insect insectq = insectMapper.selectByPrimaryKey(insect.getId());
		insectq.setChineseName(insect.getChineseName());
		insectq.setEnglishName(insect.getEnglishName());
		insectq.setLationName(insect.getLationName());
		insectq.setAlias(insect.getAlias());
		insectq.setHost(insect.getHost());
		insectq.setFeatures(insect.getFeatures());
		insectq.setGatherPlace(insect.getGatherPlace());
		insectq.setDistribution(insect.getDistribution());
		insectMapper.updateByPrimaryKeySelective(insectq);
		return insect.getId();
	}

	@Override
	public List<Insect> selectAllInsects() {
		List<Insect> insectList = insectMapper.selectAllInsects();
		return insectList;
	}

}
