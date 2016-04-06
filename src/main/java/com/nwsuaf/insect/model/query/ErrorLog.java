package com.nwsuaf.insect.model.query;

import lombok.Data;

@Data
public class ErrorLog {
	
	private String oprType; // 操作类型

	private String oprLog; // 操作日志

	private String reason; // 失败原因
}
