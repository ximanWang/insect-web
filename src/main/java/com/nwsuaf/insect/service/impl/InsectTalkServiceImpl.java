package com.nwsuaf.insect.service.impl;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.nwsuaf.insect.dto.ListResult;
import com.nwsuaf.insect.dto.Pagination;
import com.nwsuaf.insect.mapper.InsectTalkMapper;
import com.nwsuaf.insect.model.InsectTalk;
import com.nwsuaf.insect.service.InsectTalkService;
import com.nwsuaf.insect.util.PaginationUtil;

@Service("InsectTalkService")
public class InsectTalkServiceImpl implements InsectTalkService{
	
	@Autowired
	private InsectTalkMapper talkMapper;
	
	@Override
	public ListResult getTalks(Pagination pagination) {
		
		String isCheck = (String)pagination.getCondition().get("isCheck");
		String startDate = (String)pagination.getCondition().get("startDate");
		
		PaginationUtil.initDateQueryCondition(pagination);
		//设置分页区间，并设置第三个参数为true，计算总记录数
	    PageHelper.startPage(pagination.getCurrentPage(), pagination.getPageCount(), true);
	    
	    InsectTalk insectTalk = toInsectTalk(isCheck,startDate);
	    List<InsectTalk> talkList = talkMapper.findByCondition(insectTalk);
	    PageInfo page = new PageInfo(talkList);
		ListResult listResult = new ListResult(talkList,page.getTotal());
		return listResult;
	}

	private InsectTalk toInsectTalk(String isCheck, String startDate) {
				
		InsectTalk insectTalk = new InsectTalk();
		if(startDate != null && !startDate.equals("")){
			insectTalk.setAddTime(Date.valueOf(startDate));
		}
		if(isCheck != null && !isCheck.equals("")){
			insectTalk.setIsAnswer(Integer.parseInt(isCheck));
		}
		
		return insectTalk;
	}

	@Override
	public ListResult getAllTalks(Pagination pagination) {
		PaginationUtil.initDateQueryCondition(pagination);
		//设置分页区间，并设置第三个参数为true，计算总记录数
	    PageHelper.startPage(pagination.getCurrentPage(), pagination.getPageCount(), true);
	    
	    List<InsectTalk> talkList = talkMapper.getAllTalks();
	    PageInfo page = new PageInfo(talkList);
		ListResult listResult = new ListResult(talkList,page.getTotal());
		return listResult;
	}

	@Override
	public ListResult getFrontTalks(Pagination pagination) {
		PaginationUtil.initDateQueryCondition(pagination);
		//设置分页区间，并设置第三个参数为true，计算总记录数
	    PageHelper.startPage(pagination.getCurrentPage(), pagination.getPageCount(), true);
	    
	    List<InsectTalk> talkList = talkMapper.getAllFrontTalks();
	    PageInfo page = new PageInfo(talkList);
		ListResult listResult = new ListResult(talkList,page.getTotal());
		return listResult;
	}

}
