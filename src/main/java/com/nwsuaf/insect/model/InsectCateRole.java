package com.nwsuaf.insect.model;

import java.util.Date;

import lombok.Data;

@Data
public class InsectCateRole {
    private Integer id;

    private Integer userroleId;

    private String userCode;

    private String roleCode;

    private String userName;

    private String userPasswd;

    private String userEmail;

    private String roleType;

    private String remark;

    private String addUser;

    private Date addTime;

    private String updateUser;

    private Date updateTime;

}