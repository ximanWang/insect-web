<div class="row m-t-20 addcate-lable-div">
    <label class="control-label col-md-2 text-right">
        <span class="icon-btn btn-showcate" title="开始配置" ><i class="icon icon-expand-right" style="color: #5cb85c;float: left"></i></span>
        <span class="icon-btn btn-hiddencate" title="隐藏" style="display: none"><i class="icon icon-expand" style="color: #5cb85c;float: left"></i></span>
        <span>后台权限范围</span>
    </label>
    <div class="col-md-10" >
        <div class="m-b-20 addcate-label" style="float:left;display: none;">
            <div class="tag label label-info">
                <span></span>
                <a class="btn-delcate"><i class="remove glyphicon glyphicon-remove-sign glyphicon-white"></i></a>
            </div>
        </div>
    <#if userRole??>
        <#if userRole.cateRangList??>
            <#list userRole.cateRangList as cateRange>
                <div class="m-b-20 addcate-label" style="float:left;">
                    <div class="tag label label-info">
                        <span id="${cateRange.labelId?c}">${cateRange.labelName}</span>
                        <a class="btn-delcate"><i class="remove glyphicon glyphicon-remove-sign glyphicon-white"></i></a>
                    </div>
                </div>
            </#list>
        </#if>
    </#if>
    </div>
</div>

<div class="row m-t-20 addcate-select-div" style="display: none">
    <label class="control-label col-md-2 text-right"></label>
    <label class="control-label col-md-1 text-right">行业</label>
    <div class="col-md-3">
        <select class="selectpicker" id="ancestorId" data-live-search="true">
            <option value="">请选择</option>
            <#if bAncestorList??>
                <#list bAncestorList as cate>
                    <option value="${cate.categoryId?c}">${cate.categoryName}</option>
                </#list>
            </#if>
        </select>
    </div>
    <label class="control-label col-md-1 text-right">类目</label>
    <div class="col-md-3">
        <select class="selectpicker"  id="categoryId" data-live-search="true">
        </select>
    </div>
    <#--<span class="col-md-2 text-left text-muted btn-span">-->
        <#--<span class="icon-btn btn-addcate" title="新增"><i class="icon icon-ok-circled-2" style="color: #5cb85c"></i></span>-->
    <#--</span>-->
</div>

<script type="text/javascript">

    $(".selectpicker").select2({width: 180});

    initBCateDOMEvent();

    //初始化样式和事件
    function initBCateDOMEvent() {

        $(".btn-delcate").unbind("click");
        $(".btn-delcate").click(function() {
            delCateLabel(this);
        });

    }

//    $(".btn-addcate").click(function() {
//        var formId = $(this).parents("form").attr("id");
//        addCateLabel(formId);
//    });

    $(".btn-showcate").click(function (){
        showCate();
    });

    $(".btn-hiddencate").click(function (){
        hideCate();
    });

    //频道select切换时触发事件
    $(".addcate-select-div #ancestorId").unbind("change").change(function() {
        changeAncestorSelect(this);
    });

    //切换类目，新增类目标签
    //$(".addcate-select-div #categoryId").unbind("change");
    $(".addcate-select-div #categoryId").unbind("change").change(function (){
        var formId = $(this).parents("form").attr("id");
        formId = "#" + formId;

        addCateLabel(formId);
        //刷新使select生效
        //$(".selectpicker").selectpicker("refresh");
        //hideCate();
    });

    //显示类目的选项
    function showCate(){
        $(".addcate-select-div").show();
        $(".btn-showcate").hide();
        $(".btn-hiddencate").show();
    }

    //隐藏类目的选项
    function hideCate(){
        $(".addcate-select-div").hide();
        $(".btn-hiddencate").hide();
        $(".btn-showcate").show();
    }

    //新增选中的类目标签
    function addCateLabel(formId){

        //选择框的父ID
        var select$ParentId = formId + " .addcate-select-div";
        //Label标签的ID
        var label$Id = formId + "  .addcate-label";

        var ancestorName = $(select$ParentId + " #ancestorId").find("option:selected").text();
        var ancestorId = $(select$ParentId + " #ancestorId").val();
        var categoryName = $(select$ParentId + "  #categoryId").find("option:selected").text();
        var categoryId = $(select$ParentId + " #categoryId").val();

        if( categoryId != null){

            if($(formId + " .addcate-lable-div #"+categoryId).length <= 0){
                var labelName = ancestorName + "-" + categoryName.replace(/— /g,"");

                //获取隐藏的类目标签
                var newElement = $(label$Id).first().clone();
                $(newElement).attr("style","float:left;");

                $(newElement).find("span").attr("id", categoryId);
                $(newElement).find("span").html(labelName);

                //添加到最后一个addcate-label的后面
                $(newElement).insertAfter($(label$Id).last());
            }else{
                toast(new msgObject("WARNING", "已存在该类目,请勿重复添加！"));
            }
        }else{
            toast(new msgObject("WARNING", "请选择类目！"));
        }

        //重新使样式和事件生效
        initBCateDOMEvent();
    }

    //删除选中的类目标签
    function delCateLabel(curElment){
        $(curElment).parents(".addcate-label").remove();
        //重新使样式和事件生效
        initBCateDOMEvent();
    }

    //权限范围的频道select切换时触发事件
    function changeAncestorSelect(curElement){

        var ancestorSelectElement = $(curElement);
        $.ajax({
            type: "POST",
            url: "userRole/loadBCateListByAncestoryId",
            dataType: "json",
            data: {ancestorId : $(ancestorSelectElement).val()},
            success: function (data) {
                var bCategoryList = data.bCategoryList;
                var cateElement = $(ancestorSelectElement).parents(".addcate-select-div").find("#categoryId");
                $(cateElement).empty();
                $(cateElement).append("<option  value=''>请选择</option>");
                for(var i=0; i<bCategoryList.length; i++){
                    $(cateElement).append("<option  value=" + bCategoryList[i].categoryId + ">" + bCategoryList[i].categoryName + "</option>");
                }
                //刷新使select生效
                //$(".selectpicker").selectpicker("refresh");
            }
        });
        //重新使样式和事件生效
        initBCateDOMEvent();
    }

    var cateSelect = function ($) {
        return {
            //清除之前选中的类目标签
            init : function(formId){
                $.each($(formId + " .addcate-label"), function(index, value) {
                    if(index > 0) {
                        $(this).remove();
                    }
                });
                showCate();
            }
        }
    }(jQuery);

</script>