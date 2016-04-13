<div class="row m-t-20">
    <label class="control-label col-md-2 text-right">中文名</label>
    <div class="col-md-3">
        <input class="holo required" type="text" style="margin-top:-20px;color:gray"  name="chineseName"
                <#if insect.chineseName??>
                    value="${insect.chineseName}"
                <#else>
                       value="无"
                </#if>
        />
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
    <label class="control-label col-md-2 text-right">英文名</label>
    <div class="col-md-3">
        <input class="holo required" type="text" style="margin-top:-20px;color:gray" name="englishName"
                <#if insect.englishName??>
                    value="${insect.englishName}"
                <#else>
                       value="无"
                </#if>
        />
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
</div>
<div class="row m-t-20">
    <label class="control-label col-md-2 text-right">拉丁文名</label>
    <div class="col-md-3">
        <input class="holo required" type="text" style="margin-top:-20px;color:gray"  name="lationName"
               <#if insect.lationName??>
                 value="${insect.lationName}"
               <#else>
                 value="无"
               </#if>
        />
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
    <label class="control-label col-md-2 text-right">别名</label>
    <div class="col-md-3">
        <input class="holo required" type="text" style="margin-top:-20px;color:gray" name="alias"
                <#if insect.alias>
                    value="${insect.alias}"
                <#else>
                    value="无"
                </#if>
        />
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
</div>
<div class="row m-t-20">
    <label class="control-label col-md-2 text-right">寄主</label>
    <div class="col-md-6">
        <input class="holo required" type="text"  style="margin-top:-20px;color:gray" name="host"
               <#if insect.host??>
                 value="${insect.host}"
               <#else>
                 value="无"
               </#if>
        />
    </div>
</div>
<div class="row m-t-20">
    <label class="control-label col-md-2 text-right">分布</label>
    <div class="col-md-6">
        <input class="holo required" type="text"  style="margin-top:-20px;color:gray" name="distribution" 
               <#if insect.distribution??>
                 value="${insect.distribution}"
               <#else>
                 value="无"
               </#if>
        />
    </div>
</div>
<div class="row m-t-20">
    <label class="control-label col-md-2 text-right">采集地</label>
    <div class="col-md-6">
        <input class="holo required" type="text"  style="margin-top:-20px;color:gray" name="gatherPlace"  
               <#if insect.gatherPlace??>
                 value="${insect.gatherPlace}"
               <#else>
                 value="无"
               </#if>
        />
    </div>
</div>
<div class="row m-t-20">
    <label class="control-label col-md-2 text-right">特征</label>
    <div class="col-md-10">
        <input class="holo required" type="text"  style="margin-top:-20px;color:gray" name="features" 
               <#if insect.features??>
                 value="${insect.features}"
               <#else>
                 value="无"
               </#if>
        />
    </div>
</div>

<script type="text/javascript">
    //生成bootstrap的select样式
    $(".selectpicker").select2({width : 180});

</script>