<!-- html block -->
<div class="row m-t-20 m-b-20">
    <div class="col-sm-10 col-sm-offset-1 mm-box form-horizontal filter-pan">
        <div class="row-fluid">
            <h3 class="text-success text-center">Insect Tree</h3>
            <div id="search_box">
                <form id="search_form" method="post" action="#">
                    <input type="text" id="s" value="Search" class="swap_value" />
                    <input type="image" src="http://files.jb51.net/demoimg/200912/btn_search_box.gif" width="27" height="24" id="go" alt="Search" title="Search" />
                </form>
            </div>
            <div class="panel-group m-t-20 m-r-20" id="accordion" style="display: none;float: right;width: 350px;">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                操作日志
                            </a><i class="indicator glyphicon glyphicon-chevron-down  pull-right"></i>
                        </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse in">
                        <div class="panel-body" id="tree-action-msg-bar">
                            <ul class="tree-action-msg scroll" style="max-height: 100px;">
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="easy-tree" style="display: none">
                <ul>
                    <#if insectCategoryHTML??>
                        ${insectCategoryHTML}
                    </#if>
                </ul>
            </div>

        </div>

        <div class="row">
            <div class="divider divider-default"></div>
        </div>

        <div class="form-group text-center m-t-20">
            <button class="btn btn-lg btn-success" id="queryQuick">
                <i class="icon icon-ok-6">提交</i>
            </button>
        </div>
    </div>
</div>

    <div class="modal fade" id="opCommitOprConfirm" tabindex="-1", style="display: none;">
        <div class="modal-body">
            <p id="confirmMsg">确定提交本次操作申请吗？
        </div>
        <div class="modal-footer">
            <div class="text-center">
                <button class="cancel btn btn-default" style="margin-right: 40px;", data-dismiss="modal">取消</button>
                <button id="ok" class="btn btn-danger">确定</button>
            </div>
        </div>
    </div>

    <div class="modal fade" id="undoOprConfirm" tabindex="-1", style="display: none;">
        <div class="modal-body">
            <p id="confirmMsg">确定撤销所有操作吗？
        </div>
        <div class="modal-footer">
            <div class="text-center">
                <button class="cancel btn btn-default" style="margin-right: 40px;", data-dismiss="modal">取消</button>
                <button id="ok" class="btn btn-danger">确定</button>
            </div>
        </div>
    </div>


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
        showMsg: true,
        showMsgSelector : '.tree-action-msg',
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

    var oprCommitList = [];

    $("#queryQuick").click(function() {
        oprCommitList = treeLoader.getOprList();
        if(oprCommitList.length == 0) {
            showWarningMsg("您还未做任何操作！");
        } else {
            $("#opCommitOprConfirm").modal("show");
        }
    })

    $("#opCommitOprConfirm #ok").click(function() {
    	var formData = {};
        formData.insectOprs = oprCommitList;
		startloading();
        $.ajax({
            type: "POST",
            url: 'insectCategory/addProcess',
            contentType: 'application/json',
            dataType: "json",
            data: JSON.stringify(formData),
            success:function(data){
            	closeLoading();
                $(".commit-modal-dialog").modal("hide");
                if(data.extra && data.extra.length > 0){
			   		logModal.show(data.body, data.extra);
			    } else {
				    toast(data);
			    }
			    $("#opCommitOprConfirm").modal("hide");
            	insect.template.renderTemplateByKey("insectCategory.tree");
        	}
        });
    })

    $('#undoOprConfirm #ok').click(function() {
        $('#undoOprConfirm').modal('hide');
        lego.template.renderTemplateByKey("poiCategory.tree");
    });


</script>
