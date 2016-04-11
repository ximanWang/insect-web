<table class="table mm-box">
	<tr class="th-inverse">
		<#--<th>映射关系ID</th>-->
		<th>类目ID</th>
		<th>中文名称</th>
		<th>拉丁名称</th>
		<th class="text-center" style="width: 120px;">操作</th>
	</tr>
	<tbody id="tbodyData">
        <#if fbMappingList??>
            <#list fbMappingList as fbMapping>
                <tr>
                    <td>
                        <#if fbMapping.getCategoryId()??>
                            ${fbMapping.getCategoryId()}
                        </#if>
                    </td>
                    <td style="font-weight: bold; font-size: 13px">
                        <#if fbMapping.getCategoryName()??>
                            ${fbMapping.getCategoryName()}
                        </#if>
                    </td>
                    <td>
                        <#if fbMapping.getLationName()??>
                            ${fbMapping.getLationName()}
                        </#if>
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

        insect.template.renderTemplateByKey("fbMapping.loadModify", params);

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