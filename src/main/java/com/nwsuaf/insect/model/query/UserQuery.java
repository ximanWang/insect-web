package com.nwsuaf.insect.model.query;

import java.util.List;

import lombok.Data;

@Data
public class UserQuery {

	private String userName; // 用户名
	
	private String password; // 密码

	private String realName; // 用户姓名

	private String email; // Email
	
	private String roleType;

	private List<InsectCateUserRoleQuery> insectCateUserRoles; // 系统当前所拥有角色

	private Boolean isRoot;// 是否拥有超级权限
}
