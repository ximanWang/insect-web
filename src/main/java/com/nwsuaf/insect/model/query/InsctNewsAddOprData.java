package com.nwsuaf.insect.model.query;

import lombok.Data;

import com.alibaba.fastjson.annotation.JSONField;
import com.alibaba.fastjson.annotation.JSONType;

@Data
@JSONType
public class InsctNewsAddOprData {

	@JSONField
	private String title;
	@JSONField
	private String content;
}
