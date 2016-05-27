<div class="modal fade" tabindex="-1"  data-width="960"  id="modifyModal"  style="display: none;">
    <form id="formModify" action="insectTalk/modify">
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