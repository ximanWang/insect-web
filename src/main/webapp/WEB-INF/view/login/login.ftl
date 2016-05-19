<div>
	<form action="/insect-web/admin/index" method="post">
	
		用户名：<input id="username" type="text" name="username" /><br /><br />
		密码：<input id="password" type="password" name="password" /><br />
		<input type="submit" value="提交" onclick="login()"/>
	</from>

</div>

<script type="text/javascript">

	function login(){
		var userName = document.getElementById("username")
		if(userName.value == ""){
			alert("null");
		}else{
			 $.ajax({  
                url:'/insect-web/admin/index',  
                data:'username='+username.value+'&password='+password.value+'',   
                success:function(msg){  
                   var data=msg;  
                    if(0<data.length&&data.length<10){  
                    	alert("success");
                    }else{  
                    
                    }  
                },  
                error:function(){  
                    alert("登录验证失败...请刷新页面重新登录...");  
                }  
            });  
		}
	}
</script>