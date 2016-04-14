package com.nwsuaf.insect.model;

import lombok.Data;

@Data
public class Insect {
	private Integer id;

    private String chineseName;

    private String englishName;

    private String lationName;

    private String alias;

    private Integer categoryId;

    private Integer isPest;

    private Integer pestcateId;

    private String host;

    private String distribution;

    private String gatherPlace;

    private String features;

}