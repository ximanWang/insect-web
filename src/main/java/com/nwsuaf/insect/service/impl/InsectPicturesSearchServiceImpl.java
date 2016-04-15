package com.nwsuaf.insect.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.nwsuaf.insect.dto.ListResult;
import com.nwsuaf.insect.dto.Pagination;
import com.nwsuaf.insect.exception.InsectException;
import com.nwsuaf.insect.mapper.AlbumPicturesMapper;
import com.nwsuaf.insect.mapper.InsectAlbumMapper;
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
	InsectAlbumMapper albumMapper;
	@Autowired
	AlbumPicturesMapper pictureMapper;
	
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
	public ListResult getPictures(Pagination pagination) throws InsectException {
		Integer insectId = (Integer)pagination.getCondition().get("insectId");
		String type = (String) pagination.getCondition().get("typeName");
		
		PaginationUtil.initDateQueryCondition(pagination);
	    PageHelper.startPage(pagination.getCurrentPage(), pagination.getPageCount(), true);
	    
		Integer typeNum = null;
		InsectAlbum album = null;
		List<AlbumPictures> pictures = null;
		if(type == null || type.equals("")){
			List<InsectAlbum> albumList = insectAlbumService.getAlbmList(insectId);
			pictures = new ArrayList<AlbumPictures>();
			if(albumList != null && albumList.size()>0){
				List<AlbumPictures> pictures2 = null;
				for(int i=0; i<albumList.size(); i++){
					pictures2 = pictureMapper.getPictures(albumList.get(i).getId());
					pictures.addAll(pictures2);
				}
			}
		}else{
			if(insectId != null){
				if(type.equals("typeA")){
					typeNum = 1;
					album = albumMapper.selectByTypeAndId(insectId, typeNum);
				}else if(type.equals("typeB")){
					typeNum = 0;
					album = albumMapper.selectByTypeAndId(insectId, typeNum);
				}
				if(album != null){
					pictures = pictureMapper.getPictures(album.getId());
				}
			}else{
				 pictures = new ArrayList<AlbumPictures>();
			}
		}
		
		PageInfo page = new PageInfo(pictures);
		ListResult result = new ListResult(pictures,page.getTotal());
		return result;
	}

}
