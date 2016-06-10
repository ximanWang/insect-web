<table class="table mm-box">
	<tr class="th-inverse">
		<th>id</th>
		<th>试题名称</th>
		<th class="text-center">操作</th>
	</tr>
	<tbody id="tbodyData">
        <#if onlineTestList??>
            <#list onlineTestList as onlineTest>
                <tr>
                    <td>
                        <#if onlineTest.id??>
                            ${onlineTest.id}
                        </#if>
                    </td>
                    <td>
                        <#if onlineTest.question??>
                            ${onlineTest.question}
                        </#if>
                    </td>
                    
                    <td>
                        <div class="text-center">
                            <span class="icon-btn loadmodify" name="${onlineTest.id?c}" title="编辑"><i class="icon icon-edit-3"></i></span>
                            <span class="icon-btn delete" name="${onlineTest.id?c}" title="删除"><i class="icon icon-trash"></i></span>
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

        insect.template.renderTemplateByKey("onlineTest.loadModify", params);

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



	
	