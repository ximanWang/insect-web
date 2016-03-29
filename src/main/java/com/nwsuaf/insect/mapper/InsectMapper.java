package com.nwsuaf.insect.mapper;

import com.nwsuaf.insect.model.Insect;

public interface InsectMapper {
	
    int deleteByPrimaryKey(Integer id);

    int insert(Insect record);

    int insertSelective(Insect record);

    Insect selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Insect record);

    int updateByPrimaryKey(Insect record);
}