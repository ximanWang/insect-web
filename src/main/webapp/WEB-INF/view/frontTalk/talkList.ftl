<#assign c=JspTaglibs["http://java.sun.com/jstl/core_rt"]>
<#assign fmt=JspTaglibs["http://java.sun.com/jsp/jstl/fmt"]>
<#assign fn=JspTaglibs["http://java.sun.com/jsp/jstl/functions"]>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insect</title>

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet", href="<@c.url value='/frontcss/bootstrap.css'/>">
<link rel="stylesheet", href="<@c.url value='/frontcss/style.css'/>" >
<link href='http://fonts.useso.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,800,700,600' rel='stylesheet' type='text/css'>
<link href='http://fonts.useso.com/css?family=Poiret+One' rel='stylesheet' type='text/css'>

<link rel="stylesheet", href="<@c.url value='/css/jq/jquery-ui-1.10.4.custom.min.css'/>">
<link rel="stylesheet", href="<@c.url value='/css/bootstrap.css'/>">
<link rel="stylesheet", href="<@c.url value='/css/diyUpload.css'/>">
<link rel="stylesheet", href="<@c.url value='/css/webuploader.css'/>">
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

<script type="text/javascript" src="<@c.url value='/frontjs/jquery.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/jquery.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/jquery-1.11.2.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/jquery.validate.min.js'/>" ></script>
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
<script type="text/javascript" src="<@c.url value='/js/bootstrap-select.min.js'/>" ></script>
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
<script type="text/javascript" >
$(function() {
	insect.template.setup({contextPath : "${rc.contextPath}/css"});
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
	<div class="banner about-banner">
			<div class="banner-grids">
				<div class="banner-grid-left">
					<div class="header-logo">
						<a href="index.html"><img src="images/logo.png" alt="" /></a>
					</div>
					<div class="top-nav">
							<ul class="cl-effect-1">
								<li><a href="index">主页</a></li>                                             
								<li><a href='javascript:insect.template.renderTemplateByKey("insectSearch.list")'>昆虫树展示</a></li>
								<li><a href='javascript:insect.template.renderTemplateByKey("insectSearch.list")'>害虫类目树展示</a></li> 
								<li><a href='javascript:insect.template.renderTemplateByKey("insectSearch.list")'>昆虫查询</a></li>   
								<li><a href='javascript:insect.template.renderTemplateByKey("insectSearch.list")'>有问必答</a></li>     
							</ul>
					</div>
				</div>
				<div class="banner-grid-info">
					<div class="social-icons">
						<ul>
							<li><a href="#" class="facebook"></a></li>
							<li><a href="#" class="facebook twitter"></a></li>
							<li><a href="#" class="facebook dribble"></a></li>
						</ul>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
	</div>
	<!-- blog -->
	<div class="blog">
		<!-- container -->
		<div class="container">
			<div class="col-md-9 blog-grids">
				<h4>问题列表</h4>
				<div class="single-reply">					
					<input type="text"  value="问题问题问题问题问题问题1">					
					<textarea value="">回答回答回答回答回答回答回答回答回答回答回答回答回答1</textarea>
				</div>	
				<div class="single-reply">					
					<input type="text"  value="问题问题问题问题问题问题3">					
					<textarea value="">回答回答回答回答回答回答回答回答回答回答回答回答回答2</textarea>
				</div>
				<div class="single-reply">					
					<input type="text"  value="问题问题问题问题问题问题3">					
					<textarea value="">回答回答回答回答回答回答回答回答回答回答回答回答回答3</textarea>
				</div>				
				<div class="single-reply">
					<h4>提问</h4>
					<form>
						<input type="text" placeholder="姓名" required="">
						<input class="name" type="text" placeholder="联系邮箱" required="">
						<textarea placeholder="提问内容" required=""></textarea>
						<input type="submit" value="SEND">
					</form>
				</div>
			</div>
			
			<div class="clearfix"> </div>
		</div>
		<!-- //container -->
	</div>
	<!-- //blog -->

	
</body>
</html>