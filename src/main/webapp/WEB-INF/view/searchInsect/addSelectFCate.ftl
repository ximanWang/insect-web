<div class="row m-t-20 addfcate-lable-div">
    <label class="control-label col-md-2 text-right">
        <span class="icon-btn btn-showfcate" title="开始配置"><i class="icon icon-expand-right" style="color: #5cb85c;float: left"></i></span>
        <span class="icon-btn btn-hiddenfcate" title="隐藏" style="display: none"><i class="icon icon-expand" style="color: #5cb85c;float: left"></i></span>
        <span >所有类目</span>
    </label>
    <div class="col-md-10" >
        <div class="m-b-20 addfcate-label" style="display: none;">
            <div class="tag label label-info">
                <span></span>
                <a class="btn-delfcate"><i class="remove glyphicon glyphicon-remove-sign glyphicon-white"></i></a>
            </div>
        </div>
    </div>
</div>


<div class="row m-t-20 addfcate-select-div" style="display: none">
    <label class="control-label col-md-2 text-right"></label>
    <label class="control-label col-md-1 text-right">父类目</label>
    <div class="col-md-3">
        <select class="citySelectpicker" id="tCityId" name="tCityId" data-live-search="true">
            <option value="">请选择</option>
            <#if cities??>
                <#list cities as city>
                    <option sortField="${city.sortField}" value="${city.cityID?c}">${city.cityName}</option>
                </#list>
            </#if>
        </select>
    </div>
    
</div>
<br />
<br />

<!-- script block -->
<script type="text/javascript">
    $(".citySelectpicker").select2({width : 180, sorter: legoSorter});

    initAFCDOMEvent();

    //初始化样式和事件
    function initAFCDOMEvent() {

        $(".btn-delfcate").unbind("click");
        $(".btn-delfcate").click(function() {
            delFCateLabel(this);
        });
    }

    $(".btn-showfcate").click(function (){
        showFCate();
    });

    $(".btn-hiddenfcate").click(function (){
        hideFCate();
    });

    //切换城市，加载类目清单
    $(".addfcate-select-div #tCityId").change(function (){
        changeCateByCityId(".addfcate-select-div");
    });
    
<#if selectCityId??>
	setSelectValue($('.addfcate-select-div #tCityId'), '${selectCityId?c}');
	$(".addfcate-select-div #tCityId").trigger('change');
</#if>

    //切换类目，新增类目标签
    $(".addfcate-select-div #fCateId").unbind("change").change(function (){
        var formId = $(this).parents("form").attr("id");
        formId = "#" + formId;

        //只能选择一个，故先删除已有的标签
        delAllFCateLabel(formId);
        addFCateLabel(formId);
        hideFCate();
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

        var fCateName = $(select$ParentId + " #fCateId").find("option:selected").text();
        var fCateId = $(select$ParentId + " #fCateId").val();
        var labelName = fCateName.replace(/— /g,"") + "[ ID:" + fCateId + " ]";

        if( fCateId != null){
            //获取隐藏的类目标签
            var newElement = $(label$Id).first().clone();
            $(newElement).show();

            $(newElement).find("span").attr("id", fCateId);
            $(newElement).find("span").html(labelName);

            //添加到最后一个addcate-label的后面
            $(newElement).insertAfter($(label$Id).last());
        }
        //重新使样式和事件生效
        initAFCDOMEvent();
    }

    //删除选中的类目标签
    function delFCateLabel(curElment){
        $(curElment).parents(".addfcate-label").remove();
        //重新使样式和事件生效
        initAFCDOMEvent();
    }

    //删除已有的类目标签
    function delAllFCateLabel(formId){
        $.each($(formId + " .addfcate-label"), function(index, value) {
            if(index > 0) {
                $(this).remove();
            }
        });
    }

    //新增页面加载前，初始化的方法
    var fCateSelect = function ($) {
        return {
            //清除之前选中的类目标签
            init : function(){
                delAllFCateLabel("#formAdd");
                showFCate();
            }
        }
    }(jQuery);

</script>