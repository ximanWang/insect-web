<!DOCTYPE html>
<#assign cortex=JspTaglibs["http://www.dianping.com/neocortex"]>
<html>
<head>
    <title>添加营业时间</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
     <script> var G_rtop=+new Date, _hip = [
    ['_setPageId', 2090233]
    ];
    </script>  
    <@cortex.facade mod="app-m-shop-poi/js/add-business-time" styles="css/add-business-time.css">
        {
        <#if updateTimes?exists>
         updateTimes:${updateTimes},
        </#if>
          shopTimeDay:"/poi/app/shop/shopTimeDay"
        }
	</@cortex.facade>

</head>
<body>
<div class="container">
    <div class="blockTitle">
        添加每周营业日
    </div>
    <div class="line">
        <span class="lineTitle">每周营业日</span>
        <span class="lineContent line_day" onclick="_hip.push(['mv', {module:'businessDay',action:'click',content:'每周营业日'}]);">周一至周日</span>
        <!--<span class="toShopType">餐饮－景点－展览馆－纪念馆</span>-->
        <i class="arrowent"></i>
    </div>
    <div class="blockTitle">
        添加营业时间
    </div>
    <div class="day">
        全天24小时
       <span class="oval oval-off" onclick="_hip.push(['mv', {module:'allday',action:'click',content:'24小时按钮'}]);">
           <span class="circle circle-off"></span>
       </span>
    </div>
    <div class="standardBord"></div>
    <div class="line line_time_block">
        <span class="lineTitle">营业时段</span>
        <span class="lineContent line_time" onclick="_hip.push(['mv', {module:'businessTime',action:'click',content:'营业时段'}]);">09:00-21:00</span>
        <!--<span class="toShopType">餐饮－景点－展览馆－纪念馆</span>-->
        <i class="arrowent"></i>
    </div>

    <div class="btnBlock">
        <a href="javascript:;" class="submitBtn to-submit" onclick="_hip.push(['mv', {module:'bussinessTimeSubmit',action:'click',content:'营业时间保存'}]);">保存</a>
    </div>

</div>
<div class="mask"></div>
<div class="pop-time-option">
    <div class="time-select">
        <div class="start">
            <p>开始时间</p>

            <div class="start-time">
                <div class="page">
                    <div class="timemark">
                        <a class="markhour"></a>
                        <a class="markminut"></a>
                    </div>
                    <div class="datescroll-datetime">
                        <div class="scroll-wrapper" id="HourwrapperBegin">
                            <div class="hour-wrapper">
                                <ul></ul>
                            </div>
                        </div>
                        <div class="scroll-wrapper" id="MinutewrapperBegin">
                            <div class="minute-wrapper">
                                <ul></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="end">
            <p>结束时间</p>

            <div class="end-time">
                <div class="page">
                    <div class="timemark">
                        <a class="markhour"></a>
                        <a class="markminut"></a>
                    </div>
                    <div class="datescroll-datetime">
                        <div class="scroll-wrapper" id="HourwrapperEnd">
                            <div class="hour-wrapper">
                                <ul></ul>
                            </div>
                        </div>
                        <div class="scroll-wrapper" id="MinutewrapperEnd">
                            <div class="minute-wrapper">
                                <ul></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="btn-box">
        <a href="javascript:;" class="btn-confirm" id="dateconfirm">确定</a>
    </div>
</div>

<input type="hidden" id="timeResult"/>
</body>
<@cortex.facadesCssPlaceHolder />
<@cortex.jsFramework inline=true />
<@cortex.facadesPlaceHolder redundant=false />
<@cortex.staticResource resources="/hls/hippo2.js" decorate="true" type="js" />
</html>