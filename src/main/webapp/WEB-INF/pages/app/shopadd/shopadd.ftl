<!DOCTYPE html>
<#setting number_format="#">
<#assign cortex=JspTaglibs["http://www.dianping.com/neocortex"]>
<html>
<head>
    <title>添加商户</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0"> 
     <script> var G_rtop=+new Date, _hip = [
    ['_setPageId', 2090233]
    ];
    </script>   
    <@cortex.facade mod="app-m-shop-poi/js/add-shop" styles="css/add-shop.css">
	    {  
	       <#if groupId?exists && groupId!=0>
           groupId:${groupId},
	       categoryId:${shopDTO.mainCategoryId},
	       cityId:${shopDTO.cityId},
           </#if>
	       shopType:"/poi/app/shop/shopType",
           shopMap:"/poi/app/shop/shopMap",
           shopAdd:"/poi/app/shop/ajax/shopAddAction",
           useType:"/poi/app/shop/ajax/updateShopStatus",
           addShopExtra:"/poi/app/shop/addShopExtra"
	    }
	</@cortex.facade>
	<@cortex.facadesCssPlaceHolder />
	
</head>
<body>
<div class="container">
    <div class="basicInfo">
        <div class="line">
            名称 <input type="text" class="shopName" placeholder="输入商户名称" value="${shopName?if_exists?html}" onclick="_hip.push(['mv', {module:'shopName',action:'click',content:'商户名'}]);"/>
        </div>
       <!-- <div class="line">
            <span class="typeTitle aboutTitle">城市</span>
            <span class="toShopCity titleContent">选择商户城市</span>
            <i class="arrowent"></i>
        </div>-->
        <div class="line">
            <span class="addrTitle aboutTitle">地址</span>
            <input type="text" class="shopAddr" placeholder="添加商户地址" onclick="_hip.push(['mv', {module:'shopAddr',action:'click',content:'地址'}]);" />
            <span class="toShopAddr titleContent"></span>
            <div class="locator" onclick="_hip.push(['mv', {module:'shopMapButton',action:'click',content:'地图按钮'}]);" >定位</div>
        </div>
        <div class="line">
            <span class="typeTitle aboutTitle">类型</span>
            <span class="toShopType titleContent ${(mainCategoryURl!=null)?string('hasContent','')}" onclick="_hip.push(['mv', {module:'category',action:'click',content:'类型'}]);">${mainCategoryURl?default('选择商户类型')}</span>
            <i class="arrowent"></i>
        </div>
       <!-- <div class="line">
            <span class="featureTitle aboutTitle">特色</span>
            <span class="toShopFeature titleContent">选择商户特色</span>
            <i class="arrowent"></i>
        </div>-->
    </div>
    <div class="standardBord"></div>
   <!-- <div class="standardBord"></div>
    <div class="upload-pic-box">
        <div class="pic-list">
             <ul id="dpappUl">
                <li id="J_upload" class="image-icon" data-bind="add-image-btn"></li>
            </ul>
            <div class="describe">
                <span class="main">上传图片</span>
                <span class="sub">至少要上传一张图片哟!</span>
            </div>
        </div>
    </div>-->
  <div class="bottomFill"></div>
  <div class="btnBlock">
        <a href="javascript:;" class="submitBtn to-submit" onclick="_hip.push(['mv', {module:'shopaddSubmit',action:'click',content:'添加商户'}]);">提交</a>
    </div>
</div>
<div class="mask"></div>
</body>
 <@cortex.jsFramework inline=true />
 <@cortex.facadesPlaceHolder redundant=false />
 <@cortex.staticResource resources="/hls/hippo2.js" decorate="true" type="js" />
</html>
