package com.nwsuaf.insect.enums;

/**
 * 操作类型枚举
 * @author ximan
 * 2016/04/06
 *
 */
public enum OprTypeEnum {

	DEL_CATE("delCate", "删除类目"),
	
	UPD_CATE_NAME("updCateName","更新类目名字"),
	
	ADD_CATE("addCate","新增类目");

	private String type;

	private String desc;

	private OprTypeEnum(String type, String desc) {
		this.type = type;
		this.desc = desc;
	}
	public String val() {
		return type;
	}
	
	public String getDesc(){
		return this.desc;
	}
	
	public static OprTypeEnum fromVal(String val) {
		for (OprTypeEnum type : OprTypeEnum.values()) {
			if (type.val().equals(val)) {
				return type;
			}
		}
		return null;
	}

}
