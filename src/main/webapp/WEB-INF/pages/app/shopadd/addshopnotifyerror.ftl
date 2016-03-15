<!DOCTYPE html>
<#assign cortex=JspTaglibs["http://www.dianping.com/neocortex"]>
<html>
<head>
    <title>商户报错</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <@cortex.css resource="css/add-shop-notifyerror.css" decorate="true" module="app-m-shop-poi" />
	<@cortex.facade mod="app-m-shop-poi/js/add-shop-notifyerror">
	    {
	     parentRegionId:${shopBaseInfo.newDistrict},
	     childRegionId:${shopBaseInfo.regionId},
	     cityId:${shopBaseInfo.cityId},
	     shopId:${shopBaseInfo.shopId},
	     shopUpdate:"/poi/app/shop/ajax/shopUpdateAction",
	     shopRegion:"/poi/app/shop/shopRegion",
	     shopType:"/poi/app/shop/shopType",
	     businessTime:"/poi/app/shop/shopBusinessTime"
	    }
	</@cortex.facade>
    
</head>
<body>
<div class="container">
    <div class="basicInfo">
        <div class="line">
            名称 <input type="text" class="shopName" placeholder="输入商户名称" value="${shopBaseInfo.shopName?if_exists?html}" onclick="_hip.push(['mv', {module:'shopnameUpdate',action:'click',content:'名称报错'}]);"/>
        </div>
        <div class="line">
            <span class="typeTitle aboutTitle">地区</span>
            <span class="toDistrict titleContent ${(region!='暂未设置')?string('hasContent','')}" data-regionid="${shopBaseInfo.regionId}" data-districtId="${shopBaseInfo.newDistrict}"  onclick="_hip.push(['mv', {module:'shopregionUpdate',action:'click',content:'地区报错'}]);">${region?if_exists?html}</span>
            <i class="arrowent"></i>
        </div>
        
        <div class="line">
            <span class="addrTitle aboutTitle">地址</span>
            <input type="text" class="shopAddr" placeholder="添加商户地址" value="${shopBaseInfo.address?if_exists?html}" onclick="_hip.push(['mv', {module:'shopaddressUpdate',action:'click',content:'商户地址报错'}]);"/>
            <span class="toShopAddr titleContent">${shopBaseInfo.address?if_exists?html}</span>
        </div>
 
        <div class="line">
            <span class="typeTitle aboutTitle">类型</span>
            <span class="toShopType titleContent hasContent" data-typeid="${shopBaseInfo.categoryId}" onclick="_hip.push(['mv', {module:'shopCategoryUpdate',action:'click',content:'类型报错'}]);">${shopBaseInfo.mainCategoryURl?if_exists?html}</span>
            <!--<span class="toShopType">餐饮－景点－展览馆－纪念馆</span>-->
            <i class="arrowent"></i>
        </div>
        <!--<div class="line">
            <span class="featureTitle aboutTitle">特色</span>
            <span class="toShopFeature titleContent">选择商户特色</span>
             <i class="arrowent"></i>
        </div>-->
    </div>
    <div class="standardBord"></div>
    <div class="basicInfo">
        <div class="line">
            电话 <input type="tel" class="shopTel" value="${shopBaseInfo.phoneNo?if_exists?html}" onclick="_hip.push(['mv', {module:'shopTelUpate',action:'click',content:'电话报错'}]);"/>
        </div>
        <div class="line">
            <span class="businessTitle aboutTitle">营业时间</span>
            <span class="businessTime titleContent ${(businessTime!='暂未设置')?string('hasContent','')}" data-content="${shopBaseInfo.businessHours}" onclick="_hip.push(['mv', {module:'shopTimeUpate',action:'click',content:'营业时间报错'}]);">${businessTime?if_exists?html}</span>
            <i class="arrowent"></i>
        </div>
    </div>
  <div class="bottomFill"></div>
  <div class="btnBlock">
        <a href="javascript:;" class="submitBtn to-submit" onclick="_hip.push(['mv', {module:'shopUpateSubmit',action:'click',content:'商户报错提交按钮'}]);">提交</a>
    </div>
 </div>
</body>
<@cortex.jsFramework inline=true />
<@cortex.facadesPlaceHolder redundant=false />
<@cortex.staticResource resources="/hls/hippo2.js" decorate="true" type="js" />
</html>
