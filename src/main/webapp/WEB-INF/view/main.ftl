<#assign c=JspTaglibs["http://java.sun.com/jstl/core_rt"]>
<#assign fmt=JspTaglibs["http://java.sun.com/jsp/jstl/fmt"]>
<#assign fn=JspTaglibs["http://java.sun.com/jsp/jstl/functions"]>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insect</title>

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet", href="<@c.url value='/css/jq/jquery-ui-1.10.4.custom.min.css'/>">
<link rel="stylesheet", href="<@c.url value='/css/bootstrap.css'/>">
<link rel="stylesheet", href="<@c.url value='/font-css/fontello.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/select2/select2.min.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/style.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/fullcalendar.css'/>" >
<link href="<@c.url value='/css/fullcalendar.print.css'/>", rel="stylesheet", media="print" />
<link rel="stylesheet", href="<@c.url value='/css/bootstrap-modal-bs3patch.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/bootstrap-modal.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/bootstrap-switch.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/bootstrap-tagsinput.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/toastr.min.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/pagination.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/bootstrap-tagsinput.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/datepicker.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/easyTree.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/waitMe.min.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/finalstyle.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/picturestyle.css'/>" >

<script type="text/javascript" src="<@c.url value='/js/jquery-1.11.2.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/jquery.validate.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/messages_cn.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/jquery.validate.bootstrap.popover.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/select2/select2.full.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/runtime.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/jquery-ui-1.10.4.custom.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/fullcalendar.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/toastr.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/highcharts.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/insect.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/utils.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/jquery.pagination.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/template.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/bootstrap-tagsinput.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/jquery.fileupload.js'/>" ></script>
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
<script type="text/javascript">
$(function() {
	insect.template.setup({contextPath : "${rc.contextPath}"});
    $('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).show();
      $(this).addClass('open');
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).hide();
      $(this).removeClass('open');
    });
});
</script>
</head>
<body>
	<div id="wrap">
        <#include "/include/header.ftl"/>
		<div class="container">
			<div id="main"></div>
		</div>
	</div>

</body>
</html>