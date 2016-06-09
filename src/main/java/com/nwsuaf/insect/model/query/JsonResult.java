package com.nwsuaf.insect.model.query;

import java.util.List;

import lombok.Data;

import com.alibaba.fastjson.annotation.JSONField;
import com.alibaba.fastjson.annotation.JSONType;

@Data
@JSONType
public class JsonResult {

	@JSONField
	private String question;
	@JSONField
	private List<String> answers;
	@JSONField
	private Integer correctAnswer;
}
