package com.nwsuaf.insect.service.impl;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nwsuaf.insect.dto.ListResult;
import com.nwsuaf.insect.dto.Pagination;
import com.nwsuaf.insect.exception.InsectException;
import com.nwsuaf.insect.mapper.InsectCategoryMapper;
import com.nwsuaf.insect.model.InsectCategory;
import com.nwsuaf.insect.model.query.UserQuery;
import com.nwsuaf.insect.service.InsectMappingSearchService;

@Service("InsectMappingSearchService")
public class InsectMappingSearchServiceImpl implements InsectMappingSearchService{
	
	@Autowired
	private InsectCategoryMapper insectCategoryMapper;
	@Override
	public ListResult getFBMappings(Pagination pagination, UserQuery userq) throws InsectException {
		
		//如果有频道的查询条件，则获取该频道下所有的子节点
		Integer fAncestorId = (Integer) pagination.getCondition().get("fAncestorId");
		
		//如果有后台类目的查询条件
		Integer bCateId = (Integer) pagination.getCondition().get("bCateId");
		
		String addTime = (String) pagination.getCondition().get("startDate");
		String updateTime = (String) pagination.getCondition().get("endDate");
		String addUser = (String)pagination.getCondition().get("addUserName");
		String updateUser = (String)pagination.getCondition().get("updateUserName");
		
		InsectCategory ancestorCate = toInsectCategory(fAncestorId,addTime,updateTime,addUser,updateUser);
		List<InsectCategory> ancestorChilds =  insectCategoryMapper.getChildern(ancestorCate);
		
		InsectCategory bCate = toInsectCategory(bCateId,addTime,updateTime,addUser,updateUser);
		List<InsectCategory> bCateChilds = insectCategoryMapper.getChildern(bCate);
		
		List<InsectCategory> realChilds = null;
		if(ancestorChilds.size()>0 && bCateChilds.size()>0){
			for(InsectCategory ancestorChild : ancestorChilds){
				if(ancestorChild.getId()==bCateId){
					realChilds = bCateChilds;
					break;
				}
			}
		}else if(ancestorChilds.size()==0 && bCateChilds.size()>0) {
			realChilds = bCateChilds;
		}else if(ancestorChilds.size()>0 && bCateChilds.size()==0){
			realChilds = ancestorChilds;
		}else{
			realChilds = new ArrayList<InsectCategory>();
		}
		
		ListResult listResult = new ListResult(realChilds, ancestorChilds.size());
		return listResult;
	}
	private InsectCategory toInsectCategory(Integer id,String addTime, String updateTime, String addUser, String updateUser) {
		InsectCategory insectCategory = new InsectCategory();
		if(id!=null){
			insectCategory.setId(id);
		}
		if(addTime != null && !addTime.equals("")){
			insectCategory.setAddTime(Date.valueOf(addTime));
		}
		if(updateTime != null && !updateTime.equals("")){
			insectCategory.setUpdateTime(Date.valueOf(updateTime));
		}
		if(addUser != null && !addUser.equals("")){
			insectCategory.setAddUser(addUser);
		}
		if(updateUser != null && !updateUser.equals("")){
			insectCategory.setUpdateUser(updateUser);	
		}
		return insectCategory;
	}

}
