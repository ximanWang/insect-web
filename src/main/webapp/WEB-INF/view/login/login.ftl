<#assign c=JspTaglibs["http://java.sun.com/jstl/core_rt"]>
<#assign fmt=JspTaglibs["http://java.sun.com/jsp/jstl/fmt"]>
<#assign fn=JspTaglibs["http://java.sun.com/jsp/jstl/functions"]>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>登陆</title>

<link rel="stylesheet", href="<@c.url value='/css/style-login.css'/>">
<script type="text/javascript" src="<@c.url value='/js/jquery.min-login.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/common.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/supersized.3.2.7.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/supersized-init.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/jquery.validate-login.min.js?var1.14.0'/>" ></script>
<body>

<div class="login-container">
	<div class="connect" align="center">
		秦岭昆虫 数据库信息管理平台
	</div>
	
	<form action="${rc.contextPath}/admin/index" method="post" id="loginForm">
		<div>
			<input type="text" name="username" class="username" placeholder="用户名" autocomplete="off"/>
		</div><span class="errmsg" style="color:red">${map.error }</span></br>
		<div>
			<input type="password" name="password" class="password" placeholder="密&nbsp;&nbsp;码" oncontextmenu="return false" onpaste="return false" />
		</div>
		
		<div>
			<button id="submit" type="submit">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
		</div>
	
	</form>



</div>


</body>
</html>