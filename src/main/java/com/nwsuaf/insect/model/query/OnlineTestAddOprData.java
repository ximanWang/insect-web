package com.nwsuaf.insect.model.query;

import com.alibaba.fastjson.annotation.JSONField;
import com.alibaba.fastjson.annotation.JSONType;

import lombok.Data;

@Data
@JSONType
public class OnlineTestAddOprData {

	@JSONField
	private String question;
	@JSONField
	private String answerA;
	@JSONField
	private String answerB;
	@JSONField
	private String answerC;
	@JSONField
	private String answerD;
	@JSONField
	private String correctAnswer;
}
