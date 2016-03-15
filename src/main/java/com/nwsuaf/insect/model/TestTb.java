package com.nwsuaf.insect.model;

import org.apache.ibatis.type.Alias;

import lombok.Getter;
import lombok.Setter;

@Alias("TestTb")
public class TestTb {
	
	@Getter
	@Setter
	private int id;
	@Getter
	@Setter
	private String name;
	@Getter
	@Setter
	private String birthday;
}
