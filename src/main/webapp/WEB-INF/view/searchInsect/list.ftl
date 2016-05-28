<!-- html block -->
<div class="sidebar sidebar-left mm-box">
	<div class="sidemenu" id="loadAddModalBtn">
		<i class="icon icon-plus-6">添加</i>
	</div>
</div>
<div class="row m-t-20">
	<div class="col-sm-10 col-sm-offset-1 mm-box form-horizontal filter-pan">
		<form id="formQuery" onsubmit="return false;">
            <div class="form-group m-t-10">
                <label class="control-label col-md-2">目名称</label>
                <div class="col-md-4">
                    <@ancestorSelector class="selectpicker" id="fAncestorId" name="fAncestorId"/>
                </div>
                <label class="control-label col-md-2">后台类目</label>
                <div class="col-md-4 text-left">
                	<@cateSelector class="selectpicker" name="bCateId"/>
                </div>
            </div>
            
            <div class="form-group">
                <label class="control-label col-md-2">创建人</label>
                <div class="col-md-4">
                    <input class="holo" type="text" name="addUserName" style="display: inline-block;margin-right:10px;width:180px;">
                </div>
                <label class="control-label col-md-2">最后更新人</label>
                <div class="col-md-4 text-left">
                    <input class="holo" type="text" name="updateUserName" style="display: inline-block;margin-right:10px;width:180px;">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-md-2">创建日期(起始)</label>
                <div class='col-md-3'>
                    <div class='input-group date datepicker' id="startDateDiv" style="width:190px;margin-left:-5px">
                        <input type='text' class="form-control" name="startDate" id="startDate" readonly/>
                        <span class="input-group-addon">
                            <span class="glyphicon glyphicon-calendar"></span>
                        </span>
                    </div>
                </div>
                <label class="control-label col-md-1"></label>

                <label class="control-label col-md-2">创建日期(截止)</label>
                <div class='col-md-3'>
                    <div class='input-group date datepicker'  id="endDateDiv" style="width:190px;margin-left:-5px">
                        <input type='text' class="form-control" name="endDate" id="endDate" readonly/>
                        <span class="input-group-addon">
                            <span class="glyphicon glyphicon-calendar"></span>
                        </span>
                    </div>
                </div>
            </div>
            <div class="form-group text-center m-t-20">
                <button id="formQueryBtn" class="btn btn-md btn-success">
                    <i class="icon icon-filter-1">查询</i>
                </button>
                
            </div>
		</form>
	</div>
</div>

<#include "searchInsect/addModal.ftl"/>
<#include "searchInsect/modifyModal.ftl"/>

<div class="row m-t-25">
    <div class="col-sm-10 col-sm-offset-1">
        <div class="row" id="fbMappingListData"></div>
    </div>
</div>

<!-- script block -->
<script type="text/javascript">

//生成bootstrap的select样式
$(".selectpicker").select2({width : 180});

var fbMappingPagination = new insect.Pagination({
    templateKey : "insectSearch.listData"
});
/* 跳转到第一页 */
fbMappingPagination.setSort({ctime:"DESC"}).first();

//设置日期控件的一些默认条件
var startDateDiv = $('#startDateDiv').datepicker({
    format: "yyyy-mm-dd"
}).on('changeDate', function(ev) {
    startDateDiv.hide();
    //设置结束日期的一些条件

}).data('datepicker');

//设置日期控件的一些默认条件
var endDateDiv = $('#endDateDiv').datepicker({
    format: "yyyy-mm-dd"
}).on('changeDate', function(ev) {
    endDateDiv.hide();
}).data('datepicker');


$("#cancel, .close").click(function() {
    $(".modal").modal("hide");
    $(".popover").each( function() {
        $(this).hide();
    });
});

$("#loadAddModalBtn").click(function(ev) {
	var cityName = $('#formQuery input[name=cityName]').val();
    var params = {cityName : cityName};
    insect.template.renderTemplateByKey("insectSearch.loadAdd", params);

    $("#addModal").modal("show");
    $("#formAdd").validate_popover({onsubmit: false, popoverPosition: "top"});
    $("#addModal").on("scroll", function() { $.validator.reposition(); });
    $("#addModal").on("hide.bs.modal", function (e) {
        $(".popover").each( function() {
            $(this).hide();
        });
    });
    $(window).resize(function() {
        $.validator.reposition();
    });
});

$("#formQueryBtn").click(function() {
	var condition = $("#formQuery").serializeObject();
    condition.fCateId = parseInt(condition.fCateId);
    condition.fAncestorId = parseInt(condition.fAncestorId);
    condition.bCateId = parseInt(condition.bCateId);
    condition.bProValueId = parseInt(condition.bProValueId);
    fbMappingPagination.setCondition(condition).first();
});

$("#opDelConfirm #ok").click(function() {
    var url = "fbMapping/delete/" + curMId;
    startloading();
    $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        data: {},
        success: function (data) {
        	closeLoading();
            $("#opDelConfirm").modal("hide");
            if(data.type == "SUCCESS") {
                fbMappingPagination.first();
            }
            curMId = '';
            //toast(data);
        }
    });
});

</script>