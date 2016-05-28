package com.nwsuaf.insect.mapper;

import java.util.List;

import com.nwsuaf.insect.model.InsectTalk;

public interface InsectTalkMapper {
	
	List<InsectTalk> getAllTalks();
	
    int deleteByPrimaryKey(Integer id);

    int insert(InsectTalk record);

    int insertSelective(InsectTalk record);

    InsectTalk selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(InsectTalk record);

    int updateByPrimaryKey(InsectTalk record);

	List<InsectTalk> findByCondition(InsectTalk insectTalk);

	List<InsectTalk> getAllFrontTalks();
}