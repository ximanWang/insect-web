<div class="row m-t-20">
    <label class="control-label col-md-2 text-right">id</label>
    <div class="col-md-3">
        <input class="holo required" type="hidden" id="testId" name="testId" value="${onlineTest.id?c}">
        <input class="holo required" type="text" style="margin-top:-20px;color:gray" id="userCode" name="id" readonly="true" value="${onlineTest.id}">
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
</div>
<div class="row m-t-20">
     <label class="control-label col-md-2 text-right">问题</label>
    <div class="col-md-6">
        <input class="holo required" type="text" style="margin-top:-20px;color:gray" id="userName" name="question" readonly="true" value="${onlineTest.question!}">
    </div>
    <span class="col-md-1 text-left text-muted small"></span>  
</div>
<div class="row m-t-20">
    <label class="control-label col-md-2 text-right">正确答案</label>
    
    <div class="col-md-3">
     	<select class="selectpicker" id="roleCode" name="correctanswer" data-live-search="true">
     						 <option value="${onlineTest.correctanswer}" selected>${onlineTest.correctanswer}</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                    </select>
    </div>
    <span class="col-md-1 text-left text-muted small"></span>  
</div>


<div class="row m-t-20">
    <label class="control-label col-md-2 text-right">答案A</label>
    <div class="col-md-9">
        <input class="holo" type="text" style="margin-top:-20px;" id="remark" name="remark" value="${onlineTest.answera!}">
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
</div>
<div class="row m-t-20">
    <label class="control-label col-md-2 text-right">答案B</label>
    <div class="col-md-9">
        <input class="holo" type="text" style="margin-top:-20px;" id="remark" name="remark" value="${onlineTest.answerb!}">
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
</div>
<div class="row m-t-20">
    <label class="control-label col-md-2 text-right">答案C</label>
    <div class="col-md-9">
        <input class="holo" type="text" style="margin-top:-20px;" id="remark" name="remark" value="${onlineTest.answerc!}">
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
</div>
<div class="row m-t-20">
    <label class="control-label col-md-2 text-right">答案D</label>
    <div class="col-md-9">
        <input class="holo" type="text" style="margin-top:-20px;" id="remark" name="remark" value="${onlineTest.answerd!}">
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
</div>

<!-- script block -->
<script type="text/javascript">

    //生成bootstrap的select样式
    $(".selectpicker").select2({width: 180});

</script>