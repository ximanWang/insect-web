package com.nwsuaf.insect.dto;

import java.io.Serializable;
import java.util.Map;

import lombok.Data;
/**
 * 分页信息封装对象
 * @author ximan
 *
 */
@Data
@SuppressWarnings("rawtypes")
public class Pagination implements Serializable{
	
	private Map condition; // 查询条件
	
	private Map sort; 
	
	private long total; // 总条数
	
	private int pageCount; // 显示条数
	
	private int currentPage; // 当前页
	
	private static int DEFAUTL_PAGE_COUNT = 10; // 默认显示条数
	
	private static int DEFAULT_CURRENT_PAGE = 1; // 默认当前页
	
	public int getCurrentPage() {
		if(currentPage <= 0) {
			return DEFAULT_CURRENT_PAGE;
		}
		return currentPage;
	}
	
	public int getPageCount() {
		if(pageCount <= 0) {
			return DEFAUTL_PAGE_COUNT;
		}
		return pageCount;
	}

	@Override
	public String toString() {
		return "Pagination [condition=" + condition + ", sort=" + sort
				+ ", total=" + total + ", pageCount=" + pageCount
				+ ", currentPage=" + currentPage + "]";
	}

}

