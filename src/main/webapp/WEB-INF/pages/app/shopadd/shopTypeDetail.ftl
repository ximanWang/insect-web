<!DOCTYPE html>
<#assign cortex=JspTaglibs["http://www.dianping.com/neocortex"]>
<html>
<head>
    <title>商户分类详情</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <@cortex.css resource="css/shop-type-detail.css" decorate="true" module="app-m-shop-poi" />
	<@cortex.facade mod="app-m-shop-poi/js/shop-type-detail">
	    {
	    }
	</@cortex.facade>
</head>
<body>
<div class="container">
    <div class="mainColumn col1 twoColumns">
	    <div class="scroll">
		<#list categorySecondVoList as item>
			<div class="firstClassItem" data-content="${item.categoryName}" 
				data-typeid="${item.categoryId}" data-isleaf="${item.isleaf}">
				<div class="concreteItem">${item.categoryName}</div>
	        </div>
		</#list>
		</div>
	</div>
	<div class="mainColumn col2 twoColumns">
		<div class="scroll">
	    <#list categorySecondVoList as item>
			<div class="withFirstClass">
	        <#if childCateMap?exists>
			<#list childCateMap?keys as key>
				<#if key==item.categoryId>
	            <#list childCateMap.get(key) as chitem>
	            	<div class="secClassItem" data-content="${chitem.categoryName}"
	            		data-typeid="${chitem.categoryId}" data-isleaf="${chitem.isleaf}">
	             	<#if chitem.categoryName.length()  &gt; 4>
	              		${chitem.categoryName?substring(0, 4)}...
	             	<#else>${chitem.categoryName}</#if>
	             	</div>
				</#list>
				</#if>
			</#list>
			</#if>
			</div>
		</#list>
		</div>
	</div>  
	<div class="mainColumn col3" hidden>
		<div class="scroll">
			<div class="withFirstClassAttach">
				<div class="withSecClass">
					<div class="thirdClassItem" data-content="${thirdchitem.categoryName}" 
						data-typeid="${thirdchitem.categoryId}" >
						<div class="thirdClassItemContent">${thirdchitem.categoryName}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="mainColumn col4" hidden>
		<div class="scroll">
			<div class="withFirstClassAttach">
				<div class="withSecClass">
					<div class="thirdClassItem" data-content="${thirdchitem.categoryName}" 
						data-typeid="${thirdchitem.categoryId}" >
						<div class="thirdClassItemContent">${thirdchitem.categoryName}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</body>
<@cortex.jsFramework inline=true />
<@cortex.facadesPlaceHolder redundant=false />
</html>