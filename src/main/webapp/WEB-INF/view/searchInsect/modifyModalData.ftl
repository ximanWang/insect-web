<div class="row m-t-20">
    <label class="control-label col-md-2 text-right">前台类目</label>
    <div class="col-md-3">
        <input class="holo required" type="hidden" name="id" value="${fbMapping.id?c}">
        <input class="holo required" type="hidden" id="mid" name="mid" value="${fbMapping.mid?c}">
        <input class="holo required" type="hidden" name="cityId" value="${fbMapping.tCityId?c}">
        <input class="holo required" type="hidden" name="fCateId" value="${fbMapping.fCateId?c}">
        <div class="m-b-20">
            <div class="tag label label-info">
                <span id="${fbMapping.fCateId?c}">${fbMapping.fCatename!''}</span>
            </div>
        </div>
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
</div>
<div class="row-fluid m-t-20">
    <#include "selectCate.ftl">
</div>
<#--<div class="row-fluid m-t-20">
    <#include "selectProvalue.ftl">
</div>-->
<div class="row-fluid m-t-20">
    <#include "modifyCityRange.ftl">
</div>

<div class="row m-t-20">
    <label class="control-label col-md-2 text-right">映射关系ID</label>
    <div class="col-md-3">
        <input class="holo required" type="text" style="margin-top:-20px;color:gray"  readonly="true" value="${fbMapping.mid?c}" >
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
</div>

<div class="row m-t-20">
    <label class="control-label col-md-2 text-right">创建人</label>
    <div class="col-md-3">
        <input class="holo required" type="text" style="margin-top:-20px;color:gray"  readonly="true"
                <#if fbMapping.addUserName??>
                    value="${fbMapping.addUserName}"
                <#else>
                       value="无"
                </#if>
        >
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
    <label class="control-label col-md-2 text-right">创建时间</label>
    <div class="col-md-3">
        <input class="holo required" type="text" style="margin-top:-20px;color:gray" readonly="true"
                <#if fbMapping.addTime??>
                    value="${fbMapping.addTime?string("yyyy-MM-dd HH:mm:ss")}"
                <#else>
                       value="无"
                </#if>
        >
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
</div>
<div class="row m-t-20">
    <label class="control-label col-md-2 text-right">更新人</label>
    <div class="col-md-3">
        <input class="holo required" type="text" style="margin-top:-20px;color:gray"  readonly="true"
               <#if fbMapping.updateUserName??>
                 value="${fbMapping.updateUserName}"
               <#else>
                 value="无"
               </#if>
        >
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
    <label class="control-label col-md-2 text-right">更新时间</label>
    <div class="col-md-3">
        <input class="holo required" type="text" style="margin-top:-20px;color:gray" readonly="true"
                <#if fbMapping.updateTime??>
                    value="${fbMapping.updateTime?string("yyyy-MM-dd HH:mm:ss")}"
                <#else>
                    value="无"
                </#if>
        >
    </div>
    <span class="col-md-1 text-left text-muted small"></span>
</div>

<script type="text/javascript">
    //生成bootstrap的select样式
    $(".selectpicker").select2({width : 180});

</script>