package com.nwsuaf.insect.enums;

/**
 * 权限枚举
 * 
 * @author ximan
 *
 */
public enum UserRoleEnum {

	ROOT("ROOT", "超级权限"), 
	
	BACK_CATE("BACK01", "修改类目权限"),
	
	BACK_PRO("BACK02", "修改属性权限"),
	
	BACK_CATE_PRO("BACK03", "后台类目、属性修改权限");

	private String roleName;
	
	private String roleCode;

	private UserRoleEnum(String roleName, String roleCode) {
		this.roleCode = roleCode;
		this.roleName = roleName;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getRoleCode() {
		return roleCode;
	}

	public void setRoleCode(String roleCode) {
		this.roleCode = roleCode;
	}

}
