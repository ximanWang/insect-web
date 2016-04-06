package com.nwsuaf.insect.model;

import com.nwsuaf.insect.enums.ToastMessageType;


public class ToastMessage {
	
	private ToastMessageType type;
	
	private String body;
	
	private Object extra;

    public ToastMessage(ToastMessageType type, String body) {
		super();
		this.type = type;
		this.body = body;
	}

	public ToastMessage(ToastMessageType type, String body, Object extra) {
		super();
		this.type = type;
		this.body = body;
		this.extra = extra;
	}

	public ToastMessageType getType() {
		return type;
	}

	public void setType(ToastMessageType type) {
		this.type = type;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public Object getExtra() {
		return extra;
	}

	public void setExtra(Object extra) {
		this.extra = extra;
	}
	
}