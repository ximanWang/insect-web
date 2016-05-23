<div class="modal fade" tabindex="-1"  data-width="960"  id="addModal"  style="display: none;">
    <form id="formAdd" action="insectSearch/add" onsubmit="return false">
    	<input name="addUser"  type="hidden" value="${Session.user.getUserName()}"/>
		<input name="updateUser"  type="hidden" value="${Session.user.getUserName()}"/>
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