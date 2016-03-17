package com.nwsuaf.insect.exception;


/**
 * 
 * @author ximan
 * 项目自定义异常
 */
public class InsectException extends RuntimeException{
	
	private static final long serialVersionUID = 1L;
	private String errMsg;
	
	public InsectException(String errMsg){
		super(errMsg);
		this.errMsg = errMsg;
	}

	public String getErrMsg() {
		return errMsg;
	}

	public void setErrMsg(String errMsg) {
		this.errMsg = errMsg;
	}
	
}
