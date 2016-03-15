<!DOCTYPE html>
<#setting number_format="#">
<#assign cortex=JspTaglibs["http://www.dianping.com/neocortex"]>
<html>
<head>
    <title>地图位置报错</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
     <script> var G_rtop=+new Date, _hip = [
    ['_setPageId', 2090233]
    ];
    </script>
    <@cortex.css resource="css/shop-map.css" decorate="true" module="app-m-shop-poi" />
	<script charset="utf-8" src="http://map.qq.com/api/js?v=2.exp&libraries=convertor"></script>
	<@cortex.facade mod="app-m-shop-poi/js/shop-map-notifyerror">
	    {
	    shopId:${shopId},
	    glat:${shopBaseInfo.glat?if_exists?string("0.##########")},
        glng:${shopBaseInfo.glng?if_exists?string("0.##########")},
        newGlat:${newGlat?if_exists?string("0.##########")},
        newGlng:${newGlng?if_exists?string("0.##########")},
        coordType:"${shopBaseInfo.coordType?if_exists?string}",
	    shopUpdate:"/poi/app/shop/ajax/shopUpdateAction"    
	    }
	</@cortex.facade>
</head>

<body>
    <div class="myLocation"></div>
    <div id="container"></div>
    <div class="showLoc"></div>
    <div class="submitMap" onclick="_hip.push(['mv', {module:'shopMapUpateSubmit',action:'click',content:'地图报错提交按钮'}]);">提交</div>
</body>
<@cortex.jsFramework inline=true />
<@cortex.facadesPlaceHolder redundant=false />
<@cortex.staticResource resources="/hls/hippo2.js" decorate="true" type="js" />
</html>