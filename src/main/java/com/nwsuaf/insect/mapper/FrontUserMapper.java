package com.nwsuaf.insect.mapper;

import com.nwsuaf.insect.model.FrontUser;

public interface FrontUserMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(FrontUser record);

    int insertSelective(FrontUser record);

    FrontUser selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(FrontUser record);

    int updateByPrimaryKey(FrontUser record);

	FrontUser findByUserName(String username);
}