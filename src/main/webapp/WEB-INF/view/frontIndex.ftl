<#assign c=JspTaglibs["http://java.sun.com/jstl/core_rt"]>
<#assign fmt=JspTaglibs["http://java.sun.com/jsp/jstl/fmt"]>
<#assign fn=JspTaglibs["http://java.sun.com/jsp/jstl/functions"]>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insect</title>

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet", href="<@c.url value='/frontcss/bootstrap.css'/>">
<link rel="stylesheet", href="<@c.url value='/frontcss/style.css'/>" >
<link rel="stylesheet", href="<@c.url value='/frontcss/swipebox.css'/>" >
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
<script type="text/javascript" src="<@c.url value='/js/bootstrap-tagsinput.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/jquery.iframe-transport.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/jquery.ui.widget.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/easyTree-user.js'/>" ></script>
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

<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>

<script type="text/javascript" src="<@c.url value='/frontjs/jquery.swipebox.min.js'/>" ></script> 

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
    $(".swipebox").swipebox();
});
</script>
</head>
<body>
	<#include "/include/frontheader.ftl"/>
    <#include "/include/fheader.ftl"/>
		<!-- container -->
		<div class="container">

        <div class="row">
            <div class="divider divider-default"></div>
        </div>

    </div>
			<div class="gallery-info">
				<h3>最新图片展</h3>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,galley of type and scrambled it to make a type specimen book.</p>
			</div>
			<div class="portfolio-mian">
			
					<div class="portfolio-top">
								<div class="col-md-3 port-1-left">
									<div class="portfolio app mix_all" data-cat="app" style="display: inline-block; opacity: 1;">
										<div class="portfolio-wrapper ">		
											<a href="frontimage/port-11.jpg" class="b-link-stripe b-animate-go  swipebox" title="">
										     <img src="frontimage/port-11.jpg"><div class="b-wrapper"><h2 class="b-animate b-from-left prt-1  b-delay03 ">白纷舟蛾</h2>
										  	 </div></a>
										</div>
									</div>
									<div class="portfolio app mix_all" data-cat="app" style="display: inline-block; opacity: 1;">
										<div class="portfolio-wrapper p-5">		
											<a href="frontimage/port-22.jpg" class="b-link-stripe b-animate-go  swipebox" title="">
										     <img src="frontimage/port-22.jpg"><div class="b-wrapper"><h2 class="b-animate b-from-left  prt-2  b-delay03 ">牧鹿蛾</h2>
										  	 </div></a>
			                			</div>
			                		</div>
									<div class="portfolio app mix_all" data-cat="app" style="display: inline-block; opacity: 1;">
										<div class="portfolio-wrapper p-5">		
											<a href="frontimage/port-33.jpg" class="b-link-stripe b-animate-go  swipebox" title="">
										     <img src="frontimage/port-33.jpg"><div class="b-wrapper"><h2 class="b-animate b-from-left  prt-2  b-delay03 ">四斑露尾甲</h2>
										  	 </div></a>
			                			</div>
			                		</div>
									<div class="portfolio app mix_all" data-cat="app" style="display: inline-block; opacity: 1;">
										<div class="portfolio-wrapper p-5">		
											<a href="frontimage/port-44.jpg" class="b-link-stripe b-animate-go  swipebox" title="">
										     <img src="frontimage/port-44.jpg"><div class="b-wrapper"><h2 class="b-animate b-from-left  prt-2  b-delay03 ">楔斑拟灯蛾</h2>
										  	 </div></a>
			                			</div>
			                		</div>
								</div>
								<div class="col-md-3 port-1-right">
									<div class="portfolio app mix_all" data-cat="app" style="display: inline-block; opacity: 1;">
										<div class="portfolio-wrapper">		
											<a href="frontimage/port-55.jpg" class="b-link-stripe b-animate-go   swipebox" title="">
										     <img src="frontimage/port-55.jpg"><div class="b-wrapper"><h2 class="b-animate b-from-left prt-3   b-delay03 ">雅蜉金龟</h2>
										  	 </div></a>
			                			</div>
			                		</div>
									<div class="portfolio app mix_all" data-cat="app" style="display: inline-block; opacity: 1;">
										<div class="portfolio-wrapper p-5">		
											<a href="frontimage/port-66.jpg" class="b-link-stripe b-animate-go   swipebox" title="">
										     <img src="frontimage/port-66.jpg"><div class="b-wrapper"><h2 class="b-animate b-from-left prt-3   b-delay03 ">雅蜉金龟</h2>
										  	 </div></a>
			                			</div>
			                		</div>
									<div class="portfolio app mix_all" data-cat="app" style="display: inline-block; opacity: 1;">
										<div class="portfolio-wrapper p-5">		
											<a href="frontimage/port-77.jpg" class="b-link-stripe b-animate-go   swipebox" title="">
										     <img src="frontimage/port-77.jpg"><div class="b-wrapper"><h2 class="b-animate b-from-left prt-3   b-delay03 ">竹缕舟蛾</h2>
										  	 </div></a>
			                			</div>
			                		</div>
									<div class="portfolio app mix_all" data-cat="app" style="display: inline-block; opacity: 1;">
										<div class="portfolio-wrapper p-5">		
											<a href="frontimage/port-88.jpg" class="b-link-stripe b-animate-go   swipebox" title="">
										     <img src="frontimage/port-88.jpg"><div class="b-wrapper"><h2 class="b-animate b-from-left prt-3   b-delay03 ">著内斑舟蛾</h2>
										  	 </div></a>
			                			</div>
			                		</div>
								</div>
								<div class="col-md-3 portfolio-right">
									<div class="portfolio app mix_all" data-cat="app" style="display: inline-block; opacity: 1;">
										<div class="portfolio-wrapper p-5">		
											<a href="frontimage/port-33.jpg" class="b-link-stripe b-animate-go  swipebox" title="">
										     <img src="frontimage/port-33.jpg"><div class="b-wrapper"><h2 class="b-animate b-from-left  prt-2  b-delay03 ">四斑露尾甲</h2>
										  	 </div></a>
			                			</div>
			                		</div>
									<div class="portfolio app mix_all" data-cat="app" style="display: inline-block; opacity: 1;">
										<div class="portfolio-wrapper p-5">		
											<a href="frontimage/port-44.jpg" class="b-link-stripe b-animate-go  swipebox" title="">
										     <img src="frontimage/port-44.jpg"><div class="b-wrapper"><h2 class="b-animate b-from-left  prt-2  b-delay03 ">楔斑拟灯蛾</h2>
										  	 </div></a>
			                			</div>
			                		</div>
									<div class="portfolio app mix_all" data-cat="app" style="display: inline-block; opacity: 1;">
										<div class="portfolio-wrapper p-5">		
											<a href="frontimage/port-33.jpg" class="b-link-stripe b-animate-go   swipebox" title="">
										     <img src="frontimage/port-33.jpg"><div class="b-wrapper"><h2 class="b-animate b-from-left  prt-5  b-delay03 ">Photography</h2>
										  	 </div></a>
			                			</div>
			                		</div>
									<div class="portfolio app mix_all" data-cat="app" style="display: inline-block; opacity: 1;">
										<div class="portfolio-wrapper p-5">		
											<a href="frontimage/port-88.jpg" class="b-link-stripe b-animate-go   swipebox" title="">
										     <img src="frontimage/port-88.jpg"><div class="b-wrapper"><h2 class="b-animate b-from-left prt-3   b-delay03 ">著内斑舟蛾</h2>
										  	 </div></a>
			                			</div>
			                		</div>
								</div>
								<div class="col-md-3 port-1-right portfolio-last">
									<div class="portfolio app mix_all" data-cat="app" style="display: inline-block; opacity: 1;">
										<div class="portfolio-wrapper p-5">		
											<a href="frontimage/port-33.jpg" class="b-link-stripe b-animate-go  swipebox" title="">
										     <img src="frontimage/port-33.jpg"><div class="b-wrapper"><h2 class="b-animate b-from-left  prt-2  b-delay03 ">四斑露尾甲</h2>
										  	 </div></a>
			                			</div>
			                		</div>
									<div class="portfolio app mix_all" data-cat="app" style="display: inline-block; opacity: 1;">
										<div class="portfolio-wrapper p-5">		
											<a href="frontimage/port-44.jpg" class="b-link-stripe b-animate-go  swipebox" title="">
										     <img src="frontimage/port-44.jpg"><div class="b-wrapper"><h2 class="b-animate b-from-left  prt-2  b-delay03 ">楔斑拟灯蛾</h2>
										  	 </div></a>
			                			</div>
			                		</div>
									<div class="portfolio app mix_all" data-cat="app" style="display: inline-block; opacity: 1;">
										<div class="portfolio-wrapper p-5">		
											<a href="frontimage/port-44.jpg" class="b-link-stripe b-animate-go   swipebox" title="">
										     <img src="frontimage/port-44.jpg"><div class="b-wrapper"><h2 class="b-animate b-from-left prt-3   b-delay03 ">楔斑拟灯蛾</h2>
										  	 </div></a>
			                			</div>
			                		</div>
									<div class="portfolio app mix_all" data-cat="app" style="display: inline-block; opacity: 1;">
										<div class="portfolio-wrapper p-5">		
											<a href="frontimage/port-66.jpg" class="b-link-stripe b-animate-go   swipebox" title="">
										     <img src="frontimage/port-66.jpg"><div class="b-wrapper"><h2 class="b-animate b-from-left prt-3   b-delay03 ">雅蜉金龟</h2>
										  	 </div></a>
			                			</div>
			                		</div>
								</div>
								<div class="clearfix"></div>
					</div>
				</div>
				
		</div>
		<!-- //container -->
	</div>
	<!-- //gallery -->

</body>

</html>