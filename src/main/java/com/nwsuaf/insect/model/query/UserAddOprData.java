package com.nwsuaf.insect.model.query;

import lombok.Data;

import com.alibaba.fastjson.annotation.JSONField;
import com.alibaba.fastjson.annotation.JSONType;

@Data
@JSONType
public class UserAddOprData {
	
	@JSONField
    private String userCode; //工号
	@JSONField
    private String roleCode; 
	@JSONField
    private String userName;
	@JSONField
    private String userEmail;
	@JSONField
	private String remark;
}
