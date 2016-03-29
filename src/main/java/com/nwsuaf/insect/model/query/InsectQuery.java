package com.nwsuaf.insect.model.query;

import lombok.Data;

@Data
public class InsectQuery {
	
	private Integer id;

    private String chineseName;

    private String englishName;

    private String lationName;

    private String alias;

    private String nuName;
    
    private String muLaName;
    
    private String keName;
    
    private String keLaName;
    
    private String shuName;
    
    private String shuLaName;

    private Integer isPest;

    private String pestName;
    
    private String pestDetail;

    private String host;

    private String distribution;

    private String gatherPlace;

    private String features;

}
