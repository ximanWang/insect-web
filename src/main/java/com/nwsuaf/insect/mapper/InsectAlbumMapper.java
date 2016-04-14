package com.nwsuaf.insect.mapper;

import java.util.List;

import com.nwsuaf.insect.model.InsectAlbum;

public interface InsectAlbumMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(InsectAlbum record);

    int insertSelective(InsectAlbum record);

    InsectAlbum selectByPrimaryKey(Integer id);
    
    List<InsectAlbum> selectByInsectId(Integer insectId);

    int updateByPrimaryKeySelective(InsectAlbum record);

    int updateByPrimaryKey(InsectAlbum record);
}