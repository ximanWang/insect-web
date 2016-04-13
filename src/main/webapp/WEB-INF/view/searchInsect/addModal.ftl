<div class="modal fade" tabindex="-1"  data-width="960"  id="addModal"  style="display: none;">
    <form id="formAdd" action="fbMapping/add" onsubmit="return false">
        <div class="modal-header">
            <button class="close"type="button" data-dismiss="modal" aria-hidden="true"> &times</button>
            <div class="row">
                <div class="col-md-3">
                    <h4 class="modal-title">昆虫新增</h4>
                </div>
            </div>
        </div>
        <div class="modal-body" id="addModalData">

        </div>

        <div class="modal-footer">
            <div class="text-center">
                <button class="btn btn-lg btn-success" id="submitBtn" type="button">新增</button>
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

    //模版城市ID
    var tCityId = $("#formAdd #tCityId").val();
    formData.tCityId = tCityId;
    console.log(tCityId)

    

    formData.bCateIdList  = bCateIdList.toString();


    //获取城市范围信息
    var cityRangType = $("#formAdd #cityRangType > .btn.active").val();
    if(cityRangType==null || cityRangType==''){
        toast(new msgObject("WARNING", "请选择城市范围类型"));
        return;
    }
    formData.cityRangType = parseInt(cityRangType)
	
    submitAddWithoutUpload(formData);
    
});

function submitAddWithUpload(formData){
	//上传文件和表单内容
	startloading();
	$.ajaxFileUpload({
		type: "POST",
		url : 'fbMapping/addWithCityIds',
		secureuri : false, // 是否需要安全协议，一般设置为false
		fileElementId : 'addCityRange', // 文件上传域的ID
		data : formData,
 		contentType: 'application/json',
		dataType : 'json',
		success : function(data, status) {
			closeLoading();
			if(data.type == "SUCCESS") {
				$("#addModal").modal("hide");
				fbMappingPagination.first();
				$("#addCityRange").filestyle('destroy');
				$("#addCityRange").filestyle('clear');
			}
			if(data.extra && data.extra.length > 0){
				logModal.show(data.body, data.extra);
			} else {
				toast(data);
			}
		},
		error : function(data, status, e) {
			closeLoading();
			toast(new msgObject("ERROR", e.responseText));
		}
	});
}

function submitAddWithoutUpload(formData){
	startloading();
	$.ajax({
		type: "POST",
		url: $("#formAdd").attr("action"),
		dataType: "json",
		data: formData,
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