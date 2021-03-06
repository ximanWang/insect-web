<!-- html block -->
<div class="sidebar sidebar-left mm-box">
	<div class="sidemenu" id="loadAddModalBtn">
		<i class="icon icon-plus-6">上传</i>
	</div>
</div>
<div class="row m-t-20">
	<div class="col-sm-10 col-sm-offset-1 mm-box form-horizontal filter-pan">
		<form id="formQuery" onsubmit="return false;">
            <div class="form-group m-t-10">
                <label class="control-label col-md-2">选择昆虫</label>
                <div class="col-md-4 text-left">
                	<@insectSelector class="selectpicker" name="insectId"/>
                </div>
                <label class="control-label col-md-2">选择相册</label>
                <div class="col-md-4 text-left">
                	<@albmTypeSelector class="selectpicker" name="typeName"/>
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

<!-- script block -->
<script type="text/javascript">

//生成bootstrap的select样式
$(".selectpicker").select2({width : 180});

var fbMappingPagination = new insect.Pagination({
    templateKey : "searchPictures.listData"
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


</script>