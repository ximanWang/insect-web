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
<script type="text/javascript">
    //生成bootstrap的select样式
    $(".selectpicker").select2({width : 180});

</script>