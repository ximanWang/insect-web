package com.nwsuaf.insect.mapper;

import com.nwsuaf.insect.model.Area;

public interface AreaMapper {
	
    int deleteByPrimaryKey(Integer id);

    int insert(Area record);

    int insertSelective(Area record);

    Area selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Area record);

    int updateByPrimaryKey(Area record);

	int updateRightData(Integer rgt);
}