<div class="modal fade" tabindex="-1"  data-width="960"  id="addModal"  style="display: none;">
    <form id="formAdd" action="userRole/add">
        <div class="modal-header">
            <button class="close"type="button", data-dismiss="modal", aria-hidden="true"> &times</button>
            <div class="row">
                <div class="col-md-3">
                    <h4 class="modal-title">添加用户权限</h4>
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
                    <input class="holo required" type="text" style="margin-top:-20px;color:gray" id="userName" name="userName" readonly>
                </div>
                <span class="col-md-1 text-left text-muted small"></span>
            </div>
            <div class="row m-t-20">
                <label class="control-label col-md-2 text-right">用户邮箱</label>
                <div class="col-md-3">
                    <input class="holo required" type="text" style="margin-top:-20px;color:gray" id="userEmail" name="userEmail" readonly>
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
            <div class="row m-t-20" id="buDiv" style="display: none">
                <label class="control-label col-md-2 text-right">所属BU</label>
                <div class="col-md-3">
                    <select class="selectpicker" id="buId" data-live-search="true">
                    <#if buList??>
                        <#list buList as buInfo>
                            <option value="${buInfo.code}">${buInfo.name}</option>
                        </#list>
                    </#if>
                    </select>
                </div>
                <span class="col-md-1 text-left text-muted small"></span>
            </div>
            <div id="bCateRange" style="display: none">
                <#include "bCateRange.ftl"/>
            </div>
            <div id="fCateRange" style="display: none">
                <#include "fCateRange.ftl"/>
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
                <button class="btn btn-lg btn-success" id="submit" type="submit">新增</button>
                <button class="cancel btn btn-lg btn-default" id="cancel" style="margin-right: 40px;" type="button">取消</button>
            </div>
        </div>
    </form>
</div>


<script type="text/javascript">

$("#formAdd #roleCode").change(function()  {
    loadAddFormCateRange();
});

function loadAddFormCateRange(){

    var roleCode = $("#formAdd #roleCode").val();

    if( roleCode.indexOf("BACK") > -1 ){
        $("#formAdd #buDiv").show();
        $("#formAdd #bCateRange").show();
        $("#formAdd #fCateRange").hide();
    }else if(roleCode.indexOf("FONT") > -1 ){
        $("#formAdd #buDiv").show();
        $("#formAdd #fCateRange").show();
        $("#formAdd #bCateRange").hide();
    }else{
        $("#formAdd #buDiv").hide();
        $("#formAdd #bCateRange").hide();
        $("#formAdd #fCateRange").hide();
    }
}

$("#formAdd #userCode").blur(function (ev){
    var userCode = $("#formAdd #userCode").val();
    $.getJSON("user/"+userCode, "",
            function (data){
                if(data==null) toast(new msgObject("WARNING", "未加载到该用户数据"));
                if(data.realName==null || data.realName=='') toast(new msgObject("WARNING", "未加载到该用户数据"));
                $("#formAdd #userName").val(data.realName);
                $("#formAdd #userEmail").val(data.email);
            });
    $.getJSON("userRole/getUserBu/"+userCode, "",
            function (data){
                var buId = data.buId;
                if(buId=='' || buId==0){
                    $("#formAdd #buId").attr("disabled",false);
                }else{
                    $("#formAdd #buId").attr("disabled",true);
                    $("#formAdd #buId").find("option[value='"+buId+"']").attr("selected",true);
                }
                //生成bootstrap的select样式
                //$(".selectpicker").selectpicker('refresh');
            });
});

$("#formAdd").submit(function(ev) {

    ev.preventDefault();

    if($("#formAdd").validate().form()) {

        var url = $(this).attr("action");
        var formData = $(this).serializeObject();

        //获取类目ID列表
        var categoryIds = [];
        if( formData.roleCode.indexOf("BACK") > -1 ){
            $.each($("#formAdd .addcate-label").find("span"), function(index, value){
                var cateId = $(value).attr("id");
                if( cateId != null){
                    categoryIds.push(parseInt(cateId));
                }
            });
            formData.buId = parseInt($("#formAdd #buId").val());
        }else if(formData.roleCode.indexOf("FONT") > -1){
            $.each($("#formAdd .addfcate-label").find("span"), function(index, value){
                var cateId = $(value).attr("id");
                if( cateId != null){
                    categoryIds.push(parseInt(cateId));
                }
            });
            formData.buId = parseInt($("#formAdd #buId").val());
        }
        formData.categoryIds  = categoryIds.toString();

        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: formData,
            success: function (data) {
                if(data.type == "SUCCESS") {
                    $("#formAdd")[0].reset();
                    $("#addModal").modal("hide");
                    userRolePagination.first();
                }
                toast(data);
            }
        });
    }
    return false;
});


</script>