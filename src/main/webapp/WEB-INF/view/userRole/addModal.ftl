<div class="modal fade" tabindex="-1"  data-width="960"  id="addModal"  style="display: none;">
    <form id="formAdd" action="userRole/add"  onsubmit="return false">
        <div class="modal-header">
            <button class="close"type="button", data-dismiss="modal", aria-hidden="true"> &times</button>
            <div class="row">
                <div class="col-md-3">
                    <h4 class="modal-title">添加用户</h4>
                </div>
            </div>
        </div>
        <div class="modal-body">
            <div class="row m-t-20">
                <label class="control-label col-md-2 text-right">工号</label>
                <div class="col-md-3">
                    <input class="holo required" type="text" style="margin-top:-20px;" id="userCode" name="userCode">
                </div>
                <span class="col-md-1 text-left text-muted small"></span>
                <label class="control-label col-md-2 text-right">姓名</label>
                <div class="col-md-3">
                    <input class="holo required" type="text" style="margin-top:-20px;color:gray" id="userName" name="userName" >
                </div>
                <span class="col-md-1 text-left text-muted small"></span>
            </div>
            <div class="row m-t-20">
                <label class="control-label col-md-2 text-right">用户邮箱</label>
                <div class="col-md-3">
                    <input class="holo required" type="text" style="margin-top:-20px;color:gray" id="userEmail" name="userEmail" >
                </div>
                <span class="col-md-1 text-left text-muted small"></span>
                <label class="control-label col-md-2 text-right">权限类型</label>
                <div class="col-md-3">
                    <select class="selectpicker" id="roleCode" name="roleCode" data-live-search="true">
                    <#if cateRoleList??>
                        <#list cateRoleList as cateRole>
                            <option value="${cateRole.roleCode}">${cateRole.roleName}</option>
                        </#list>
                    </#if>
                    </select>
                </div>
                <span class="col-md-1 text-left text-muted small"></span>
            </div>
            
            <div class="row m-t-20">
                <label class="control-label col-md-2 text-right">人员备注</label>
                <div class="col-md-9">
                    <input class="holo" type="text" style="margin-top:-20px;" id="remark" name="remark" >
                </div>
                <span class="col-md-1 text-left text-muted small"></span>
            </div>
        </div>

        <div class="modal-footer">
            <div class="text-center">
                <button class="btn btn-lg btn-success" id="submitBtn" type="submit">新增</button>
                <button class="cancel btn btn-lg btn-default" id="cancel" style="margin-right: 40px;" type="button">取消</button>
            </div>
        </div>
    </form>
</div>


<script type="text/javascript">

//生成bootstrap的select样式
$(".selectpicker").select2({width : 180});

$("#formAdd #submitBtn").click(function(){

    var formData = $("#formAdd").serializeObject();
	
    submitAdd(formData);
    
});

function submitAdd(formData){
	startloading();
	$.ajax({
		type: "POST",
		url: $("#formAdd").attr("action"),
		contentType: 'application/json',
		dataType: "json",
		data: JSON.stringify(formData),
		success: function (data) {
			closeLoading();
   			if(data.type == "SUCCESS") {
            	$("#addModal").modal("hide");
				fbMappingPagination.first();
			}
			if(data.extra && data.extra.length > 0){
				logModal.show(data.body, data.extra);
			} else {
				toast(data);
			}
		},
		error: function(e) {
			closeLoading();
			toast(new msgObject("ERROR", e.responseText));
		}
	});
}

</script>