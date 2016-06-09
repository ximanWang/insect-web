package com.nwsuaf.insect.mapper;

import java.util.List;

import com.nwsuaf.insect.model.InsectOnlineTest;

public interface InsectOnlineTestMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(InsectOnlineTest record);

    int insertSelective(InsectOnlineTest record);

    InsectOnlineTest selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(InsectOnlineTest record);

    int updateByPrimaryKey(InsectOnlineTest record);
    
    List<InsectOnlineTest> getAllTests();
}