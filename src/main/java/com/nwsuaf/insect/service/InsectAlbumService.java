package com.nwsuaf.insect.service;

import java.util.List;

import com.nwsuaf.insect.exception.InsectException;
import com.nwsuaf.insect.model.InsectAlbum;

public interface InsectAlbumService {
	
	List<InsectAlbum> getAlbmList(Integer insectId) throws InsectException;
}
