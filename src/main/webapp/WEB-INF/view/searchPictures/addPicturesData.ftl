<div class="row-fluid m-t-20">
<#include "searchPictures/addSelectFCate.ftl">
</div>
<div class="row-fluid m-t-20">
<#include "searchPictures/addDetail.ftl">
</div>

<script type="text/javascript">

//生成bootstrap的select样式
$(".selectpicker").select2({width : 180});

fCateSelect.init();
cateSelect.init();
//provalueSelect.init();
cityRange.init();

</script>