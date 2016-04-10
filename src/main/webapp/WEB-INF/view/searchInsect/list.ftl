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
                <label class="control-label col-md-2">前台频道</label>
                <div class="col-md-4">
                    <@frontAncestorSelector class="selectpicker" id="fAncestorId" name="fAncestorId"/>
                </div>
                <label class="control-label col-md-2">前台类目名称</label>
                <div class="col-md-4 text-left">
                    <input class="holo" type="text" name="fCateName" style="display: inline-block;margin-right:10px;width:180px;">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-md-2">后台类目</label>
                <div class="col-md-4 text-left">
                	<@backCateSelector class="selectpicker" name="bCateId"/>
                </div>
                <label class="control-label col-md-2">城市</label>
                <div class="col-md-4 text-left">
                    <input class="holo" type="text" name="cityName" style="display: inline-block;margin-right:10px;width:180px;">
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
                <#if isRoot==1>
	                <button id="formRefreshBtn" class="btn btn-md btn-warning"
	                <#if refreshStatus==1>disabled</#if>
	                style="margin-left:50px">
	                    <i class="icon icon-arrows-cw-3"><#if refreshStatus==1>刷新执行中<#else>立即执行</#if></i>
	                </button>
	            </#if>
            </div>
		</form>
	</div>
</div>

<#include "addModal.ftl"/>
<#include "modifyModal.ftl"/>

<div class="row m-t-25">
    <div class="col-sm-10 col-sm-offset-1">
        <div class="row" id="fbMappingListData"></div>
    </div>
</div>

<div class="modal fade" id="opDelConfirm" tabindex="-1"  style="display: none;">
	<div class="modal-body">
		<p id="confirmMsg"><label style="color: #b81900">确认删除所有生效城市下的此条映射关系？</label>
	</div>
	<div class="modal-footer">
		<div class="text-center">
			<button class="cancel btn btn-default" style="margin-right: 40px;"  data-dismiss="modal">取消</button>
			<button id="ok" class="btn btn-danger">确定</button>
		</div>
	</div>
</div>

<div class="modal fade" id="opRefreshConfirm" tabindex="-1"  style="display: none;">
	<div class="modal-body">
		<p id="confirmMsg"><label style="color: #b81900">确认刷新前后台映射关系缓存以及相关类目的POI到前台类目？</label>
	</div>
	<div class="modal-footer">
		<div class="text-center">
			<button class="cancel btn btn-default" style="margin-right: 40px;"  data-dismiss="modal">取消</button>
			<button id="ok" class="btn btn-danger">确定</button>
		</div>
	</div>
</div>
<div class="modal fade" id="refreshStatusMessage" tabindex="-1"  style="display: none;">
	<div class="modal-body">
		<p id="statusMessage" class="text-center"></p>
	</div>
	<div class="modal-footer">
		<div class="text-center">
			<button id="ok" class="btn btn-success" data-dismiss="modal">确定</button>
		</div>
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
//    var newDate = startDateDiv.getDate();
//    if(newDate!="Invalid Date") {
//        newDate.setDate(newDate.getDate() + 1);
//        endDateDiv.setStartDate(newDate);
//        endDateDiv.setDate(newDate);
//        $('#endDate')[0].focus();
//    }
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
	<#if refreshStatus==1>
		setTimeout("refreshStatus();", 3000);
	</#if>
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

$("#formQuery #cityId").change(function (){
    changeCateByCityId("#formQuery");
    toast(new msgObject("INFO", "成功加载前台类目清单"));
});

function changeCateByCityId(parentId){
    var cityId = parseInt($(parentId+" #tCityId").val())
    var fCateElement = $(parentId+" #fCateId");
    $(fCateElement).empty();
    $.getJSON("dpCategory/selectFlagDpCategoriesByCityId",{cityId : cityId},
            function (data){
                if( data.ex != null){
                    toast(data.ex);
                    return;
                }
                var dpCategories = data.dpCategories;
                $(fCateElement).append("<option value=''>请选择</option>");
                for(var i=0; i<dpCategories.length; i++){
                    if( dpCategories[i].privilege ){
                        //if( dpCategories[i].isLeaf ){
                            $(fCateElement).append("<option  value=" + dpCategories[i].categoryID + ">" + dpCategories[i].categoryName + "</option>");
                        //}else{
                            //$(fCateElement).append("<option  value=" + dpCategories[i].categoryID + " disabled>" + dpCategories[i].categoryName + "</option>");
                        //}
                    }
                }
                //刷新使select生效
                //$(".selectpicker").selectpicker("refresh");
            }
    );
}
</script>