package com.nwsuaf.insect.model;

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

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getChineseName() {
        return chineseName;
    }

    public void setChineseName(String chineseName) {
        this.chineseName = chineseName == null ? null : chineseName.trim();
    }

    public String getEnglishName() {
        return englishName;
    }

    public void setEnglishName(String englishName) {
        this.englishName = englishName == null ? null : englishName.trim();
    }

    public String getLationName() {
        return lationName;
    }

    public void setLationName(String lationName) {
        this.lationName = lationName == null ? null : lationName.trim();
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias == null ? null : alias.trim();
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    public Integer getIsPest() {
        return isPest;
    }

    public void setIsPest(Integer isPest) {
        this.isPest = isPest;
    }

    public Integer getPestcateId() {
        return pestcateId;
    }

    public void setPestcateId(Integer pestcateId) {
        this.pestcateId = pestcateId;
    }

    public String getHost() {
        return host;
    }

    public void setHost(String host) {
        this.host = host == null ? null : host.trim();
    }

    public String getDistribution() {
        return distribution;
    }

    public void setDistribution(String distribution) {
        this.distribution = distribution == null ? null : distribution.trim();
    }

    public String getGatherPlace() {
        return gatherPlace;
    }

    public void setGatherPlace(String gatherPlace) {
        this.gatherPlace = gatherPlace == null ? null : gatherPlace.trim();
    }

    public String getFeatures() {
        return features;
    }

    public void setFeatures(String features) {
        this.features = features == null ? null : features.trim();
    }
}