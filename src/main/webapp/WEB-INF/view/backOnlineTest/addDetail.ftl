 <div class="modal-body">
            <div class="row m-t-20">
                <label class="control-label col-md-2 text-right">题目</label>
                <div class="col-md-3">
                    <input class="holo required" type="text" style="margin-top:-20px;" id="userCode" name="userCode">
                </div>
                <span class="col-md-1 text-left text-muted small"></span>
            </div>
            <div class="row m-t-20">
                <label class="control-label col-md-2 text-right">答案1</label>
                <div class="col-md-3">
                    <input class="holo required" type="text" style="margin-top:-20px;color:gray" id="userEmail" name="answera" >
                </div>
              
            </div>
            <div class="row m-t-20">
                <label class="control-label col-md-2 text-right">答案2</label>
                <div class="col-md-3">
                    <input class="holo required" type="text" style="margin-top:-20px;color:gray" id="userEmail" name="answerb" >
                </div>
            </div>
            <div class="row m-t-20">
                <label class="control-label col-md-2 text-right">答案3</label>
                <div class="col-md-3">
                    <input class="holo required" type="text" style="margin-top:-20px;color:gray" id="userEmail" name="answerc" >
                </div>
            </div>
            <div class="row m-t-20">
                 <label class="control-label col-md-2 text-right">答案4</label>
                <div class="col-md-3">
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
            <div class="row m-t-20">
                <label class="control-label col-md-2 text-right">人员备注</label>
                <div class="col-md-9">
                    <input class="holo" type="text" style="margin-top:-20px;" id="remark" name="remark" >
                </div>
                <span class="col-md-1 text-left text-muted small"></span>
            </div>
        </div>
<script type="text/javascript">
    //生成bootstrap的select样式
    $(".selectpicker").select2({width : 180});

</script>