<!-- html block -->
<div class="sidebar sidebar-left mm-box">
	<div class="sidemenu" id="loadAddModalBtn">
		<i class="icon icon-plus-6">上传</i>
	</div>
</div>
<div class="row m-t-20">
	<div class="col-sm-10 col-sm-offset-1 mm-box form-horizontal filter-pan">
		<form id="formQuery" onsubmit="return false;">
            <div class="form-group">
            	<label class="control-label col-md-2">状态</label>
				<div class="col-md-4">
                <select class="selectpicker" name="isCheck" data-live-search="true">
					<option value="">全部</option>
					<option value="0">未回复</option>
                    <option value="1">已回复</option>
                 </select>
            	</div>
            
                <label class="control-label col-md-2">提问时间</label>
                <div class='col-md-3'>
                    <div class='input-group date datepicker' id="startDateDiv" style="width:190px;margin-left:-5px">
                        <input type='text' class="form-control" name="startDate" id="startDate" readonly/>
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
<#include "searchPictures/addPictures.ftl"/>
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
    templateKey : "insectTalk.listData"
});
/* 跳转到第一页 */
fbMappingPagination.setSort({ctime:"DESC"}).first();

//设置日期控件的一些默认条件
var startDateDiv = $('#startDateDiv').datepicker({
    format: "yyyy-mm-dd"
}).on('changeDate', function(ev) {
    startDateDiv.hide();
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
    insect.template.renderTemplateByKey("searchPictures.loadAdd", params);

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
    condition.insectId = parseInt(condition.insectId);
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

<#if isRoot==1>
	$('#formRefreshBtn').click(function(){
	   	$("#opRefreshConfirm").modal("show");
	});
	var refreshStatus = function(){
		$.ajax({
			type: "POST",
		    url: "fbMapping/askRefreshStatus",
		    dataType: "json",
		    data: {},
		    success: function (data) {
		    	var status = parseInt(data.body);
		    	if(status == 1){
		    		setTimeout("refreshStatus();", 3000);
		    	} else if(status > 1){
			    	$('#formRefreshBtn .icon').html('立即执行');
		            $('#formRefreshBtn').removeAttr('disabled');
		            var msg = {
		            	2 : $('<p class="text-success">映射关系已更新！</p>'),
		            	3 : $('<p class="text-error">映射关系更新失败，请重试！</p>')
		            }
		            if(msg[status]){
		            	$("#refreshStatusMessage #statusMessage p").remove();
			            $("#refreshStatusMessage #statusMessage").append(msg[status]);
			            $("#refreshStatusMessage").modal("show");
		            }
	            }
		    }
		});
	}
	
	// 执行刷新前后台映射关系缓存
	$("#opRefreshConfirm #ok").click(function() {
	    var url = "fbMapping/refresh";
	    startloading();
	    $.ajax({
	        type: "POST",
	        url: url,
	        dataType: "json",
	        data: {},
	        success: function (data) {
	        	closeLoading();
	            $("#opRefreshConfirm").modal("hide");
	            toast(data);
	            if(data.type == "SUCCESS") {
	            	$('#formRefreshBtn .icon').html('刷新执行中');
	            	$('#formRefreshBtn').attr('disabled', 'disabled');
	            	setTimeout("refreshStatus();", 3000);
	            }
	        }
	    });
	});
</#if>


</script>