<!DOCTYPE html>
<#assign cortex=JspTaglibs["http://www.dianping.com/neocortex"]>
<html>
<head>
    <title>商户分类</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <@cortex.css resource="css/shop-type.css" decorate="true" module="app-m-shop-poi" />
	<@cortex.facade mod="app-m-shop-poi/js/shop-type">
	    {
	      isBackCate: ${isBackCate},
	      shopTypeDetail:"/poi/app/shop/shopTypeDetail",
	      getSubCates: "/poi/app/shop/ajax/getSubCates"
	    }
	</@cortex.facade>

</head>
<body>
<div class="container">
	<#if normCategoryoList?exists>
	    <div class="typeBlock reccomandType">
	        <div class="blockTitle">推荐类型</div>
			<#list normCategoryoList as item>
				<div class="typeItem" data-typeid="${item.categoryId}">
	          		${item.itemName}
	            	<i class="radio"></i>
	        	</div>
	        </#list>
		</div>
		<div class="typeBlock allTypes">
	        <div class="blockTitle">全部类型</div>
	    </div>
    </#if>
    <div id="shop-type-col1" class="mainColumn twoColumns">
        <div class="scroll" id="scroller">
        	<#list categoryLevel1List as item>
        		<div class="firstClassItem" data-content="${item.categoryName}"
        			data-typeid="${item.categoryId}" data-isleaf="${item.isleaf}">
	                <div class="concreteItem">
	                	${item.categoryName}<#if !item.isleaf><i class="arrowent"></i></#if>
	                </div>
	            </div>
        	</#list>
        </div>
    </div>
	<div id="shop-type-col2" class="mainColumn twoColumns">
        <div class="scroll" id="scroller">
        	<#list categoryLevel1List as item>
        		<div class="withFirstClass">
        			<#if childCateMap?exists>
					<#list childCateMap?keys as key>
						<#if key==item.categoryId>
			            <#list childCateMap.get(key) as chitem>
			            	<div class="secClassItem" data-content="${chitem.categoryName}"
			            		data-typeid="${chitem.categoryId}" data-isleaf="${chitem.isleaf}">
			                    <div class="concreteItem">
									<#if chitem.categoryName.length()  &gt; 4>
					              		${chitem.categoryName?substring(0, 4)}...
					             	<#else>${chitem.categoryName}</#if>
					             	<#if !item.isleaf><i class="arrowent"></i></#if>
					             </div>
			                </div>
			            </#list>
			           	</#if>
			        </#list>
			       	</#if>
        		</div>
        	</#list>
        </div>
    </div>
	<div id="shop-type-col3" class="mainColumn">
        <div class="scroll" id="scroller">
            <div class="withSecClass"></div>
        </div>
    </div>
    <div id="shop-type-col4" class="mainColumn">
        <div class="scroll" id="scroller">
            <div class="withThirdClass"></div>
        </div>
    </div>
</div>
</body>
 <@cortex.jsFramework inline=true />
 <@cortex.facadesPlaceHolder redundant=false />
</html>