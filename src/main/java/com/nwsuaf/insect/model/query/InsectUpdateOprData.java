package com.nwsuaf.insect.model.query;

import lombok.Data;

import com.alibaba.fastjson.annotation.JSONField;
import com.alibaba.fastjson.annotation.JSONType;

@Data
@JSONType
public class InsectUpdateOprData {
	@JSONField
	private Integer mid;
	@JSONField
    private String chineseName;
	@JSONField
    private String englishName;
	@JSONField
    private String lationName;
	@JSONField
    private String alias;
	@JSONField
    private String host;
	@JSONField
    private String distribution;
	@JSONField
    private String gatherPlace;
	@JSONField
    private String features;
}
