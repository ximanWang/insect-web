package com.nwsuaf.insect.mapper;

import com.nwsuaf.insect.model.PestCategory;

public interface PestCategoryMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(PestCategory record);

    int insertSelective(PestCategory record);

    PestCategory selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(PestCategory record);

    int updateByPrimaryKey(PestCategory record);
}