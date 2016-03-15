<!DOCTYPE html>
<#assign cortex=JspTaglibs["http://www.dianping.com/neocortex"]>
<html>
<head>
    <title>商户报错类型</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
     <script> var G_rtop=+new Date, _hip = [
    ['_setPageId', 2090233]
    ];
    </script>  
	<@cortex.facade mod="app-m-shop-poi/js/notify-error" styles="/css/notify-error.css">
	    {
	     shopId:${shopId},
	     shopUpdate:"/poi/app/shop/ajax/shopUpdateAction",
	     updateShopMap:"/poi/app/shop/updateShopMap",
	     updateShopInfo:"/poi/app/shop/updateShopInfo",
	     updateShopRepeat:"/poi/app/shop/updateShopRepeat"
	    }
	</@cortex.facade>
	<@cortex.facadesCssPlaceHolder />
</head>

<body>
<div class="container">
    <#if businessStatus==1>
    <a class="row shopClosed" onclick="_hip.push(['mv', {module:'shopClose',action:'click',content:'商户关闭'}]);">商户已关<i class="arrowent"></i></a>
     <#else>
    <a class="row shopOpen" onclick="_hip.push(['mv', {module:'shopOpen',action:'click',content:'商户正常营业'}]);">商户正常营业<i class="arrowent"></i></a>
    </#if>
    <a class="row shopDuplicate" onclick="_hip.push(['mv', {module:'shopDuplicate',action:'click',content:'商户重复'}]);">商户重复<i class="arrowent"></i></a>
    <a class="row shopMap" onclick="_hip.push(['mv', {module:'shopUpdateMap',action:'click',content:'商户地图错误'}]);">地图位置错误<i class="arrowent"></i></a>
    <a class="row shopInfo" onclick="_hip.push(['mv', {module:'shopUpdate',action:'click',content:'商户信息错误'}]);">商户信息错误<i class="arrowent"></i></a>
</div>
 
</body>
 <@cortex.jsFramework inline=true />
 <@cortex.facadesPlaceHolder redundant=false />
 <@cortex.staticResource resources="/hls/hippo2.js" decorate="true" type="js" />
</html>
