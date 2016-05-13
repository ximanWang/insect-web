package com.nwsuaf.insect.mapper;

import com.nwsuaf.insect.model.InsectCateRole;

public interface InsectCateRoleMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(InsectCateRole record);

    int insertSelective(InsectCateRole record);

    InsectCateRole selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(InsectCateRole record);

    int updateByPrimaryKey(InsectCateRole record);
}