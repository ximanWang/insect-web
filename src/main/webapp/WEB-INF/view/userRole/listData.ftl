<table class="table mm-box">
	<tr class="th-inverse">
		<th>工号</th>
		<th>姓名</th>
		<th>电子邮箱</th>
		<th>权限类型</th>
        <th>权限范围</th>
		<th>备注信息</th>
		<th class="text-center">操作</th>
	</tr>
	<tbody id="tbodyData">
        <#if userRoleList??>
            <#list userRoleList as userRole>
                <tr>
                    <td>
                        <#if userRole.userCode??>
                            ${userRole.userCode}
                        </#if>
                    </td>
                    <td>
                        <#if userRole.userName??>
                            ${userRole.userName}
                        </#if>
                    </td>
                    <td>
                        <#if userRole.userEmail??>
                            ${userRole.userEmail}
                        </#if>
                    </td>
                    
                    <td>
                        <#if userRole.roleType??>
                            ${userRole.roleType}
                        </#if>
                    </td>
                    <td>
                        <#if userRole.roleCode??>
                            ${userRole.roleCode}
                        </#if>
                    </td>
                    <td>
                        <#if userRole.remark??>
                            ${userRole.remark}
                        </#if>
                    </td>
                    <td>
                        <div class="text-center">
                            <span class="icon-btn loadmodify" name="${userRole.userroleId?c}" title="编辑"><i class="icon icon-edit-3"></i></span>
                            <span class="icon-btn delete" name="${userRole.userroleId?c}" title="删除"><i class="icon icon-trash"></i></span>
                        </div>
                    </td>
               </tr>
           </#list>
        </#if>
	</tbody>
</table>

<div id="userRolePageBar"></div>

<!-- script block -->
<script type="text/javascript">

    $("#fbMappingListData .loadModify").click(function(ev) {

        var params = {};
        params.userroleId = parseInt($(this).attr("name"));

        insect.template.renderTemplateByKey("userRole.loadModify", params);

        $("#modifyModal").modal("show");
        $("#formModify").validate_popover({onsubmit: false, popoverPosition: "top"});
        $("#modifyModal").on("scroll", function() { $.validator.reposition(); });
        $("#modifyModal").on("hide.bs.modal", function (e) {
            $(".popover").each( function() {
                $(this).hide();
            });
        });
        $(window).resize(function() {
            $.validator.reposition();
        });
    });

    var curUserRoleId;

    $("#userRoleData .delete").click(function(ev) {
        ev.preventDefault();
        curUserRoleId = $(this).attr("name");
        $("#opDelConfirm").modal("show");

    });

    userRolePagination.bar("#userRolePageBar", ${pagination.total?c}, ${pagination.pageCount?c}, ${pagination.currentPage?c});
</script>



	
	