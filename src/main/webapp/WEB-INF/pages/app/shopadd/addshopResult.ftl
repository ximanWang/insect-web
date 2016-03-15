<!DOCTYPE html>
<#assign cortex=JspTaglibs["http://www.dianping.com/neocortex"]>
<html>
<head>
    <title>商户添加成功</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <@cortex.css resource="css/add-shop-result.css" decorate="true" module="app-m-shop-poi" />
	<@cortex.facade mod="app-m-shop-poi/js/add-shop-result">
	    {
	    }
	</@cortex.facade>
</head>

<body>
<div class="container result-success">

    <div class="add-success-container">
        <div class="add-success-icon"></div>
        <div class="add-success-describe">
            恭喜您！已成功添加新商户！
        </div>
    </div>
    <div class="btnBlock">
    <a href="javascript:;" class="submitBtn">查看商户详情</a>
    </div>
</div>
<#if isShowFood!="true" >
<a class="line" href="${eurl}shopclaim/app/dpappshopclaim?product=dpapp">
    如果您是商家，请下载点评管家APP管理商户信息
    <i class="arrowent"></i>
</a>
</#if>
</body>
<@cortex.jsFramework inline=true />
<@cortex.facadesPlaceHolder redundant=false />
<@cortex.staticResource resources="/hls/hippo2.js" decorate="true" type="js" />
</html>
