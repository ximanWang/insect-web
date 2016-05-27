<div class="row m-t-20">
    <label class="control-label col-md-2 text-right">编号</label>
    <div class="col-md-3">
        <input class="holo required" type="hidden" id="id" name="tid" value="${insectTalk.id?c}">
        <input class="holo required" type="text" style="margin-top:-20px;color:gray" id="userCode" name="id" readonly="true" value="${insectTalk.id}">
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
    <label class="control-label col-md-2 text-right">问题</label>
    <div class="col-md-3">
        <input class="holo required" type="text" style="margin-top:-20px;color:gray" id="userName" name="askContent" readonly="true" value="${insectTalk.askContent!}">
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
</div>
<div class="row m-t-20">
    <label class="control-label col-md-2 text-right">提问时间</label>
    <div class="col-md-3">
        <input class="holo required" type="text" style="margin-top:-20px;color:gray" id="userEmail" name="addTime" readonly="true" value="${insectTalk.askContent!}">
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
    
    <span class="col-md-1 text-left text-muted small"></span>
</div>


<div class="row m-t-20">
    <label class="control-label col-md-2 text-right">回复</label>
    <div class="col-md-9">
        <input class="holo" type="text" style="margin-top:-20px;" id="remark" name="answer" value="${insectTalk.answer!}">
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
</div>

<!-- script block -->
<script type="text/javascript">

    //生成bootstrap的select样式
    $(".selectpicker").select2({width: 180});

</script>