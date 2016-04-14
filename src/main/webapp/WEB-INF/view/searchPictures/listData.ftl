<table class="table mm-box">
	<tr class="th-inverse">
		<#--<th>映射关系ID</th>-->
		<th>图片ID</th>
		<th>图片</th>
		<th class="text-center" style="width: 120px;">操作</th>
	</tr>
	<tbody id="tbodyData">
        <#if typeApictures??>
            <#list typeApictures as typeApicture>
                <tr>
                    <td>
                        <#if typeApicture.id??>
                            ${typeApicture.id}
                        </#if>
                    </td>
                    <td style="font-weight: bold; font-size: 13px">
                        <#if typeApicture.url??>
                            <img src="${typeApicture.url}" /> 
                        </#if>
                    </td>
                    <td>
                        <div class="text-center">
                            <span class="icon-btn delete" name="${typeApicture.id?c}" title="删除">
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

        insect.template.renderTemplateByKey("insectSearch.loadModify", params);

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