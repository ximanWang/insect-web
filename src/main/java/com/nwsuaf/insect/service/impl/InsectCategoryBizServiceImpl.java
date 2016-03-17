package com.nwsuaf.insect.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nwsuaf.insect.mapper.InsectCategoryMapper;
import com.nwsuaf.insect.model.query.InsectCategoryQuery;
import com.nwsuaf.insect.service.InsectCategoryBizService;

@Service("InsectCategoryBizService")
public class InsectCategoryBizServiceImpl implements InsectCategoryBizService {

	@Autowired
	private InsectCategoryMapper insectCategoryMapper;
	
	public Map<Integer, List<InsectCategoryQuery>> getAllInsectCategoriesGroupByParentId() {
		Map<Integer, List<InsectCategoryQuery>> cateMap = new TreeMap<Integer, List<InsectCategoryQuery>>();
		List<InsectCategoryQuery> categories = insectCategoryMapper.selectAllInsectCategories();
		
		for(InsectCategoryQuery category : categories) {
			if(cateMap.containsKey(category.getParentId())) {
				cateMap.get(category.getParentId()).add(category);
			} else {
				List<InsectCategoryQuery> subCategories = new ArrayList<InsectCategoryQuery>();
				subCategories.add(category);
				cateMap.put(category.getParentId(), subCategories);
			}
		}
		return cateMap;
	}

	public List<InsectCategoryQuery> buildCategoryTree(Integer parentId,
			List<Integer> categoryIds,
			Map<Integer, List<InsectCategoryQuery>> caegoryMap,
			boolean privilege, boolean isRoot) {
		List<InsectCategoryQuery> categories = caegoryMap.get(parentId);
		for(InsectCategoryQuery category : categories) {
			boolean flag = privilege || isRoot;
			if(!flag) {
				flag = categoryIds.contains(category.getCategoryId());
			}
			category.setPrivilege(flag);
			if(category.getIsLeaf()==0) {
				category.setChildern(buildCategoryTree(category.getCategoryId(), categoryIds, caegoryMap, flag, isRoot));
			}
		}
		
		return categories;
	}

}
