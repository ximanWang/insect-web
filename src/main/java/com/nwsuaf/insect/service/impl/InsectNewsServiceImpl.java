package com.nwsuaf.insect.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.nwsuaf.insect.dto.ListResult;
import com.nwsuaf.insect.dto.Pagination;
import com.nwsuaf.insect.mapper.InsectNewsMapper;
import com.nwsuaf.insect.model.InsectNews;
import com.nwsuaf.insect.service.InsectNewsService;
import com.nwsuaf.insect.util.PaginationUtil;

@Service("InsectNewsService")
public class InsectNewsServiceImpl implements InsectNewsService{

	@Autowired
	private InsectNewsMapper newsMapper;
	
	@Override
	public ListResult getNews(Pagination pagination) {
		PaginationUtil.initDateQueryCondition(pagination);
		//设置分页区间，并设置第三个参数为true，计算总记录数
	    PageHelper.startPage(pagination.getCurrentPage(), pagination.getPageCount(), true);
	    
	    List<InsectNews> newsList = newsMapper.getAllNews();
	    
	    PageInfo page = new PageInfo(newsList);
		ListResult listResult = new ListResult(newsList,page.getTotal());
		return listResult;
	}

}
