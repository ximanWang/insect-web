package com.nwsuaf.insect.model;

import java.util.Date;

import lombok.Data;

@Data
public class InsectPestCategory {
	
	private Integer id;

    private Integer categoryId;

    private String categoryName;

    private String lationName;

    private Integer lft;

    private Integer rgt;

    private Integer parentId;

    private Integer categoryLevel;

    private Integer isLeaf;

    private String addUser;

    private Date addTime;

    private String updateUser;

    private Date updateTime;
	
	
}
