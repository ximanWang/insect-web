<table class="table mm-box">
	<tr class="th-inverse">
		<#--<th>映射关系ID</th>-->
		<th width="20%" class="text-center">图片ID</th>
		<th width="30%" class="text-center">地址</th>
		<th width="40%" class="text-center">图片</th>
		<th class="text-center" style="width: 120px;">操作</th>
	</tr>
	<tbody id="tbodyData">
        <#if pictures??>
            <#list pictures as picture>
                <tr>
                    <td class="text-center">
                        <#if picture.id??>
                            ${picture.id}
                        </#if>
                    </td>
                    <td class="text-center">
                        <#if picture.url??>
                            ${picture.url}
                        </#if>
                    </td>
                    <td class="text-center">
                        <#if picture.url??>
                        <!--图库弹出层 开始-->
                        
						<div class="mskelayBox">
  							<div class="mske_html">
  								<img src="${picture.url}"  />
  						 </div>
  							
  							<img class="mskeClaose" src="images/mke_close.png" width="27" height="27" />
						</div>
						<!--图库弹出层 结束-->
						<div class="msKeimgBox">
						   <img src="${picture.url}" class="col-xs-4 col-md-6" />
 							  <span class="hidden">
  							     <img src="${picture.url}" />
  							  </span>
						</div>
                        </#if>
                    </td>
                    <td>
                        <div class="text-center">
                            <span class="icon-btn delete" name="${picture.id?c}" title="删除">
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

jQuery(function(){
//选项卡滑动切换通用
jQuery(function(){jQuery(".hoverTag .chgBtn").hover(function(){jQuery(this).parent().find(".chgBtn").removeClass("chgCutBtn");jQuery(this).addClass("chgCutBtn");var cutNum=jQuery(this).parent().find(".chgBtn").index(this);jQuery(this).parents(".hoverTag").find(".chgCon").hide();jQuery(this).parents(".hoverTag").find(".chgCon").eq(cutNum).show();})})

//选项卡点击切换通用
jQuery(function(){jQuery(".clickTag .chgBtn").click(function(){jQuery(this).parent().find(".chgBtn").removeClass("chgCutBtn");jQuery(this).addClass("chgCutBtn");var cutNum=jQuery(this).parent().find(".chgBtn").index(this);jQuery(this).parents(".clickTag").find(".chgCon").hide();jQuery(this).parents(".clickTag").find(".chgCon").eq(cutNum).show();})})

//图库弹出层
$(".mskeLayBg").height($(document).height());
$(".mskeClaose").click(function(){$(".mskeLayBg,.mskelayBox").hide()});
$(".msKeimgBox ").click(function(){$(".mske_html").html($(this).find(".hidden").html());$(".mskeLayBg").show();$(".mskelayBox").fadeIn(300)});

})
//屏蔽页面错误
jQuery(window).error(function(){
  return true;
});
jQuery("img").error(function(){
  $(this).hide();
});
</script>	