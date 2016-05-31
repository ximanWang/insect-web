<#assign c=JspTaglibs["http://java.sun.com/jstl/core_rt"]>
<#assign fmt=JspTaglibs["http://java.sun.com/jsp/jstl/fmt"]>
<#assign fn=JspTaglibs["http://java.sun.com/jsp/jstl/functions"]>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="Birds Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
<title>Insect</title>

<meta name="viewport" content="width=device-width, initial-scale=1.0">


<script type="text/javascript" src="<@c.url value='/js/jquery.validate.bootstrap.popover.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/messages_cn.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/select2/select2.full.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/runtime.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/jquery-ui-1.10.4.custom.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/fullcalendar.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/toastr.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/highcharts.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/insect.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/diyUpload.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/webuploader.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/utils.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/jquery.pagination.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/template.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/bootstrap-tagsinput.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/jquery.iframe-transport.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/jquery.ui.widget.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/easyTree.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/bootstrap-datepicker.js'/>"></script>
<script type="text/javascript" src="<@c.url value='/js/bootstrap-tagsinput.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/waitMe.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/ajaxfileupload.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/bootstrap.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/bootstrap-button.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/bootstrap-modalmanager.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/bootstrap-modal.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/bootstrap-switch.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/bootstrap-filestyle.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/jquery.fileDownload.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/webuploader.js'/>" ></script>
<head></head>

<body>
<div>
	<form id="formModify" action="${rc.contextPath}/admin/index" method="post">
		
		用户名：<input id="username" type="text" name="username" /><span class="errmsg">${map.error }</span></br>
		<br />密码：<input id="password" type="password" name="password" /><br />
		<input id="submitBtn" type="submit" value="提交" onclick="login()" />
	</from>

</div>
</body>

<script type="text/javascript">
    
	function login(){
		var formData = $("#formModify").serializeObject();
		var userName = document.getElementById("username")
		if(userName.value == ""){
			alert("用户名不能为空");
		}
	}
</script>
</html>