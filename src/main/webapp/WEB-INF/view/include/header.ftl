
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
                    	昆虫分类树展示
                    <span class="caret"></span>
                    </a>
                    <#if isRoot>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
                        <li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("insectCategory.adminTree")'>昆虫分类树管理</a></li>
                        <li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("pestCategory.adminTree")'>害虫分类树管理</a></li>
                    </ul>
                    <#else>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
                        <li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("insectCategory.tree")'>昆虫分类树管理</a></li>
                        <li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("pestCategory.tree")'>害虫分类树管理</a></li>
                    </ul>
                    
                    </#if>
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
                
                    <li class="dropdown">
                        <a class="dropdown-toggle" href="#", data-toggle="dropdown">
                      提问管理
                        <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
                               <li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("insectTalk.list")'>问题列表</a></li>
                        </ul>
                    </li>
                <li class="dropdown">
                        <a class="dropdown-toggle" href="#", data-toggle="dropdown">
                      试题管理
                        <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
                               <li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("onlineTest.list")'>试题列表</a></li>
                        </ul>
                    </li>
                    
                	 <li class="dropdown">
                        <a class="dropdown-toggle" href="#", data-toggle="dropdown">
                      公告管理
                        <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
                               <li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("insectNews.list")'>公告管理</a></li>
                        </ul>
                    </li>
                    
                    <li class="dropdown">
                        <a class="dropdown-toggle" href="#", data-toggle="dropdown">
                       前台系统
                        <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
                               <li role="presentation"><a role='menuitem', tabindex="-1", href="${rc.contextPath}/index">前台主页面</a></li>
                        </ul>
                    </li>
               
                
        	</ul>
        	<#if Session.user?exists>
				<ul class="nav navbar-nav navbar-right">
					<li class="dropdown">
						<a class="dropdown-toggle" href="#", data-toggle="dropdown">${Session.user.getUserName()}</a>
						<input type="hidden" id="isRoot" value="${isRoot?string("Y","N")}" />
						<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenuUser">
							<li role="presentation">
								<a role='menuitem', tabindex="-1", href='logout'>注销</a>
								<a role='menuitem', tabindex="-1", href='logout'>修改个人信息</a>
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