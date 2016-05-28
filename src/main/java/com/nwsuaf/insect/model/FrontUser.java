package com.nwsuaf.insect.model;

import java.util.Date;

import lombok.Data;

@Data
public class FrontUser {
    private Integer id;

    private String userName;

    private String userPasswd;

    private String userEmail;

    private String remark;

    private Date addTime;

    private Date updateTime;

}