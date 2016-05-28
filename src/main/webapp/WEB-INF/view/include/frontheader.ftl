
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
                    	首页
                    <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
                        <li role="presentation"><a role='menuitem', tabindex="-1", href="${rc.contextPath}/index">返回首页</a></li>
                    </ul>
                </li>
                
                <li class="dropdown">
                    <a class="dropdown-toggle" href="#", data-toggle="dropdown">
                  	  条件查询
                    <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
                        <li role="presentation"><a role='menuitem', tabindex="-1", href='${rc.contextPath}/insectSearch'>条件查询</a></li>
                    </ul>
               
                    <li class="dropdown">
                        <a class="dropdown-toggle" href="#", data-toggle="dropdown">
                     有问必答
                        <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
                               <li role="presentation"><a role='menuitem', tabindex="-1", href='${rc.contextPath}/talkList'>问题浏览</a></li>
                                 <li role="presentation"><a role='menuitem', tabindex="-1", href='${rc.contextPath}/askLoad'>我要提问</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a class="dropdown-toggle" href="#", data-toggle="dropdown">
                    看图识虫
                        <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
                               <li role="presentation"><a role='menuitem', tabindex="-1", href='javascript:insect.template.renderTemplateByKey("user.detail")'>看图识虫</a></li>
                        </ul>
                    </li>
                
                    
                    <#if Session.user?exists>
                    	<li class="dropdown">
                        <a class="dropdown-toggle" href="#", data-toggle="dropdown">
                      个人中心
                        <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
                               <li role="presentation"><a role='menuitem', tabindex="-1", href="${rc.contextPath}/index">修改个人信息</a></li>
                        </ul>
                    </li>
                     
                    <#else>
                    	<li class="dropdown">
                        <a class="dropdown-toggle" href="#", data-toggle="dropdown">
                      登录
                        <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
                               <li role="presentation"><a role='menuitem', tabindex="-1", href="${rc.contextPath}/login">登录</a></li>
                        </ul>
                    </li>
               </#if>
                
        	</ul>
        	<#if Session.user?exists>
				<ul class="nav navbar-nav navbar-right">
					<li class="dropdown">
						<a class="dropdown-toggle" href="#", data-toggle="dropdown">欢迎，${Session.user.getUserName()}</a>
						
						<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenuUser">
							<li role="presentation">
								<a role='menuitem', tabindex="-1", href='${rc.contextPath}/logout'>注销</a>
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