package com.nwsuaf.insect.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nwsuaf.insect.exception.InsectException;
import com.nwsuaf.insect.mapper.InsectAlbumMapper;
import com.nwsuaf.insect.service.InsectAlbumService;

@Service("InsectAlbumService")
public class InsectAlbumServiceImpl implements InsectAlbumService{
	
	@Autowired
	private InsectAlbumMapper insectAlbumMapper;
	
	@Override
	public List getAlbmList(Integer insectId) throws InsectException {
		List albmList = insectAlbumMapper.selectByInsectId(insectId);
		return albmList;
	}

}
