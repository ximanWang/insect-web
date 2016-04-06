package com.nwsuaf.insect.model.query;

import java.util.List;

import lombok.Data;

import com.alibaba.fastjson.annotation.JSONType;

/**
 * 操作对象集合
 * @author ximan
 * 2016/04/06
 *
 */
@Data
@JSONType
public class InsectOprData {
	
	private List<InsectOprQuery> insectOprs;
}
