<table class="table mm-box">
	<tr class="th-inverse">
		<#--<th>映射关系ID</th>-->
		<th>前台类目ID</th>
		<th>前台类目名称</th>
		<th>关联后台类目</th>
		<th class="text-center" style="width: 80px;">生效城市</th>
		<th class="text-center" style="width: 120px;">操作</th>
	</tr>
	<tbody id="tbodyData">
        <#if fbMappingList??>
            <#list fbMappingList as fbMapping>
                <tr>
                    <#--<td>-->
                        <#--<#if fbMapping.mid??>-->
                            <#--${fbMapping.mid?c}-->
                        <#--</#if>-->
                    <#--</td>-->
                    <td>
                        <#if fbMapping.fCateId??>
                            ${fbMapping.fCateId?c}
                        </#if>
                    </td>
                    <td style="font-weight: bold; font-size: 13px">
                        <#if fbMapping.fCatename??>
                            ${fbMapping.fCatename}
                        </#if>
                    </td>
                    <td>
                        <#if fbMapping.bCateShowList??>
                            <#list fbMapping.bCateShowList as bCateShow>
                            	<#if bCateShow??>
			                        <#if bCateShow_index lte 9 >
			                        	<#if (bCateShow_index % 2) == 0>
			                            	${bCateShow.labelName}
			                            <#else>
			                            	, ${bCateShow.labelName}<br>
			                            </#if>
			                        <#elseif bCateShow_index == 10>
			                            ...
			                        <#else>
			                        </#if>
		                        </#if>
                            </#list>
                        </#if>
                    </td>
                    <#--<td>
                        <#if fbMapping.inProvalueShowList??>
                            <#list fbMapping.inProvalueShowList as inProvalueShow>
                                <label  style="color: #030303">&</label>${inProvalueShow.labelName}<br>
                            </#list>
                        </#if>
                        <#if fbMapping.outProvalueShowList??>
                            <#list fbMapping.outProvalueShowList as outProvalueShow>
                                <label  style="color: #030303">!</label>${outProvalueShow.labelName}<br>
                            </#list>
                        </#if>
                    </td>-->
                    <td>
                        <div class="text-center">
                            <span class="icon-btn downloadCitys" name="${fbMapping.mid?c}" title="下载列表">
                            	<i class="icon icon-download-6"></i>
                            </span>
                        </div>
                    </td>
                    <td>
                        <div class="text-center">
                            <span class="icon-btn loadModify" name="${fbMapping.mid?c}" title="编辑">
                            	<i class="icon icon-edit-3"></i>
                            </span>
                            <span class="icon-btn delete" name="${fbMapping.mid?c}" title="删除">
                            	<i class="icon icon-trash"></i>
                            </span>
                        </div>
                    </td>
               </tr>
           </#list>
        </#if>
	</tbody>
</table>

<div id="fbMappingPageBar"></div>

<!-- script block -->
<script type="text/javascript">
	$("#fbMappingListData .downloadCitys").click(function(ev) {
		var mid = $(this).attr('name');
        location.href = 'fbMapping/downYetCityRange/'+parseInt(mid);
	});
	
    $("#fbMappingListData .loadModify").click(function(ev) {
        var params = {};
        params.mid = parseInt($(this).attr("name"));

        lego.template.renderTemplateByKey("fbMapping.loadModify", params);

        $("#modifyModal").modal("show");
        $("#formModify").validate_popover({onsubmit: false, popoverPosition: "top"});
        $("#modifyModal").on("scroll", function() { $.validator.reposition(); });
        $("#modifyModal").on("hide.bs.modal", function (e) {
            $(".popover").each( function() {
                $(this).hide();
            });
        });
        $(window).resize(function() {
            $.validator.reposition();
        });
    });

    var curMId;

    $("#fbMappingListData .delete").click(function(ev) {
        ev.preventDefault();
        curMId = $(this).attr("name");
        $("#opDelConfirm").modal("show");
    });

fbMappingPagination.bar("#fbMappingPageBar", ${pagination.total?c}, ${pagination.pageCount?c}, ${pagination.currentPage?c});
</script>	