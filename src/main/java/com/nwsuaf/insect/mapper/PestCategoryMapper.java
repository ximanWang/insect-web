package com.nwsuaf.insect.mapper;

import java.util.List;

import com.nwsuaf.insect.model.InsectCategory;
import com.nwsuaf.insect.model.PestCategory;
import com.nwsuaf.insect.model.query.PestCategoryQuery;

public interface PestCategoryMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(PestCategory record);

    int insertSelective(PestCategory record);

    PestCategory selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(PestCategory record);

    int updateByPrimaryKey(PestCategory record);

	List<PestCategoryQuery> selectAllInsectCategories();

	List<PestCategory> getParents(Integer id);

	PestCategoryQuery selectByCategoryId(int categoryId);

}