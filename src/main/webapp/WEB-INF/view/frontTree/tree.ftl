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
						<a href="index.html"><img src="images/logo.png" alt="" /></a>
					</div>
					<div class="top-nav">
							
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

 <div class="row m-t-20 m-b-20">
    <div class="col-sm-10 col-sm-offset-1 mm-box form-horizontal filter-pan">
        <div class="row-fluid">
            <h3 class="text-success text-center">昆虫/害虫分类树</h3>
           
            <div class="easy-tree" style="display: none">
                <ul>
                    <#if insectCategoryHTML??>
                        ${insectCategoryHTML}
                    </#if>
                </ul>
            </div>
            
            <div class="easy-tree" style="display: none">
                <ul>
                    <#if pestCategoryHTML??>
                        ${pestCategoryHTML}
                    </#if>
                </ul>
            </div>

        </div>

    </div>
</div>

</body>
	
<script type="text/javascript">

    function toggleChevron(e) {
        $(e.target)
                .prev('.panel-heading')
                .find("i.indicator")
                .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
    }
    $('#accordion').on('hidden.bs.collapse', toggleChevron);
    $('#accordion').on('shown.bs.collapse', toggleChevron);

    $(".selectpicker").select2({width: 180});
    var treeLoader = new EasyTree.TreeLoader(".easy-tree");

    treeLoader.buildTree({
    	addable: true,
        editable: true,
        deletable: true,
        showMsg: true,
        showMsgSelector : '.tree-action-msg',
        undoCallback : function() {
            $("#undoOprConfirm").modal("show");
        },
        adjustSelect : function() {
            $("#selectAdjustPoiCategory").modal("show");
        }
    });

    $('.easy-tree-toolbar').affix({
        offset: {
            top: $('.easy-tree-toolbar').offset().top - 30
        }
    });

    $("#cancel, .close").click(function() {
        $(".modal").modal("hide");
        $(".popover").each( function() {
            $(this).hide();
        });
    });

    $("#selectAdjustPoiCategory .ok").click(function() {
        var adjustType = $("#selectAdjustPoiCategory #adjustType").val()
        var adjustCategoryId = $("#selectAdjustPoiCategory #adjustCategoryId").val();

        //add opr record to list
        treeLoader.adjustNode(adjustCategoryId, adjustType);
        $("#selectAdjustPoiCategory").modal('hide');
    })

    var oprCommitList = [];

    $("#queryQuick").click(function() {
        oprCommitList = treeLoader.getOprList();
        if(oprCommitList.length == 0) {
            showWarningMsg("您还未做任何操作！");
        } else {
            $("#opCommitOprConfirm").modal("show");
        }
    })

    $("#opCommitOprConfirm #ok").click(function() {
    	var formData = {};
        formData.insectOprs = oprCommitList;
		startloading();
        $.ajax({
            type: "POST",
            url: 'insectCategory/addProcess',
            contentType: 'application/json',
            dataType: "json",
            data: JSON.stringify(formData),
            success:function(data){
            	closeLoading();
                $(".commit-modal-dialog").modal("hide");
                alert(data+"success");
                if(data.extra && data.extra.length > 0){
			   		logModal.show(data.body, data.extra);
			   		$("#opCommitOprConfirm").modal("hide");
			    } else {
				    toast(data);
			    	$("#opCommitOprConfirm").modal("hide");
			    }
            	insect.template.renderTemplateByKey("insectCategory.tree");
            	$("#opCommitOprConfirm").modal("hide");
        	},
        	error:function(data){
        		alert(data);
        	}
        });
    })

    $('#undoOprConfirm #ok').click(function() {
        $('#undoOprConfirm').modal('hide');
        lego.template.renderTemplateByKey("poiCategory.tree");
    });


</script>

</html>