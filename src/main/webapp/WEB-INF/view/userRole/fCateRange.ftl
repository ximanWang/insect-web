<div class="row m-t-20 addfcate-lable-div">
    <label class="control-label col-md-2 text-right">
        <span class="icon-btn btn-showfcate" title="开始配置"><i class="icon icon-expand-right" style="color: #5cb85c;float: left"></i></span>
        <span class="icon-btn btn-hiddenfcate" title="隐藏" style="display: none"><i class="icon icon-expand" style="color: #5cb85c;float: left"></i></span>
        <span >前台权限范围</span>
    </label>
    <div class="col-md-10" >
        <div class="m-b-20 addfcate-label" style="float:left;display: none;">
            <div class="tag label label-info">
                <span></span>
                <a class="btn-delfcate"><i class="remove glyphicon glyphicon-remove-sign glyphicon-white"></i></a>
            </div>
        </div>
    <#if userRole??>
        <#if userRole.cateRangList??>
            <#list userRole.cateRangList as cateRange>
                <div class="m-b-20 addfcate-label" style="float:left;">
                    <div class="tag label label-info">
                        <span id="${cateRange.labelId?c}">${cateRange.labelName}</span>
                        <a class="btn-delfcate"><i class="remove glyphicon glyphicon-remove-sign glyphicon-white"></i></a>
                    </div>
                </div>
            </#list>
        </#if>
    </#if>
    </div>
</div>

<div class="row m-t-20 addfcate-select-div" style="display: none">
    <label class="control-label col-md-2 text-right"></label>
    <label class="control-label col-md-1 text-right">行业</label>
    <div class="col-md-3">
        <select class="selectpicker" id="fAncestorId" data-live-search="true">
            <option value="">请选择</option>
            <#if fAncestorList??>
                <#list fAncestorList as cate>
                    <option value="${cate.categoryID?c}">${cate.categoryName}</option>
                </#list>
            </#if>
        </select>
    </div>
    <#--<span class="col-md-2 text-left text-muted btn-span">-->
        <#--<span class="icon-btn btn-addfcate" title="新增"><i class="icon icon-ok-circled-2" style="color: #5cb85c"></i></span>-->
    <#--</span>-->
</div>

<script type="text/javascript">

    $(".selectpicker").select2({width: 180});

    initFCateDOMEvent();

    //初始化样式和事件
    function initFCateDOMEvent() {


        $(".btn-delfcate").unbind("click");
        $(".btn-delfcate").click(function() {
            delFCateLabel(this);
        });

    }

//    $(".btn-addfcate").click(function() {
//        var formId = $(this).parents("form").attr("id");
//        addFCateLabel(formId);
//    });

    $(".btn-showfcate").click(function (){
        showFCate();
    });

    $(".btn-hiddenfcate").click(function (){
        hideFCate();
    });

    //切换类目，新增类目标签
    $(".addfcate-select-div #fAncestorId").unbind("change").change(function (){
        var formId = $(this).parents("form").attr("id");
        formId = "#" + formId;

        addFCateLabel(formId);
        //刷新使select生效
        //$(".selectpicker").selectpicker("refresh");
//        hideFCate();
    });

    //显示前台类目的选项
    function showFCate(){
        $(".addfcate-select-div").show();
        $(".btn-showfcate").hide();
        $(".btn-hiddenfcate").show();
    }

    //隐藏前台类目的选项
    function hideFCate(){
        $(".addfcate-select-div").hide();
        $(".btn-hiddenfcate").hide();
        $(".btn-showfcate").show();
    }

    //新增选中的类目标签
    function addFCateLabel(formId){

        //选择框的父ID
        var select$ParentId = formId + " .addfcate-select-div";
        //Label标签的ID
        var label$Id = formId + "  .addfcate-label";

        var fAncestorName = $(select$ParentId + " #fAncestorId").find("option:selected").text();
        var fAncestorId = $(select$ParentId + " #fAncestorId").val();

        if( fAncestorId != null){

            if($(formId + " .addfcate-lable-div #"+fAncestorId).length <= 0){
                var labelName = fAncestorName;

                //获取隐藏的类目标签
                var newElement = $(label$Id).first().clone();
                $(newElement).attr("style","float:left;");

                $(newElement).find("span").attr("id", fAncestorId);
                $(newElement).find("span").html(labelName);

                //添加到最后一个addfcate-label的后面
                $(newElement).insertAfter($(label$Id).last());
            }else{
                toast(new msgObject("WARNING", "已存在该频道,请勿重复添加！"));
            }
        }else{
            toast(new msgObject("WARNING", "请选择频道！"));
        }

        //重新使样式和事件生效
        initFCateDOMEvent();
    }

    //删除选中的类目标签
    function delFCateLabel(curElment){
        $(curElment).parents(".addfcate-label").remove();
        //重新使样式和事件生效
        initFCateDOMEvent();
    }

    var fcateSelect = function ($) {
        return {
            //清除之前选中的类目标签
            init : function(formId){
                $.each($(formId + " .addfcate-label"), function(index, value) {
                    if(index > 0) {
                        $(this).remove();
                    }
                });
                showFCate();
            }
        }
    }(jQuery);

</script>