<#assign c=JspTaglibs["http://java.sun.com/jstl/core_rt"]>
<#assign fmt=JspTaglibs["http://java.sun.com/jsp/jstl/fmt"]>
<#assign fn=JspTaglibs["http://java.sun.com/jsp/jstl/functions"]>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<title>在线测试</title>

<link rel="stylesheet", href="<@c.url value='/frontcss/style-question.css'/>">


<style type="text/css">
.demo{width:760px; margin:60px auto 10px auto}
</style>
<script type="text/javascript" src="<@c.url value='/frontjs/jquery.min-test.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/frontjs/quiz.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/bootstrap.min.js'/>" ></script>


<script type="text/javascript">

function afterAjaxSuccess(jsonData) {
	alert(JSON.stringify(jsonData));
   var str= JSON.stringify(jsonData);
   var init = str;
}
//.html
$(function(){
    $.ajax({
        url:"/insect-web/printjson",
        dataType: 'JSON',
        type: 'POST',
        success: function(data) {
        	 var str= JSON.stringify(data);
        	 var init = eval('('+str+')');
              $('#quiz-container').jquizzy({
        questions: init.questions
    });
        }
    });
})
</script>
</head>

<body>

<div class="gallery-info">
				<p>     </p><br />
<br />			</div>
<div class="demo">
	<div id='quiz-container'></div>
</div>
<div>
	<a href="${rc.contextPath}/index">返回首页</a>
</div>
<div style="text-align:center;margin:50px 0; font:normal 14px/24px 'MicroSoft YaHei';">
</div>
</body>
</html>
