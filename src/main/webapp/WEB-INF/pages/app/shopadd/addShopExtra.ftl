<!DOCTYPE html>
<#setting number_format="#">
<#assign cortex=JspTaglibs["http://www.dianping.com/neocortex"]>
<html>
<head>
    <title>完善商户信息</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0"> 
     <script> var G_rtop=+new Date, _hip = [
    ['_setPageId', 2090233]
    ];
    </script>   
    <@cortex.facade mod="app-m-shop-poi/js/add-shop-extra" styles="css/add-shop-extra.css">
	    {  
	       shopId:${shopId!""},
           businessTime:"/poi/app/shop/shopBusinessTime",
           updateShopExtra:"/poi/app/shop/ajax/updateShopExtra",
           addShopSuccess:"/poi/app/shop/addShopSuccess"
	    }
	</@cortex.facade>
	<@cortex.facadesCssPlaceHolder />
</head>
<body>
<div class="container">
    <div class="blockInfo">
        提交成功，您可以继续完善商户信息！
    </div>
    <div class="basicInfo">
        <div class="line">
            商户电话<input type="tel" class="shopTel" value="" placeholder="输入商户电话"/>
        </div>
        <div class="line">
            <span class="businessTitle aboutTitle">营业时间</span>
            <span class="businessTime titleContent">添加营业时间</span>
            <i class="arrowent"></i>
        </div>
    </div>
    <div class="upload-item J_photo_box">
        <a href="javascript:;" class="img-item add-image J_add_btn"><i class="icon-add"></i></a>
        <div class="tips img-item">上传照片</div>
    </div>
    <div class="bottomFill"></div>
    <div class="btnBlock">
        <a href="javascript:;" class="submitBtn to-submit">完成</a>
    </div>
</div>
<div class="mask"></div>
</body>
 <@cortex.jsFramework inline=true />
 <@cortex.facadesPlaceHolder redundant=false />
 <@cortex.staticResource resources="/hls/hippo2.js" decorate="true" type="js" />
</html>