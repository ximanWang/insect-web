package com.nwsuaf.insect.enums;
/**
 * 角色类型枚举
 * @author ximan
 *
 */
public enum RoleType {
	
	ROOT("ROOT"), BACK("BACK");
	
	private RoleType(String type){
		this.type = type;
	}
	
	private String type;

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	
}
