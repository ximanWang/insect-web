package com.nwsuaf.insect.mapper;

import java.util.List;

import com.nwsuaf.insect.model.InsectCategory;
import com.nwsuaf.insect.model.query.InsectCategoryQuery;

public interface InsectCategoryMapper {
	
    int deleteByPrimaryKey(Integer id);

    int insert(InsectCategory record);

    int insertSelective(InsectCategory record);

    InsectCategory selectByPrimaryKey(Integer id);
    
    InsectCategory selectByCategoryName(String categoryName);

    int updateByPrimaryKeySelective(InsectCategory record);

    int updateByPrimaryKey(InsectCategory record);

	List<InsectCategoryQuery> selectAllInsectCategories();
	
	List<InsectCategoryQuery> selectByParentId(Integer parentId);
	
	List<InsectCategory> getParents(Integer id);
	
	List<InsectCategory> getChildern(InsectCategory insectCategory);
	
	int updateRightData(Integer rgt);

	InsectCategoryQuery selectByCategoryId(Integer categoryId);
}