<!DOCTYPE html>
<#assign cortex=JspTaglibs["http://www.dianping.com/neocortex"]>
<html>
<head>
    <title>添加每周营业日</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <@cortex.jsFramework inline=true />
    <@cortex.css resource="css/pick-day.css" decorate="true" module="app-m-shop-poi" />
	<@cortex.facade mod="app-m-shop-poi/js/pick-day">
	    {
	    }
	</@cortex.facade>

</head>
<body>
<div class="container">
        <ul>
            <li class="dayItem">周一
                <span data-value="周一"></span>
            </li>
            <li class="dayItem">周二
                <span data-value="周二"></span>
            </li>
            <li class="dayItem">周三
                <span data-value="周三"></span>
            </li>
            <li class="dayItem">周四
                <span data-value="周四"></span>
            </li>
            <li class="dayItem">周五
                <span data-value="周五"></span>
            </li>
            <li class="dayItem">周六
                <span data-value="周六"></span>
            </li>
            <li class="dayItem">周日
                <span data-value="周日"></span>
            </li>
        </ul>
</div>
</body>
<@cortex.jsFramework inline=true />
<@cortex.facadesPlaceHolder redundant=false />
</html>
