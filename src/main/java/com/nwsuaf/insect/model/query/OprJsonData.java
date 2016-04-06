package com.nwsuaf.insect.model.query;

import lombok.Data;

/**
 * Json数据
 * @author ximan
 *
 */
@Data
public class OprJsonData {
	
	private Integer categoryId; // 操作类目id
	
	private String categoryName; // 操作类目名称
	
	private Integer newCategoryId; // 新类目id
	
	private String newCategoryName; // 新类目名称
	
}
