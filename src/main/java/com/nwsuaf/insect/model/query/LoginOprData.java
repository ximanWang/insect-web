package com.nwsuaf.insect.model.query;

import lombok.Data;

import com.alibaba.fastjson.annotation.JSONField;
import com.alibaba.fastjson.annotation.JSONType;

@Data
@JSONType
public class LoginOprData {
	
	@JSONField
	private String usrename;
	@JSONField
    private String password;
}
