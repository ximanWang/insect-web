<div class="modal fade" tabindex="-1"  data-width="960"  id="modifyModal"  style="display: none;">
    <form id="formModify" action="insectSearch/modify" onsubmit="return false" >
        <div class="modal-header">
            <button class="close"type="button" data-dismiss="modal" aria-hidden="true"> &times</button>
            <div class="row">
                <div class="col-md-3">
                    <h4 class="modal-title">详情/修改</h4>
                </div>
            </div>
        </div>
        <div class="modal-body" id="modifyModalData">
        
        </div>

        <div class="modal-footer">
            <div class="text-center">
                <button class="btn btn-lg btn-success" id="submitBtn" type="submit">保存</button>
                <button class="cancel btn btn-lg btn-default" id="cancel" style="margin-right: 40px;" type="button">取消</button>
            </div>
        </div>
    </form>
</div>

<script type="text/javascript">
    $("#formModify #submitBtn").click(function(){
       var formData = $("#formModify").serializeObject();
		
        //保存修改数据
        submitModify(formData);
    });
    
    
    function submitModify(formData) {
    	startloading();
		$.ajax({
  			type: "POST",
     		url: $("#formModify").attr("action"),
     		contentType: 'application/json',
       		dataType: "json",
       		data:formData,
          	success: function (data) {
        		closeLoading();
           		if(data.type == "SUCCESS") {
              		$("#formModify")[0].reset();
                 	$("#modifyModal").modal("hide");
               		fbMappingPagination.first();
               	}
              	if(data.extra && data.extra.length > 0){
	            	logModal.show(data.body, data.extra);
	         	} else {
		          	toast(data);
	      		}
        	},
       		error: function(e) {
            	toast(new msgObject("ERROR", e.responseText));
         	}
    	});
    }
</script>