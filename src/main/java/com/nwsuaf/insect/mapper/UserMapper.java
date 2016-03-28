package com.nwsuaf.insect.mapper;

import com.nwsuaf.insect.model.InsectCateUserRole;


public interface UserMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(InsectCateUserRole record);

    int insertSelective(InsectCateUserRole record);

    InsectCateUserRole selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(InsectCateUserRole record);

    int updateByPrimaryKey(InsectCateUserRole record);
    
    InsectCateUserRole selectByName(String InsectCateUserRolename);
}