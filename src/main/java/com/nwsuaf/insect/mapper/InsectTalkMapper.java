package com.nwsuaf.insect.mapper;

import com.nwsuaf.insect.model.InsectTalk;

public interface InsectTalkMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(InsectTalk record);

    int insertSelective(InsectTalk record);

    InsectTalk selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(InsectTalk record);

    int updateByPrimaryKey(InsectTalk record);
}