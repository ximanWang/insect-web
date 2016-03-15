<!DOCTYPE html>
<#assign cortex=JspTaglibs["http://www.dianping.com/neocortex"]>
<html>
<head>
    <title>商户特色</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <@cortex.css resource="css/shop-feature.css" decorate="true" module="app-m-shop-poi" />
	<@cortex.facade mod="app-m-shop-poi/js/shop-feature">
	    {
	    }
	</@cortex.facade>

</head>

<body>
<div class="container">
  <#if propertyVoMap?exists>
       <#list propertyVoMap?keys as key>
       <#assign propValueList = propertyVoMap.get(key).propertyValuelist />
       <#if (propValueList?exists) && (propValueList?size>0) >
    <div class="mainBlock">
         <div class="blockTitle">
           ${propertyVoMap.get(key).propName}
            <i class="promodown promo"></i>
        </div>
        <div class="blockContent radioPick">
          <#list propValueList as childrenitem>
            <div class="concreteContent">
               ${childrenitem.propValueName}
            </div>
            </#list>
        </div>
    </div>
        <div class="standardBord"></div>
        </#if>
     </#list>
  </#if>
</div>
</body>
 <@cortex.jsFramework inline=true />
 <@cortex.facadesPlaceHolder redundant=false />
</html>
