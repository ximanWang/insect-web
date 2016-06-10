package com.nwsuaf.insect.service;

import com.nwsuaf.insect.dto.ListResult;
import com.nwsuaf.insect.dto.Pagination;

public interface InsectNewsService {

	ListResult getNews(Pagination pagination);

}
