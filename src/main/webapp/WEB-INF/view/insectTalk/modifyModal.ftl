<div class="modal fade" tabindex="-1"  data-width="960"  id="modifyModal"  style="display: none;">
    <form id="formModify" action="userRole/modify">
        <div class="modal-header">
            <button class="close"type="button" data-dismiss="modal" aria-hidden="true"> &times</button>
            <div class="row">
                <div class="col-md-3">
                    <h4 class="modal-title">回复</h4>
                </div>
            </div>
        </div>
        <div class="modal-body" id="modifyModalData">

        </div>

        <div class="modal-footer">
            <div class="text-center">
                <button class="btn btn-lg btn-success" id="submit" type="submit">保存</button>
                <button class="cancel btn btn-lg btn-default" id="cancel" style="margin-right: 40px;" type="button">取消</button>
            </div>
        </div>
    </form>
</div>


<script type="text/javascript">

    $("#formModify").submit(function(ev) {

        ev.preventDefault();

        if($("#formModify").validate().form()) {

            var url = $(this).attr("action");
            var formData = $("#formModify").serializeObject();

            //转换ID的类型
            formData.userroleId = parseInt(formData.userroleId);

            //获取类目ID列表
            var categoryIds = [];
            if( formData.roleCode.indexOf("BACK") > -1 ){
                $.each($("#formModify .addcate-label").find("span"), function(index, value){
                    var cateId = $(value).attr("id");
                    if( cateId != null){
                        categoryIds.push(parseInt(cateId));
                    }
                });
            }else if(formData.roleCode.indexOf("FONT") > -1 ){
                $.each($("#formModify .addfcate-label").find("span"), function(index, value){
                    var cateId = $(value).attr("id");
                    if( cateId != null){
                        categoryIds.push(parseInt(cateId));
                    }
                });
            }
            formData.categoryIds  = categoryIds.toString();

            $.ajax({
                type: "POST",
                url: url,
                contentType: 'application/json',
                dataType: "json",
                data: JSON.stringify(formData),
                success: function (data) {
                    if(data.type == "SUCCESS") {
                        $("#formModify")[0].reset();
                        $("#modifyModal").modal("hide");
                        userRolePagination.first();
                    }
                    toast(data);
                }
            });
        }
        return false;
    });

</script>