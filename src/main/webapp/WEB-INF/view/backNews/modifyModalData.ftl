<div class="row m-t-20">
    <label class="control-label col-md-2 text-right">编号</label>
    <div class="col-md-3">
        <input class="holo required" type="hidden" id="testId" name="userroleId" value="${insectNews.id?c}">
        <input class="holo required" type="text" style="margin-top:-20px;color:gray" id="userCode" name="id" readonly="true" value="${insectNews.id}">
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
</div>
<div class="row m-t-20">
     <label class="control-label col-md-2 text-right">标题</label>
    <div class="col-md-9">
        <input class="holo required" type="text" style="margin-top:-20px;color:gray" id="title" name="title"  value="${insectNews.title!}">
    </div>
    <span class="col-md-1 text-left text-muted small"></span>  
</div>

<div class="row m-t-20">
    <label class="control-label col-md-2 text-right">内容</label>
    <div class="col-md-9">
        <input class="holo" type="text" style="margin-top:-20px;" id="remark" name="content" value="${insectNews.content!}">
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
</div>

<!-- script block -->
<script type="text/javascript">

    //生成bootstrap的select样式
    $(".selectpicker").select2({width: 180});

</script>