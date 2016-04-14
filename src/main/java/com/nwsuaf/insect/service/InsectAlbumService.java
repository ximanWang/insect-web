package com.nwsuaf.insect.service;

import java.util.List;

import com.nwsuaf.insect.exception.InsectException;

public interface InsectAlbumService {
	
	List getAlbmList(Integer insectId) throws InsectException;
}
