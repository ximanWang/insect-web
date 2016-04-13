package com.nwsuaf.insect.service.impl;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.nwsuaf.insect.dto.ListResult;
import com.nwsuaf.insect.dto.Pagination;
import com.nwsuaf.insect.exception.InsectException;
import com.nwsuaf.insect.mapper.InsectCategoryMapper;
import com.nwsuaf.insect.mapper.InsectMapper;
import com.nwsuaf.insect.model.Insect;
import com.nwsuaf.insect.model.InsectCategory;
import com.nwsuaf.insect.model.query.InsectAddOprData;
import com.nwsuaf.insect.model.query.UserQuery;
import com.nwsuaf.insect.service.InsectCategoryService;
import com.nwsuaf.insect.service.InsectMappingSearchService;
import com.nwsuaf.insect.service.InsectService;
import com.nwsuaf.insect.util.PaginationUtil;

@Service("InsectMappingSearchService")
public class InsectMappingSearchServiceImpl implements InsectMappingSearchService{
	
	@Autowired
	private InsectCategoryMapper insectCategoryMapper;
	@Autowired
	private InsectCategoryService insectCategoryService;
	@Autowired
	private InsectMapper insectMapper;
	
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
		
		PaginationUtil.initDateQueryCondition(pagination);
		//设置分页区间，并设置第三个参数为true，计算总记录数
	    PageHelper.startPage(pagination.getCurrentPage(), pagination.getPageCount(), true);
	    
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
		PageInfo page = new PageInfo(realChilds);
		ListResult listResult = new ListResult(realChilds,page.getTotal());
		return listResult;
	}
	/**
	 * 条件查找
	 * @param id
	 * @param addTime
	 * @param updateTime
	 * @param addUser
	 * @param updateUser
	 * @return
	 */
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
	@Override
	@Transactional
	public void addInsect(InsectAddOprData addOprData) throws InsectException {
		Integer parentId = addOprData.getFCateId();
		InsectCategory insectCategory = new InsectCategory();
		insectCategory.setCategoryName(addOprData.getChineseName());
		insectCategory.setLationName(addOprData.getLationName());
		insectCategory.setAddUser(addOprData.getAddUser());
		insectCategory.setUpdateUser(addOprData.getUpdateUser());
		// 类目表中添加
		insectCategoryService.addCategory(insectCategory, parentId);
		
		// TODO 在害虫表中添加
		Integer pestParentId = addOprData.getFPestId();
		
		// 种表中添加
		Insect insect = new Insect();
		insect.setChineseName(addOprData.getChineseName());
		insect.setLationName(addOprData.getLationName());
		insect.setEnglishName(addOprData.getEnglishName());
		insect.setAlias(addOprData.getAlias());
		insect.setFeatures(addOprData.getFeatures());
		insect.setGatherPlace(addOprData.getGatherPlace());
		insect.setDistribution(addOprData.getDistribution());
		insect.setHost(addOprData.getHost());
		InsectCategory category = insectCategoryMapper.selectByCategoryName(addOprData.getChineseName());
		insect.setCategoryId(category.getId());
		if(pestParentId != null){
			insect.setIsPest(1);
		}else{
			insect.setIsPest(0);
		}
		// TODO 设置pestId
		
		insectMapper.insertSelective(insect);
	}

}
