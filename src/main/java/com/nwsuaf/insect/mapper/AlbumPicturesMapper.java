package com.nwsuaf.insect.mapper;

import com.nwsuaf.insect.model.AlbumPictures;

public interface AlbumPicturesMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AlbumPictures record);

    int insertSelective(AlbumPictures record);

    AlbumPictures selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AlbumPictures record);

    int updateByPrimaryKey(AlbumPictures record);
}