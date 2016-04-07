 <#assign c=JspTaglibs["http://java.sun.com/jstl/core_rt"]>
<#assign fmt=JspTaglibs["http://java.sun.com/jsp/jstl/fmt"]>
<#assign fn=JspTaglibs["http://java.sun.com/jsp/jstl/functions"]>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insect Tree</title>

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet", href="<@c.url value='/css/jq/jquery-ui-1.10.4.custom.min.css'/>">
<link rel="stylesheet", href="<@c.url value='/css/bootstrap.css'/>">
<link rel="stylesheet", href="<@c.url value='/font-css/fontello.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/select2/select2.min.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/style.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/fullcalendar.css'/>" >
<link href="<@c.url value='/css/fullcalendar.print.css'/>", rel="stylesheet", media="print" />
<link rel="stylesheet", href="<@c.url value='/css/bootstrap-modal-bs3patch.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/bootstrap-modal.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/bootstrap-switch.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/bootstrap-tagsinput.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/toastr.min.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/pagination.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/bootstrap-tagsinput.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/datepicker.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/easyTree.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/waitMe.min.css'/>" >
<link rel="stylesheet", href="<@c.url value='/css/finalstyle.css'/>" >

<script type="text/javascript" src="<@c.url value='/js/jquery-1.11.2.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/jquery.validate.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/messages_cn.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/jquery.validate.bootstrap.popover.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/select2/select2.full.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/runtime.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/jquery-ui-1.10.4.custom.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/fullcalendar.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/toastr.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/highcharts.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/lego.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/utils.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/jquery.pagination.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/template.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/bootstrap-tagsinput.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/jquery.fileupload.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/jquery.iframe-transport.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/jquery.ui.widget.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/easyTree.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/bootstrap-datepicker.js'/>"></script>
<script type="text/javascript" src="<@c.url value='/js/bootstrap-tagsinput.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/waitMe.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/ajaxfileupload.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/bootstrap.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/bootstrap-button.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/bootstrap-modalmanager.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/bootstrap-modal.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/bootstrap-switch.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/bootstrap-filestyle.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/jquery.fileDownload.js'/>" ></script>
<style>
        body {
            background: #eee;
        }
</style>
</head>
<body>
<!-- html block -->
<div class="lead-title" style="height:50px">
    <p class="p-insect" style="color: #fafafa">Insect</p>
</div>
<div class="lead-second" style="height: 80px">sdfv</div>
    <div class="col-sm-10 col-sm-offset-1 mm-box form-horizontal filter-pan">
            <div class="easy-tree2" >
                <div class="main-content">
                	<#if insectQuery.getChineseName()??>
                	<p>中文名：
                	<input type="text" name="insectQuery.getChineseName()" value="${insectQuery.getChineseName()}" />
                	</p>
                	</#if>
                	
                	<#if insectQuery.getLationName()??>
                    <p>2.学名（拉丁文）：${insectQuery.getLationName()}</p>
                    </#if>
                    
                    <#if insectQuery.getEnglishName()??>
                    <p>3.学名（英文）：${insectQuery.getEnglishName()}</p>
                    </#if>
                    
                    <#if insectQuery.getAlias()??>
                    <p>4.别名：${insectQuery.getAlias()}</p>
                    </#if>
                    
                    <p>5.分类地位（中文）：<br/>
                    <#list insectCateList as item>
                    	<p>${item.getCategoryName()}(${item.getLationName()})</p>
                    </#list>
                       
                    </p>
                    
                    <#if insectQuery.getIsPest()==1>
                    <p>7.害虫种类：蛀干害虫</p>
                    <p>8.种类细分：天牛类</p>
                    </#if>
                    
                    <#if insectQuery.getFeatures()??>
                    <p>9.形态特征：${insectQuery.getFeatures()}</p>
                    </#if> 
                    
                    <#if insectQuery.getHost()??>
                    <p>10.寄主：${insectQuery.getHost()}</p>
                    </#if>
                    
                    <#if insectQuery.getDistribution()??>
                    <p>11.分布：${insectQuery.getDistribution()}</p>
                    </#if>
                    
                    <#if insectQuery.getGatherPlace()??>
                    <p>12.采集地：${insectQuery.getGatherPlace()}</p>
                    </#if>
                </div>
        </div>

    </div>
</div>
    <!-- script block -->
    <script type="text/javascript">

        function toggleChevron(e) {
            $(e.target)
                    .prev('.panel-heading')
                    .find("i.indicator")
                    .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
        }
        $('#accordion').on('hidden.bs.collapse', toggleChevron);
        $('#accordion').on('shown.bs.collapse', toggleChevron);

        $(".selectpicker").select2({width: 180});
        var treeLoader = new EasyTree.TreeLoader(".easy-tree");

        treeLoader.buildTree({
            addable: true,
            editable: true,
            deletable: true,
            undoCallback : function() {
                $("#undoOprConfirm").modal("show");
            },
            adjustSelect : function() {
                $("#selectAdjustPoiCategory").modal("show");
            }
        });

        $('.easy-tree-toolbar').affix({
            offset: {
                top: $('.easy-tree-toolbar').offset().top - 30
            }
        });

        $("#cancel, .close").click(function() {
            $(".modal").modal("hide");
            $(".popover").each( function() {
                $(this).hide();
            });
        });

        $("#selectAdjustPoiCategory .ok").click(function() {
            var adjustType = $("#selectAdjustPoiCategory #adjustType").val()
            var adjustCategoryId = $("#selectAdjustPoiCategory #adjustCategoryId").val();

            //add opr record to list
            treeLoader.adjustNode(adjustCategoryId, adjustType);
            $("#selectAdjustPoiCategory").modal('hide');
        })

    </script>
</body>
</html>