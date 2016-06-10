package com.nwsuaf.insect.model.query;

import lombok.Data;

import com.alibaba.fastjson.annotation.JSONField;
import com.alibaba.fastjson.annotation.JSONType;

@Data
@JSONType	
public class OnlineTestUpdateOprData {
	
	@JSONField
	private Integer id;
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
