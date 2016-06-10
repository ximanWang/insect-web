<div class="modal fade" tabindex="-1"  data-width="960"  id="addModal"  style="display: none;">
    <form id="formAdd" action="onlineTest/add"  onsubmit="return false">
        <div class="modal-header">
            <button class="close"type="button", data-dismiss="modal", aria-hidden="true"> &times</button>
            <div class="row">
                <div class="col-md-3">
                    <h4 class="modal-title">添加试题</h4>
                </div>
            </div>
        </div>
        <div class="modal-body">
            <div class="row m-t-20">
                <label class="control-label col-md-2 text-right">题目</label>
                <div class="col-md-3">
                    <input class="holo required" type="text" style="margin-top:-20px;" id="userCode" name="question">
                </div>
                <span class="col-md-1 text-left text-muted small"></span>
            </div>
            <div class="row m-t-20">
                <label class="control-label col-md-2 text-right">答案1</label>
                <div class="col-md-9">
                    <input class="holo required" type="text" style="margin-top:-20px;color:gray" id="userEmail" name="answera" >
                </div>
              
            </div>
            <div class="row m-t-20">
                <label class="control-label col-md-2 text-right">答案2</label>
                <div class="col-md-9">
                    <input class="holo required" type="text" style="margin-top:-20px;color:gray" id="userEmail" name="answerb" >
                </div>
            </div>
            <div class="row m-t-20">
                <label class="control-label col-md-2 text-right">答案3</label>
                <div class="col-md-9">
                    <input class="holo required" type="text" style="margin-top:-20px;color:gray" id="userEmail" name="answerc" >
                </div>
            </div>
            <div class="row m-t-20">
                 <label class="control-label col-md-2 text-right">答案4</label>
                <div class="col-md-9">
                    <input class="holo required" type="text" style="margin-top:-20px;color:gray" id="userEmail" name="answerd" >
                </div>
            </div>
            <div class="row m-t-20">
                 <label class="control-label col-md-2 text-right">正确答案</label>
                <div class="col-md-3">
                    <select class="selectpicker" id="roleCode" name="correctanswer" data-live-search="true">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                    </select>
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