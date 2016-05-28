<div class="row m-t-20">
    <label class="control-label col-md-2 text-right">工号</label>
    <div class="col-md-3">
        <input class="holo required" type="hidden" id="id" name="id" value="${userRole.id?c}">
        <input class="holo required" type="hidden" id="userroleId" name="userroleId" value="${userRole.userroleId?c}">
        <input class="holo required" type="text" style="margin-top:-20px;color:gray" id="userCode" name="userCode" readonly="true" value="${userRole.userCode}">
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
    <label class="control-label col-md-2 text-right">姓名</label>
    <div class="col-md-3">
        <input class="holo required" type="text" style="margin-top:-20px;color:gray" id="userName" name="userName" readonly="true" value="${userRole.userName!}">
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
</div>
<div class="row m-t-20">
    <label class="control-label col-md-2 text-right">用户邮箱</label>
    <div class="col-md-3">
        <input class="holo required" type="text" style="margin-top:-20px;color:gray" id="userEmail" name="userEmail" readonly="true" value="${userRole.userEmail!}">
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
    <label class="control-label col-md-2 text-right">权限类型</label>
    <div class="col-md-4">
    	<select class="selectpicker" name="roleCode" data-live-search="true">
    			<option value="">${userRole.roleCode}</option>
                <#if cateRoleList??>
                     <#list cateRoleList as cateRole>
                            <option value="${cateRole.roleCode!}">${cateRole.roleName}</option>
                     </#list>
                 </#if>
        </select>
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
</div>


<div class="row m-t-20">
    <label class="control-label col-md-2 text-right">人员备注</label>
    <div class="col-md-9">
        <input class="holo" type="text" style="margin-top:-20px;" id="remark" name="remark" value="${userRole.remark!}">
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
</div>

<!-- script block -->
<script type="text/javascript">

    //生成bootstrap的select样式
    $(".selectpicker").select2({width: 180});

</script>