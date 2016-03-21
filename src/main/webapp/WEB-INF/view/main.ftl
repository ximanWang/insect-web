<#assign c=JspTaglibs["http://java.sun.com/jstl/core_rt"]>
<#assign fmt=JspTaglibs["http://java.sun.com/jsp/jstl/fmt"]>
<#assign fn=JspTaglibs["http://java.sun.com/jsp/jstl/functions"]>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insect</title>

<link rel="stylesheet", href="<@c.url value='/css/bootstrap.css'/>">
<link rel="stylesheet", href="<@c.url value='/css/select2/select2.min.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/easyTree.css'/>" >
<script type="text/javascript" src="<@c.url value='/js/jquery-1.10.2.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/bootstrap.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/bootstrap.js'/>" ></script>
</head>
<body>
	<div id="wrap">
        <#include "/include/header.ftl"/>
		<div class="container">
			<div id="main"></div>
		</div>
	</div>
	<#include "/components/components.ftl" />
	<#include "/include/footer.html" />
</body>
</html>