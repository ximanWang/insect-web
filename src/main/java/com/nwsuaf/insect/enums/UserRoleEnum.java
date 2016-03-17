package com.nwsuaf.insect.enums;

/**
 * 权限枚举
 * 
 * @author ximan
 *
 */
public enum UserRoleEnum {

	ROOT("ROOT", "超级权限"), 
	
	ROLE_MOD("ROLE01", "修改权限"),
	
	ROLE_DEL("ROLE02", "删除权限");

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
