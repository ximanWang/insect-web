package com.nwsuaf.insect.service;

import com.nwsuaf.insect.dto.ListResult;
import com.nwsuaf.insect.dto.Pagination;
import com.nwsuaf.insect.exception.InsectException;
import com.nwsuaf.insect.model.query.InsectAddOprData;
import com.nwsuaf.insect.model.query.UserQuery;

/**
 * 昆虫查询服务接口
 * @author ximan
 *
 */
public interface InsectMappingSearchService {

	ListResult getFBMappings(Pagination pagination, UserQuery userq) throws InsectException;
	
	void addInsect(InsectAddOprData addOprData) throws InsectException;
}
