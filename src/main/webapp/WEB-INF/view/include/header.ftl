
<div class="navbar navbar-default navbar-fixed-top">
	<div class="container">
		<div class="navbar-header">
			<button class="navbar-toggle" type='button', data-toggle='collapse', data-target='.navbar-collapse'>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="#">INSECT</a>
		</div>
        <div class="collapse navbar-collapse">
        	<ul class="url nav navbar-nav navbar-left">
        		<li class="dropdown">
					<a class="dropdown-toggle" href="#", data-toggle="dropdown">
                        权限管理
						<span class="caret"></span>
					</a>
					<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
						<li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:oprUserRole()'>权限管理</a></li>
					</ul>
				</li>

                <li class="dropdown">
                    <a class="dropdown-toggle" href="#", data-toggle="dropdown">
                    	昆虫类目树展示
                    <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
                        <li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("insectCategory.tree")'>昆虫类目树管理</a></li>
                        <li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("poiCategory.tree")'>害虫类目树管理</a></li>
                    </ul>
                </li>
                
                <li class="dropdown">
                    <a class="dropdown-toggle" href="#", data-toggle="dropdown">
                    POI属性管理
                    <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
                        <#if Session.user.buId??  || Session.user.isRoot>
                            <li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("poiProperty.list")'>通用属性管理</a></li>
                            <li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("poiCateProperty.list")'>类目属性管理</a></li>
                        </#if>
                        <li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("poiPropCategory.list")'>属性类目管理</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a class="dropdown-toggle" href="#", data-toggle="dropdown">
                    我的任务
                    <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
                        <li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("checkProcess.list")'>审批流程</a></li>
                        <li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("oprBranch.list")'>仲裁流程</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a class="dropdown-toggle" href="#", data-toggle="dropdown">
                    条件查询
                    <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
                        <li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("fbMapping.list")'>条件查询</a></li>
                    </ul>
                </li>

				<li class="dropdown">
                    <a class="dropdown-toggle" href="#", data-toggle="dropdown">
	                    商户类目管理<span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
                        <#if Session.user.buId?? || Session.user.isRoot>
                            <li role="presentation">
                                <a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("poiShopCate.list")'>商户类目属性管理</a>
                            </li>
                            <li role="presentation">
                                <a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("poiImportTask.list")'>批量导入商户类目及属性</a>
                            </li>
                        </#if>
                        <li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("shopCatePropLog.list")'>查看商户修改日志</a></li>
                    </ul>
                </li>
                <#if Session.user.buId?? || Session.user.isRoot>
                    <li class="dropdown">
                        <a class="dropdown-toggle" href="#", data-toggle="dropdown">
                        工具
                        <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">

                                <#if isDeveloper || Session.user.isRoot>
                                    <li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("tool.changeLogList")'>查询数据变更日志</a></li>
                                    <li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("tool.loadCatePropAndRule")'>导入前后台类目属性及规则</a></li>
                                </#if>
                                <#if isDeveloper>
                                    <li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("tool.fbMappingQuery")'>前后台映射查询</a></li>              
                                    <li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("tool.dataInitialize")'>数据初始化工具</a></li>                 
                                </#if>
                            <#--<li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("shopMatch.list")'>点评美团商户人工匹配</a></li>-->
                        </ul>
                    </li>
                </#if>
                
        	</ul>
        	<#if Session.user?exists>
				<ul class="nav navbar-nav navbar-right">
					<li class="dropdown">
						<a class="dropdown-toggle" href="#", data-toggle="dropdown">${Session.user.realName}</a>
                        <input type="hidden" id="isRoot" value="${Session.user.isRoot?string("Y","N")}" />
                        <input type="hidden" id="globalBuId" value="<#if Session.user.buId??>${Session.user.buId}</#if>">
						<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenuUser">
							<li role="presentation">
								<#--<a role='menuitem', tabindex="-1", href='/user/setting'>设置</a>-->
								<a role='menuitem', tabindex="-1", href='logout'>注销</a>
							</li>
						</ul>
					</li>
				</ul>
			</#if>
		</div>
	</div>
</div>

<script type="text/javascript">

    function oprUserRole(){
        var isRoot = $("#isRoot").val();
        if(isRoot=="Y") insect.template.renderTemplateByKey("userRole.list");
        else toast(new msgObject("WARNING", "非超级管理员，无该操作权限。"))
    }
</script>