package com.nwsuaf.insect.mapper;

import java.util.List;

import com.nwsuaf.insect.model.InsectNews;

public interface InsectNewsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(InsectNews record);

    int insertSelective(InsectNews record);

    InsectNews selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(InsectNews record);

    int updateByPrimaryKey(InsectNews record);

	List<InsectNews> getAllNews();
    
    
}