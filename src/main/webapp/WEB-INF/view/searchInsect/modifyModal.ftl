<div class="modal fade" tabindex="-1"  data-width="960"  id="modifyModal"  style="display: none;">
    <form id="formModify" action="fbMapping/modify" onsubmit="return false">
        <div class="modal-header">
            <button class="close"type="button" data-dismiss="modal" aria-hidden="true"> &times</button>
            <div class="row">
                <div class="col-md-3">
                    <h4 class="modal-title">编辑前后台类目映射关系</h4>
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

        //获取后台类目ID列表
        var bCateIdList = [];
        $.each($("#formModify .addcate-label").find("span"), function(index, value){
            var bCateId = $(value).attr("id");
            if( bCateId != null){
                bCateIdList.push(parseInt(bCateId));
            }
        });
        formData.bCateIdList  = bCateIdList.toString();

        //获取后台属性值ID列表(包含)
        var inProvalueIdList = [];
        formData.inProvalueIdList  = inProvalueIdList.toString();

        //获取后台属性值ID列表(排除)
        var outProvalueIdList = [];
        formData.outProvalueIdList  = outProvalueIdList.toString();

        if((formData.bCateIdList==null || formData.bCateIdList=='')){
            toast(new msgObject("WARNING", "请选择后台类目！"));
            return;
        }

        //获取城市范围信息
        var cityRangType = $("#formModify #cityRangType > .btn.active").val();
        if(cityRangType==null || cityRangType==''){
            toast(new msgObject("WARNING", "请选择城市范围类型"));
            return;
        }
        formData.cityRangType = parseInt(cityRangType)
        
        var isImportCity = false; // 是否是上传城市方式
	    if(cityRangType == '0'){
	    	var selectOrUpload = $("#formModify .select-keyword button.active").val();
	    	if(selectOrUpload == '0'){
	    		if($.isEmptyObject($('#formModify .selectWrapper #selectCityId').val())){
		    		toast(new msgObject("WARNING", "请选择城市！"));
		            return;
	            }
	    	} else if(selectOrUpload == '1'){
	    		var cityRange = $("#formModify #modifyCityRange").val();
		        if(!$.isEmptyObject(cityRange)){
		        	isImportCity = true;
		        } else if (cityRangType != $('#modifyCityRange').attr('oldValue')){
		            toast(new msgObject("WARNING", "请上传城市范围Excel！"));
		            return;
		        }
	    	}
	    }

        delete formData.bCategoryId;
        delete formData.bProvalueId;
        
        if(isImportCity == true) {
            //上传文件和表单内容
		    submitModifyWithUpload(formData);
        }else {
            //不上传文件
            submitModifyWithoutUpload(formData);
        }
    });
    
    function submitModifyWithUpload(formData) {
    	startloading();
		$.ajaxFileUpload({
			type: "POST",
            url : 'fbMapping/modifyWithCityIds',
      		secureuri : false, // 是否需要安全协议，一般设置为false
       		fileElementId : 'modifyCityRange', // 文件上传域的ID
      		data : formData,
        	contentType: 'application/json',
       		dataType : 'json',
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
    
    function submitModifyWithoutUpload(formData) {
    	startloading();
		$.ajax({
  			type: "POST",
     		url: $("#formModify").attr("action"),
       		dataType: "json",
       		data: formData,
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