<div class="row m-t-20">
    <label class="control-label col-md-2 text-right">
        <span >适用城市范围</span>
    </label>
    <div class='col-md-8 city-range-keyword'>
        <div class="btn-group" data-toggle="buttons-radio" id="cityRangType">
            <button class='btn btn-sm btn-light-info active' value='1'>所有国内城市</button>
            <button class='btn btn-sm btn-light-info' value='2'>所有海外城市</button>
            <button class='btn btn-sm btn-light-info' value='0'>部分城市</button>
        </div>
    </div>
</div>

<div class="row m-t-20">
    <label class="control-label col-md-2 text-right"></label>
    <div class='col-md-3 select-keyword' hidden>
    	<div class="btn-group" data-toggle='buttons-radio' id='selectOrUpload' name='selectOrUpload'>
            <button class="btn btn-sm btn-light-info active" value="0">选择城市</button>
            <button class="btn btn-sm btn-light-info" value="1">上传城市</button>
        </div>
    </div>
    <div class="col-md-2 selectWrapper" hidden>
        <select class="citySelectpicker" id="selectCityId" name="selectCityId" data-live-search="true">
            <option value="">请选择</option>
            <#if cities??>
                <#list cities as city>
                    <option sortField="${city.sortField}" value="${city.cityID?c}">${city.cityName}</option>
                </#list>
            </#if>
        </select>
    </div>
    <div class="col-md-2 cityWrapper" style="text-align:right;" hidden>
        <input type='file' class="filestyle" name='addCityRange' id='addCityRange' data-buttonName="btn-primary">
    </div>
    <div class="col-md-2 cityWrapper" style="text-align:left;" hidden>
        <button id="downloadTemplate" class="btn btn-sm btn-primary" >
            <i class="icon icon-download-6">下载模版</i>
        </button>
    </div>
</div>

<script type="text/javascript">

    $("#addCityRange").filestyle({buttonText: "上传城市列表", size: "sm", iconName: "icon-upload-5", buttonName: "btn-primary", input: false});
	$("#formAdd .citySelectpicker").select2({width: 180, sorter: legoSorter});
    
    $('#formAdd #downloadTemplate').click(function() {
        location.href = 'dpCategory/downloadOpenCityData/1';
    });
    
    $(function(){
        $("#formAdd #selectOrUpload button").each(function(){
           $(this).click(function(){
                if($(this).val() == 0){
                	$('#formAdd .selectWrapper').show();
                   	$('#formAdd .cityWrapper').hide();
                    $("#addCityRange").filestyle('clear');
                } else {
                    $('#formAdd .selectWrapper').hide();
                    $('#formAdd .cityWrapper').show();
                }
            });
        });
    });

    $("#formAdd #cityRangType .btn").click(function() {
        var cityRangType = $(this).val();
        if(cityRangType == '0') {
            $('#formAdd .select-keyword').show();
            $('#formAdd .selectWrapper').show();
        } else {
            $('#formAdd .select-keyword').hide();
            $('#formAdd .selectWrapper').hide();
            $('#formAdd .cityWrapper').hide();
            $("#addCityRange").filestyle('clear');
        }
    });

    //新增页面加载前，初始化的方法
    var cityRange = function ($) {
        return {
            //清除之前选中的类目标签
            init : function(){
                $('#formAdd .cityWrapper').hide();
                $("#addCityRange").filestyle('clear');
                //默认选中当前城市
                $("#formAdd #cityRangType > .btn").each(function(index,value){
                    if($(this).val()=='1') $(this).addClass("active");
                    else $(this).removeClass("active");
                });
            }
        }
    }(jQuery);

</script>