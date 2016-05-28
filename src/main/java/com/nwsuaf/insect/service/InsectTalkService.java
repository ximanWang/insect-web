package com.nwsuaf.insect.service;

import com.nwsuaf.insect.dto.ListResult;
import com.nwsuaf.insect.dto.Pagination;

public interface InsectTalkService {

	public ListResult getTalks(Pagination pagination);
	
	public ListResult getAllTalks(Pagination pagination);

	public ListResult getFrontTalks(Pagination pagination);
}
