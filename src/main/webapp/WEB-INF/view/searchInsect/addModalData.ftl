<div class="row-fluid m-t-20">
<#include "selectFCate.ftl">
</div>
<div class="row-fluid m-t-20">
<#include "selectCate.ftl">
</div>
<#--<div class="row-fluid m-t-20">
<#include "selectProvalue.ftl">
</div>-->
<div class="row-fluid m-t-20">
<#include "addCityRange.ftl">
</div>

<script type="text/javascript">

//生成bootstrap的select样式
$(".selectpicker").select2({width : 180});

fCateSelect.init();
cateSelect.init();
//provalueSelect.init();
cityRange.init();

</script>