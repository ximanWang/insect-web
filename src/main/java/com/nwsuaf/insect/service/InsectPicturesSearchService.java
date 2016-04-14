package com.nwsuaf.insect.service;

import java.util.List;

import com.nwsuaf.insect.dto.ListResult;
import com.nwsuaf.insect.dto.Pagination;
import com.nwsuaf.insect.exception.InsectException;
import com.nwsuaf.insect.model.InsectAlbum;

public interface InsectPicturesSearchService {
	
	ListResult getAlbums(Pagination pagination) throws InsectException;
	
	ListResult getPictures(InsectAlbum album) throws InsectException;
}
