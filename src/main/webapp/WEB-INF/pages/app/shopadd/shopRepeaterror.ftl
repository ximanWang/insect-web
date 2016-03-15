<!DOCTYPE html>
<#assign cortex=JspTaglibs["http://www.dianping.com/neocortex"]>
<html>
<head>
    <title>商户重复报错</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<@cortex.facade mod="app-m-shop-poi/js/shop-repeaterror" styles="/css/shop-repeaterror.css">
	    {
	     shopUpdate:"/poi/app/shop/ajax/shopUpdateAction"
	    }
	</@cortex.facade>
	<@cortex.facadesCssPlaceHolder />
</head>

<body>
<div class="container">
    <div class="baseObj">
        <img src="${shopDTO.defaultPic?if_exists?html}" width="90px" height="65px"/>
        <div class="baseName">${shopDTO.shopName?if_exists?html}</div>
        <div class="baseAddr">${shopDTO.address?if_exists?html}</div>
        <div class="baseDistrict">${shopDTO.mainRegionName?if_exists?html}</div>
        <div class="baseSecClass">${shopDTO.mainCategoryName?if_exists?html}</div>
    </div>
  <#if matchShopDTOList?exists>
     <div class="similarObj">
        <div class="similarTitle">
         请选择与“${shopDTO.shopName?if_exists?html}”重复的商户
         </br>
         (推荐的都不对？可以直接进行提交哦。)
         </div>
        <div class="similarShops">
           <#list matchShopDTOList as matchShop>
            <div class="similarShop">
                <span class=""></span>
                <div class="similarItem" data-shopid="${matchShop.shopId}" >
                    <img src="${matchShop.defaultPic}" width="65px" height="65px"/>
                    <div class="baseName">${matchShop.shopName?if_exists?html}</div>
                    <div class="baseAddr">${matchShop.address?if_exists?html}</div>
                    <div class="baseDistrict">${matchShop.mainRegionName?if_exists?html}</div>
                    <div class="baseSecClass">${matchShop.mainCategoryName?if_exists?html}</div>
                </div>
            </div>
            </#list>  
        </div>
       <!-- <div class="otherShop">
            其他商户
            <i class="arrowent"></i>
        </div> -->

    </div>
    <#else>
    <div class="noShop">
        没有发现重复呢！
        </br>
        算法小哥在跪键盘，直接提交进行打脸。
    </div>
     </#if> 
    <div class="btnBlock">
        <a href="javascript:;" class="submitBtn to-submit">提交</a>
    </div>
</div>
</body>
 <@cortex.jsFramework inline=true />
 <@cortex.facadesPlaceHolder redundant=false />
</html>
