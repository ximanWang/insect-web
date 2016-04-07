 <#assign c=JspTaglibs["http://java.sun.com/jstl/core_rt"]>
<#assign fmt=JspTaglibs["http://java.sun.com/jsp/jstl/fmt"]>
<#assign fn=JspTaglibs["http://java.sun.com/jsp/jstl/functions"]>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insect Tree</title>

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
<script type="text/javascript" src="<@c.url value='/js/lego.js'/>" ></script>
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
<style>
        body {
            background: #eee;
        }
</style>
</head>
<body>
<!-- html block -->
<div class="lead-title" style="height:50px">
    <p class="p-insect" style="color: #fafafa">Insect</p>
</div>
<div class="lead-second" style="height: 80px">sdfv</div>
<div class="row m-t-20 m-b-20">
    <div class="col-sm-10 col-sm-offset-1 mm-box form-horizontal filter-pan">
        <div class="row-fluid">
            <h3 class="text-success text-center">Insect Tree</h3>
            <div id="search_box">
                <form id="search_form" method="post" action="#">
                    <input type="text" id="s" value="Search" class="swap_value" />
                    <input type="image" src="http://files.jb51.net/demoimg/200912/btn_search_box.gif" width="27" height="24" id="go" alt="Search" title="Search" />
                </form>
            </div>
            <div class="panel-group m-t-20 m-r-20" id="accordion" style="display: none;float: right;width: 350px;">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                操作日志
                            </a><i class="indicator glyphicon glyphicon-chevron-down  pull-right"></i>
                        </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse in">
                        <div class="panel-body" id="tree-action-msg-bar">
                            <ul class="tree-action-msg scroll" style="max-height: 100px;">
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="easy-tree" style="display: none">
                <ul>
                    <#if insectCategoryHTML??>
                        ${insectCategoryHTML}
                    </#if>
                </ul>
            </div>

        </div>

        <div class="row">
            <div class="divider divider-default"></div>
        </div>

        <div class="form-group text-center m-t-20">
            <button class="btn btn-lg btn-success" id="queryQuick">
                <i class="icon icon-ok-6">提交</i>
            </button>
        </div>
    </div>
</div>

    <div class="modal fade" id="opCommitOprConfirm" tabindex="-1", style="display: none;">
        <div class="modal-body">
            <p id="confirmMsg">确定提交本次操作申请吗？
        </div>
        <div class="modal-footer">
            <div class="text-center">
                <button class="cancel btn btn-default" style="margin-right: 40px;", data-dismiss="modal">取消</button>
                <button id="ok" class="btn btn-danger">确定</button>
            </div>
        </div>
    </div>

    <div class="modal fade" id="undoOprConfirm" tabindex="-1", style="display: none;">
        <div class="modal-body">
            <p id="confirmMsg">确定撤销所有操作吗？
        </div>
        <div class="modal-footer">
            <div class="text-center">
                <button class="cancel btn btn-default" style="margin-right: 40px;", data-dismiss="modal">取消</button>
                <button id="ok" class="btn btn-danger">确定</button>
            </div>
        </div>
    </div>


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
            url: 'addProcess',
            contentType: 'application/json',
            dataType: "json",
            data: JSON.stringify(formData),
            success:function(data){
            	closeLoading();
                $(".commit-modal-dialog").modal("hide");
            	window.location = 'tree';
        	}
        });
    })

    $('#undoOprConfirm #ok').click(function() {
        $('#undoOprConfirm').modal('hide');
        lego.template.renderTemplateByKey("poiCategory.tree");
    });


</script>

</body>
</html>