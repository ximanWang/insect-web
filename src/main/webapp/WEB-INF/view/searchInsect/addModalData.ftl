<div class="row-fluid m-t-20">
<#include "searchInsect/addSelectFCate.ftl">
</div>
<div class="row-fluid m-t-20">
<#include "searchInsect/addDetail.ftl">
</div>

<script type="text/javascript">

//生成bootstrap的select样式
$(".selectpicker").select2({width : 180});

fCateSelect.init();
cityRange.init();

</script>