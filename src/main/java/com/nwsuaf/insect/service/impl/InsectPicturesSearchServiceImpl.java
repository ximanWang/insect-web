package com.nwsuaf.insect.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.nwsuaf.insect.dto.ListResult;
import com.nwsuaf.insect.dto.Pagination;
import com.nwsuaf.insect.exception.InsectException;
import com.nwsuaf.insect.mapper.AlbumPicturesMapper;
import com.nwsuaf.insect.model.AlbumPictures;
import com.nwsuaf.insect.model.InsectAlbum;
import com.nwsuaf.insect.service.InsectAlbumService;
import com.nwsuaf.insect.service.InsectPicturesSearchService;
import com.nwsuaf.insect.util.PaginationUtil;

@Service("InsectPicturesSearchService")
public class InsectPicturesSearchServiceImpl implements InsectPicturesSearchService{
	
	@Autowired
	private InsectAlbumService insectAlbumService;
	@Autowired
	AlbumPicturesMapper albumPicturesMapper;
	@Override
	public ListResult getAlbums(Pagination pagination) throws InsectException {
		
		Integer insectId = (Integer)pagination.getCondition().get("insectId");
		List albumList = insectAlbumService.getAlbmList(insectId);
		
		PaginationUtil.initDateQueryCondition(pagination);
		//设置分页区间，并设置第三个参数为true，计算总记录数
	    PageHelper.startPage(pagination.getCurrentPage(), pagination.getPageCount(), true);
	    
	    ListResult result = new ListResult(albumList,albumList.size());
	    
		return result;
	}

	@Override
	public ListResult getPictures(InsectAlbum album) throws InsectException {
		Integer albumId = album.getId();
		List<AlbumPictures> pictureList = albumPicturesMapper.getPictures(albumId);
		ListResult result = new ListResult(pictureList,pictureList.size());
		return result;
	}

}
