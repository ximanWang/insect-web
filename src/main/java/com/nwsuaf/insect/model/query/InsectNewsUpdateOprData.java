package com.nwsuaf.insect.model.query;

import lombok.Data;

import com.alibaba.fastjson.annotation.JSONField;
import com.alibaba.fastjson.annotation.JSONType;

@Data
@JSONType
public class InsectNewsUpdateOprData {

	@JSONField
	private Integer newsId;
	@JSONField
	private String title;
	@JSONField
	private String content;
}
