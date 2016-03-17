package com.nwsuaf.insect.service;

import java.util.List;
import java.util.Map;

import com.nwsuaf.insect.model.query.InsectCategoryQuery;


public interface InsectCategoryBizService {
	/**
     * 根据parentId分组获取对应类目的MAP
     * @return
     */
    public Map<Integer, List<InsectCategoryQuery>> getAllInsectCategoriesGroupByParentId();
    
    /**
     * 遍历Insects类目树
     * 
     * @param parentId
     * @param categoryIds
     * @param privilege
     * @return
     */
    public List<InsectCategoryQuery> buildCategoryTree(Integer parentId, List<Integer> categoryIds,
            Map<Integer, List<InsectCategoryQuery>> caegoryMap, boolean privilege, boolean isRoot);
}
