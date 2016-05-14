<!-- html block -->
<div class="sidebar sidebar-left mm-box">
	<div class="sidemenu" id="loadAddModalBtn">
		<i class="icon icon-plus-6">添加</i>
	</div>
</div>
<div class="row m-t-20">
	<div class="col-sm-10 col-sm-offset-1 mm-box form-horizontal filter-pan">
		<form id="formQuery" onsubmit="return false;">
            <div class="form-group">
            	<label class="control-label col-md-2">权限类型</label>
				<div class="col-md-4">
					<select class="selectpicker" name="roleCode" data-live-search="true">
						<option value="">全部</option>
                        <#if cateRoleList??>
                            <#list cateRoleList as cateRole>
                                <option value="${cateRole.roleName}">${cateRole.roleName}</option>
                            </#list>
                        </#if>
                    </select>
				</div>
                
                <div class="keyword-div" style="display: none">
                    <label class="control-label col-md-2 keyword-label" style="color: indianred"></label>
                    <div class="col-md-4 text-left">
                        <input class="holo" type="text"
                               style="display: inline-block;margin-right:10px;width:180px;">
                    </div>
                </div>
            </div>
			<div class="form-group">
				<label class="control-label col-md-2">工号</label>
				<div class="col-md-4">
					<input class="holo" type="text" name="userCode" id="name" style="display: inline-block;margin-right:10px;width:180px;">
				</div>
                <label class="control-label col-md-2">姓名</label>
                <div class="col-md-4 text-left">
                    <input class="holo" type="text" name="userName" id="name" style="display: inline-block;margin-right:10px;width:180px;">
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

<div class="row m-t-25">
    <div class="col-sm-10 col-sm-offset-1">
        <div class="row" id="fbMappingListData"></div>
    </div>
</div>

<#include "userRole/addModal.ftl"/>
<#include "userRole/modifyModal.ftl"/>

<div class="modal fade" id="opDelConfirm" tabindex="-1"  style="display: none;">
	<div class="modal-body">
		<p id="confirmMsg">确定删除？
	</div>
	<div class="modal-footer">
		<div class="text-center">
			<button class="cancel btn btn-default" style="margin-right: 40px;"  data-dismiss="modal">取消</button>
			<button id="ok" class="btn btn-danger">确定</button>
		</div>
	</div>
</div>

<div class="row m-t-25">
	<div class="col-sm-10 col-sm-offset-1">
		<div class="row" id="userRoleData"></div>
	</div>
</div>

<!-- script block -->
<script type="text/javascript">

//生成bootstrap的select样式
$(".selectpicker").select2({width: 180});

var userRolePagination = new insect.Pagination({
    templateKey : "userRole.listData"
});
/* 跳转到第一页 */
userRolePagination.setSort({addTime:"DESC"}).first();

$("#cancel, .close").click(function() {
    $(".modal").modal("hide");
    $(".popover").each( function() {
        $(this).hide();
    });
});

$("#loadAddModalBtn").click(function() {

    //清除之前新增的多余的权限范围标签
    cateSelect.init("#formAdd");
    fcateSelect.init("#formAdd");
    loadAddFormCateRange();

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
    userRolePagination.setCondition(condition).first();

});

$("#opDelConfirm #ok").click(function() {
    var url = "userRole/delete/" + curUserRoleId;
    $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        data: {},
        success: function (data) {
            $("#opDelConfirm").modal("hide");
            if(data.type == "SUCCESS") {
                userRolePagination.first();
            }
            curUserRoleId = '';
            toast(data);
        }
    });
})


//checkBox实现单选效果
$(function(){
    $(".query-keyword :checkbox").each(function(){
        $(this).click(function(){
            if($(this).prop("checked") == true){
                //实现单选效果
                $(".query-keyword :checkbox").prop("checked",false);
                $(this).prop("checked",true);

                //联动关键词输入框的样式
                $(".keyword-div").show();
                $(".keyword-label").html($(this).attr("title"));
                $(".keyword-div :input").attr("name", $(this).val());
            }else{

                //联动关键词输入框的样式
                $(".keyword-div").hide();
                $(".keyword-label").html("");
                $(".keyword-div :input").val("");
            }
        });
    });

});

</script>

