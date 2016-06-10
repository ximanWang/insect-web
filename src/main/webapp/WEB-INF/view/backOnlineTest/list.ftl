<!-- html block -->
<div class="sidebar sidebar-left mm-box">
	<div class="sidemenu" id="loadAddModalBtn">
		<i class="icon icon-plus-6">添加</i>
	</div>
</div>


<div class="row m-t-25">
    <div class="col-sm-10 col-sm-offset-1">
        <div class="row" id="fbMappingListData"></div>
    </div>
</div>

<#include "backOnlineTest/addModal.ftl"/>
<#include "backOnlineTest/modifyModal.ftl"/>

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
    templateKey : "onlineTest.listData"
});
/* 跳转到第一页 */
userRolePagination.setSort({addTime:"DESC"}).first();

$("#cancel, .close").click(function() {
    $(".modal").modal("hide");
    $(".popover").each( function() {
        $(this).hide();
    });
});

$("#loadAddModalBtn").click(function(ev) {
	var cityName = $('#formQuery input[name=cityName]').val();
    var params = {cityName : cityName};
    insect.template.renderTemplateByKey("onlineTest.loadAdd", params);

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

