
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
                    	图片管理
                    <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
                        <li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("searchPictures.list")'>昆虫图片管理</a></li>
                        <li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("poiPropCategory.list")'>昆虫图片上传</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a class="dropdown-toggle" href="#", data-toggle="dropdown">
                  	  条件查询
                    <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
                        <li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("insectSearch.list")'>条件查询</a></li>
                    </ul>
                </li>
                <#if Session.user.isRoot>
                    <li class="dropdown">
                        <a class="dropdown-toggle" href="#", data-toggle="dropdown">
                        工具
                        <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
                               
                        </ul>
                    </li>
                </#if>
                
        	</ul>
        	<#if Session.user?exists>
				<ul class="nav navbar-nav navbar-right">
					<li class="dropdown">
						<a class="dropdown-toggle" href="#", data-toggle="dropdown">${Session.user.getUserName()}</a>
						<input type="hidden" id="isRoot" value="${Session.user.isRoot?string("Y","N")}" />
						<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenuUser">
							<li role="presentation">
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