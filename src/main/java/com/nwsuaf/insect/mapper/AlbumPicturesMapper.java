package com.nwsuaf.insect.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.nwsuaf.insect.model.AlbumPictures;

public interface AlbumPicturesMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AlbumPictures record);

    int insertSelective(AlbumPictures record);

    AlbumPictures selectByPrimaryKey(Integer id);
    
    List<AlbumPictures> getPictures(Integer albumId);

    int updateByPrimaryKeySelective(AlbumPictures record);

    int updateByPrimaryKey(AlbumPictures record);
}