package com.nwsuaf.insect.model;

import java.util.Date;

import lombok.Data;

@Data
public class InsectCateRole {
	
	private Integer id;
	
	private Integer roleCode;
	
	private String roleName;
	
	private String roleType;
	
	private String comment;
	
	private Date updateTime;
}
