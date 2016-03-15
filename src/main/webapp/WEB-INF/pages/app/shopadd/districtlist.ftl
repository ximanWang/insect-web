<!DOCTYPE html>
<#assign cortex=JspTaglibs["http://www.dianping.com/neocortex"]>
<html>
<head>
    <title>地域列表</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <@cortex.css resource="css/district-list.css" decorate="true" module="app-m-shop-poi" />
	<@cortex.facade mod="app-m-shop-poi/js/district-list">
	    {
	    
	    }
	</@cortex.facade>

</head>
<body>
<div class="container">
    <div class="mainColumn">
        <#list regionslist as item>
        <div class="firstClass" data-content="${item.regionName}" data-regionid="${item.regionId}" data-isleaf="${item.isleaf}">${item.regionName}</div>
        </#list>
    </div>
    <div class="mainColumn">
      <#list regionslist as item>
        <div class="withFirstClass">
          <#if businessDistrictMap?exists>
       <#list businessDistrictMap?keys as key>
           <#if key==item.regionId>
             <#list businessDistrictMap.get(key) as chitem>
            <div class="secClassItem" data-content="${chitem.regionName}" data-regionid="${chitem.regionId}">${chitem.regionName}</div>
          </#list>
           </#if>
            </#list>
              </#if>
           </div>
       </#list>
       </div>
</div>
</body>
<@cortex.jsFramework inline=true />
<@cortex.facadesPlaceHolder redundant=false />
</html>