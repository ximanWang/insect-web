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
	
	private Map condition;
	
	private Map sort;
	
	private long total;
	
	private int pageCount;
	
	private int currentPage;
	
	private static int DEFAUTL_PAGE_COUNT = 10;
	
	private static int DEFAULT_CURRENT_PAGE = 1;
	
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

