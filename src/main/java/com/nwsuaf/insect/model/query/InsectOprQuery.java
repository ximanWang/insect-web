package com.nwsuaf.insect.model.query;

import lombok.Data;

import com.alibaba.fastjson.annotation.JSONField;
import com.alibaba.fastjson.annotation.JSONType;

/**
 * 操作对象的封装
 * @author ximan
 * 2016/04/06
 *
 */
@Data
@JSONType
public class InsectOprQuery {
	
	@JSONField
	private String oprType; // 操作类型
	
	@JSONField
	private Integer categoryId; // 类目id
	 
	@JSONField
	private Integer parentId; // 父类目id
	
	@JSONField
	private String oprDate; //json字符串
}
