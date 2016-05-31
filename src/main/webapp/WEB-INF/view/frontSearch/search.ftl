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
<#include "/include/frontheader.ftl"/>
	<div class="banner about-banner">
		<div class="banner-grids">
				<div class="banner-grid-left">
					<div class="header-logo">
						<a href="index.html"><img src="frontimage/logo.png" alt="" /></a>
					</div>
					<div class="top-nav">
							<ul class="cl-effect-1">
								<li><a href="index.html">Home</a></li>                                             
								<li><a href="about.html">About</a></li>
								<li><a href="blog.html">Blog</a></li> 
								<li><a href="contact.html">Contact</a></li>   
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
	<!-- about -->
	<div class="about">
		<div class="row m-t-20">
	<div class="col-sm-10 col-sm-offset-1 mm-box form-horizontal filter-pan">
		<form id="formQuery" action="${rc.contextPath}/insectSearch" method="post">
            <div class="form-group m-t-10">
                <label class="control-label col-md-2">目名称</label>
                <div class="col-md-4">
                    <@ancestorSelector class="selectpicker" id="fAncestorId" name="fAncestorId"/>
                </div>
                <label class="control-label col-md-2">分类地位</label>
                <div class="col-md-4 text-left">
                	<@cateSelector class="selectpicker" name="bCateId"/>
                </div>
            </div>
            
            <div class="form-group text-center m-t-20">
                <button id="formQueryBtn" class="btn btn-md btn-success">
                    <i class="icon icon-filter-1">查询</i>
                </button>
                
            </div>
            <table class="table mm-box">
	<tr class="th-inverse">
		<th>中文名称</th>
		<th>英文名称</th>
		<th>拉丁名称</th>
		<th class="text-center" style="width: 120px;">操作</th>
	</tr>
	<tbody id="tbodyData">
        <#if fbMappingList??>
            <#list fbMappingList as fbMapping>
                <tr>
                    <td>
                        <#if fbMapping.chineseName??>
                            ${fbMapping.chineseName}
                        </#if>
                    </td>
                    <td style="font-weight: bold; font-size: 13px">
                        <#if fbMapping.englishName??>
                            ${fbMapping.englishName}
                        </#if>
                    </td>
                    <td>
                        <#if fbMapping.lationName??>
                            ${fbMapping.lationName}
                        </#if>
                    </td>
                   
                    <td>
                        <div class="text-center">
                            <span class="icon-btn loadModify" name="${fbMapping.id?c}" title="查看">
                            	<a class="icon icon-edit-3" href="${rc.contextPath}/searchDetail/${fbMapping.id}"></a>
                            </span>
                        </div>
                    </td>
               </tr>
           </#list>
        </#if>
	</tbody>
</table>

<div id="fbMappingPageBar"></div>
		</form>
	</div>
</div>
	</div>
	<div class="row m-t-25">
    <div class="col-sm-10 col-sm-offset-1">
        <div class="row" id="fbMappingListData"></div>
    </div>
    
</div>
	
</body>
<!-- script block -->
<script type="text/javascript">

//生成bootstrap的select样式
$(".selectpicker").select2({width : 180});

var fbMappingPagination = new insect.Pagination({
    templateKey : "user.insectSearch"
});
/* 跳转到第一页 */
fbMappingPagination.setSort({ctime:"DESC"}).first();

$("#formQueryBtn").click(function() {
	var condition = $("#formQuery").serializeObject();
    condition.fCateId = parseInt(condition.fCateId);
    condition.fAncestorId = parseInt(condition.fAncestorId);
    condition.bCateId = parseInt(condition.bCateId);
    condition.bProValueId = parseInt(condition.bProValueId);
    fbMappingPagination.setCondition(condition).first();
});

</script>
<script type="text/javascript">
	fbMappingPagination.bar("#fbMappingPageBar",${pagination.total?c}, ${pagination.pageCount?c}, ${pagination.currentPage?c});
</script>	

</html>