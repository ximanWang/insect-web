package com.nwsuaf.insect.mapper;

import java.util.List;

import com.nwsuaf.insect.model.Insect;

public interface InsectMapper {
	
    int deleteByPrimaryKey(Integer id);

    int insert(Insect record);

    int insertSelective(Insect record);

    Insect selectByPrimaryKey(Integer id);
    
    Insect selectByCategoryId(Integer categoryId);
    
    int updateByPrimaryKeySelective(Insect record);

    int updateByPrimaryKey(Insect record);

	List<Insect> selectAllInsects();
}