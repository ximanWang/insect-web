package com.nwsuaf.insect.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.nwsuaf.insect.dto.ListResult;
import com.nwsuaf.insect.dto.Pagination;
import com.nwsuaf.insect.mapper.InsectCategoryMapper;
import com.nwsuaf.insect.mapper.InsectMapper;
import com.nwsuaf.insect.model.Insect;
import com.nwsuaf.insect.service.InsectService;
import com.nwsuaf.insect.util.PaginationUtil;

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

	@Override
	public ListResult<Insect> getAllInsect(Pagination pagination) {
		PaginationUtil.initDateQueryCondition(pagination);
		//设置分页区间，并设置第三个参数为true，计算总记录数
	    PageHelper.startPage(pagination.getCurrentPage(), pagination.getPageCount(), true);
		
		List<Insect> list = insectMapper.selectAllInsects();
		
		PageInfo page = new PageInfo(list);
		ListResult listResult = new ListResult(list,page.getTotal());
		
		return listResult;
	}

}
