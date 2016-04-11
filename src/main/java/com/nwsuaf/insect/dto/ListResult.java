package com.nwsuaf.insect.dto;

import java.util.List;

/**
 * 查询结果封装
 * @author ximan
 *
 */
public class ListResult<T> {
		
	private List<T> result;
	
	private long totalItem;
	
	public ListResult(List<T> result, long totalItem){
		super();
		this.result = result;
		this.totalItem = totalItem;
	}

	public List<?> getResult() {
		return result;
	}

	public void setResult(List<T> result) {
		this.result = result;
	}

	public long getTotalItem() {
		return totalItem;
	}

	public void setTotalItem(long totalItem) {
		this.totalItem = totalItem;
	}

	@Override
	public String toString() {
		return "ListResult [result=" + result + ", totalItem=" + totalItem + "]";
	}
	
}
