function auth_header(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (chn, user) {
buf.push("<div class=\"navbar navbar-default navbar-fixed-top\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" class=\"navbar-toggle\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a href=\"/\" class=\"navbar-brand\">PUP</a></div><div class=\"collapse navbar-collapse\"><ul class=\"nav navbar-nav navbar-left\"><li" + (jade.cls([(locals.chn && chn=='notebook') ? 'active': ''], [true])) + "><a href=\"/customer/main\">客户管理</a></li></ul>");
if ( locals.user)
{
buf.push("<ul class=\"nav navbar-nav navbar-right\"><li class=\"dropdown\"><a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">" + (jade.escape((jade_interp = user.nm) == null ? '' : jade_interp)) + "</a><ul role=\"menu\" aria-labelledby=\"dropdownMenuUser\" class=\"dropdown-menu\"><li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"/user/setting\">设置</a></li><li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"/logout\">注销</a></li></ul></li></ul>");
}
buf.push("</div></div></div>");}("chn" in locals_for_with?locals_for_with.chn:typeof chn!=="undefined"?chn:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return buf.join("");
}
function auth_user_login(locals) {
var jade_debug = [{ lineno: 1, filename: "login.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined) {
jade_debug.unshift({ lineno: 0, filename: "login.jade" });
jade_debug.unshift({ lineno: 1, filename: "login.jade" });
buf.push("<!DOCTYPE html>");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "login.jade" });
buf.push("<html>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "login.jade" });
buf.push("<head>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "login.jade" });
buf.push("<title>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("帆茂统一平台");
jade_debug.shift();
jade_debug.shift();
buf.push("</title>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "login.jade" });
buf.push("<link href=\"/stylesheets/bootstrap.css\" rel=\"stylesheet\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "login.jade" });
buf.push("<link href=\"/font-css/fontello.css\" rel=\"stylesheet\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "login.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/stylesheets/style.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "login.jade" });
buf.push("<style>");
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("body {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("    padding-top: 40px;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("    background-color: #eee;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 12, filename: jade_debug[0].filename });
buf.push("}");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push(".form-signin {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("    max-width: 330px;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("    padding: 15px;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("    margin: 0 auto;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("}");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 20, filename: jade_debug[0].filename });
buf.push(".form-signin .form-signin-heading,");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 21, filename: jade_debug[0].filename });
buf.push(".form-signin .checkbox {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("    margin-bottom: 10px;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("}");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 24, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push(".form-signin .checkbox {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push("    font-weight: normal;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 27, filename: jade_debug[0].filename });
buf.push("}");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 28, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push(".form-signin .form-control {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 30, filename: jade_debug[0].filename });
buf.push("    position: relative;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 31, filename: jade_debug[0].filename });
buf.push("    font-size: 16px;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 32, filename: jade_debug[0].filename });
buf.push("    height: auto;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 33, filename: jade_debug[0].filename });
buf.push("    padding: 10px;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 34, filename: jade_debug[0].filename });
buf.push("    -webkit-box-sizing: border-box;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 35, filename: jade_debug[0].filename });
buf.push("    -moz-box-sizing: border-box;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 36, filename: jade_debug[0].filename });
buf.push("    box-sizing: border-box;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 37, filename: jade_debug[0].filename });
buf.push("}");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 38, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 39, filename: jade_debug[0].filename });
buf.push(".form-signin .form-control:focus {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 40, filename: jade_debug[0].filename });
buf.push("    z-index: 2;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 41, filename: jade_debug[0].filename });
buf.push("}");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 42, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 43, filename: jade_debug[0].filename });
buf.push(".form-signin input[type=\"text\"] {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 44, filename: jade_debug[0].filename });
buf.push("    margin-bottom: -1px;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 45, filename: jade_debug[0].filename });
buf.push("    border-bottom-left-radius: 0;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 46, filename: jade_debug[0].filename });
buf.push("    border-bottom-right-radius: 0;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 47, filename: jade_debug[0].filename });
buf.push("}");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 48, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 49, filename: jade_debug[0].filename });
buf.push(".form-signin input[type=\"password\"] {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 50, filename: jade_debug[0].filename });
buf.push("    margin-bottom: 10px;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 51, filename: jade_debug[0].filename });
buf.push("    border-top-left-radius: 0;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 52, filename: jade_debug[0].filename });
buf.push("    border-top-right-radius: 0;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 53, filename: jade_debug[0].filename });
buf.push("}");
jade_debug.shift();
jade_debug.shift();
buf.push("</style>");
jade_debug.shift();
jade_debug.unshift({ lineno: 54, filename: "login.jade" });
buf.push("<script src=\"/javascripts/jquery-1.11.0.min.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 55, filename: "login.jade" });
buf.push("<script src=\"/javascripts/bootstrap.min.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 56, filename: "login.jade" });
buf.push("<script>");
jade_debug.unshift({ lineno: 57, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 57, filename: jade_debug[0].filename });
buf.push("$(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 58, filename: jade_debug[0].filename });
buf.push("    $('#submit').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 59, filename: jade_debug[0].filename });
buf.push("        $('#login').submit();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 60, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 61, filename: jade_debug[0].filename });
buf.push("});");
jade_debug.shift();
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.shift();
buf.push("</head>");
jade_debug.shift();
jade_debug.unshift({ lineno: 62, filename: "login.jade" });
buf.push("<body>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 63, filename: "login.jade" });
buf.push("<div id=\"wrap\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 64, filename: "login.jade" });
buf.push("<div class=\"container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 65, filename: "login.jade" });
buf.push("<form action=\"/login\" method=\"post\" class=\"form-signin\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 66, filename: "login.jade" });
buf.push("<h2 class=\"form-signin-heading\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 66, filename: jade_debug[0].filename });
buf.push("请登录");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift({ lineno: 67, filename: "login.jade" });
buf.push("<input type=\"text\" name=\"username\" placeholder=\"帐号\" autofocus=\"autofocus\" required=\"required\" class=\"form-control\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 68, filename: "login.jade" });
buf.push("<input type=\"password\" name=\"password\" placeholder=\"密码\" required=\"required\" class=\"form-control\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 69, filename: "login.jade" });
buf.push("<label class=\"checkbox\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 70, filename: "login.jade" });
buf.push("<input type=\"checkbox\" value=\"remember\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 71, filename: "login.jade" });
buf.push("自动登录");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 72, filename: "login.jade" });
buf.push("<button id=\"submit\" type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 73, filename: "login.jade" });
buf.push("<i style=\"margin-right:10px\" class=\"icon-key\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 74, filename: "login.jade" });
buf.push("登录");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 0, filename: "login.jade" });
jade_debug.unshift({ lineno: 1, filename: "../footer.jade" });
buf.push("<div id=\"footer\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "../footer.jade" });
buf.push("<div class=\"container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "../footer.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "../footer.jade" });
buf.push("<div style=\"margin: 20px 0; font-size: small;\" class=\"col-md-6 text-muted\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "../footer.jade" });
buf.push("<p class=\"text-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("© 2014 帆茂投资管理有限公司");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "../footer.jade" });
buf.push("<div style=\"margin: 20px 0; font-size: small;\" class=\"col-md-6 text-muted\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "../footer.jade" });
buf.push("<p class=\"text-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("帮助");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
buf.push("</body>");
jade_debug.shift();
jade_debug.shift();
buf.push("</html>");
jade_debug.shift();
jade_debug.shift();}("undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "doctype html\nhtml\n    head\n        title 帆茂统一平台\n        link(href='/stylesheets/bootstrap.css', rel='stylesheet')\n        link(href='/font-css/fontello.css', rel='stylesheet')\n        link(rel='stylesheet', href='/stylesheets/style.css')\n        style.\n            body {\n                padding-top: 40px;\n                background-color: #eee;\n            }\n\n            .form-signin {\n                max-width: 330px;\n                padding: 15px;\n                margin: 0 auto;\n            }\n\n            .form-signin .form-signin-heading,\n            .form-signin .checkbox {\n                margin-bottom: 10px;\n            }\n\n            .form-signin .checkbox {\n                font-weight: normal;\n            }\n\n            .form-signin .form-control {\n                position: relative;\n                font-size: 16px;\n                height: auto;\n                padding: 10px;\n                -webkit-box-sizing: border-box;\n                -moz-box-sizing: border-box;\n                box-sizing: border-box;\n            }\n\n            .form-signin .form-control:focus {\n                z-index: 2;\n            }\n\n            .form-signin input[type=\"text\"] {\n                margin-bottom: -1px;\n                border-bottom-left-radius: 0;\n                border-bottom-right-radius: 0;\n            }\n\n            .form-signin input[type=\"password\"] {\n                margin-bottom: 10px;\n                border-top-left-radius: 0;\n                border-top-right-radius: 0;\n            }\n        script(src='/javascripts/jquery-1.11.0.min.js')\n        script(src='/javascripts/bootstrap.min.js')\n        script.\n            $(function() {\n                $('#submit').click(function() {\n                    $('#login').submit();\n                });\n            });\n    body\n        #wrap\n            .container\n                form.form-signin(action='/login', method='post')\n                    h2.form-signin-heading 请登录\n                    input.form-control(type='text', name='username', placeholder='帐号', autofocus='autofocus', required='required')\n                    input.form-control(type='password', name='password', placeholder='密码', required='required')\n                    label.checkbox\n                        input(type='checkbox', value='remember')\n                        | 自动登录\n                    button#submit.btn.btn-lg.btn-primary.btn-block(type='submit')\n                        i.icon-key(style='margin-right:10px')\n                        | 登录\n\n        include ../footer");
}
}
function crm_audit_detail(locals) {
var jade_debug = [{ lineno: 1, filename: "detail.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, title) {
jade_debug.unshift({ lineno: 0, filename: "../layout.jade" });
jade_debug.unshift({ lineno: 1, filename: "../layout.jade" });
buf.push("<!DOCTYPE html>");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "../layout.jade" });
buf.push("<html>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "../layout.jade" });
buf.push("<head>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "../layout.jade" });
jade_debug.unshift({ lineno: 5, filename: "../layout.jade" });
buf.push("<title>" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</title>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "../layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/stylesheets/bootstrap.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "../layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/font-css/animation.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "../layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/font-css/fontello.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "../layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/stylesheets/style.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "../layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-select.min.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "../layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-modal-bs3patch.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "../layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-modal.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "../layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-tagsinput.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "../layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-switch.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: undefined, filename: "../layout.jade" });
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "../layout.jade" });
buf.push("<script src=\"/javascripts/jquery-1.11.0.min.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "../layout.jade" });
buf.push("<script src=\"/javascripts/bootstrap.min.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "../layout.jade" });
buf.push("<script src=\"/javascripts/bootstrap-select.min.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "../layout.jade" });
buf.push("<script src=\"/javascripts/bootstrap-button.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 20, filename: "../layout.jade" });
buf.push("<script src=\"/javascripts/highcharts.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "../layout.jade" });
buf.push("<script src=\"/javascripts/bootstrap-modalmanager.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "../layout.jade" });
buf.push("<script src=\"/javascripts/bootstrap-modal.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 23, filename: "../layout.jade" });
buf.push("<script src=\"/javascripts/bootstrap-tagsinput.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 24, filename: "../layout.jade" });
buf.push("<script src=\"/javascripts/bootstrap-switch.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 25, filename: "../layout.jade" });
buf.push("<script src=\"/javascripts/bootstrap-datetimepicker.min.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 26, filename: "../layout.jade" });
buf.push("<script src=\"/javascripts/bootstrap-filestyle.min.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 31, filename: "../layout.jade" });
buf.push("<!--");
jade_debug.unshift({ lineno: 28, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 28, filename: jade_debug[0].filename });
buf.push("script(src='/js/bootstrap.min.js')");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push("script(src='/js/underscore-min.js')");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 30, filename: jade_debug[0].filename });
buf.push("script(src='/js/util.js')");
jade_debug.shift();
jade_debug.shift();
buf.push("-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "../layout.jade" });
jade_debug.unshift({ lineno: 3, filename: "detail.jade" });
buf.push("<script>");
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("$(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("    $('#acceptBtn').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("        $('#opAcceptConfirm').modal('show');");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("    $('#rejectBtn').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("        $('#opRejectConfirm').modal('show');");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("    $('#ok').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 12, filename: jade_debug[0].filename });
buf.push("        $('#confirmMsg').hide();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("        $('#opStatus').show();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("        setTimeout(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("            $('#opStatus').hide();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("            $('#confirmMsg').text('处理成功，页面将自动关闭');");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("            $('#confirmMsg').show();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("            setTimeout(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("                window.close();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 20, filename: jade_debug[0].filename });
buf.push("            }, 3000);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 21, filename: jade_debug[0].filename });
buf.push("        }, 1000);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("    ");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 24, filename: jade_debug[0].filename });
buf.push("    $('#call-wx-switch').bootstrapSwitch();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("    $('#add-wx-switch').bootstrapSwitch();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push("    ");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 27, filename: jade_debug[0].filename });
buf.push("    $('.app-box').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 28, filename: jade_debug[0].filename });
buf.push("        var path = $(this).data('href');");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push("        window.open(path);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 30, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 31, filename: jade_debug[0].filename });
buf.push("    $('.f-task').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 32, filename: jade_debug[0].filename });
buf.push("        window.open('/crm/audit/detail');");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 33, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 34, filename: jade_debug[0].filename });
buf.push("});");
jade_debug.shift();
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
buf.push("</head>");
jade_debug.shift();
jade_debug.unshift({ lineno: 32, filename: "../layout.jade" });
buf.push("<body style=\"\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 33, filename: "../layout.jade" });
buf.push("<div id=\"wrap\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: undefined, filename: "../layout.jade" });
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 35, filename: "../layout.jade" });
buf.push("<div class=\"container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 37, filename: "../layout.jade" });
buf.push("<div id=\"msg\" style=\"display: none;\" class=\"alert alert-success col-md-6 col-md-offset-3 alert-dismissable\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: "../layout.jade" });
buf.push("<button data-dismiss=\"alert\" aria-hidden=\"true\" class=\"close\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: jade_debug[0].filename });
buf.push("&times;");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 39, filename: "../layout.jade" });
buf.push("<p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 39, filename: jade_debug[0].filename });
buf.push("操作成功");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 35, filename: "../layout.jade" });
jade_debug.unshift({ lineno: 36, filename: "detail.jade" });
buf.push("<div class=\"row m-t-20\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 37, filename: "detail.jade" });
buf.push("<div class=\"mm-box col-md-8 col-md-offset-2\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: "detail.jade" });
buf.push("<div class=\"modal-header row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 39, filename: "detail.jade" });
buf.push("<h4 style=\"display: inline-block;\" class=\"pan-title modal-title\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 39, filename: jade_debug[0].filename });
buf.push("40商机判定");
jade_debug.shift();
jade_debug.shift();
buf.push("</h4>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 40, filename: "detail.jade" });
buf.push("<div class=\"row m-t-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 41, filename: "detail.jade" });
buf.push("<div class=\"col-md-4\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 42, filename: "detail.jade" });
buf.push("<a href=\"javascript:void(0);\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 43, filename: "detail.jade" });
buf.push("<i style=\"margin-right: 5px;\" class=\"icon-user-1\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 44, filename: "detail.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 44, filename: jade_debug[0].filename });
buf.push("张先生 13812345678");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 45, filename: "detail.jade" });
buf.push("<div style=\"margin-left: 20px;\" class=\"label label-info\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 46, filename: "detail.jade" });
buf.push("录音");
jade_debug.shift();
jade_debug.unshift({ lineno: 47, filename: "detail.jade" });
buf.push("<i class=\"icon-play\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 48, filename: "detail.jade" });
buf.push("<div class=\"col-md-4\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 49, filename: "detail.jade" });
buf.push("<div class=\"col-md-2\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 50, filename: "detail.jade" });
buf.push("<i style=\"margin-right: 5px;\" class=\"icon-user-8\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 51, filename: "detail.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 51, filename: jade_debug[0].filename });
buf.push("David");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 52, filename: "detail.jade" });
buf.push("<div class=\"col-md-2\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 53, filename: "detail.jade" });
buf.push("<i style=\"margin-right: 5px;\" class=\"icon-clock\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 54, filename: "detail.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 54, filename: jade_debug[0].filename });
buf.push("今天 16:00");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 55, filename: "detail.jade" });
buf.push("<div class=\"row m-t-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 56, filename: "detail.jade" });
buf.push("<p style=\"margin-top: 5px;min-height:40px;\" class=\"col-sm-12 text-muted\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 56, filename: jade_debug[0].filename });
buf.push("介绍海外固定收益产品，客户了解怎么保证收益、时间、门槛、投资方式，表示感兴趣");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 57, filename: "detail.jade" });
buf.push("<div class=\"row m-t-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 58, filename: "detail.jade" });
buf.push("<div class=\"col-sm-1 text-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 58, filename: jade_debug[0].filename });
buf.push("结果");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 59, filename: "detail.jade" });
buf.push("<div class=\"col-sm-3 text-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 60, filename: "detail.jade" });
buf.push("<div data-toggle=\"buttons-radio\" class=\"btn-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 61, filename: "detail.jade" });
buf.push("<div class=\"btn btn-light-info btn-sm active\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 61, filename: jade_debug[0].filename });
buf.push("20");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 62, filename: "detail.jade" });
buf.push("<div class=\"btn btn-light-info btn-sm\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 62, filename: jade_debug[0].filename });
buf.push("40");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 64, filename: "detail.jade" });
buf.push("<div class=\"col-sm-2 text-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 64, filename: jade_debug[0].filename });
buf.push("微信电话添加");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 65, filename: "detail.jade" });
buf.push("<div class=\"col-sm-2 text-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 66, filename: "detail.jade" });
buf.push("<div data-on-label=\"是\" data-off-label=\"否\" data-on=\"info\" class=\"switch switch-mini\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 67, filename: "detail.jade" });
buf.push("<input id=\"call-wx-switch\" type=\"checkbox\" value=\"1\">");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 68, filename: "detail.jade" });
buf.push("<div class=\"col-sm-2 text-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 68, filename: jade_debug[0].filename });
buf.push("微信号录入");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 69, filename: "detail.jade" });
buf.push("<div class=\"col-sm-2 text-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 70, filename: "detail.jade" });
buf.push("<div data-on-label=\"是\" data-off-label=\"否\" data-on=\"info\" class=\"switch switch-mini\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 71, filename: "detail.jade" });
buf.push("<input id=\"add-wx-switch\" type=\"checkbox\" value=\"1\">");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 72, filename: "detail.jade" });
buf.push("<div class=\"row m-t-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 73, filename: "detail.jade" });
buf.push("<div class=\"col-sm-10 col-sm-offset-1\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 74, filename: "detail.jade" });
buf.push("<input type=\"text\" style=\"width: 100%\" placeholder=\"备注\" class=\"holo\">");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 75, filename: "detail.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 76, filename: "detail.jade" });
buf.push("<div style=\"background: #999;height: 1px;margin:20px auto;\" class=\"divider\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 77, filename: "detail.jade" });
buf.push("<div style=\"height: 80px;\" class=\"row text-center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 78, filename: "detail.jade" });
buf.push("<button id=\"rejectBtn\" style=\"margin-right: 40px;\" class=\"btn btn-lg btn-danger\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 78, filename: jade_debug[0].filename });
buf.push("驳回");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 79, filename: "detail.jade" });
buf.push("<button id=\"acceptBtn\" class=\"btn btn-lg btn-success\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 79, filename: jade_debug[0].filename });
buf.push("通过");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 81, filename: "detail.jade" });
buf.push("<div id=\"opAcceptConfirm\" tabindex=\"-1\" style=\"display: none;\" class=\"modal fade\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 82, filename: "detail.jade" });
buf.push("<div class=\"modal-body\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 83, filename: "detail.jade" });
buf.push("<p id=\"confirmMsg\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 83, filename: jade_debug[0].filename });
buf.push("确定通过？");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 84, filename: "detail.jade" });
buf.push("<p id=\"opStatus\" style=\"font-size: 20px; font-face: bold; display: none;\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 85, filename: "detail.jade" });
buf.push("<i class=\"icon icon-spin5 animate-spin text-success\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 86, filename: "detail.jade" });
buf.push("<div class=\"modal-footer\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 87, filename: "detail.jade" });
buf.push("<div class=\"text-center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 88, filename: "detail.jade" });
buf.push("<button style=\"margin-right: 40px;\" data-dismiss=\"modal\" class=\"cancel btn btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 88, filename: jade_debug[0].filename });
buf.push("取消");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 89, filename: "detail.jade" });
buf.push("<button id=\"ok\" class=\"btn btn-success\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 89, filename: jade_debug[0].filename });
buf.push("确定");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 90, filename: "detail.jade" });
buf.push("<div id=\"opRejectConfirm\" tabindex=\"-1\" style=\"display: none;\" class=\"modal fade\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 91, filename: "detail.jade" });
buf.push("<div class=\"modal-body\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 92, filename: "detail.jade" });
buf.push("<p id=\"confirmMsg\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 92, filename: jade_debug[0].filename });
buf.push("确定驳回？");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 93, filename: "detail.jade" });
buf.push("<p id=\"opStatus\" style=\"font-size: 20px; font-face: bold; display: none;\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 94, filename: "detail.jade" });
buf.push("<i class=\"icon icon-spin5 animate-spin text-success\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 95, filename: "detail.jade" });
buf.push("<div class=\"modal-footer\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 96, filename: "detail.jade" });
buf.push("<div class=\"text-center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 97, filename: "detail.jade" });
buf.push("<button style=\"margin-right: 40px;\" data-dismiss=\"modal\" class=\"cancel btn btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 97, filename: jade_debug[0].filename });
buf.push("取消");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 98, filename: "detail.jade" });
buf.push("<button id=\"ok\" class=\"btn btn-success\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 98, filename: jade_debug[0].filename });
buf.push("确定");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: undefined, filename: "../layout.jade" });
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
buf.push("</body>");
jade_debug.shift();
jade_debug.shift();
buf.push("</html>");
jade_debug.shift();
jade_debug.shift();}("undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "extends ../layout\nblock script\n    script.\n        $(function() {\n            $('#acceptBtn').click(function() {\n                $('#opAcceptConfirm').modal('show');\n            });\n            $('#rejectBtn').click(function() {\n                $('#opRejectConfirm').modal('show');\n            });\n            $('#ok').click(function() {\n                $('#confirmMsg').hide();\n                $('#opStatus').show();\n                setTimeout(function() {\n                    $('#opStatus').hide();\n                    $('#confirmMsg').text('处理成功，页面将自动关闭');\n                    $('#confirmMsg').show();\n                    setTimeout(function() {\n                        window.close();\n                    }, 3000);\n                }, 1000);\n            });\n\n            $('#call-wx-switch').bootstrapSwitch();\n            $('#add-wx-switch').bootstrapSwitch();\n\n            $('.app-box').click(function() {\n                var path = $(this).data('href');\n                window.open(path);\n            });\n            $('.f-task').click(function() {\n                window.open('/crm/audit/detail');\n            });\n        });\nblock content\n    .row.m-t-20\n        .mm-box.col-md-8.col-md-offset-2\n            .modal-header.row\n                h4.pan-title.modal-title(style='display: inline-block;') 40商机判定\n            .row.m-t-10\n                .col-md-4\n                    a(href='javascript:void(0);')\n                        i.icon-user-1(style='margin-right: 5px;')\n                    span 张先生 13812345678\n                    .label.label-info(style='margin-left: 20px;')\n                        |录音\n                        i.icon-play\n                .col-md-4\n                .col-md-2\n                    i.icon-user-8(style='margin-right: 5px;')\n                    span David\n                .col-md-2\n                    i.icon-clock(style='margin-right: 5px;')\n                    span 今天 16:00\n            .row.m-t-10\n                p.col-sm-12.text-muted(style='margin-top: 5px;min-height:40px;') 介绍海外固定收益产品，客户了解怎么保证收益、时间、门槛、投资方式，表示感兴趣\n            .row.m-t-10\n                .col-sm-1.text-right 结果\n                .col-sm-3.text-left\n                    .btn-group(data-toggle='buttons-radio')\n                        .btn.btn-light-info.btn-sm.active 20\n                        .btn.btn-light-info.btn-sm 40\n\n                .col-sm-2.text-right 微信电话添加\n                .col-sm-2.text-left\n                    .switch.switch-mini(data-on-label=\"是\", data-off-label=\"否\",data-on=\"info\")\n                        input#call-wx-switch(type='checkbox', value='1')\n                .col-sm-2.text-right 微信号录入\n                .col-sm-2.text-left\n                    .switch.switch-mini(data-on-label=\"是\", data-off-label=\"否\",data-on=\"info\")\n                        input#add-wx-switch(type='checkbox', value='1')\n            .row.m-t-10\n                .col-sm-10.col-sm-offset-1\n                    input.holo(type='text', style='width: 100%', placeholder='备注')\n            .row\n                .divider(style='background: #999;height: 1px;margin:20px auto;')\n            .row.text-center(style='height: 80px;')\n                button#rejectBtn.btn.btn-lg.btn-danger(style='margin-right: 40px;') 驳回\n                button#acceptBtn.btn.btn-lg.btn-success 通过\n\n        #opAcceptConfirm.modal.fade(tabindex='-1', style='display: none;')\n            .modal-body\n                p#confirmMsg 确定通过？\n                p#opStatus(style='font-size: 20px; font-face: bold; display: none;')\n                    i.icon.icon-spin5.animate-spin.text-success\n            .modal-footer\n                .text-center\n                    button.cancel.btn.btn-default(style='margin-right: 40px;', data-dismiss='modal') 取消\n                    button#ok.btn.btn-success 确定\n        #opRejectConfirm.modal.fade(tabindex='-1', style='display: none;')\n            .modal-body\n                p#confirmMsg 确定驳回？\n                p#opStatus(style='font-size: 20px; font-face: bold; display: none;')\n                    i.icon.icon-spin5.animate-spin.text-success\n            .modal-footer\n                .text-center\n                    button.cancel.btn.btn-default(style='margin-right: 40px;', data-dismiss='modal') 取消\n                    button#ok.btn.btn-success 确定");
}
}
function crm_audit_list(locals) {
var jade_debug = [{ lineno: 1, filename: "list.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined) {
jade_debug.unshift({ lineno: 0, filename: "list.jade" });
jade_debug.unshift({ lineno: 1, filename: "list.jade" });
buf.push("<div class=\"row m-t-20 m-b-20\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "list.jade" });
buf.push("<div class=\"col-sm-12 text-center m-b-20\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "list.jade" });
buf.push("<div data-toggle=\"buttons-radio\" class=\"btn-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "list.jade" });
buf.push("<div class=\"btn btn btn-light-info\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push(" 全部");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "list.jade" });
buf.push("<span class=\"badge alert-danger m-l-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("50");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "list.jade" });
buf.push("<div class=\"btn btn btn-light-info\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push(" 20商机");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "list.jade" });
buf.push("<span class=\"badge alert-danger m-l-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("35");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "list.jade" });
buf.push("<div class=\"btn btn btn-light-info active\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push(" 40商机");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "list.jade" });
buf.push("<span class=\"badge alert-danger m-l-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("15");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "list.jade" });
buf.push("<div class=\"list-container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "list.jade" });
for (var x = 0; x < 10; x++)
{
jade_debug.unshift({ lineno: 13, filename: "list.jade" });
jade_debug.unshift({ lineno: 13, filename: "list.jade" });
buf.push("<div style=\"cursor:pointer;width: 236px; height: 200px;margin: 5px;position: relative;\" data-id=\"1\" class=\"mm-box col-md-2 f-task\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: "list.jade" });
buf.push("<h4>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("40商机判定");
jade_debug.shift();
jade_debug.shift();
buf.push("</h4>");
jade_debug.shift();
jade_debug.unshift({ lineno: 15, filename: "list.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "list.jade" });
buf.push("<div class=\"col-md-12\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "list.jade" });
buf.push("<i style=\"margin-right: 5px;\" class=\"icon-user-8\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "list.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("David");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "list.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 20, filename: "list.jade" });
buf.push("<div class=\"col-md-12\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 21, filename: "list.jade" });
buf.push("<i style=\"margin-right: 5px;\" class=\"icon-clock\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "list.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("今天 16:00");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 23, filename: "list.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 24, filename: "list.jade" });
buf.push("<div style=\"background: #a52410;height: 1px;margin:10px auto;\" class=\"divider\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 25, filename: "list.jade" });
buf.push("<p style=\"margin-top: 5px\" class=\"small text-muted\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("电话跟进，约见");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 26, filename: "list.jade" });
buf.push("<script>");
jade_debug.unshift({ lineno: 27, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 27, filename: jade_debug[0].filename });
buf.push("$('.f-task').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 28, filename: jade_debug[0].filename });
buf.push("    window.open('/crm/audit/detail');");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push("});");
jade_debug.shift();
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.shift();}("undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".row.m-t-20.m-b-20\n    .col-sm-12.text-center.m-b-20\n        .btn-group(data-toggle='buttons-radio')\n            .btn.btn.btn-light-info  全部\n                span.badge.alert-danger.m-l-10 50\n            .btn.btn.btn-light-info  20商机\n                span.badge.alert-danger.m-l-10 35\n            .btn.btn.btn-light-info.active  40商机\n                span.badge.alert-danger.m-l-10 15\n\n    .list-container\n        - for (var x = 0; x < 10; x++)\n            .mm-box.col-md-2.f-task(style='cursor:pointer;width: 236px; height: 200px;margin: 5px;position: relative;',data-id='1')\n                h4 40商机判定\n                .row\n                    .col-md-12\n                        i.icon-user-8(style='margin-right: 5px;')\n                        span David\n                .row\n                    .col-md-12\n                        i.icon-clock(style='margin-right: 5px;')\n                        span 今天 16:00\n                .row\n                    .divider(style='background: #a52410;height: 1px;margin:10px auto;')\n                p.small.text-muted(style='margin-top: 5px') 电话跟进，约见\nscript.\n    $('.f-task').click(function() {\n        window.open('/crm/audit/detail');\n    });");
}
}
function crm_call_list(locals) {
var jade_debug = [{ lineno: 1, filename: "list.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined) {
jade_debug.unshift({ lineno: 0, filename: "list.jade" });
jade_debug.unshift({ lineno: 2, filename: "list.jade" });
buf.push("<div style=\"margin-top: 20px;\" class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "list.jade" });
buf.push("<div class=\"mm-box col-md-8 col-md-offset-2 form-horizontal m-b-20\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "list.jade" });
buf.push("<div class=\"form-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "list.jade" });
buf.push("<label class=\"control-label col-md-2\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("手机号码");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "list.jade" });
buf.push("<div class=\"col-md-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "list.jade" });
buf.push("<input type=\"text\" style=\"display: inline-block;margin-right:10px;width:300px;\" class=\"holo\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "list.jade" });
buf.push("<button data-toggle=\"modal\" data-target=\"#detail\" class=\"btn btn-primary\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "list.jade" });
buf.push("<i style=\"margin-right: 5px;\" class=\"icon-search\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "list.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("快速查找");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "list.jade" });
buf.push("<div class=\"form-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "list.jade" });
buf.push("<label class=\"control-label col-md-2\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: jade_debug[0].filename });
buf.push("状态");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "list.jade" });
buf.push("<div style=\"margin-top:5px;\" class=\"col-md-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: "list.jade" });
buf.push("<a href=\"javascript:void(0);\" class=\"filter-text\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("未拨");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 15, filename: "list.jade" });
buf.push("<a href=\"javascript:void(0);\" style=\"font-size: 90%;\" class=\"label label-danger\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("未接通");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "list.jade" });
buf.push("<a href=\"javascript:void(0);\" class=\"filter-text\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("接通");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "list.jade" });
buf.push("<div class=\"form-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: "list.jade" });
buf.push("<label class=\"control-label col-md-2\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("标签");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "list.jade" });
buf.push("<div style=\"margin-top:5px;\" class=\"col-md-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 20, filename: "list.jade" });
buf.push("<a href=\"javascript:void(0);\" class=\"filter-text\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 20, filename: jade_debug[0].filename });
buf.push("待跟进");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "list.jade" });
buf.push("<a href=\"javascript:void(0);\" style=\"font-size: 90%;\" class=\"label label-danger\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 21, filename: jade_debug[0].filename });
buf.push("待发邮件");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "list.jade" });
buf.push("<a href=\"javascript:void(0);\" class=\"filter-text\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("无意向");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 24, filename: "list.jade" });
buf.push("<div id=\"detail\" tabindex=\"-1\" data-width=\"760\" style=\"display: none;\" class=\"modal\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: "list.jade" });
buf.push("<div class=\"modal-header\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: "list.jade" });
buf.push("<button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push("&times;");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 27, filename: "list.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 28, filename: "list.jade" });
buf.push("<div class=\"col-md-3\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 29, filename: "list.jade" });
buf.push("<h4 class=\"modal-title\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push("余士俊 先生");
jade_debug.shift();
jade_debug.shift();
buf.push("</h4>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 30, filename: "list.jade" });
buf.push("<div class=\"col-md-6\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 31, filename: "list.jade" });
buf.push("<a style=\"margin-right: 15px;\" href=\"/crm/customer/1\" target=\"_blank\" class=\"text-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 31, filename: jade_debug[0].filename });
buf.push("139****7161");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 32, filename: "list.jade" });
buf.push("<button class=\"btn btn-lg btn-success m-l-15\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 33, filename: "list.jade" });
buf.push("<i class=\"icon-phone\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 34, filename: "list.jade" });
buf.push("拨打");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 35, filename: "list.jade" });
buf.push("<div class=\"modal-body\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 36, filename: "list.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 37, filename: "list.jade" });
buf.push("<span class=\"col-md-2 text-right text-muted small\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 37, filename: jade_debug[0].filename });
buf.push("呼叫次数");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 38, filename: "list.jade" });
buf.push("<span class=\"col-md-1 text-left small\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: jade_debug[0].filename });
buf.push("1");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 39, filename: "list.jade" });
buf.push("<span class=\"col-md-2 text-right text-muted small\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 39, filename: jade_debug[0].filename });
buf.push("最近呼叫");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 40, filename: "list.jade" });
buf.push("<span class=\"col-md-3 text-left small\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 40, filename: jade_debug[0].filename });
buf.push("2013-10-10 David");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 41, filename: "list.jade" });
buf.push("<span class=\"col-md-2 text-right text-muted small\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 41, filename: jade_debug[0].filename });
buf.push("微信认证");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 42, filename: "list.jade" });
buf.push("<span class=\"col-md-2 text-left small\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 42, filename: jade_debug[0].filename });
buf.push("已认证");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 43, filename: "list.jade" });
buf.push("<div class=\"row m-t-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 44, filename: "list.jade" });
buf.push("<span class=\"col-md-2 text-right text-muted small\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 44, filename: jade_debug[0].filename });
buf.push("约见记录");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 45, filename: "list.jade" });
buf.push("<span class=\"col-md-1 text-left small\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 45, filename: jade_debug[0].filename });
buf.push("无");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 46, filename: "list.jade" });
buf.push("<span class=\"col-md-2 text-right text-muted small\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 46, filename: jade_debug[0].filename });
buf.push("状态");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 47, filename: "list.jade" });
buf.push("<span class=\"col-md-1 text-left small\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 47, filename: jade_debug[0].filename });
buf.push("接通");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 48, filename: "list.jade" });
buf.push("<div class=\"row m-t-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 49, filename: "list.jade" });
buf.push("<span class=\"col-md-10 col-md-offset-1 text-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 49, filename: jade_debug[0].filename });
buf.push("做银行理财,给到10％以上,其他信息不愿意透露.以后有不一样的产品再试试");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 50, filename: "list.jade" });
buf.push("<div class=\"row m-t-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 51, filename: "list.jade" });
buf.push("<span class=\"col-md-10 col-md-offset-1 text-right text-muted small\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 51, filename: jade_debug[0].filename });
buf.push("David 三个月前");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 52, filename: "list.jade" });
buf.push("<div class=\"row m-t-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 53, filename: "list.jade" });
buf.push("<span class=\"col-md-2 text-right text-muted small\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 53, filename: jade_debug[0].filename });
buf.push("性别");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 54, filename: "list.jade" });
buf.push("<div class=\"col-md-2 text-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 55, filename: "list.jade" });
buf.push("<div class=\"btn-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 56, filename: "list.jade" });
buf.push("<button class=\"btn-sm btn btn-info\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 56, filename: jade_debug[0].filename });
buf.push("男");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 57, filename: "list.jade" });
buf.push("<button class=\"btn-sm btn btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 57, filename: jade_debug[0].filename });
buf.push("女");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 58, filename: "list.jade" });
buf.push("<span class=\"col-md-2 text-right text-muted small\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 58, filename: jade_debug[0].filename });
buf.push("投资偏好");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 59, filename: "list.jade" });
buf.push("<div class=\"col-md-6 text-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 60, filename: "list.jade" });
buf.push("<div class=\"btn-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 61, filename: "list.jade" });
buf.push("<button class=\"btn btn-sm btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 61, filename: jade_debug[0].filename });
buf.push("固收");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 62, filename: "list.jade" });
buf.push("<button class=\"btn btn-sm btn-info\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 62, filename: jade_debug[0].filename });
buf.push("PE");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 63, filename: "list.jade" });
buf.push("<button class=\"btn btn-sm btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 63, filename: jade_debug[0].filename });
buf.push("银行理财");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 64, filename: "list.jade" });
buf.push("<button class=\"btn btn-sm btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 64, filename: jade_debug[0].filename });
buf.push("股票");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 65, filename: "list.jade" });
buf.push("<div class=\"row m-t-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 66, filename: "list.jade" });
buf.push("<span class=\"col-md-2 text-right text-muted small\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 66, filename: jade_debug[0].filename });
buf.push("体量");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 67, filename: "list.jade" });
buf.push("<div class=\"col-md-6 text-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 68, filename: "list.jade" });
buf.push("<div class=\"btn-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 69, filename: "list.jade" });
buf.push("<button class=\"btn-sm btn btn-info\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 69, filename: jade_debug[0].filename });
buf.push("100");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 70, filename: "list.jade" });
buf.push("<button class=\"btn-sm btn btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 70, filename: jade_debug[0].filename });
buf.push("300");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 71, filename: "list.jade" });
buf.push("<button class=\"btn-sm btn btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 71, filename: jade_debug[0].filename });
buf.push("500");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 72, filename: "list.jade" });
buf.push("<button class=\"btn-sm btn btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 72, filename: jade_debug[0].filename });
buf.push("1000");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 73, filename: "list.jade" });
buf.push("<button class=\"btn-sm btn btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 73, filename: jade_debug[0].filename });
buf.push("2000");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 74, filename: "list.jade" });
buf.push("<button class=\"btn-sm btn btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 74, filename: jade_debug[0].filename });
buf.push("5000");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 75, filename: "list.jade" });
buf.push("<button class=\"btn-sm btn btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 75, filename: jade_debug[0].filename });
buf.push("10k");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 76, filename: "list.jade" });
buf.push("<div class=\"row m-t-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 77, filename: "list.jade" });
buf.push("<span class=\"col-md-2 text-right text-muted small\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 77, filename: jade_debug[0].filename });
buf.push("跟进");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 78, filename: "list.jade" });
buf.push("<div class=\"col-md-10 text-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 79, filename: "list.jade" });
buf.push("<div class=\"btn-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 80, filename: "list.jade" });
buf.push("<button class=\"btn-sm btn btn-info\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 80, filename: jade_debug[0].filename });
buf.push("1");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 81, filename: "list.jade" });
buf.push("<button class=\"btn-sm btn btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 81, filename: jade_debug[0].filename });
buf.push("2");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 82, filename: "list.jade" });
buf.push("<button class=\"btn-sm btn btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 82, filename: jade_debug[0].filename });
buf.push("3");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 83, filename: "list.jade" });
buf.push("<button class=\"btn-sm btn btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 83, filename: jade_debug[0].filename });
buf.push("4");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 84, filename: "list.jade" });
buf.push("<button class=\"btn-sm btn btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 84, filename: jade_debug[0].filename });
buf.push("5");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 85, filename: "list.jade" });
buf.push("<button class=\"btn-sm btn btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 85, filename: jade_debug[0].filename });
buf.push("6");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 86, filename: "list.jade" });
buf.push("<button class=\"btn-sm btn btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 86, filename: jade_debug[0].filename });
buf.push("7");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 87, filename: "list.jade" });
buf.push("<button class=\"btn-sm btn btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 87, filename: jade_debug[0].filename });
buf.push("10");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 88, filename: "list.jade" });
buf.push("<button class=\"btn-sm btn btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 88, filename: jade_debug[0].filename });
buf.push("14");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 89, filename: "list.jade" });
buf.push("<input type=\"text\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 90, filename: "list.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 90, filename: jade_debug[0].filename });
buf.push("天后");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 91, filename: "list.jade" });
buf.push("<div class=\"row m-t-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 92, filename: "list.jade" });
buf.push("<div class=\"col-md-4 text-left col-md-offset-1\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 93, filename: "list.jade" });
buf.push("<input type=\"text\" placeholder=\"Email\" class=\"holo\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 94, filename: "list.jade" });
buf.push("<div class=\"col-md-5 text-left col-md-offset-1\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 95, filename: "list.jade" });
buf.push("<input type=\"text\" placeholder=\"沟通产品\" class=\"holo\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 96, filename: "list.jade" });
buf.push("<div class=\"row m-t-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 97, filename: "list.jade" });
buf.push("<div class=\"col-md-10 col-md-offset-1\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 98, filename: "list.jade" });
buf.push("<input type=\"text\" style=\"width: 100%;\" placeholder=\"备注\" class=\"holo\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 99, filename: "list.jade" });
buf.push("<div class=\"modal-footer\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 100, filename: "list.jade" });
buf.push("<div class=\"text-center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 101, filename: "list.jade" });
buf.push("<button type=\"button\" class=\"btn btn-success\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 101, filename: jade_debug[0].filename });
buf.push("商机");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 102, filename: "list.jade" });
buf.push("<button type=\"button\" class=\"btn btn-primary\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 102, filename: jade_debug[0].filename });
buf.push("跟进");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 103, filename: "list.jade" });
buf.push("<button type=\"button\" class=\"btn btn-primary\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 103, filename: jade_debug[0].filename });
buf.push("接通");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 104, filename: "list.jade" });
buf.push("<button type=\"button\" class=\"btn btn-primary\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 104, filename: jade_debug[0].filename });
buf.push("代接");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 105, filename: "list.jade" });
buf.push("<button type=\"button\" class=\"btn btn-warning\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 105, filename: jade_debug[0].filename });
buf.push("无应答");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 106, filename: "list.jade" });
buf.push("<button type=\"button\" class=\"btn btn-warning\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 106, filename: jade_debug[0].filename });
buf.push("关机");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 107, filename: "list.jade" });
buf.push("<button type=\"button\" class=\"btn btn-warning\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 107, filename: jade_debug[0].filename });
buf.push("忙音");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 108, filename: "list.jade" });
buf.push("<button type=\"button\" class=\"btn btn-danger\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 108, filename: jade_debug[0].filename });
buf.push("拒绝");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 109, filename: "list.jade" });
buf.push("<button type=\"button\" class=\"btn btn-danger\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 109, filename: jade_debug[0].filename });
buf.push("空号");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 110, filename: "list.jade" });
buf.push("<button type=\"button\" class=\"btn btn-danger\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 110, filename: jade_debug[0].filename });
buf.push("传真");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 111, filename: "list.jade" });
buf.push("<div class=\"row m-t-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 112, filename: "list.jade" });
buf.push("<div class=\"col-md-10 col-md-offset-1\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 113, filename: "list.jade" });
buf.push("<table class=\"table table-bordered mm-box col-md-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 114, filename: "list.jade" });
buf.push("<tr class=\"th-inverse\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 115, filename: "list.jade" });
buf.push("<th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 115, filename: jade_debug[0].filename });
buf.push(" 客户名");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 116, filename: "list.jade" });
buf.push("<th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 116, filename: jade_debug[0].filename });
buf.push(" 性别");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 117, filename: "list.jade" });
buf.push("<th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 117, filename: jade_debug[0].filename });
buf.push(" 手机号码");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift({ lineno: 118, filename: "list.jade" });
buf.push("<th>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 118, filename: jade_debug[0].filename });
buf.push(" 状态");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift({ lineno: 119, filename: "list.jade" });
buf.push("<tr class=\"cust-record\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 120, filename: "list.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 121, filename: "list.jade" });
buf.push("<a href=\"javascript: void(0);\" class=\"id-cust-name\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 121, filename: jade_debug[0].filename });
buf.push("余士俊");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 122, filename: "list.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 122, filename: jade_debug[0].filename });
buf.push(" 男");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 123, filename: "list.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 123, filename: jade_debug[0].filename });
buf.push(" 139****7161");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 124, filename: "list.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 124, filename: jade_debug[0].filename });
buf.push(" 商机");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift({ lineno: 125, filename: "list.jade" });
buf.push("<tr class=\"cust-record\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 126, filename: "list.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 127, filename: "list.jade" });
buf.push("<a href=\"javascript: void(0);\" class=\"id-cust-name\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 127, filename: jade_debug[0].filename });
buf.push("孙旷宇");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 128, filename: "list.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 128, filename: jade_debug[0].filename });
buf.push(" 男");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 129, filename: "list.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 129, filename: jade_debug[0].filename });
buf.push(" 137****0516");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 130, filename: "list.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 130, filename: jade_debug[0].filename });
buf.push(" 商机");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift({ lineno: 131, filename: "list.jade" });
buf.push("<tr class=\"cust-record\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 132, filename: "list.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 133, filename: "list.jade" });
buf.push("<a href=\"javascript: void(0);\" class=\"id-cust-name\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 133, filename: jade_debug[0].filename });
buf.push("张先生");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 134, filename: "list.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 134, filename: jade_debug[0].filename });
buf.push(" 男");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 135, filename: "list.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 135, filename: jade_debug[0].filename });
buf.push(" 139****4286");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 136, filename: "list.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 136, filename: jade_debug[0].filename });
buf.push(" 商机");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.unshift({ lineno: 137, filename: "list.jade" });
buf.push("<tr class=\"cust-record\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 138, filename: "list.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 139, filename: "list.jade" });
buf.push("<a href=\"javascript: void(0);\" class=\"id-cust-name\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 139, filename: jade_debug[0].filename });
buf.push("吴天雪");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 140, filename: "list.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 140, filename: jade_debug[0].filename });
buf.push(" 男");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 141, filename: "list.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 141, filename: jade_debug[0].filename });
buf.push(" 139****8593");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift({ lineno: 142, filename: "list.jade" });
buf.push("<td>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 142, filename: jade_debug[0].filename });
buf.push(" 商机");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("</tr>");
jade_debug.shift();
jade_debug.shift();
buf.push("</table>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 144, filename: "list.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-modal-bs3patch.css\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 145, filename: "list.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-modal.css\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 146, filename: "list.jade" });
buf.push("<script src=\"/javascripts/bootstrap-modalmanager.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 147, filename: "list.jade" });
buf.push("<script src=\"/javascripts/bootstrap-modal.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 148, filename: "list.jade" });
buf.push("<script>");
jade_debug.unshift({ lineno: 149, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 149, filename: jade_debug[0].filename });
buf.push("$('#mu-apps').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 150, filename: jade_debug[0].filename });
buf.push("    $('#apps').show();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 151, filename: jade_debug[0].filename });
buf.push("    $('#message').hide();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 152, filename: jade_debug[0].filename });
buf.push("});");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 153, filename: jade_debug[0].filename });
buf.push("$('#mu-msg').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 154, filename: jade_debug[0].filename });
buf.push("    $('#message').show();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 155, filename: jade_debug[0].filename });
buf.push("    $('#apps').hide();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 156, filename: jade_debug[0].filename });
buf.push("});");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 157, filename: jade_debug[0].filename });
buf.push("$('.app-box').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 158, filename: jade_debug[0].filename });
buf.push("    var path = $(this).data('href');");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 159, filename: jade_debug[0].filename });
buf.push("    window.open(path);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 160, filename: jade_debug[0].filename });
buf.push("});");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 161, filename: jade_debug[0].filename });
buf.push("$('.cust-record').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 162, filename: jade_debug[0].filename });
buf.push("    $('#detail').modal('show');");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 163, filename: jade_debug[0].filename });
buf.push("});");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 164, filename: jade_debug[0].filename });
buf.push("$('.id-cust-name').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 165, filename: jade_debug[0].filename });
buf.push("    window.open('/crm/customer/1');");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 166, filename: jade_debug[0].filename });
buf.push("    return false;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 167, filename: jade_debug[0].filename });
buf.push("});");
jade_debug.shift();
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.shift();}("undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "\n.row(style='margin-top: 20px;')\n    .mm-box.col-md-8.col-md-offset-2.form-horizontal.m-b-20\n        .form-group\n            label.control-label.col-md-2 手机号码\n            .col-md-10\n                input.holo(type='text', style='display: inline-block;margin-right:10px;width:300px;')\n                button.btn.btn-primary(data-toggle=\"modal\", data-target=\"#detail\")\n                    i.icon-search(style='margin-right: 5px;')\n                    span 快速查找\n        .form-group\n            label.control-label.col-md-2 状态\n            .col-md-10(style='margin-top:5px;')\n                a.filter-text(href='javascript:void(0);') 未拨\n                a.label.label-danger(href='javascript:void(0);', style='font-size: 90%;') 未接通\n                a.filter-text(href='javascript:void(0);') 接通\n        .form-group\n            label.control-label.col-md-2 标签\n            .col-md-10(style='margin-top:5px;')\n                a.filter-text(href='javascript:void(0);') 待跟进\n                a.label.label-danger(href='javascript:void(0);', style='font-size: 90%;') 待发邮件\n                a.filter-text(href='javascript:void(0);') 无意向\n\n#detail.modal(tabindex='-1', data-width='760', style='display: none;')\n    .modal-header\n        button.close(type='button', data-dismiss='modal', aria-hidden='true') &times;\n        .row\n            .col-md-3\n                h4.modal-title 余士俊 先生\n            .col-md-6\n                a.text-left(style='margin-right: 15px;', href='/crm/customer/1', target='_blank') 139****7161\n                button.btn.btn-lg.btn-success.m-l-15\n                    i.icon-phone\n                    | 拨打\n    .modal-body\n        .row\n            span.col-md-2.text-right.text-muted.small 呼叫次数\n            span.col-md-1.text-left.small 1\n            span.col-md-2.text-right.text-muted.small 最近呼叫\n            span.col-md-3.text-left.small 2013-10-10 David\n            span.col-md-2.text-right.text-muted.small 微信认证\n            span.col-md-2.text-left.small 已认证\n        .row.m-t-10\n            span.col-md-2.text-right.text-muted.small 约见记录\n            span.col-md-1.text-left.small 无\n            span.col-md-2.text-right.text-muted.small 状态\n            span.col-md-1.text-left.small 接通\n        .row.m-t-10\n            span.col-md-10.col-md-offset-1.text-left 做银行理财,给到10％以上,其他信息不愿意透露.以后有不一样的产品再试试\n        .row.m-t-10\n            span.col-md-10.col-md-offset-1.text-right.text-muted.small David 三个月前\n        .row.m-t-10\n            span.col-md-2.text-right.text-muted.small 性别\n            .col-md-2.text-left\n                .btn-group\n                    button.btn-sm.btn.btn-info 男\n                    button.btn-sm.btn.btn-default 女\n            span.col-md-2.text-right.text-muted.small 投资偏好\n            .col-md-6.text-left\n                .btn-group\n                    button.btn.btn-sm.btn-default 固收\n                    button.btn.btn-sm.btn-info PE\n                    button.btn.btn-sm.btn-default 银行理财\n                    button.btn.btn-sm.btn-default 股票\n        .row.m-t-10\n            span.col-md-2.text-right.text-muted.small 体量\n            .col-md-6.text-left\n                .btn-group\n                    button.btn-sm.btn.btn-info 100\n                    button.btn-sm.btn.btn-default 300\n                    button.btn-sm.btn.btn-default 500\n                    button.btn-sm.btn.btn-default 1000\n                    button.btn-sm.btn.btn-default 2000\n                    button.btn-sm.btn.btn-default 5000\n                    button.btn-sm.btn.btn-default 10k\n        .row.m-t-10\n            span.col-md-2.text-right.text-muted.small 跟进\n            .col-md-10.text-left\n                .btn-group\n                    button.btn-sm.btn.btn-info 1\n                    button.btn-sm.btn.btn-default 2\n                    button.btn-sm.btn.btn-default 3\n                    button.btn-sm.btn.btn-default 4\n                    button.btn-sm.btn.btn-default 5\n                    button.btn-sm.btn.btn-default 6\n                    button.btn-sm.btn.btn-default 7\n                    button.btn-sm.btn.btn-default 10\n                    button.btn-sm.btn.btn-default 14\n                input(type='text')\n                span 天后\n        .row.m-t-10\n            .col-md-4.text-left.col-md-offset-1\n                input.holo(type='text', placeholder='Email')\n            .col-md-5.text-left.col-md-offset-1\n                input.holo(type='text', placeholder='沟通产品')\n        .row.m-t-10\n            .col-md-10.col-md-offset-1\n                input.holo(type='text', style='width: 100%;', placeholder='备注')\n    .modal-footer\n        .text-center\n            button.btn.btn-success(type='button') 商机\n            button.btn.btn-primary(type='button') 跟进\n            button.btn.btn-primary(type='button') 接通\n            button.btn.btn-primary(type='button') 代接\n            button.btn.btn-warning(type='button') 无应答\n            button.btn.btn-warning(type='button') 关机\n            button.btn.btn-warning(type='button') 忙音\n            button.btn.btn-danger(type='button') 拒绝\n            button.btn.btn-danger(type='button') 空号\n            button.btn.btn-danger(type='button') 传真\n.row.m-t-10\n    .col-md-10.col-md-offset-1\n        table.table.table-bordered.mm-box.col-md-10\n            tr.th-inverse\n                th  客户名\n                th  性别\n                th  手机号码\n                th  状态\n            tr.cust-record\n                td\n                    a.id-cust-name(href='javascript: void(0);') 余士俊\n                td  男\n                td  139****7161\n                td  商机\n            tr.cust-record\n                td\n                    a.id-cust-name(href='javascript: void(0);') 孙旷宇\n                td  男\n                td  137****0516\n                td  商机\n            tr.cust-record\n                td\n                    a.id-cust-name(href='javascript: void(0);') 张先生\n                td  男\n                td  139****4286\n                td  商机\n            tr.cust-record\n                td\n                    a.id-cust-name(href='javascript: void(0);') 吴天雪\n                td  男\n                td  139****8593\n                td  商机\n\nlink(rel='stylesheet', href='/stylesheets/bootstrap-modal-bs3patch.css')\nlink(rel='stylesheet', href='/stylesheets/bootstrap-modal.css')\nscript(src='/javascripts/bootstrap-modalmanager.js')\nscript(src='/javascripts/bootstrap-modal.js')\nscript.\n    $('#mu-apps').click(function() {\n        $('#apps').show();\n        $('#message').hide();\n    });\n    $('#mu-msg').click(function() {\n        $('#message').show();\n        $('#apps').hide();\n    });\n    $('.app-box').click(function() {\n        var path = $(this).data('href');\n        window.open(path);\n    });\n    $('.cust-record').click(function() {\n        $('#detail').modal('show');\n    });\n    $('.id-cust-name').click(function() {\n        window.open('/crm/customer/1');\n        return false;\n    });");
}
}
function crm_check_list(locals) {
var jade_debug = [{ lineno: 1, filename: "list.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined) {
jade_debug.unshift({ lineno: 0, filename: "list.jade" });
jade_debug.unshift({ lineno: 1, filename: "list.jade" });
buf.push("<div class=\"row m-t-20 m-b-20\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "list.jade" });
buf.push("<div class=\"col-sm-12 text-center m-b-20\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "list.jade" });
buf.push("<div data-toggle=\"buttons-radio\" class=\"btn-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "list.jade" });
buf.push("<div class=\"btn btn btn-light-info\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push(" 全部");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "list.jade" });
buf.push("<span class=\"badge alert-danger m-l-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("50");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "list.jade" });
buf.push("<div class=\"btn btn btn-light-info\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push(" 20商机");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "list.jade" });
buf.push("<span class=\"badge alert-danger m-l-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("35");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "list.jade" });
buf.push("<div class=\"btn btn btn-light-info active\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push(" 40商机");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "list.jade" });
buf.push("<span class=\"badge alert-danger m-l-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("15");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "list.jade" });
buf.push("<div class=\"list-container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "list.jade" });
for (var x = 0; x < 10; x++)
{
jade_debug.unshift({ lineno: 13, filename: "list.jade" });
jade_debug.unshift({ lineno: 13, filename: "list.jade" });
buf.push("<div style=\"cursor:pointer;width: 236px; height: 200px;margin: 5px;position: relative;\" data-id=\"1\" class=\"mm-box col-md-2 f-task\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: "list.jade" });
buf.push("<h4>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("40商机判定");
jade_debug.shift();
jade_debug.shift();
buf.push("</h4>");
jade_debug.shift();
jade_debug.unshift({ lineno: 15, filename: "list.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "list.jade" });
buf.push("<div class=\"col-md-12\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "list.jade" });
buf.push("<i style=\"margin-right: 5px;\" class=\"icon-user-8\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "list.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("David");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "list.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 20, filename: "list.jade" });
buf.push("<div class=\"col-md-12\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 21, filename: "list.jade" });
buf.push("<i style=\"margin-right: 5px;\" class=\"icon-clock\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "list.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("今天 16:00");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 23, filename: "list.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 24, filename: "list.jade" });
buf.push("<div style=\"background: #a52410;height: 1px;margin:10px auto;\" class=\"divider\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 25, filename: "list.jade" });
buf.push("<p style=\"margin-top: 5px\" class=\"small text-muted\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("电话跟进，约见");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 26, filename: "list.jade" });
buf.push("<script>");
jade_debug.unshift({ lineno: 27, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 27, filename: jade_debug[0].filename });
buf.push("$('.f-task').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 28, filename: jade_debug[0].filename });
buf.push("    window.open('/crm/opt/validate');");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push("});");
jade_debug.shift();
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.shift();}("undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".row.m-t-20.m-b-20\n    .col-sm-12.text-center.m-b-20\n        .btn-group(data-toggle='buttons-radio')\n            .btn.btn.btn-light-info  全部\n                span.badge.alert-danger.m-l-10 50\n            .btn.btn.btn-light-info  20商机\n                span.badge.alert-danger.m-l-10 35\n            .btn.btn.btn-light-info.active  40商机\n                span.badge.alert-danger.m-l-10 15\n\n    .list-container\n        - for (var x = 0; x < 10; x++)\n            .mm-box.col-md-2.f-task(style='cursor:pointer;width: 236px; height: 200px;margin: 5px;position: relative;',data-id='1')\n                h4 40商机判定\n                .row\n                    .col-md-12\n                        i.icon-user-8(style='margin-right: 5px;')\n                        span David\n                .row\n                    .col-md-12\n                        i.icon-clock(style='margin-right: 5px;')\n                        span 今天 16:00\n                .row\n                    .divider(style='background: #a52410;height: 1px;margin:10px auto;')\n                p.small.text-muted(style='margin-top: 5px') 电话跟进，约见\nscript.\n    $('.f-task').click(function() {\n        window.open('/crm/opt/validate');\n    });");
}
}
function crm_customer_call(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (customer, investmentPreferenceDict) {
buf.push("<div style=\"margin-top: 60px;\" class=\"row\"><div style=\"padding-bottom: 15px\" class=\"mm-box col-md-8 col-md-offset-2\"><div class=\"row m-t-20\"><span class=\"col-md-2 text-right text-muted small\">呼叫次数</span><span class=\"col-md-1 text-left small\">" + (jade.escape((jade_interp = customer.callTimes) == null ? '' : jade_interp)) + "</span><span class=\"col-md-2 text-right text-muted small\">最近呼叫</span><span class=\"col-md-3 text-left small\">");
if ( customer && customer.lastContact)
{
buf.push("" + (jade.escape((jade_interp = customer.lastContact.lastContactDate) == null ? '' : jade_interp)) + " " + (jade.escape((jade_interp = customer.lastContact.lastContactUName) == null ? '' : jade_interp)) + "");
}
else
{
buf.push("无呼叫记录");
}
buf.push("</span><span class=\"col-md-2 text-right text-muted small\">微信认证</span><span class=\"col-md-2 text-left small\">");
if ( customer.wechatAuth == true)
{
buf.push("已认证");
}
else
{
buf.push("未认证");
}
buf.push("</span></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">约见记录</span><span class=\"col-md-1 text-left small\">无(TODO)</span><span class=\"col-md-2 text-right text-muted small\">状态</span><span class=\"col-md-2 text-left small\">" + (jade.escape((jade_interp = customer.statusName) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><span class=\"col-md-10 col-md-offset-1 text-left\">" + (jade.escape((jade_interp = customer.comment) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><span class=\"col-md-10 col-md-offset-1 text-right text-muted small\">David 三个月前(TODO)</span></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">姓名</span><div class=\"col-md-3 text-left\"><input type=\"text\"" + (jade.attr("value", '' + (customer.name) + '', true, false)) + " class=\"holo\"/></div><span class=\"col-md-2 text-right text-muted small\">性别</span><div class=\"col-md-2 text-left\"><div data-toggle=\"buttons-radio\" class=\"btn-group\">");
if ( customer.sex == 'male')
{
buf.push("<button type=\"button\" class=\"btn-sm btn btn-light-info active\">男</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">女</button>");
}
else
{
buf.push("<button type=\"button\" class=\"btn-sm btn btn-light-info\">男</button><button type=\"button\" class=\"btn-sm btn btn-light-info active\">女</button>");
}
buf.push("</div></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">投资偏好</span><div class=\"col-md-6 text-left\"><div data-toggle=\"buttons-radio\" class=\"btn-group\">");
// iterate investmentPreferenceDict
;(function(){
  var $$obj = investmentPreferenceDict;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var cip = $$obj[$index];

if ( customer.investmentPreference == cip.key)
{
buf.push("<button type=\"button\"" + (jade.attr("data-key", '' + (cip.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info active\">" + (jade.escape((jade_interp = cip.name) == null ? '' : jade_interp)) + "</button>");
}
else
{
buf.push("<button type=\"button\"" + (jade.attr("data-key", '' + (cip.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info\">" + (jade.escape((jade_interp = cip.name) == null ? '' : jade_interp)) + "</button>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var cip = $$obj[$index];

if ( customer.investmentPreference == cip.key)
{
buf.push("<button type=\"button\"" + (jade.attr("data-key", '' + (cip.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info active\">" + (jade.escape((jade_interp = cip.name) == null ? '' : jade_interp)) + "</button>");
}
else
{
buf.push("<button type=\"button\"" + (jade.attr("data-key", '' + (cip.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info\">" + (jade.escape((jade_interp = cip.name) == null ? '' : jade_interp)) + "</button>");
}
    }

  }
}).call(this);

buf.push("</div></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">体量(TODO)</span><div class=\"col-md-6 text-left\"><div data-toggle=\"buttons-radio\" class=\"btn-group\"><button type=\"button\" class=\"btn-sm btn btn-light-info active\">100</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">300</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">500</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">1000</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">2000</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">5000</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">10K</button></div></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">跟进(TODO)</span><div class=\"col-md-10 text-left\"><div data-toggle=\"buttons-radio\" class=\"btn-group\"><button class=\"btn-sm btn btn-light-info active\">1</button><button class=\"btn-sm btn btn-light-info\">2</button><button class=\"btn-sm btn btn-light-info\">3</button><button class=\"btn-sm btn btn-light-info\">4</button><button class=\"btn-sm btn btn-light-info\">5</button><button class=\"btn-sm btn btn-light-info\">6</button><button class=\"btn-sm btn btn-light-info\">7</button><button class=\"btn-sm btn btn-light-info\">10</button><button class=\"btn-sm btn btn-light-info\">14</button></div><input type=\"text\" size=\"2\" class=\"m-l-10\"/><span>天后</span></div></div><div class=\"row m-t-10\"><div class=\"col-md-4 text-left col-md-offset-1\"><input type=\"text\" placeholder=\"Email\" class=\"holo\"/></div><div class=\"col-md-5 text-left col-md-offset-1\"><input type=\"text\" placeholder=\"沟通产品\" class=\"holo\"/></div></div><div class=\"row m-t-10\"><div class=\"col-md-10 col-md-offset-1\"><input type=\"text\" style=\"width: 100%;\" placeholder=\"备注\" class=\"holo\"/></div></div></div></div><div class=\"function-bar\"><div class=\"row m-t-10 text-center\"><button type=\"button\" class=\"btn btn-success\">商机</button><button type=\"button\" class=\"btn btn-primary m-l-5\">跟进</button><button type=\"button\" class=\"btn btn-primary m-l-5\">接通</button><button type=\"button\" class=\"btn btn-primary m-l-5\">代接</button><button type=\"button\" class=\"btn btn-warning m-l-5\">无应答</button><button type=\"button\" class=\"btn btn-warning m-l-5\">关机</button><button type=\"button\" class=\"btn btn-warning m-l-5\">忙音</button><button type=\"button\" class=\"btn btn-danger m-l-5\">拒绝</button><button type=\"button\" class=\"btn btn-danger m-l-5\">空号</button><button type=\"button\" class=\"btn btn-danger m-l-5\">传真</button></div><i style=\"font-size: 36px;position:fixed;left:10px;bottom:20px;z-index:15;\" class=\"icon icon-phone-3 text-success\"></i></div><script></script>");}("customer" in locals_for_with?locals_for_with.customer:typeof customer!=="undefined"?customer:undefined,"investmentPreferenceDict" in locals_for_with?locals_for_with.investmentPreferenceDict:typeof investmentPreferenceDict!=="undefined"?investmentPreferenceDict:undefined));;return buf.join("");
}
function crm_customer_callList_detail(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<!--Created by wangnan on 14-6-3.\n--><p>hello world!</p>");;return buf.join("");
}
function crm_customer_callList_list(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (statusList, status, tagList, tag) {
buf.push("<!--Created by wangnan on 14-6-3.\n外拨列表页面\n--><div class=\"row m-t-25\"><div class=\"col-sm-8 col-sm-offset-2 mm-box form-horizontal\"><div class=\"row\"><div class=\"form-group\"><label class=\"control-label col-md-2\">手机号码</label><div class=\"col-md-10\"><input id=\"customerTelNo\" type=\"text\" style=\"display: inline-block;margin-right:10px;width:300px;\" class=\"holo\"/><button id=\"customerCallListSubmit\" class=\"btn btn-info\"><i style=\"margin-right: 5px;\" class=\"icon-search-8\"></i><span>快速查找</span></button></div></div><div class=\"form-group\"><label class=\"control-label col-md-2\">状态</label><div class=\"col-md-10\"><div id=\"selectCustomerCallStatus\" class=\"labelRadio\">");
// iterate statusList
;(function(){
  var $$obj = statusList;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var s = $$obj[$index];

if ( status && status.key == s.key)
{
buf.push("<input name=\"callStatus\" type=\"radio\"" + (jade.attr("value", '' + (s.key) + '', true, false)) + (jade.attr("data-name", "" + (s.name) + "", true, false)) + " checked=\"checked\"/>");
}
else
{
buf.push("<input name=\"callStatus\" type=\"radio\"" + (jade.attr("value", '' + (s.key) + '', true, false)) + (jade.attr("data-name", "" + (s.name) + "", true, false)) + "/>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var s = $$obj[$index];

if ( status && status.key == s.key)
{
buf.push("<input name=\"callStatus\" type=\"radio\"" + (jade.attr("value", '' + (s.key) + '', true, false)) + (jade.attr("data-name", "" + (s.name) + "", true, false)) + " checked=\"checked\"/>");
}
else
{
buf.push("<input name=\"callStatus\" type=\"radio\"" + (jade.attr("value", '' + (s.key) + '', true, false)) + (jade.attr("data-name", "" + (s.name) + "", true, false)) + "/>");
}
    }

  }
}).call(this);

buf.push("</div></div></div><div class=\"form-group\"><label class=\"control-label col-md-2\">标签</label><div class=\"col-md-10\"><div id=\"selectCustomerTag\" class=\"labelRadio\">");
// iterate tagList
;(function(){
  var $$obj = tagList;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var t = $$obj[$index];

if ( tag && tag.name == t.name)
{
buf.push("<input name=\"tag\" type=\"radio\"" + (jade.attr("value", '' + (t.name) + '', true, false)) + (jade.attr("data-name", "" + (t.name) + "", true, false)) + " checked=\"checked\"/>");
}
else
{
buf.push("<input name=\"tag\" type=\"radio\"" + (jade.attr("value", '' + (t.name) + '', true, false)) + (jade.attr("data-name", "" + (t.name) + "", true, false)) + "/>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var t = $$obj[$index];

if ( tag && tag.name == t.name)
{
buf.push("<input name=\"tag\" type=\"radio\"" + (jade.attr("value", '' + (t.name) + '', true, false)) + (jade.attr("data-name", "" + (t.name) + "", true, false)) + " checked=\"checked\"/>");
}
else
{
buf.push("<input name=\"tag\" type=\"radio\"" + (jade.attr("value", '' + (t.name) + '', true, false)) + (jade.attr("data-name", "" + (t.name) + "", true, false)) + "/>");
}
    }

  }
}).call(this);

buf.push("</div></div></div></div></div></div><div class=\"row m-t-25\"><div class=\"col-sm-8 col-sm-offset-2\"><div id=\"customerCallListTable\" class=\"row\"></div></div></div><div id=\"customerCallListDetail\" tabindex=\"-1\" data-width=\"760\" style=\"display:none;\" class=\"modal\"><div class=\"modal-body\"></div></div><script>function search() {\n    var telNo = $('#customerTelNo').val();\n    var status = statusRadio.val();\n    var tag = tagRadio.val();\n    \n    callListPagination.clear();\n    \n    if(telNo) {\n        callListPagination.condition('telNo', $('#customerTelNo').val());\n    }\n    if(status) {\n        callListPagination.condition('status', statusRadio.val());\n    }\n    if(tag) {\n        callListPagination.condition('tags', {$all : [tagRadio.val()]});\n    }\n    callListPagination.first();\n}\n\nvar statusRadio = new pup.widgets.labelRadio('#selectCustomerCallStatus').radio(function() {\n    console.log('search for status : ' + statusRadio.val());\n    console.log('telNo : ' + $('#customerTelNo').val());\n    console.log('tag : ' + tagRadio.val());\n    search();\n});\n\nvar tagRadio = new pup.widgets.labelRadio('#selectCustomerTag').radio(function() {\n    console.log('search for tag : ' + tagRadio.val());\n    console.log('telNo : ' + $('#customerTelNo').val());\n    console.log('status : ' + statusRadio.val());\n    search();\n});\n\n$('#customerCallListSubmit').on('click', function(e) {\n    console.log('search for telNo : ' + $('#customerTelNo').val());\n    console.log('status : ' + statusRadio.val());\n    console.log('tag : ' + tagRadio.val());\n    search();\n});\n\nvar callListPagination = new pup.Pagination({\n    //pup template key, required\n    templateKey : \"customer.callList.listTable\",\n    // name \"pagination\" is default, not required\n    paginationParamName : \"pagination\"\n});\n\ncallListPagination.first();</script>");}("statusList" in locals_for_with?locals_for_with.statusList:typeof statusList!=="undefined"?statusList:undefined,"status" in locals_for_with?locals_for_with.status:typeof status!=="undefined"?status:undefined,"tagList" in locals_for_with?locals_for_with.tagList:typeof tagList!=="undefined"?tagList:undefined,"tag" in locals_for_with?locals_for_with.tag:typeof tag!=="undefined"?tag:undefined));;return buf.join("");
}
function crm_customer_callList_listTable(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (dataList) {
buf.push("<!--Created by wangnan on 14-6-3.\n\n--><table class=\"table mm-box\"><tr class=\"th-inverse\"><th> 客户名</th><th> 性别</th><th> 手机号码</th><th> 状态</th></tr><tbody>");
// iterate dataList
;(function(){
  var $$obj = dataList;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var data = $$obj[$index];

buf.push("<tr" + (jade.attr("onclick", 'showCallListDetail(' + (data._id) + ');', true, false)) + " class=\"cust-record\"><td>" + (jade.escape((jade_interp = data.name) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = data.sex) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = data.telNo) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = data.status) == null ? '' : jade_interp)) + "</td></tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var data = $$obj[$index];

buf.push("<tr" + (jade.attr("onclick", 'showCallListDetail(' + (data._id) + ');', true, false)) + " class=\"cust-record\"><td>" + (jade.escape((jade_interp = data.name) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = data.sex) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = data.telNo) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = data.status) == null ? '' : jade_interp)) + "</td></tr>");
    }

  }
}).call(this);

buf.push("</tbody></table><div id=\"customerCallListPageBar\"></div><script>callListPagination.bar('#customerCallListPageBar');\n\nfunction showCallListDetail(id) {\n    pup.widgets.layerManager.open({\n        //default random, not required\n        layerKey : null,\n        //default body, not required\n        targetSelector : null,\n        //if template attribute not set, html will available, not required\n        html : '',\n        //pup.template settings, for load content from remote, not required\n        template : {\n            //template key\n            key : 'customer.callList.detail',\n            //template request params\n            dataParam : {id : id},\n            //callback fn\n            beforeRender : function() {},\n            //callback fn\n            afterRender : function() {}\n        }\n    });\n}</script>");}("dataList" in locals_for_with?locals_for_with.dataList:typeof dataList!=="undefined"?dataList:undefined));;return buf.join("");
}
function crm_customer_data_batchListTable(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (data, count) {
buf.push("<!--Created by michael on 6/4/14.\n--><table class=\"table\"><tr><th>批号</th><th>归属</th><th>数量</th><th>勾选</th></tr>");
// iterate data
;(function(){
  var $$obj = data;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var batch = $$obj[$index];

buf.push("<tr class=\"cust-record\"><td>" + (jade.escape((jade_interp = batch.name) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = batch.belongArea.areaName) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = batch.availableCount) == null ? '' : jade_interp)) + "</td><td><input type=\"hidden\"" + (jade.attr("id", 'batchCount' + (batch._id) + '', true, false)) + (jade.attr("value", '' + (batch.availableCount) + '', true, false)) + "/><input checked=\"checked\" type=\"checkbox\" name=\"batchBox\"" + (jade.attr("value", '' + (batch._id) + '', true, false)) + " class=\"checkbox\"/></td></tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var batch = $$obj[$index];

buf.push("<tr class=\"cust-record\"><td>" + (jade.escape((jade_interp = batch.name) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = batch.belongArea.areaName) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = batch.availableCount) == null ? '' : jade_interp)) + "</td><td><input type=\"hidden\"" + (jade.attr("id", 'batchCount' + (batch._id) + '', true, false)) + (jade.attr("value", '' + (batch.availableCount) + '', true, false)) + "/><input checked=\"checked\" type=\"checkbox\" name=\"batchBox\"" + (jade.attr("value", '' + (batch._id) + '', true, false)) + " class=\"checkbox\"/></td></tr>");
    }

  }
}).call(this);

buf.push("<tr><td colspan=\"3\" class=\"text-center\"><input type=\"hidden\" name=\"batchTotalCount\" id=\"batchTotalCount\"" + (jade.attr("value", '' + (count) + '', true, false)) + "/><label class=\"control-label\">" + (jade.escape((jade_interp = count) == null ? '' : jade_interp)) + "条/</label><label id=\"leftCount\" class=\"control-label\">" + (jade.escape((jade_interp = count) == null ? '' : jade_interp)) + "</label><label class=\"control-label\">条</label></td></tr></table><script>batchLoadComplete();\ndataCount = parseInt($('#batchTotalCount').val());\nleftCount = dataCount;\n\n$(\"#batchListData input:checkbox[name='batchBox']:checked\").each(function(key, value) {\n    batchSelectedIds.push(parseInt($(this).val()));\n});\n\n$('input[name=batchBox]').change(function() {\n    var totalCount = 0;\n    batchSelectedIds.clear();\n    $(\"#batchListData input:checkbox[name='batchBox']:checked\").each(function(key, value) {\n        batchSelectedIds.push(parseInt($(this).val()));\n        var inputId = 'batchCount'+$(this).val();\n        totalCount += parseInt($('#' + inputId).val());\n    });\n    dataCount = totalCount;\n    assign(getAssignType());\n});</script>");}("data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"count" in locals_for_with?locals_for_with.count:typeof count!=="undefined"?count:undefined));;return buf.join("");
}
function crm_customer_data_batchTotalCount(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (count, data) {
buf.push("<!--Created by michael on 6/4/14.\n--><div class=\"row text-center\"><input type=\"hidden\" name=\"batchTotalCount\" id=\"batchTotalCount\"" + (jade.attr("value", '' + (count) + '', true, false)) + "/><label class=\"control-label\">" + (jade.escape((jade_interp = count) == null ? '' : jade_interp)) + "条/</label><label id=\"leftCount\" class=\"control-label\">" + (jade.escape((jade_interp = count) == null ? '' : jade_interp)) + "</label><label class=\"control-label\">条</label>");
// iterate data
;(function(){
  var $$obj = data;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var batch = $$obj[$index];

buf.push("<input type=\"hidden\" name=\"selectedBatchId\"" + (jade.attr("value", '' + (batch._id) + '', true, false)) + "/>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var batch = $$obj[$index];

buf.push("<input type=\"hidden\" name=\"selectedBatchId\"" + (jade.attr("value", '' + (batch._id) + '', true, false)) + "/>");
    }

  }
}).call(this);

buf.push("</div><script>batchLoadComplete();\ndataCount = parseInt($('#batchTotalCount').val());\nleftCount = dataCount;\n\n$(\"#batchListData input[name='selectedBatchId']\").each(function(key, value) {\n    batchSelectedIds.push(parseInt($(this).val()));\n});</script>");}("count" in locals_for_with?locals_for_with.count:typeof count!=="undefined"?count:undefined,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));;return buf.join("");
}
function crm_customer_data_import(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (areas, dataLevels, orgs) {
buf.push("<div class=\"sidebar sidebar-left mm-box\"><div id=\"muAssign\" class=\"sidemenu\"><i class=\"icon icon-th-4\"></i>分配<div style=\"margin-left: 20px;\" class=\"label label-primary\">3</div></div><div class=\"divider divider-default\"></div><div id=\"muImport\" class=\"sidemenu\"><i class=\"icon icon-upload-5\"></i>导入</div><div class=\"divider divider-default\"></div><div id=\"muHistory\" class=\"sidemenu\"><i class=\"icon icon-list-bullet\"></i>导入历史</div><div class=\"divider divider-default\"></div><div id=\"muRecycle\" class=\"sidemenu\"><i class=\"icon icon-ccw-2\"></i>回收</div></div><div class=\"row m-t-20\"><div id=\"requests\" class=\"f-func-box mm-box col-sm-8 col-sm-offset-2\"><div class=\"modal-header row\"><h4 style=\"display: inline-block;\" class=\"pan-title modal-title\">数据分配</h4><div class=\"pull-right\"><div class=\"btn-group\"><div id=\"listBtn\" class=\"button btn btn-default\"><span class=\"icon icon-list-bullet\"></span></div><div id=\"assignBtn\" class=\"button btn btn-default\"><span class=\"icon icon-chart-pie-3\"></span></div></div></div></div><div class=\"row\"><div class=\"divider divider-danger\"></div></div><div id=\"requestListData\" class=\"row m-t\"></div><div id=\"toAssign\" style=\"display: none;\" class=\"row m-t\"><div style=\"padding-top: 10px; padding-bottom: 10px;\" class=\"row m-t\"><div class=\"col-sm-12\"><div style=\"width: 50%;\" class=\"col-md-3 text-left\"><table class=\"table table-bordered mm-box col-md-10\"><tr><td class=\"table-bordered\"><div class=\"row m-l-5 text-left\"><form id=\"queryBatch\" onsubmit=\"return fasle;\"><div class=\"form-group\"><label class=\"control-label col-md-2\">归属</label><div id=\"area\" data-toggle=\"buttons-radio\" class=\"btn-group\"><button type=\"button\" value=\"\" class=\"btn-sm btn btn-light-info active\">全部</button>");
// iterate areas
;(function(){
  var $$obj = areas;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var area = $$obj[$index];

buf.push("<button type=\"button\"" + (jade.attr("value", '' + (area.code) + '', true, false)) + " class=\"btn-sm btn btn-light-info\">" + (jade.escape((jade_interp = area.name) == null ? '' : jade_interp)) + "</button>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var area = $$obj[$index];

buf.push("<button type=\"button\"" + (jade.attr("value", '' + (area.code) + '', true, false)) + " class=\"btn-sm btn btn-light-info\">" + (jade.escape((jade_interp = area.name) == null ? '' : jade_interp)) + "</button>");
    }

  }
}).call(this);

buf.push("</div></div><div class=\"form-group\"><label class=\"control-label col-md-2\">类型</label><div id=\"type\" data-toggle=\"buttons-radio\" class=\"btn-group\"><button type=\"button\" value=\"\" class=\"btn-sm btn btn-light-info active\">全部</button>");
// iterate dataLevels
;(function(){
  var $$obj = dataLevels;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var level = $$obj[$index];

buf.push("<button type=\"button\"" + (jade.attr("value", '' + (level.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info\">" + (jade.escape((jade_interp = level.name) == null ? '' : jade_interp)) + "</button>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var level = $$obj[$index];

buf.push("<button type=\"button\"" + (jade.attr("value", '' + (level.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info\">" + (jade.escape((jade_interp = level.name) == null ? '' : jade_interp)) + "</button>");
    }

  }
}).call(this);

buf.push("</div></div><div class=\"form-group\"><label class=\"control-label col-md-2\">批号</label><input name=\"batchNo\" id=\"batchNo\" class=\"input-md\"/><span style=\"margin-right: 20px;\"></span><button data-toggle=\"modal\" data-target=\"#detail\" id=\"queryQuick\" class=\"btn btn-info\"><i style=\"margin-right: 5px;\" class=\"icon-search-8\"></i><span>过滤</span></button></div></form></div></td></tr><tr><td id=\"batchListData\"></td></tr></table></div><div style=\"width: 5%;\" class=\"col-md-3 text-left\"><span style=\"margin-top:200px;\" class=\"glyphicon glyphicon-arrow-right\"></span></div><div style=\"width: 45%;\" class=\"col-md-3 text-left\"><table class=\"table table-bordered mm-box col-md-10\"><tr><td class=\"table-bordered\"><form id=\"queryUser\" action=\"/crm/user/getWorkGroupUsers\"><div class=\"row text-left\"><div class=\"form-group\"><label class=\"control-label col-md-3 text-right\">区域</label><select name=\"orgCode\" id=\"orgCode\" class=\"selectpicker\">");
// iterate orgs
;(function(){
  var $$obj = orgs;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var org = $$obj[$index];

buf.push("<option" + (jade.attr("value", '' + (org.code) + '', true, false)) + ">" + (jade.escape((jade_interp = org.name) == null ? '' : jade_interp)) + "</option>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var org = $$obj[$index];

buf.push("<option" + (jade.attr("value", '' + (org.code) + '', true, false)) + ">" + (jade.escape((jade_interp = org.name) == null ? '' : jade_interp)) + "</option>");
    }

  }
}).call(this);

buf.push("</select></div></div><div class=\"row text-left\"><div class=\"form-group\"><label class=\"control-label col-xs-3 text-right\">小组</label><select name=\"workGroup\" id=\"workGroup\" class=\"selectpicker\"></select></div></div><div class=\"row text-left\"><div class=\"form-group\"><label class=\"control-label col-md-3 text-right\">方式</label><div id=\"assignType\" data-toggle=\"buttons-radio\" class=\"btn-group\"><button type=\"button\" value=\"avg\" class=\"btn-sm btn btn-light-info active\">平均分配</button><button type=\"button\" value=\"custon\" class=\"btn-sm btn btn-light-info\">自定义分配</button></div></div></div><div class=\"form-group text-center\"><button data-toggle=\"modal\" id=\"queryUser\" class=\"btn btn-info\"><i style=\"margin-right: 5px;\" class=\"icon-search-8\"></i><span>过滤</span></button></div></form></td></tr><tr><td id=\"userListData\"></td></tr></table></div></div></div></div><div id=\"assignFooter\" style=\"display: none;\"><div class=\"row\"><div style=\"background: #999;height: 1px;margin:20px auto;\" class=\"divider\"></div></div><div style=\"height: 80px;\" class=\"row text-center\"><button style=\"margin-right: 40px;\" class=\"btn btn-lg btn-default\">取消</button><button id=\"assignDataBtn\" class=\"btn btn-lg btn-success\">确定</button></div></div><div id=\"assignMask\" style=\"opacity: .9;\" class=\"box-mask mask-full\"><div style=\"margin-top: 60px\" class=\"row\"><div class=\"col-sm-6 col-sm-offset-3 text-center\"><h3 id=\"assignProgress\" style=\"color: #FFFFFF;\">正在处理</h3></div></div><div id=\"assign-next-actions\" style=\"margin-top: 20px; display: none;\" class=\"row\"><div class=\"col-sm-6 col-sm-offset-3 text-center\"><button id=\"assignConBtn\" class=\"btn btn-primary\">继续分配</button><button id=\"assignCloseBtn\" class=\"btn btn-success m-l-15\">关闭</button></div></div></div></div><div id=\"import\" style=\"display: none;\" class=\"f-func-box mm-box col-sm-8 col-sm-offset-2 form-horizontal\"><div class=\"modal-header row\"><h4 style=\"display: inline-block;\" class=\"pan-title modal-title\">导入数据</h4></div><div class=\"row\"><div class=\"divider divider-danger\"></div></div><div class=\"row m-t-10\"><div class=\"col-sm-12 form-group\"><label class=\"control-label col-md-2\">文件</label><div style=\"margin-top:5px;\" class=\"col-md-10\"><input id=\"file\" type=\"file\"/></div></div></div><div class=\"row m-t-10\"><div class=\"col-sm-12 form-group\"><label for=\"area\" class=\"col-sm-2 control-label\">采购</label><select name=\"area\" class=\"selectpicker\"><option value=\"1\">海宁路分公司</option><option value=\"2\">陆家嘴分公司</option><option value=\"2\">北京分公司</option><option value=\"2\">杭州分公司</option></select><select class=\"selectpicker\"><option value=\"1\">李x</option><option value=\"2\">张x</option></select></div></div><div class=\"row m-t-10\"><div class=\"col-sm-12 form-group\"><label for=\"name\" class=\"col-sm-2 control-label\">数据批次名称</label><div class=\"col-sm-4\"><input type=\"text\" id=\"name\" class=\"holo\"/></div><label for=\"cycle\" class=\"col-sm-2 control-label\">归属</label><div class=\"col-sm-4\"><div data-toggle=\"buttons-radio\" class=\"btn-group\"><button type=\"button\" class=\"btn-sm btn btn-light-info active\">上海</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">深圳</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">杭州</button></div></div></div></div><input type=\"text\" style=\"width: 100%\" placeholder=\"备注\" class=\"holo\"/><div class=\"row\"><div style=\"background: #999;height: 1px;margin:20px auto;\" class=\"divider\"></div></div><div style=\"height: 80px;\" class=\"row text-center\"><button style=\"margin-right: 40px;\" class=\"btn btn-lg btn-default\">取消</button><button id=\"ok\" class=\"btn btn-lg btn-success\">确定</button></div><div id=\"importMask\" style=\"opacity: .9;\" class=\"box-mask mask-full\"><div style=\"margin-top: 60px\" class=\"row\"><div class=\"col-sm-6 col-sm-offset-3 text-center\"><h3 id=\"importProgress\" style=\"color: #FFFFFF;\">正在处理</h3></div></div><div id=\"import-next-actions\" style=\"margin-top: 20px; display: none;\" class=\"row\"><div class=\"col-sm-6 col-sm-offset-3 text-center\"><button class=\"btn btn-primary\">继续导入</button><button class=\"btn btn-success m-l-15\">分配数据</button></div></div></div></div><div id=\"history\" style=\"display: none;\" class=\"f-func-box\"><div class=\"row\"><div class=\"col-sm-8 col-sm-offset-2 mm-box form-horizontal\"><div class=\"row m-t-10\"><div class=\"form-group\"><label for=\"name\" class=\"col-sm-2 control-label\">批次名</label><div class=\"col-sm-4\"><input type=\"text\" id=\"batchName\" placeholder=\"关键字\" class=\"holo\"/></div><label for=\"cycle\" class=\"col-sm-2 control-label\">归属</label><div class=\"col-sm-4\"><div data-toggle=\"buttons-radio\" class=\"btn-group\"><button type=\"button\" class=\"btn-sm btn btn-light-info active\">上海</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">深圳</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">杭州</button></div></div></div></div><div class=\"row m-t-10\"><div class=\"form-group\"><label for=\"name\" class=\"col-sm-2 control-label\">导入日期</label><div class=\"col-sm-4\"><input type=\"text\" id=\"start_date\" placeholder=\"开始日期\" readonly=\"true\" class=\"holo\"/></div><div class=\"col-sm-4\"><input type=\"text\" id=\"end_date\" placeholder=\"截止日期\" readonly=\"true\" class=\"holo\"/></div></div></div><div class=\"row m-t-10 m-b-10\"><div class=\"divider divider-default\"></div></div><div class=\"row text-center m-b-10\"><button class=\"btn btn-primary\"><i class=\"icon icon-filter-1\"></i>过滤</button></div></div></div><div class=\"row m-t-25\"><div class=\"col-sm-8 col-sm-offset-2\"><div class=\"row\"><table class=\"table mm-box col-md-10\"><tr class=\"th-inverse\"><th class=\"col-sm-3\"> 名称</th><th class=\"col-sm-2\"> 总条数</th><th class=\"col-sm-2\"> 成功数</th><th class=\"col-sm-3\"> 时间</th><th class=\"col-sm-2\"> 操作人</th></tr>");
for (var x = 0; x < 10; x++)
{
buf.push("<tr class=\"cust-record\"><td> xx</td><td> 10000</td><td> 9999</td><td> 2012-8-8 11:01:54</td><td> Susan</td></tr>");
}
buf.push("</table></div></div></div></div><div id=\"trash\" style=\"display: none;\" class=\"f-func-box mm-box col-sm-8 col-sm-offset-2 form-horizontal\"><div class=\"modal-header row\"><h4 style=\"display: inline-block;\" class=\"pan-title modal-title\">回收</h4><div class=\"pull-right\"><div class=\"btn-group\"><div id=\"recycleBtn\" class=\"button btn btn-default\"><span class=\"icon icon-ccw-2\"></span></div><div id=\"reallocateBtn\" class=\"button btn btn-default\"><span class=\"icon icon-chart-pie-3\"></span></div></div></div></div><div class=\"row\"><div class=\"divider divider-danger\"></div></div><div id=\"recycleList\" class=\"row m-t\"><div style=\"padding-top: 10px; padding-bottom: 10px;\" class=\"row m-t\"><div class=\"col-sm-12\"><div style=\"width: 100%;\" class=\"col-md-3 text-left\"><table class=\"table table-bordered mm-box col-md-10\"><div class=\"thead\"><tr><td class=\"table-bordered\"><div class=\"row text-left\"><div class=\"form-group text-left\"><label class=\"control-label col-md-2\">组员</label><div style=\"margin-top:5px;\" class=\"col-md-10\"><a href=\"javascript:void(0);\" class=\"filter-text\">全部</a><a href=\"javascript:void(0);\" class=\"filter-text\">张xx</a><a href=\"javascript:void(0);\" style=\"font-size: 90%;\" class=\"label label-danger\">李xx</a><a href=\"javascript:void(0);\" class=\"filter-text\">王xx</a></div></div><div class=\"form-group\"><label class=\"control-label col-md-2\">类型</label><div data-toggle=\"buttons-radio\" class=\"btn-group\"><button type=\"button\" class=\"btn-sm btn btn-light-info active\">全部</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">跟进</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">20商机</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">40商机</button></div></div></div></td></tr></div><div class=\"tbody\"><tr><td><table class=\"table table-hover\"><div class=\"thead\"><tr><th>客户</th><th>归属</th><th>类型</th><th><input select=\"selected\" type=\"checkbox\" class=\"checkbox\"/></th></tr></div><div class=\"tbody\"><tr class=\"cust-record\"><td>张xx</td><td>上海</td><td>跟进</td><td><input select=\"selected\" type=\"checkbox\" class=\"checkbox\"/></td></tr><tr class=\"cust-record\"><td>张xx</td><td>上海</td><td>跟进</td><td><input select=\"selected\" type=\"checkbox\" class=\"checkbox\"/></td></tr><tr class=\"cust-record\"><td>张xx</td><td>上海</td><td>跟进</td><td><input select=\"selected\" type=\"checkbox\" class=\"checkbox\"/></td></tr></div></table></td></tr></div></table></div></div></div></div><div id=\"reallocate\" style=\"display: none;\" class=\"row m-t\"><div style=\"padding-top: 10px; padding-bottom: 10px;\" class=\"row m-t\"><div class=\"col-sm-12\"><div style=\"width: 50%;\" class=\"col-md-3 text-left\"><table class=\"table table-bordered mm-box col-md-10\"><tr><td class=\"table-bordered\"><div class=\"row m-l-5 text-left\"><div class=\"form-group\"><label class=\"control-label col-md-2\">组员</label><div style=\"margin-top:5px;\" class=\"col-md-10\"><a href=\"javascript:void(0);\" class=\"filter-text\">全部</a><a href=\"javascript:void(0);\" class=\"filter-text\">张xx</a><a href=\"javascript:void(0);\" style=\"font-size: 90%;\" class=\"label label-danger\">李xx</a><a href=\"javascript:void(0);\" class=\"filter-text\">王xx</a></div></div><div class=\"form-group\"><label class=\"control-label col-md-2\">类型</label><div class=\"btn-group\"><button class=\"btn btn-sm btn-default\"> 全部</button><button class=\"btn btn-sm btn-default\"> 跟进</button><button class=\"btn btn-sm btn-default\"> 20商机</button><button class=\"btn btn-sm btn-default\"> 40商机</button></div></div></div></td></tr><tr><td><table class=\"table\"><tr><th>客户</th><th>归属</th><th>类型</th><th><input select=\"selected\" type=\"checkbox\" class=\"checkbox\"/></th></tr><tr class=\"cust-record\"><td>张xx</td><td>上海</td><td>跟进</td><td><input select=\"selected\" type=\"checkbox\" class=\"checkbox\"/></td></tr><tr class=\"cust-record\"><td>张xx</td><td>上海</td><td>跟进</td><td><input select=\"selected\" type=\"checkbox\" class=\"checkbox\"/></td></tr><tr class=\"cust-record\"><td>张xx</td><td>上海</td><td>跟进</td><td><input select=\"selected\" type=\"checkbox\" class=\"checkbox\"/></td></tr></table></td></tr></table></div><div style=\"width: 5%;\" class=\"col-md-3 text-left\"><span style=\"margin-top:200px;\" class=\"glyphicon glyphicon-arrow-right\"></span></div><div style=\"width: 45%;\" class=\"col-md-3 text-left\"><table class=\"table table-bordered mm-box col-md-10\"><tr><td><table class=\"table\"><tr><th>人员</th><th>勾选</th></tr><tr class=\"cust-record\"><td class=\"col-xs-4\">David</td><td><input select=\"selected\" type=\"radio\" name=\"employee\" class=\"radio\"/></td></tr><tr class=\"cust-record\"><td class=\"col-xs-4\">Sissi</td><td><input select=\"selected\" type=\"radio\" name=\"employee\" class=\"radio\"/></td></tr><tr class=\"cust-record\"><td class=\"col-xs-4\">Megan</td><td><input select=\"selected\" type=\"radio\" name=\"employee\" class=\"radio\"/></td></tr></table></td></tr></table></div></div></div></div><div class=\"row\"><div style=\"background: #999;height: 1px;margin:20px auto;\" class=\"divider\"></div></div><div style=\"height: 80px;\" class=\"row text-center\"><button id=\"assign\" class=\"btn btn-lg btn-warning\"><i class=\"icon icon-ccw-2\"></i>回收</button></div></div></div><script>var dataCount = 0;\nvar leftCount = dataCount;\n\nvar batchSelectedIds = [];\n\nvar requestPagination = new pup.Pagination({\n       templateKey : \"customer.data.requestList\",\n});\n   //跳转到第一页\nrequestPagination.first();\n\ngetBatchCount();\n\nfunction getBatchList(where) {\n    var condition = {}\n    if(where) condition = where;\n    pup.template.renderTemplateByKey(\"customerBatch.dataList\", condition);\n}\n\nfunction getBatchCount(where) {\n    var condition = {}\n    if(where) condition = where;\n    pup.template.renderTemplateByKey(\"customerBatch.count\", condition);\n}\n\n$('#queryQuick').click(function() {\n    queryBatchData();\n});\n\nfunction queryBatchData() {\n    $('#batchListData').html('');\n    var condition = {};\n    if($('#queryBatch #batchNo').val() != '') {\n        condition.name = $('#queryBatch #batchNo').val();\n        getBatchList(condition);\n    } else {\n        if($(\"#queryBatch #area > .btn.active\").val() != ''){\n            condition['belongArea.areaCode'] = $(\"#queryBatch #area > .btn.active\").val();\n        }\n        if($(\"#queryBatch #type > .btn.active\").val() != '') {\n            condition.dataLevel = $(\"#query #type > .btn.active\").val();\n        }\n        getBatchCount(condition);\n    }\n}\n\n$('#queryBatch #area').find('button').click(function() {\n    var condition = {};\n    if($(this).val() != ''){\n        condition['belongArea.areaCode'] = $(this).val();\n    }\n    if($(\"#queryBatch #type > .btn.active\").val() != '') {\n        condition.dataLevel = $(\"#query #type > .btn.active\").val();\n    }\n    getBatchCount(condition);\n});\n\n$('#queryBatch #type').find('button').click(function() {\n    var condition = {};\n    if($(this).val() != ''){\n        condition.dataLevel = $(this).val();\n    }\n    if($(\"#queryBatch #area > .btn.active\").val() != '') {\n        condition['belongArea.areaCode'] = $(\"#query #area > .btn.active\").val();\n    }\n    getBatchCount(condition);\n});\n\n$('#assignType').find('button').click(function() {\n    assign($(this).val());\n});\n\nfunction getAssignType() {\n    return $(\"#assignType > .btn.active\").val();\n}\n\n$('#queryUser').click(function() {\n    queryGroupUser($('#workGroup').val());\n});\n\nfunction batchLoadComplete() {\n    //do something\n}\n\ngetWorkGroup($('#orgCode').val());\n\n$('#orgCode').change(function() {\n    getWorkGroup($(this).val());\n});\n\nfunction getWorkGroup(orgCode) {\n    var url = '/crm/workGroup/list';\n    $.ajax({\n        type: \"GET\",\n        url: url,\n        dataType: 'json',\n        data: {'orgCode' : orgCode},\n        success: function (data) {\n            $('#workGroup option').remove();\n            if(data.data.length == 0) {\n                $('#userListData').html('');\n            }\n            $.each(data.data, function(key, value) {\n                //if(key == 0) {\n                //    queryGroupUser(value._id);\n                //}\n                $('#workGroup').append('<option value='+value._id+'>'+value.name+'</option>');\n            })\n            $('.selectpicker').selectpicker('refresh');\n        }\n    });\n}\n\nfunction queryGroupUser(workGroupId) {\n    pup.template.renderTemplateByKey(\"user.dataList\", {'workGroupId' : workGroupId});\n}\n\n$('#assignDataBtn').click(function() {\n    $('#requests').find('#assignMask').slideDown(150);\n    var params = {};\n    if($(\"#userListData input:checkbox[name='userBox']:checked\").length == 0) {\n        showErrorMsg('请先勾选用户');\n        return;\n    }\n    if(leftCount < 0) {\n        showErrorMsg('分配数已经超过总数量');\n        return;\n    }\n    params.batchIds = batchSelectedIds;\n    var assignData = [];\n    var totalNum = 0;\n    $(\"#userListData input:checkbox[name='userBox']:checked\").each(function(key, value) {\n        var inputId = 'count'+$(this).val();\n        var countVal = $('#' + inputId).val();\n        if(countVal != '') {\n            if(!posNum(countVal)){\n                showErrorMsg('请输入整数');\n                return;\n            } else {\n                totalNum += parseInt(countVal);\n                var userData = {userId : $(this).val(), count : parseInt(countVal)};\n                assignData.push(userData);\n            }\n        } else {\n            showErrorMsg('请给勾选用户分配数据');\n            return;\n        }\n    });\n    \n    params.totalCount = totalNum;\n    \n    params.assignData = assignData;\n    \n    var url = '/crm/customerBatch/assign';\n    $.ajax({\n        type: \"POST\",\n        url: url,\n        dataType: 'json',\n        data: params,\n        success: function (data) {\n            queryBatchData();\n            $('#userListData').html('');\n            $('#assignProgress').text(data.msg.body)\n            $('#assign-next-actions').show();\n        }\n    });\n    \n});\n\nfunction showErrorMsg(msg) {\n    $('#requests').find('#assignMask').hide();\n    toast({type : 'error', body : msg});\n}\n\n$('#assignConBtn, #assignCloseBtn').click(function() {\n    $('#requests').find('#assignMask').hide();\n});\n\n$('.selectpicker').selectpicker({noneSelectedText:'请选择'});\n$(\":file\").filestyle({\n    'buttonText' : '选择文件',\n    'classButton' : 'btn btn-primary',\n    'classIcon' : 'icon-plus-6'\n});\n$('#muAssign').click(function() {\n    $('.f-func-box').hide();\n    $('#requests').show();\n    $('#requestListData').show();\n    $('#toAssign').hide();\n});\n$('#listBtn').click(function() {\n    $('#requestListData').show();\n    $('#toAssign').hide();\n    $('#assignFooter').hide();\n});\n$('#assignBtn').click(function() {\n    $('#requestListData').hide();\n    $('#toAssign').show();\n    $('#assignFooter').show();\n});\n$('#muImport').click(function() {\n    $('.f-func-box').hide();\n    $('#import').show();\n});\n$('#muHistory').click(function() {\n    $('.f-func-box').hide();\n    $('#history').show();\n});\n$('#muRecycle').click(function() {\n    $('.f-func-box').hide();\n    $('#trash').show();\n    $('#recycleList').show();\n    $('#reallocate').hide();\n});\n$('#recycleBtn').click(function() {\n    $('#recycleList').show();\n    $('#reallocate').hide();\n});\n$('#reallocateBtn').click(function() {\n    $('#recycleList').hide();\n    $('#reallocate').show();\n});\n$('#ok').click(function() {\n    $('#import').find('#importMask').slideDown(150);\n    setTimeout(function() {\n        $('#importProgress').text('导入成功，读取数据1000000条')\n        $('#import-next-actions').show();\n    }, 2000);\n});\n\n$('.f-task').click(function() {\n    window.open('/crm/audit/detail');\n});</script>");}("areas" in locals_for_with?locals_for_with.areas:typeof areas!=="undefined"?areas:undefined,"dataLevels" in locals_for_with?locals_for_with.dataLevels:typeof dataLevels!=="undefined"?dataLevels:undefined,"orgs" in locals_for_with?locals_for_with.orgs:typeof orgs!=="undefined"?orgs:undefined));;return buf.join("");
}
function crm_customer_data_manage(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"sidebar sidebar-left mm-box\"><div class=\"sidemenu\"><i class=\"icon icon-edit-3\"></i>编辑</div><div class=\"divider divider-default\"></div><div class=\"sidemenu\"><i class=\"icon icon-tag\"></i>标签</div></div><div style=\"margin-top: 20px;\" class=\"row\"><div class=\"col-md-10 col-md-offset-1 col-sm-12 mm-box form-horizontal\"><div class=\"form-group m-t-10\"><label class=\"control-label col-md-2\">手机号码</label><div class=\"col-md-10\"><input type=\"text\" style=\"display: inline-block;margin-right:10px;width: 300px;\" class=\"holo\"/><button data-toggle=\"modal\" data-target=\"#detail\" class=\"btn btn-info\"><i style=\"margin-right: 5px;\" class=\"icon-search-8\"></i><span>快速查找</span></button></div></div><div class=\"form-group\"><label class=\"control-label col-md-2\">状态</label><div style=\"margin-top:5px;\" class=\"col-md-10\"><a href=\"javascript:void(0);\" class=\"filter-text\">20商机</a><a href=\"javascript:void(0);\" style=\"font-size: 90%;\" class=\"label label-danger\">40商机</a><a href=\"javascript:void(0);\" class=\"filter-text\">60商机</a><a href=\"javascript:void(0);\" class=\"filter-text\">80商机</a><a href=\"javascript:void(0);\" class=\"filter-text\">成交客户</a></div></div><div class=\"form-group\"><label class=\"control-label col-md-2\">购买产品</label><div style=\"margin-top:5px;\" class=\"col-md-10\"><a href=\"javascript:void(0);\" class=\"filter-text\">盛世神州苏州昂内地产</a><a href=\"javascript:void(0);\" style=\"font-size: 90%;\" class=\"label label-danger\">瑞泰投连险</a><a href=\"javascript:void(0);\" class=\"filter-text\">星石系列</a><a href=\"javascript:void(0);\" class=\"filter-text\">武当系列</a><a href=\"javascript:void(0);\" class=\"filter-text\">重阳系列</a></div></div><div class=\"form-group\"><label class=\"control-label col-md-2\">标签</label><div style=\"margin-top:5px;\" class=\"col-md-10\"><a href=\"javascript:void(0);\" class=\"filter-text\">待跟进</a><a href=\"javascript:void(0);\" style=\"font-size: 90%;\" class=\"label label-danger\">固收</a><a href=\"javascript:void(0);\" class=\"filter-text\">PE</a></div></div></div></div><div style=\"margin-top: 20px;\" class=\"row\"><div class=\"list-container\"><div style=\"cursor:pointer;width: 236px; height: 250px;position: relative;\" data-id=\"1\" class=\"mm-box f-cust\"><div style=\"height: 100%\" class=\"row\"><div class=\"col-md-12\"><div class=\"col-md-8\"><i style=\"margin-right: 5px;\" class=\"icon-user-8\"></i><span>张xx 先生</span></div><div class=\"col-md-4 text-right\"><span class=\"small\">商机</span></div><div class=\"col-md-12\"><i style=\"margin-right: 5px;\" class=\"icon-phone-3\"></i><span>13812345678</span></div><div class=\"col-md-12\"><span>ID: 1828052</span></div><div class=\"col-md-12\"><span>来源: 导入名单14-01-15b</span></div><div style=\"background: #a52410;height: 1px;width:100%;clear:both;margin:10px auto;\" class=\"divider\"></div><p style=\"margin-top: 5px\" class=\"small text-muted\">介绍海外固定收益产品，客户了解怎么保证收益、时间、门槛、投资方式，表示感兴趣</p></div></div><div class=\"box-mask f-action\"><div style=\"margin: 50px auto;position:relative;\" class=\"row text-center\"><button class=\"btn btn-info btn-sm\"><i class=\"icon-pencil-1\"></i>编辑</button></div></div></div><div style=\"cursor:pointer;width: 236px; margin-left: 16px;height: 250px;\" data-id=\"2\" class=\"mm-box f-cust\"><div style=\"width:100%;height:25px;background:#3D85E3;color:#FFFFFF\"><div class=\"col-md-8\"><i style=\"margin-right: 5px;\" class=\"icon-user-8\"></i><span>张xx 先生</span></div><div class=\"col-md-4 text-right\"><span class=\"small\">商机</span></div></div><div class=\"col-md-12\"><i style=\"margin-right: 5px;\" class=\"icon-phone-3\"></i><span>13812345678</span></div><div class=\"col-md-12\"><span>ID: 1828052</span></div><div class=\"col-md-12\"><span>来源: 导入名单14-01-15b</span></div><div style=\"background: #a52410;height: 1px;width:100%;clear:both;margin:10px auto;\" class=\"divider\"></div><p style=\"margin-top: 5px\" class=\"small text-muted\">介绍海外固定收益产品，客户了解怎么保证收益、时间、门槛、投资方式，表示感兴趣</p></div><div style=\"cursor:pointer;width: 236px; margin-left: 16px;height: 250px;\" data-id=\"3\" class=\"mm-box f-cust\"><div style=\"width:100%;height:25px;background:#3D85E3;color:#FFFFFF\"><div class=\"col-md-8\"><i style=\"margin-right: 5px;\" class=\"icon-user-8\"></i><span>张xx 先生</span></div><div class=\"col-md-4 text-right\"><span class=\"small\">商机</span></div></div><div class=\"col-md-12\"><i style=\"margin-right: 5px;\" class=\"icon-phone-3\"></i><span>13812345678</span></div><div class=\"col-md-12\"><span>ID: 1828052</span></div><div class=\"col-md-12\"><span>来源: 导入名单14-01-15b</span></div><div style=\"background: #a52410;height: 1px;width:100%;clear:both;margin:10px auto;\" class=\"divider\"></div><p style=\"margin-top: 5px\" class=\"small text-muted\">介绍海外固定收益产品，客户了解怎么保证收益、时间、门槛、投资方式，表示感兴趣</p></div><div style=\"cursor:pointer;width: 236px; margin-left: 16px;height: 250px;\" data-id=\"4\" class=\"mm-box f-cust\"><div style=\"width:100%;height:25px;background:#3D85E3;color:#FFFFFF\"><div class=\"col-md-8\"><i style=\"margin-right: 5px;\" class=\"icon-user-8\"></i><span>张xx 先生</span></div><div class=\"col-md-4 text-right\"><span class=\"small\">商机</span></div></div><div class=\"col-md-12\"><i style=\"margin-right: 5px;\" class=\"icon-phone-3\"></i><span>13812345678</span></div><div class=\"col-md-12\"><span>ID: 1828052</span></div><div class=\"col-md-12\"><span>来源: 导入名单14-01-15b</span></div><div style=\"background: #a52410;height: 1px;width:100%;clear:both;margin:10px auto;\" class=\"divider\"></div><p style=\"margin-top: 5px\" class=\"small text-muted\">介绍海外固定收益产品，客户了解怎么保证收益、时间、门槛、投资方式，表示感兴趣</p></div></div><div style=\"width:200px;height:200px;display:none;position: absolute;top:0;left:0;z-index:1;\" class=\"f-action text-center\"><div style=\"margin-top:70px;\" class=\"row\"><div class=\"col-md-6\"><button class=\"btn btn-info\">详情</button></div></div></div></div><script>$('#mu-apps').click(function() {\n    $('#apps').show();\n    $('#message').hide();\n});\n$('#mu-msg').click(function() {\n    $('#message').show();\n    $('#apps').hide();\n});\n\n$('.app-box').click(function() {\n    var path = $(this).data('href');\n    window.open(path);\n});\n$('.f-cust').click(function() {\n    var id = $(this).data('id');\n    window.open('/crm/customer/' + id);\n});\n\n$('.f-cust').mouseleave(function() {\n    $(this).find('.f-action').slideUp();\n});\n$('.f-cust').mouseenter(function() {\n    $(this).find('.f-action').slideDown();\n});</script>");;return buf.join("");
}
function crm_customer_data_request(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"sidebar sidebar-left mm-box\"><div id=\"muReq\" class=\"sidemenu\"><i class=\"icon icon-mail-8\"></i>申领</div></div><div class=\"row m-t-20\"><div class=\"col-sm-8 col-sm-offset-2\"><div class=\"row\"><table class=\"table mm-box\"><tr class=\"th-inverse\"><th class=\"col-sm-3\"> 日期</th><th class=\"col-sm-3\"> 条数</th><th class=\"col-sm-3\"> 等级</th><th class=\"col-sm-3\"> 状态</th></tr>");
for (var x = 0; x < 5; x++)
{
buf.push("<tr class=\"cust-record\"><td> 2014-05-06</td><td> 300</td><td> C类</td><td class=\"text-danger\"> 未分配</td></tr>");
}
for (var x = 0; x < 5; x++)
{
buf.push("<tr class=\"cust-record\"><td> 2014-05-06</td><td> 600</td><td> B类</td><td class=\"text-muted\"> 已分配</td></tr>");
}
buf.push("</table></div></div></div><div id=\"request\" tabindex=\"-1\" data-width=\"760\" style=\"display: none;\" class=\"modal\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><div class=\"row\"><div class=\"col-md-3\"><h4 class=\"modal-title\">名单申领</h4></div></div></div><div class=\"modal-body\"><div class=\"row m-t-20\"><div class=\"col-sm-12 form-group\"><label for=\"name\" class=\"col-sm-2 control-label text-right\">数据级别</label><div class=\"col-sm-4\"><div class=\"row text-left\"><div data-toggle=\"buttons-radio\" class=\"btn-group\"><button type=\"button\" class=\"btn-sm btn btn-light-info active\">A类</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">B类</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">C类</button></div></div></div><label for=\"numbers\" class=\"col-sm-2 control-label text-right\">份数</label><div class=\"col-sm-2\"><div class=\"row text-left\"><input id=\"numbers\" type=\"text\" class=\"holo\"/></div></div></div></div><input type=\"text\" style=\"width: 100%\" placeholder=\"备注\" class=\"holo\"/></div><div class=\"modal-footer\"><div class=\"text-center\"><button style=\"margin-right: 40px;\" data-dismiss=\"modal\" class=\"cancel btn btn-lg btn-default\">取消</button><button id=\"ok\" class=\"btn btn-lg btn-success\">确定</button></div></div></div><script>$('#muReq').click(function() {\n    $('#request').modal('show');\n});</script>");;return buf.join("");
}
function crm_customer_data_requestListTable(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (data, format) {
buf.push("<!--Created by michael on 6/4/14.\n-->");
// iterate data
;(function(){
  var $$obj = data;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var request = $$obj[i];

buf.push("<div style=\"padding-top: 10px; padding-bottom: 10px;\" class=\"row m-t\"><div class=\"col-sm-12\"><div class=\"col-sm-3 text-left\"><span><i class=\"icon icon-user-8 small text-muted m-r-15\"></i>" + (jade.escape((jade_interp = request.crealName) == null ? '' : jade_interp)) + "</span></div><div class=\"col-sm-2 text-center\"><span class=\"m-r-15\">" + (jade.escape((jade_interp = request.levelName) == null ? '' : jade_interp)) + "</span></div><div class=\"col-sm-4 text-left\"><span class=\"text-primary\">" + (jade.escape((jade_interp = request.count) == null ? '' : jade_interp)) + "</span></div><div class=\"col-sm-3 text-left\"><span><i class=\"icon icon-calendar small text-muted m-r-15\"></i>" + (jade.escape((jade_interp = format(request.ctime, 'yyyy-MM-dd hh:mm')) == null ? '' : jade_interp)) + "</span></div></div><div class=\"col-sm-12 text-left\"><div class=\"col-sm-12\"><span class=\"m-r-15\"><i class=\"icon icon-comment small text-muted\"></i></span><span class=\"text-left\">" + (jade.escape((jade_interp = request.description) == null ? '' : jade_interp)) + "</span></div></div></div>");
if ( i < request.length - 1)
{
}
buf.push("<div class=\"divider divider-default\"></div>");
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var request = $$obj[i];

buf.push("<div style=\"padding-top: 10px; padding-bottom: 10px;\" class=\"row m-t\"><div class=\"col-sm-12\"><div class=\"col-sm-3 text-left\"><span><i class=\"icon icon-user-8 small text-muted m-r-15\"></i>" + (jade.escape((jade_interp = request.crealName) == null ? '' : jade_interp)) + "</span></div><div class=\"col-sm-2 text-center\"><span class=\"m-r-15\">" + (jade.escape((jade_interp = request.levelName) == null ? '' : jade_interp)) + "</span></div><div class=\"col-sm-4 text-left\"><span class=\"text-primary\">" + (jade.escape((jade_interp = request.count) == null ? '' : jade_interp)) + "</span></div><div class=\"col-sm-3 text-left\"><span><i class=\"icon icon-calendar small text-muted m-r-15\"></i>" + (jade.escape((jade_interp = format(request.ctime, 'yyyy-MM-dd hh:mm')) == null ? '' : jade_interp)) + "</span></div></div><div class=\"col-sm-12 text-left\"><div class=\"col-sm-12\"><span class=\"m-r-15\"><i class=\"icon icon-comment small text-muted\"></i></span><span class=\"text-left\">" + (jade.escape((jade_interp = request.description) == null ? '' : jade_interp)) + "</span></div></div></div>");
if ( i < request.length - 1)
{
}
buf.push("<div class=\"divider divider-default\"></div>");
    }

  }
}).call(this);
}("data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"format" in locals_for_with?locals_for_with.format:typeof format!=="undefined"?format:undefined));;return buf.join("");
}
function crm_customer_data_userListTable(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (data) {
buf.push("<!--Created by michael on 6/4/14.\n--><table class=\"table\"><tr><th>人员</th><th>数量</th><th>勾选</th></tr>");
// iterate data
;(function(){
  var $$obj = data;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var user = $$obj[$index];

buf.push("<tr class=\"cust-record\"><td class=\"col-xs-4\">" + (jade.escape((jade_interp = user.realName) == null ? '' : jade_interp)) + "</td><td class=\"col-xs-4\"><input style=\"width: 60px;\" name=\"count\"" + (jade.attr("id", 'count' + (user._id) + '', true, false)) + "/></td><td class=\"col-xs-2\"><input checked=\"checked\" type=\"checkbox\" name=\"userBox\"" + (jade.attr("value", '' + (user._id) + '', true, false)) + " class=\"checkbox\"/></td></tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var user = $$obj[$index];

buf.push("<tr class=\"cust-record\"><td class=\"col-xs-4\">" + (jade.escape((jade_interp = user.realName) == null ? '' : jade_interp)) + "</td><td class=\"col-xs-4\"><input style=\"width: 60px;\" name=\"count\"" + (jade.attr("id", 'count' + (user._id) + '', true, false)) + "/></td><td class=\"col-xs-2\"><input checked=\"checked\" type=\"checkbox\" name=\"userBox\"" + (jade.attr("value", '' + (user._id) + '', true, false)) + " class=\"checkbox\"/></td></tr>");
    }

  }
}).call(this);

buf.push("</table><script>var userCount = $('input[name=count]').length;\n\nvar checkedCount = userCount;\n\nassign(getAssignType());\n\nfunction assign(assignType) {\n    if(assignType == 'avg') {\n        var extraCount = userCount == 0 ? 0 : dataCount % checkedCount;\n        var avgCount = userCount == 0 ? 0 : Math.floor(dataCount/checkedCount);\n        \n        $('#userListData').find(\"input[name=count]\").each(function(key, value) {\n            $(this).val('');\n            $(this).attr('readonly', 'readonly');\n        });\n        \n        $(\"#userListData input:checkbox[name='userBox']:checked\").each(function(key, value) {\n            var inputId = 'count'+$(this).val();\n            if(extraCount > 0) {\n                $('#' + inputId).val(avgCount + 1);\n            } else {\n                $('#' + inputId).val(avgCount);\n            }\n            extraCount --;\n        });\n        if(checkedCount > 0) {\n            leftCount = 0;\n            $('#leftCount').html(leftCount);\n        } else {\n            leftCount = dataCount;\n            $('#leftCount').html(leftCount);\n        }\n    } else {\n        $('#userListData').find(\"input[name=count]\").each(function(key, value) {\n            $(this).removeAttr('readonly');\n        });\n        var assignedCount = 0;\n        $(\"#userListData input:checkbox[name='userBox']\").each(function(key, value) {\n            var inputId = 'count'+$(this).val();\n            if($(this).is(':checked')) {\n                if(posNum($('#' + inputId).val())) {\n                    assignedCount += parseInt($('#' + inputId).val());\n                }\n            } else {\n                $('#' + inputId).attr('readonly', 'readonly');\n                $('#' + inputId).val('');\n            }\n        });\n        leftCount = dataCount - assignedCount;\n        $('#leftCount').html(leftCount + '');\n    }\n}\n\nfunction refreshLeftCount() {\n    var assignedCount = 0;\n    $(\"#userListData input:checkbox[name='userBox']:checked\").each(function(key, value) {\n        var inputId = 'count'+$(this).val();\n        if(posNum($('#' + inputId).val())) {\n            assignedCount += parseInt($('#' + inputId).val());\n        }\n    });\n    leftCount = dataCount - assignedCount;\n    $('#leftCount').html(leftCount + '');\n}\n\n$('input[name=count]').keyup(function() {\n    refreshLeftCount();\n});\n\n$('input[name=userBox]').change(function() {\n    var inputId = 'count'+$(this).val();\n    if(!$(this).is(':checked')) {\n        $('#' + inputId).attr('readonly', 'readonly');\n    }\n    checkedCount = $(\"#userListData input:checkbox[name='userBox']:checked\").length;\n    assign(getAssignType());\n});</script>");}("data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));;return buf.join("");
}
function crm_customer_detail(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"sidebar sidebar-left mm-box\"><div id=\"muEdit\" class=\"sidemenu\"><i class=\"icon icon-edit-3\"></i>编辑</div><div class=\"divider divider-default\"></div><div id=\"muTags\" class=\"sidemenu\"><i class=\"icon icon-tag-7\"></i>标签</div><div class=\"divider divider-default\"></div><div id=\"muTask\" class=\"sidemenu\"><i class=\"icon icon-calendar-8\"></i>行动计划</div><div class=\"divider divider-default\"></div><div id=\"muDateTask\" class=\"sidemenu\"><i class=\"icon icon-users-3\"></i>约见计划</div><div class=\"divider divider-default\"></div><div id=\"muCreateOrder\" class=\"sidemenu\"><i class=\"icon icon-yen\"></i>创建订单</div></div><div class=\"sidebar-mini sidebar-right mm-box\"><div id=\"muCall\" class=\"sidemenu text-center\"><i style=\"font-size: 24px;\" class=\"icon icon-phone-3 text-success\"></i></div><div id=\"muCancel\" class=\"sidemenu text-center\"><i style=\"font-size: 24px;\" class=\"icon icon-cancel-7 text-success\"></i></div></div><div style=\"margin-top: 80px;\" class=\"row\"><div style=\"padding-bottom: 15px\" class=\"mm-box col-md-8 col-md-offset-2\"><div class=\"modal-header row\"><h4 style=\"display: inline-block;\" class=\"pan-title modal-title\">基本信息</h4><div class=\"pull-right\"><span id=\"editBtn\" class=\"m-l-15 icon-btn\"><i class=\"icon-edit-3\"></i></span></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">姓名</span><span class=\"col-md-2 text-left\">张xx 先生</span><span class=\"col-md-2 text-right text-muted small\">Email</span><span class=\"col-md-6 text-left\">xiaolongzhang@tencent.com</span></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">手机号码</span><span class=\"col-md-2 text-left\">13812345678</span><span class=\"col-md-2 text-right text-muted small\">投资偏好</span><span class=\"col-md-2 text-left\">PE</span><span class=\"col-md-2 text-right text-muted small\">状态</span><span class=\"col-md-2 text-left\">已成交</span></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">会员等级</span><span class=\"col-md-2 text-left\">钻石会员</span><span class=\"col-md-2 text-right text-muted small\">数据来源</span><span class=\"col-md-2 text-left\">2013-10-10-xx</span></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">备注</span><span class=\"col-md-10 text-left\">做银行理财,给到10％以上,其他信息不愿意透入.以后有不一样的产品再试试</span></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">标签</span><div class=\"col-md-10 text-left\"><div class=\"label label-default\">外企高管</div></div></div></div></div><div class=\"row m-t-20\"><div style=\"padding-bottom: 15px\" class=\"mm-box col-md-8 col-md-offset-2\"><div class=\"modal-header row\"><h4 style=\"display: inline-block;\" class=\"pan-title modal-title\">服务记录</h4><div class=\"pull-right\"><div data-toggle=\"buttons-radio\" class=\"btn-group\"><button class=\"btn btn-light-info btn-sm active\">全部</button><button class=\"btn btn-light-info btn-sm\">通话</button><button class=\"btn btn-light-info btn-sm\">面见</button><button class=\"btn btn-light-info btn-sm\">活动</button><button class=\"btn btn-light-info btn-sm\">下单</button></div></div></div><div class=\"row\"><div class=\"col-sm-12 t-action-in\"><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-primary\">通话</span><span class=\"col-md-2 text-left\">Michael</span><span class=\"col-md-2 text-right text-muted small\">状态</span><span class=\"col-md-3 text-left\">接通<button class=\"btn btn-xs btn-default m-l-5\"><i style=\"color: green;\" class=\"icon-play\"></i><span class=\"small\">16:30</span></button></span><div class=\"col-md-3 text-right\"><span>2014-03-01 10:30</span></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">体量</span><span class=\"col-md-2 text-left\">500万</span><span class=\"col-md-2 text-right text-muted small\">流动性</span><span class=\"col-md-2 text-left\">充足</span><span class=\"col-md-2 text-right text-muted small\">偏好</span><span class=\"col-md-2 text-left\">固收</span></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">沟通产品</span><span class=\"col-md-10 text-left\">长城</span></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">客户情况</span><span class=\"col-md-10 text-left\">做银行理财,给到10％以上,其他信息不愿意透露.以后有不一样的产品再试试</span></div><div class=\"action-b-r t-action\"><button class=\"btn btn-xs btn-info\"><i class=\"icon-comment\"></i>备注</button></div></div></div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div><div class=\"row\"><div class=\"col-sm-12 t-action-in\"><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-primary\">面见</span><span class=\"col-md-6 text-left\">David</span><div class=\"col-md-4 text-right\"><span>2014-04-01 10:30</span></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">客户情况</span><span class=\"col-md-10 text-left\">做银行理财,给到10％以上,其他信息不愿意透露.以后有不一样的产品再试试</span></div></div></div></div></div><div style=\"margin-top: 20px;\" class=\"row\"><div style=\"padding-bottom: 15px\" class=\"mm-box col-md-8 col-md-offset-2\"><div class=\"modal-header row\"><h4 style=\"display: inline-block;\" class=\"pan-title modal-title\">行动计划</h4><div class=\"pull-right\"><span id=\"addPlanBtn\" class=\"m-l-15 icon-btn\"><i class=\"icon-plus-6\"></i></span></div></div><div class=\"row\"><div class=\"col-sm-12 t-action-in\"><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">类型</span><span class=\"col-md-2 text-left\">邮件</span><span class=\"col-md-2 text-right text-muted small\">时间</span><span class=\"col-md-6 text-left\">2014-4-10 10:00</span></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">描述</span><span class=\"col-md-10 text-left\">发送公司简介及项目资料</span></div><div class=\"action-b-r t-action\"><button class=\"btn btn-xs btn-info\"><i class=\"icon-comment\"></i>备注</button></div></div></div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div><div class=\"row\"><div class=\"col-sm-12 t-action-in\"><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">类型</span><span class=\"col-md-2 text-left\">电话</span><span class=\"col-md-2 text-right text-muted small\">时间</span><span class=\"col-md-6 text-left\">2014-4-10 10:00</span></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">描述</span><span class=\"col-md-10 text-left\">发送公司简介及项目资料</span></div></div></div></div></div><div style=\"margin-top: 20px; margin-bottom: 30px;\" class=\"row\"><div style=\"padding-bottom: 15px\" class=\"mm-box col-md-8 col-md-offset-2\"><div class=\"modal-header row\"><h4 style=\"display: inline-block;\" class=\"pan-title modal-title\">成交记录</h4></div><div id=\"order-report\" style=\"height: 400px;\" class=\"row m-t-10\"></div><div style=\"margin-top: 20px;\" class=\"row\"><div class=\"col-md-12 col-sm-12 col-lg-12\"><table class=\"table mm-box col-md-10\"><tr class=\"th-inverse\"><th class=\"col-sm-2\"> 日期</th><th class=\"col-sm-4\"> 产品</th><th class=\"col-sm-2\"> 金额(万元)</th><th class=\"col-sm-3\"> Sales</th><th class=\"col-sm-1\"> 退出</th></tr>");
for (var x = 0; x < 10; x++)
{
buf.push("<tr class=\"cust-record\"><td> 2013-10-1</td><td> 信中利</td><td> 5000</td><td> Jacky</td><td> 否</td></tr>");
}
buf.push("</table></div></div></div></div><div id=\"edit\" tabindex=\"-1\" data-width=\"760\" style=\"display: none;\" class=\"modal\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><div class=\"row\"><div class=\"col-md-3\"><h4 class=\"modal-title\">编辑信息</h4></div></div></div><div class=\"modal-body\"><div class=\"row\"><span class=\"col-md-2 text-right text-muted small\">姓名</span><div class=\"col-md-4 text-left\"><input type=\"text\" placeholder=\"name\" value=\"张先生\" class=\"holo\"/></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">Email</span><div class=\"col-md-4 text-left\"><input type=\"text\" placeholder=\"Email\" value=\"xiaolongzhang@tencent.com\" class=\"holo\"/></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">手机号</span><div class=\"col-md-4 text-left\"><input type=\"text\" placeholder=\"mobileNo\" value=\"13812345678\" class=\"holo\"/></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">性别</span><div class=\"col-md-2 text-left\"><div data-toggle=\"buttons-radio\" class=\"btn-group\"><button type=\"button\" class=\"btn-sm btn btn-light-info active\">男</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">女</button></div></div><span class=\"col-md-2 text-right text-muted small\">投资偏好</span><div class=\"col-md-6 text-left\"><div data-toggle=\"buttons-radio\" class=\"btn-group\"><button type=\"button\" class=\"btn-sm btn btn-light-info active\">固收</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">PE</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">其他</button></div></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">体量</span><div class=\"col-md-8 text-left\"><div data-toggle=\"buttons-radio\" class=\"btn-group\"><button type=\"button\" class=\"btn-sm btn btn-light-info active\">100</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">300</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">500</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">1000</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">2000</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">5000</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">10K</button></div></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">状态</span><div class=\"col-md-8 text-left\"><div data-toggle=\"buttons-radio\" class=\"btn-group\"><button type=\"button\" class=\"btn-sm btn btn-light-info active\">面见</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">已成交</button></div></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">备注</span><div class=\"col-md-8\"><textarea type=\"text\" style=\"width: 100%;\" placeholder=\"备注\" class=\"holo\">做银行理财,给到10％以上,其他信息不愿意透露.以后有不一样的产品再试试</textarea></div></div></div><div class=\"modal-footer\"><div class=\"text-center\"><button id=\"cacel\" style=\"margin-right: 40px;\" class=\"btn btn-lg btn-default\">取消</button><button id=\"ok\" class=\"btn btn-lg btn-success\">确定</button></div></div></div><div id=\"tags\" tabindex=\"-1\" data-width=\"760\" style=\"display: none;\" class=\"modal\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><div class=\"row\"><div class=\"col-md-3\"><h4 class=\"modal-title\">标签</h4></div></div></div><div class=\"modal-body\"><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">标签</span><div class=\"col-md-8 text-left\"><input type=\"text\" placeholder=\"new tag\" name=\"tags\" data-role=\"tagsinput\" value=\"外企高管,不差钱,投资帝\" class=\"holo\"/></div></div></div><div class=\"modal-footer\"><div class=\"text-center\"><button id=\"cacel\" style=\"margin-right: 40px;\" data-dismiss=\"modal\" class=\"btn btn-lg btn-default\">取消</button><button id=\"ok\" class=\"btn btn-lg btn-success\">保存</button></div></div></div><div id=\"order\" tabindex=\"-1\" data-width=\"760\" style=\"display: none;\" class=\"modal\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><div class=\"row\"><div class=\"col-md-3\"><h4 class=\"modal-title\">创建订单</h4></div></div></div><div class=\"modal-body\"><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">客户</span><span class=\"col-md-4 text-left\">张xx 先生</span></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">产品</span><div class=\"col-md-4 text-left\"><select class=\"selectpicker\"><option value=\"1\">盛世地产基金</option><option value=\"2\">元一新天地</option><option value=\"3\">长城母基金</option><option value=\"4\">平安地产基金</option></select></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">下单金额</span><div class=\"col-md-4 text-left\"><input type=\"text\" name=\"amount\" class=\"holo\"/></div><h6 class=\"text-muted\">万元</h6></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">备注</span><div class=\"col-md-8 text-left\"><input type=\"text\" name=\"remark\" class=\"holo\"/></div></div></div><div class=\"modal-footer\"><div class=\"text-center\"><button id=\"cacel\" style=\"margin-right: 40px;\" data-dismiss=\"modal\" class=\"btn btn-lg btn-default\">取消</button><button id=\"ok\" class=\"btn btn-lg btn-success\">确定</button></div></div></div><div id=\"task\" tabindex=\"-1\" data-width=\"760\" style=\"display: none;\" class=\"modal\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><div class=\"row\"><div class=\"col-md-3\"><h4 class=\"modal-title\">设置行动计划</h4></div></div></div><div class=\"modal-body\"><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">类型</span><div class=\"col-md-4 text-left\"><div data-toggle=\"buttons-radio\" class=\"btn-group\"><button class=\"btn-sm btn btn-light-info active\">电话</button><button class=\"btn-sm btn btn-light-info\">Email</button></div></div><span class=\"col-md-2 text-right text-muted small\">是否提醒</span><div class=\"col-md-4 text-left\"><div class=\"switch\"><input id=\"notify-switch\" type=\"checkbox\" value=\"1\"/></div></div></div><div id=\"notify-attr\" class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">提醒方式</span><div class=\"col-md-4 text-left\"><div data-toggle=\"buttons-radio\" class=\"btn-group\"><button class=\"btn-sm btn btn-light-info active\">系统消息</button><button class=\"btn-sm btn btn-light-info\">Email</button></div></div><span class=\"col-md-2 text-right text-muted small\">时间</span><div class=\"col-md-3 text-left\"><input type=\"text\" class=\"holo\"/></div></div><div class=\"row m-t-10\"><div class=\"col-md-10 col-md-offset-1\"><input type=\"text\" placeholder=\"备注\" class=\"holo\"/></div></div></div><div class=\"modal-footer\"><div class=\"text-center\"><button style=\"margin-right: 40px;\" data-dismiss=\"modal\" class=\"btn btn-lg btn-default\">取消</button><button id=\"ok\" class=\"btn btn-lg btn-success\">确定</button></div></div></div><div id=\"dateDlg\" tabindex=\"-1\" data-width=\"760\" style=\"display: none;\" class=\"modal\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><div class=\"row\"><div class=\"col-md-3\"><h4 class=\"modal-title\">约见计划</h4></div></div></div><div class=\"modal-body\"><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">地点</span><div class=\"col-md-6 text-left\"><input type=\"text\" placeholder=\"\" class=\"holo\"/></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">RM</span><div class=\"col-md-5 text-left\"><select class=\"selectpicker\"><option value=\"0\">无</option><option value=\"2\">陈杰</option></select><i class=\"icon icon-calendar m-l-10\"></i></div><span class=\"col-md-1 text-right text-muted small\">时间</span><div class=\"col-md-3 text-left\"><input type=\"text\" placeholder=\"\" class=\"holo\"/></div></div><div class=\"row m-t-10\"><div class=\"col-md-10 col-md-offset-1\"><input type=\"text\" placeholder=\"备注\" class=\"holo\"/></div></div></div><div class=\"modal-footer\"><div class=\"text-center\"><button style=\"margin-right: 40px;\" data-dismiss=\"modal\" class=\"btn btn-lg btn-default\">取消</button><button id=\"ok\" class=\"btn btn-lg btn-success\">确定</button></div></div></div><script>$('.selectpicker').selectpicker({noneSelectedText:'请选择'});\n$('#mu-apps').click(function() {\n    $('#apps').show();\n    $('#message').hide();\n});\n$('#mu-msg').click(function() {\n    $('#message').show();\n    $('#apps').hide();\n});\n$('#muEdit').click(function() {\n    $('#edit').modal('show');\n});\n$('#editBtn').click(function() {\n    $('#edit').modal('show');\n});\n$('#muTags').click(function() {\n    $('#tags').modal('show');\n});\n$('#muTask').click(function() {\n    $('#task').modal('show');\n});\n$('#muDateTask').click(function() {\n    $('#dateDlg').modal('show');\n});\n$('#addPlanBtn').click(function() {\n    $('#task').modal('show');\n});\n$('#muCreateOrder').click(function() {\n    $('#order').modal('show');\n});\n$('#muCall').click(function() {\n    pup.widgets.layerManager.open({\n        //default random, not required\n        layerKey : null,\n        //default body, not required\n        targetSelector : null,\n        //if template attribute not set, html will available, not required\n        html : '',\n        //pup.template settings, for load content from remote, not required\n        template : {\n            //template key\n            key : 'customer.callList.detail',\n            //template request params\n            dataParam : {id : 1},\n            //callback fn\n            beforeRender : function() {},\n            //callback fn\n            afterRender : function() {}\n        }\n    });\n});\n$('.app-box').click(function() {\n    var path = $(this).data('href');\n    window.open(path);\n});\n$('.f-task').click(function() {\n    window.open('/crm/audit/detail');\n});\n$('#cacel').click(function() {\n    $('#edit').modal('hide');\n});\n$('#notify-switch').bootstrapSwitch();\n$('#notify-switch').on('switch-change', function (e, data) {\n    alert('switch changed: ' + value);\n    var $el = $(data.el)\n      , value = data.value;\n    console.log(e, $el, value);\n});\n\n$('.t-action-in').mouseleave(function() {\n    $(this).find('.t-action').slideUp(50);\n});\n$('.t-action-in').mouseenter(function() {\n    $(this).find('.t-action').slideDown(50);\n});\n\n$('#order-report').highcharts({\n    chart: {\n        type: 'column',\n        margin: [ 50, 50, 100, 80]\n    },\n    title: {\n        text: '张xx先生近5笔投资回报'\n    },\n    xAxis: {\n        categories: [\n            '长城xxx一期',\n            'TOP Ten',\n            '长城xxx三期',\n            '长城xxx四期',\n            '信中利xxx一期'\n        ],\n        labels: {\n            rotation: -45,\n            align: 'right',\n            style: {\n                fontSize: '13px',\n                fontFamily: 'Verdana, sans-serif'\n            }\n        }\n    },\n    yAxis: {\n        min: 0,\n        title: {\n            text: '内部收益率(IRR)'\n        }\n    },\n    legend: {\n        enabled: false\n    },\n    tooltip: {\n        pointFormat: '内部收益率: <b>{point.y:.1f} %</b>'\n    },\n    series: [{\n        name: 'Population',\n        data: [34.4, 21.8, 20.1, 20, 19.6],\n        dataLabels: {\n            enabled: true,\n            rotation: -90,\n            color: '#FFFFFF',\n            align: 'right',\n            x: 4,\n            y: 10,\n            style: {\n                fontSize: '13px',\n                fontFamily: 'Verdana, sans-serif',\n                textShadow: '0 0 3px black'\n            }\n        }\n    }]\n});\n\n$('#muCancel').click(function() {\n    pup.widgets.layerManager.close();\n});</script>");;return buf.join("");
}
function crm_customer_import(locals) {
var jade_debug = [{ lineno: 1, filename: "import.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, title) {
jade_debug.unshift({ lineno: 0, filename: "../layout.jade" });
jade_debug.unshift({ lineno: 1, filename: "../layout.jade" });
buf.push("<!DOCTYPE html>");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "../layout.jade" });
buf.push("<html>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "../layout.jade" });
buf.push("<head>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "../layout.jade" });
jade_debug.unshift({ lineno: 5, filename: "../layout.jade" });
buf.push("<title>" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</title>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "../layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/stylesheets/bootstrap.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "../layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/font-css/animation.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "../layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/font-css/fontello.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "../layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/stylesheets/style.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "../layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-select.min.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: undefined, filename: "../layout.jade" });
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "../layout.jade" });
buf.push("<script src=\"/javascripts/jquery-1.11.0.min.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "../layout.jade" });
buf.push("<script src=\"/javascripts/bootstrap.min.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "../layout.jade" });
buf.push("<script src=\"/javascripts/bootstrap-select.min.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "../layout.jade" });
buf.push("<!--");
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("script(src='/js/bootstrap.min.js')");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("script(src='/js/underscore-min.js')");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("script(src='/js/util.js')");
jade_debug.shift();
jade_debug.shift();
buf.push("-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "../layout.jade" });
jade_debug.unshift({ lineno: 3, filename: "import.jade" });
buf.push("<script src=\"/javascripts/bootstrap-filestyle.min.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "import.jade" });
buf.push("<script>");
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("$(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("    $(\":file\").filestyle({");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("        'buttonText' : '选择文件',");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("        'classButton' : 'btn btn-primary',");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("        'classIcon' : 'icon-plus'");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("    ");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 12, filename: jade_debug[0].filename });
buf.push("    $('#ok').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("        $('#box').find('.mask').slideDown(150);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("        setTimeout(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("            $('#progress').text('导入成功，读取数据1000000条')");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("            $('#next-actions').show();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("        }, 2000);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("    $('.f-task').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 20, filename: jade_debug[0].filename });
buf.push("        window.open('/crm/opt/validate');");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 21, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("});");
jade_debug.shift();
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
buf.push("</head>");
jade_debug.shift();
jade_debug.unshift({ lineno: 20, filename: "../layout.jade" });
buf.push("<body style=\"\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 21, filename: "../layout.jade" });
buf.push("<div id=\"wrap\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: undefined, filename: "../layout.jade" });
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 23, filename: "../layout.jade" });
buf.push("<div class=\"container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: "../layout.jade" });
buf.push("<div id=\"msg\" style=\"display: none;\" class=\"alert alert-success col-md-6 col-md-offset-3 alert-dismissable\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: "../layout.jade" });
buf.push("<button data-dismiss=\"alert\" aria-hidden=\"true\" class=\"close\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push("&times;");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 27, filename: "../layout.jade" });
buf.push("<p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 27, filename: jade_debug[0].filename });
buf.push("操作成功");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 23, filename: "../layout.jade" });
jade_debug.unshift({ lineno: 24, filename: "import.jade" });
buf.push("<div style=\"margin-top: 20px;\" class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: "import.jade" });
buf.push("<div id=\"box\" class=\"mm-box col-sm-8 col-sm-offset-2 form-horizontal\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: "import.jade" });
buf.push("<h4 class=\"pan-title\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push("导入数据");
jade_debug.shift();
jade_debug.shift();
buf.push("</h4>");
jade_debug.shift();
jade_debug.unshift({ lineno: 27, filename: "import.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 28, filename: "import.jade" });
buf.push("<div class=\"divider divider-danger\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 29, filename: "import.jade" });
buf.push("<div class=\"row m-t-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 30, filename: "import.jade" });
buf.push("<div class=\"col-sm-12 form-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 31, filename: "import.jade" });
buf.push("<label class=\"control-label col-md-2\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 31, filename: jade_debug[0].filename });
buf.push("文件");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 32, filename: "import.jade" });
buf.push("<div style=\"margin-top:5px;\" class=\"col-md-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 33, filename: "import.jade" });
buf.push("<input id=\"file\" type=\"file\">");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 34, filename: "import.jade" });
buf.push("<div class=\"row m-t-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 35, filename: "import.jade" });
buf.push("<div class=\"col-sm-12 form-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 36, filename: "import.jade" });
buf.push("<label for=\"name\" class=\"col-sm-2 control-label\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 36, filename: jade_debug[0].filename });
buf.push("数据批次名称");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 37, filename: "import.jade" });
buf.push("<div class=\"col-sm-4\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: "import.jade" });
buf.push("<input type=\"text\" id=\"name\" class=\"holo\">");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 39, filename: "import.jade" });
buf.push("<label for=\"cycle\" class=\"col-sm-2 control-label\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 39, filename: jade_debug[0].filename });
buf.push("归属");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 40, filename: "import.jade" });
buf.push("<div class=\"col-sm-4\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 41, filename: "import.jade" });
buf.push("<div class=\"btn-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 42, filename: "import.jade" });
buf.push("<button class=\"btn btn-sm btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 42, filename: jade_debug[0].filename });
buf.push(" 上海");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 43, filename: "import.jade" });
buf.push("<button class=\"btn btn-sm btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 43, filename: jade_debug[0].filename });
buf.push(" 杭州");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 44, filename: "import.jade" });
buf.push("<button class=\"btn btn-sm btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 44, filename: jade_debug[0].filename });
buf.push(" 深圳");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 45, filename: "import.jade" });
buf.push("<input type=\"text\" style=\"width: 100%\" placeholder=\"备注\" class=\"holo\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 46, filename: "import.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 47, filename: "import.jade" });
buf.push("<div style=\"background: #999;height: 1px;margin:20px auto;\" class=\"divider\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 48, filename: "import.jade" });
buf.push("<div style=\"height: 80px;\" class=\"row text-center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 49, filename: "import.jade" });
buf.push("<button style=\"margin-right: 40px;\" class=\"btn btn-lg btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 49, filename: jade_debug[0].filename });
buf.push("取消");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 50, filename: "import.jade" });
buf.push("<button id=\"ok\" class=\"btn btn-lg btn-success\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 50, filename: jade_debug[0].filename });
buf.push("确定");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 51, filename: "import.jade" });
buf.push("<div style=\"opacity: .9;\" class=\"mask mask-full\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 52, filename: "import.jade" });
buf.push("<div style=\"margin-top: 60px\" class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 53, filename: "import.jade" });
buf.push("<div class=\"col-sm-6 col-sm-offset-3 text-center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 54, filename: "import.jade" });
buf.push("<h3 id=\"progress\" style=\"color: #FFFFFF;\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 54, filename: jade_debug[0].filename });
buf.push("正在处理");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 55, filename: "import.jade" });
buf.push("<div id=\"next-actions\" style=\"margin-top: 20px; display: none;\" class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 56, filename: "import.jade" });
buf.push("<div class=\"col-sm-6 col-sm-offset-3 text-center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 57, filename: "import.jade" });
buf.push("<button class=\"btn btn-primary\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 57, filename: jade_debug[0].filename });
buf.push("继续导入");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 58, filename: "import.jade" });
buf.push("<button class=\"btn btn-success m-l-15\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 58, filename: jade_debug[0].filename });
buf.push("分配数据");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: undefined, filename: "../layout.jade" });
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
buf.push("</body>");
jade_debug.shift();
jade_debug.shift();
buf.push("</html>");
jade_debug.shift();
jade_debug.shift();}("undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "extends ../layout\nblock script\n    script(src='/javascripts/bootstrap-filestyle.min.js')\n    script.\n        $(function() {\n            $(\":file\").filestyle({\n                'buttonText' : '选择文件',\n                'classButton' : 'btn btn-primary',\n                'classIcon' : 'icon-plus'\n            });\n\n            $('#ok').click(function() {\n                $('#box').find('.mask').slideDown(150);\n                setTimeout(function() {\n                    $('#progress').text('导入成功，读取数据1000000条')\n                    $('#next-actions').show();\n                }, 2000);\n            });\n            $('.f-task').click(function() {\n                window.open('/crm/opt/validate');\n            });\n        });\nblock content\n    .row(style='margin-top: 20px;')\n        #box.mm-box.col-sm-8.col-sm-offset-2.form-horizontal\n            h4.pan-title 导入数据\n            .row\n                .divider.divider-danger\n            .row.m-t-10\n                .col-sm-12.form-group\n                    label.control-label.col-md-2 文件\n                    .col-md-10(style='margin-top:5px;')\n                        input#file(type='file')\n            .row.m-t-10\n                .col-sm-12.form-group\n                    label.col-sm-2.control-label(for='name') 数据批次名称\n                    .col-sm-4\n                        input.holo(type='text',id='name')\n                    label.col-sm-2.control-label(for='cycle') 归属\n                    .col-sm-4\n                        .btn-group\n                            button.btn.btn-sm.btn-default  上海\n                            button.btn.btn-sm.btn-default  杭州\n                            button.btn.btn-sm.btn-default  深圳\n            input.holo(type='text', style='width: 100%', placeholder='备注')\n            .row\n                .divider(style='background: #999;height: 1px;margin:20px auto;')\n            .row.text-center(style='height: 80px;')\n                button.btn.btn-lg.btn-default(style='margin-right: 40px;') 取消\n                button#ok.btn.btn-lg.btn-success 确定\n            .mask.mask-full(style='opacity: .9;')\n                .row(style='margin-top: 60px')\n                    .col-sm-6.col-sm-offset-3.text-center\n                        h3#progress(style='color: #FFFFFF;') 正在处理\n                .row#next-actions(style='margin-top: 20px; display: none;')\n                    .col-sm-6.col-sm-offset-3.text-center\n                        button.btn.btn-primary 继续导入\n                        button.btn.btn-success.m-l-15 分配数据");
}
}
function crm_customer_list(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"sidebar-mini sidebar-left mm-box\"><div id=\"muAssign\" class=\"sidemenu text-center\"><i class=\"icon icon-plus-6\"></i></div><div class=\"divider divider-default\"></div><div id=\"muTrash\" class=\"sidemenu text-center\"><i class=\"icon icon-calendar\"></i></div><div class=\"divider divider-default\"></div><div id=\"muCustomerList\" class=\"sidemenu text-center\"><i class=\"icon icon-list-bullet\"></i></div><div class=\"divider divider-default text-center\"></div><div id=\"muCallList\" class=\"sidemenu text-center\"><i class=\"icon icon-phone-3\"></i></div></div><div id=\"customerList\" class=\"row\"><div class=\"row m-t-20 m-b-20\"><div class=\"col-sm-8 col-sm-offset-2 mm-box form-horizontal\"><div class=\"form-group m-t-10\"><label class=\"control-label col-md-2\">手机号码</label><div class=\"col-md-10\"><input type=\"text\" style=\"display: inline-block;margin-right:10px;width: 300px;\" class=\"holo\"/><button data-toggle=\"modal\" data-target=\"#detail\" class=\"btn btn-info\"><i style=\"margin-right: 5px;\" class=\"icon-search-8\"></i><span>快速查找</span></button></div></div><div class=\"form-group\"><label class=\"control-label col-md-2\">状态</label><div class=\"col-md-10\"><div id=\"seletCustomerStatus\" class=\"labelRadio\"><input name=\"customerStatus\" type=\"radio\" value=\"20\" data-name=\"20商机\"/><input name=\"customerStatus\" type=\"radio\" value=\"40\" data-name=\"40商机\"/><input name=\"customerStatus\" type=\"radio\" value=\"60\" data-name=\"60商机\"/><input name=\"customerStatus\" type=\"radio\" value=\"80\" data-name=\"80商机\"/><input name=\"customerStatus\" type=\"radio\" value=\"deal\" data-name=\"成交客户\"/><input name=\"customerStatus\" type=\"radio\" value=\"20\" data-name=\"20商机\"/><input name=\"customerStatus\" type=\"radio\" value=\"40\" data-name=\"40商机\"/><input name=\"customerStatus\" type=\"radio\" value=\"60\" data-name=\"60商机\"/><input name=\"customerStatus\" type=\"radio\" value=\"80\" data-name=\"80商机\"/><input name=\"customerStatus\" type=\"radio\" value=\"deal\" data-name=\"成交客户\"/><input name=\"customerStatus\" type=\"radio\" value=\"20\" data-name=\"20商机\"/><input name=\"customerStatus\" type=\"radio\" value=\"40\" data-name=\"40商机\"/><input name=\"customerStatus\" type=\"radio\" value=\"60\" data-name=\"60商机\"/><input name=\"customerStatus\" type=\"radio\" value=\"80\" data-name=\"80商机\"/><input name=\"customerStatus\" type=\"radio\" value=\"deal\" data-name=\"成交客户\"/></div></div></div><div class=\"form-group\"><label class=\"control-label col-md-2\">标签</label><div style=\"margin-top:5px;\" class=\"col-md-10\"><a href=\"javascript:void(0);\" class=\"filter-text\">待跟进</a><a href=\"javascript:void(0);\" style=\"font-size: 90%;\" class=\"label label-danger\">固收</a><a href=\"javascript:void(0);\" class=\"filter-text\">PE</a></div></div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div><div class=\"form-group m-t-10\"><label class=\"control-label col-md-2\">排序</label><div style=\"margin-top:5px;\" class=\"col-md-10\"><a href=\"javascript:void(0);\" class=\"filter-text\">最近联系</a><a href=\"javascript:void(0);\" style=\"font-size: 90%;\" class=\"label label-danger\">近期跟进</a></div></div></div></div><div class=\"row m-b-20\"><div class=\"list-container\">");
for (var x = 0; x < 10; x++)
{
buf.push("<div style=\"cursor:pointer;width: 236px; height: 150px;margin: 5px;position: relative;\" data-id=\"1\" class=\"mm-box t-cust-card\"><div style=\"height: 100%\" class=\"row\"><div class=\"row\"><div class=\"col-md-12\"><div style=\"padding-right: 5px;\" class=\"col-md-3 text-right\"><i class=\"icon-user-8 text-muted small\"></i></div><div style=\"padding-left: 5px;\" class=\"col-md-5 text-left\"><span>张xx 先生</span></div><div class=\"col-md-4 text-right\"><span class=\"small m-r-10\">商机</span></div></div></div><div class=\"row\"><div class=\"col-md-12\"><div style=\"padding-right: 5px;\" class=\"col-md-3 text-right\"><i class=\"icon-phone-3 text-muted small\"></i></div><div style=\"padding-left: 5px;\" class=\"col-md-9 text-left\"><span class=\"small\">138******78</span></div></div></div><div class=\"row\"><div class=\"col-md-12\"><div style=\"padding-right: 5px;\" class=\"col-md-3 text-right\"><div class=\"text-muted small\">近联</div></div><div style=\"padding-left: 5px;\" class=\"col-md-9 text-left\"><span class=\"small\">2014-4-10 11:20</span></div></div></div><div class=\"row\"><div class=\"col-md-12\"><div style=\"padding-right: 5px;\" class=\"col-md-3 text-right\"><div class=\"text-muted small\">拟联</div></div><div style=\"padding-left: 5px;\" class=\"col-md-9 text-left\"><span class=\"text-primary small\">2014-4-20 15:00</span></div></div></div><div class=\"col-md-12\"><div class=\"divider divider-danger\"></div></div><div class=\"col-md-12\"><p style=\"margin-top: 5px; padding: 0px 6px;\" class=\"small text-muted\">介绍海外固定收益产品，客户了解怎么保证收益、时间、门槛、投资方式，表示感兴趣</p></div></div><div class=\"box-mask bg-grass-static f-action\"><div style=\"height: 100px;\" class=\"col-sm-12\"><div class=\"row m-t-10\"><div class=\"col-sm-12\"><p class=\"text-left text-white\">500万 固收</p></div></div><div class=\"row\"><div class=\"col-sm-12 text-left\"><div class=\"label label-info\">银行理财</div><div class=\"label label-info m-l-10\">CEO</div></div></div></div><div class=\"divider divider-white\"></div><div style=\"height: 46px;position:relative;\" class=\"row text-center\"><div style=\"height: 100%;\" class=\"col-sm-12\"><div style=\"border-right: 1px solid #FFFFFF\" class=\"t-call action bg-grass col-sm-6 text-center\"><i class=\"icon-phone-3\"></i><span class=\"m-l-5\">拨打</span></div><div data-email=\"wuzixiu@prosnav.com\" class=\"t-email action bg-grass col-sm-6 text-center\"><i class=\"icon-mail-8\"></i><span class=\"m-l-5\">发邮件</span></div></div></div></div></div>");
}
buf.push("</div></div></div><div id=\"callList\" style=\"display: none;\" class=\"row\"></div><div id=\"customerSchedule\" style=\"display: none;\"></div><div id=\"assign\" tabindex=\"-1\" data-width=\"760\" style=\"display: none;\" class=\"modal\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><div class=\"row\"><div class=\"col-md-3\"><h4 class=\"modal-title\">客户资料</h4></div></div></div><div class=\"modal-body\"><div style=\"margin-top:20px\" class=\"row\"><div class=\"col-md-2 text-right text-muted small\">姓名</div><div class=\"col-md-4\"><input type=\"text\" class=\"holo\"/></div><div class=\"col-md-2 text-right text-muted small\">客户等级</div><div class=\"col-md-2 text-left\"><select class=\"selectpicker show-tick form-control\"><option value=\"1\">1</option><option value=\"2\">2</option></select></div></div><div style=\"margin-top:20px\" class=\"row\"><div class=\"col-md-2 text-right text-muted small\">归属</div><div class=\"col-md-3\"><div data-toggle=\"buttons-radio\" class=\"btn-group\"><button type=\"button\" class=\"btn-sm btn btn-light-info active\">上海</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">深圳</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">杭州</button></div></div><div class=\"col-md-2 text-right text-muted small\">性别</div><div class=\"col-md-2\"><div data-toggle=\"buttons-radio\" class=\"btn-group\"><button type=\"button\" class=\"btn-sm btn btn-light-info active\">男</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">女</button></div></div></div><div style=\"margin-top:20px\" class=\"row\"><div class=\"col-md-2 text-right text-muted small\">身份证/相关证件</div><div class=\"col-md-4\"><input type=\"text\" class=\"holo\"/></div><div class=\"col-md-2 text-right text-muted small\">生日</div><div class=\"col-md-3\"><input type=\"text\" class=\"holo\"/></div></div><div style=\"margin-top:20px\" class=\"row\"><div class=\"col-md-2 text-right text-muted small\">手机</div><div class=\"col-md-4\"><input type=\"text\" class=\"holo\"/></div><div class=\"col-md-2 text-right text-muted small\">电话</div><div class=\"col-md-3\"><input type=\"text\" class=\"holo\"/></div></div><div style=\"margin-top:20px\" class=\"row\"><div class=\"col-md-2 text-right text-muted small\">电子邮箱</div><div class=\"col-md-4\"><input type=\"text\" class=\"holo\"/></div><div class=\"col-md-2 text-right text-muted small\">微信号</div><div class=\"col-md-3\"><input type=\"text\" class=\"holo\"/></div></div><div style=\"margin-top:20px\" class=\"row\"><div class=\"col-md-2 text-right text-muted small\">网址</div><div class=\"col-md-4\"><input type=\"text\" class=\"holo\"/></div><div class=\"col-md-2 text-right text-muted small\">QQ</div><div class=\"col-md-3\"><input type=\"text\" class=\"holo\"/></div></div><div style=\"margin-top:20px;\" class=\"row\"><div class=\"col-md-2 text-right text-muted small\">备注</div><div class=\"col-md-10\"><input type=\"text\" style=\"width: 100%;\" placeholder=\"备注\" class=\"holo\"/></div></div></div><div class=\"modal-footer\"><div class=\"row text-center\"><button style=\"margin-right: 40px;\" data-dismiss=\"modal\" class=\"btn btn-lg btn-default\">取消</button><button class=\"btn btn-lg btn-success\">确定</button></div></div></div><script>$('.selectpicker').selectpicker({noneSelectedText:'请选择'});\n$(\":file\").filestyle({\n    'buttonText' : '选择文件',\n    'classButton' : 'btn btn-primary',\n    'classIcon' : 'icon-plus-6'\n});\n$('#mu-apps').click(function() {\n    $('#apps').show();\n    $('#message').hide();\n});\n$('#mu-msg').click(function() {\n    $('#message').show();\n    $('#apps').hide();\n});\n$('.app-box').click(function() {\n    var path = $(this).data('href');\n    window.open(path);\n});\n$('#muCustomerList').click(function() {\n    $('.f-func-box').hide();\n    $('#customerList').show();\n    $('#callList').hide();\n    $('#customerSchedule').hide();\n});\n$('#muCallList').click(function() {\n    $('.f-func-box').hide();\n    $('#customerList').hide();\n    $('#customerSchedule').hide();\n    pup.template.renderTemplateByKey('customer.callList.list');\n    $('#callList').show();\n    //pup.widgets.layerManager.open({html : '<p>helo world!</p>'});\n});\n$('#muAssign').click(function() {\n    $('#assign').modal('show');\n});\n$('.t-cust-card').click(function() {\n    var id = $(this).data('id');\n    pup.widgets.layerManager.open({\n        //default random, not required\n        layerKey : null,\n        //default body, not required\n        targetSelector : null,\n        //if template attribute not set, html will available, not required\n        html : '',\n        //pup.template settings, for load content from remote, not required\n        template : {\n            //template key\n            key : 'customer.detail',\n            //template request params\n            dataParam : {id : id},\n            //callback fn\n            beforeRender : function() {},\n            //callback fn\n            afterRender : function() {}\n        },\n        closeButton : {\n            visible : false\n        }\n    });\n});\n$('.t-cust-card').mouseleave(function() {\n    $(this).find('.f-action').slideUp(50);\n});\n$('.t-cust-card').mouseenter(function() {\n    $(this).find('.f-action').slideDown(50);\n});\n$('.t-email').click(function() {\n    var email = $(this).data('email');\n    if(email != null) {\n        window.location.href = 'mailto:' + email;\n    }\n    return false;\n});\n$('.cust-record').click(function() {\n    pup.template.renderTemplate({'templateName': '/crm/customer/call', 'targetSelector': '#thirdMain'});\n    pup.showView('fsl-3');\n});\n$('.t-cust-name').click(function() {\n    window.open('/crm/customer/1');\n    return false;\n});\n$('#muTrash').click(function() {\n    $('#callList').hide();\n    $('#customerList').hide();\n    $('#customerSchedule').show();\n    if($('#calendar').length > 0) {\n        //TODO render events\n    } else {\n        pup.template.renderTemplateByKey('customer.schedule');\n    }\n});\n\nfunction callback() {\n    //alert('search for ' + lr.val());\n}\nvar lr = new pup.widgets.labelRadio('#seletCustomerStatus').radio(callback);\n</script>");;return buf.join("");
}
function crm_customer_schedule(locals) {
var jade_debug = [{ lineno: 1, filename: "schedule.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined) {
jade_debug.unshift({ lineno: 0, filename: "schedule.jade" });
jade_debug.unshift({ lineno: 1, filename: "schedule.jade" });
buf.push("<style>");
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
buf.push("#calendar {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 3, filename: jade_debug[0].filename });
buf.push("    width: 900px;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("    margin: 0 auto;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("}");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push(".calendar-pointer-cursor {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("    cursor : pointer");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("}");
jade_debug.shift();
jade_debug.shift();
buf.push("</style>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "schedule.jade" });
buf.push("<body>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "schedule.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "schedule.jade" });
buf.push("<div id=\"calendar\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</body>");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "schedule.jade" });
buf.push("<script>");
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("$(document).ready(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("    var date = new Date();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("    var d = date.getDate();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("    var m = date.getMonth();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("    var y = date.getFullYear();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 20, filename: jade_debug[0].filename });
buf.push("    ");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 21, filename: jade_debug[0].filename });
buf.push("    $('#calendar').fullCalendar({");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("        theme : true,");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("        header: {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 24, filename: jade_debug[0].filename });
buf.push("            left: 'prev,next today',");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("            center: 'title',");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push("            right: 'month'");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 27, filename: jade_debug[0].filename });
buf.push("        },");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 28, filename: jade_debug[0].filename });
buf.push("        editable: false,");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push("        eventClick: function(calEvent, jsEvent, view) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 30, filename: jade_debug[0].filename });
buf.push("            pup.template.renderTemplateByKey('crm.message');");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 31, filename: jade_debug[0].filename });
buf.push("        },");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 32, filename: jade_debug[0].filename });
buf.push("        events: [");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 33, filename: jade_debug[0].filename });
buf.push("            {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 34, filename: jade_debug[0].filename });
buf.push("                title: '重要任务（2）',");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 35, filename: jade_debug[0].filename });
buf.push("                start: new Date(y, m, 1, 1),");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 36, filename: jade_debug[0].filename });
buf.push("                className : 'calendar-pointer-cursor'");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 37, filename: jade_debug[0].filename });
buf.push("            },");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 38, filename: jade_debug[0].filename });
buf.push("            {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 39, filename: jade_debug[0].filename });
buf.push("                title: '中等任务（1）',");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 40, filename: jade_debug[0].filename });
buf.push("                start: new Date(y, m, 1, 2),");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 41, filename: jade_debug[0].filename });
buf.push("                className : 'calendar-pointer-cursor'");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 42, filename: jade_debug[0].filename });
buf.push("            },");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 43, filename: jade_debug[0].filename });
buf.push("            {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 44, filename: jade_debug[0].filename });
buf.push("                title: '普通任务（10）',");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 45, filename: jade_debug[0].filename });
buf.push("                start: new Date(y, m, 1, 3),");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 46, filename: jade_debug[0].filename });
buf.push("                className : 'calendar-pointer-cursor'");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 47, filename: jade_debug[0].filename });
buf.push("            }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 48, filename: jade_debug[0].filename });
buf.push("        ]");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 49, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 50, filename: jade_debug[0].filename });
buf.push("    ");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 51, filename: jade_debug[0].filename });
buf.push("});");
jade_debug.shift();
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.shift();}("undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "style.\r\n    #calendar {\r\n        width: 900px;\r\n        margin: 0 auto;\r\n    }\r\n    .calendar-pointer-cursor {\r\n        cursor : pointer\r\n    }\r\nbody\r\n    br\r\n    #calendar\r\n\r\nscript.\r\n    $(document).ready(function() {\r\n\r\n        var date = new Date();\r\n        var d = date.getDate();\r\n        var m = date.getMonth();\r\n        var y = date.getFullYear();\r\n\r\n        $('#calendar').fullCalendar({\r\n            theme : true,\r\n            header: {\r\n                left: 'prev,next today',\r\n                center: 'title',\r\n                right: 'month'\r\n            },\r\n            editable: false,\r\n            eventClick: function(calEvent, jsEvent, view) {\r\n                pup.template.renderTemplateByKey('crm.message');\r\n            },\r\n            events: [\r\n                {\r\n                    title: '重要任务（2）',\r\n                    start: new Date(y, m, 1, 1),\r\n                    className : 'calendar-pointer-cursor'\r\n                },\r\n                {\r\n                    title: '中等任务（1）',\r\n                    start: new Date(y, m, 1, 2),\r\n                    className : 'calendar-pointer-cursor'\r\n                },\r\n                {\r\n                    title: '普通任务（10）',\r\n                    start: new Date(y, m, 1, 3),\r\n                    className : 'calendar-pointer-cursor'\r\n                }\r\n            ]\r\n        });\r\n\r\n    });\r\n");
}
}
function crm_employee_list(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (rootOrg, sexList, statusList, departments) {
buf.push("<div class=\"sidebar sidebar-left mm-box\"><div id=\"muJoin\" class=\"sidemenu\"><i class=\"icon icon-user-1\"></i>入职</div></div><div class=\"row m-t-20\"><form id=\"formSearch\"><div class=\"col-sm-8 col-sm-offset-2 mm-box form-horizontal filter-pan\"><div id=\"requireName\" name=\"requireName\" class=\"form-group\"><label class=\"control-label col-md-2 text-right\">姓名</label><input type=\"text\" id=\"name\" name=\"name\" style=\"display: inline-block;margin-right:10px;width: 300px;\" class=\"holo required\"/><button style=\"width:120px\" pxdata-toggle=\"modal\" data-target=\"#detail\" type=\"submit\" class=\"btn btn-primary text-left col-md-offset-0\"><i style=\"margin-right: 10px;\" class=\"icon-search-8\"></i><span>快速查找</span></button></div><div id=\"requireArea\" name=\"requireArea\" class=\"form-group m-t-5\"><label class=\"col-md-2 text-right\">分公司:</label><div data-toggle=\"buttons-radio\" id=\"area\" name=\"area\" class=\"btn-group\"><button type=\"button\" value=\"all\" class=\"btn btn-sm btn-light-info active\">全部</button>");
// iterate rootOrg
;(function(){
  var $$obj = rootOrg;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var area = $$obj[i];

buf.push("<button" + (jade.attr("value", '' + (area.code) + '', true, false)) + " type=\"button\" class=\"btn btn-sm btn-light-info\"> " + (jade.escape((jade_interp = area.name) == null ? '' : jade_interp)) + "</button>");
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var area = $$obj[i];

buf.push("<button" + (jade.attr("value", '' + (area.code) + '', true, false)) + " type=\"button\" class=\"btn btn-sm btn-light-info\"> " + (jade.escape((jade_interp = area.name) == null ? '' : jade_interp)) + "</button>");
    }

  }
}).call(this);

buf.push("</div></div></div></form></div><div id=\"detail\" tabindex=\"-1\" data-width=\"760\" style=\"display: none;\" class=\"modal fade\"><form id=\"formModify\" action=\"/crm/employee/modify\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><div class=\"row\"><div class=\"col-md-3\"><h4 class=\"modal-title\"> 修改员工信息</h4></div></div></div><div class=\"modal-body\"><div class=\"row\"><div style=\"display: none;\" class=\"alert alert-success\"></div></div><div class=\"row\"><div class=\"col-md-2 text-right text-muted small\">姓名：</div><div class=\"col-md-3\"><input type=\"text\" style=\"margin-top:-20px;width:170px\" id=\"name\" name=\"name\" class=\"holo required\"/></div><div class=\"col-md-2 text-right text-muted small\">工号：</div><div class=\"col-md-3\"><input type=\"text\" style=\"margin-top:-20px;width:170px\" id=\"workno\" name=\"workno\" class=\"holo required\"/></div></div><div style=\"margin-top:30px\" class=\"row\"><div class=\"col-md-2 text-right text-muted small\">性别：</div><div class=\"col-md-3 text-left\"><div data-toggle=\"buttons-radio\" id=\"sex\" name=\"sex\" class=\"btn-group\">");
// iterate sexList
;(function(){
  var $$obj = sexList;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var sex = $$obj[i];

if ( i == 0)
{
buf.push("<button" + (jade.attr("value", '' + (sex.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info active\">" + (jade.escape((jade_interp = sex.name) == null ? '' : jade_interp)) + "</button>");
}
else
{
buf.push("<button" + (jade.attr("value", '' + (sex.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info\">" + (jade.escape((jade_interp = sex.name) == null ? '' : jade_interp)) + "</button>");
}
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var sex = $$obj[i];

if ( i == 0)
{
buf.push("<button" + (jade.attr("value", '' + (sex.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info active\">" + (jade.escape((jade_interp = sex.name) == null ? '' : jade_interp)) + "</button>");
}
else
{
buf.push("<button" + (jade.attr("value", '' + (sex.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info\">" + (jade.escape((jade_interp = sex.name) == null ? '' : jade_interp)) + "</button>");
}
    }

  }
}).call(this);

buf.push("</div></div><div class=\"col-md-2 text-right text-muted small\">状态：</div><div class=\"col-md-3\"><div data-toggle=\"buttons-radio\" id=\"status\" name=\"status\" class=\"btn-group required\">");
// iterate statusList
;(function(){
  var $$obj = statusList;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var status = $$obj[i];

if ( i == 0)
{
buf.push("<button" + (jade.attr("value", '' + (status.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info active\">" + (jade.escape((jade_interp = status.name) == null ? '' : jade_interp)) + "</button>");
}
else
{
buf.push("<button" + (jade.attr("value", '' + (status.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info\">" + (jade.escape((jade_interp = status.name) == null ? '' : jade_interp)) + "</button>");
}
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var status = $$obj[i];

if ( i == 0)
{
buf.push("<button" + (jade.attr("value", '' + (status.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info active\">" + (jade.escape((jade_interp = status.name) == null ? '' : jade_interp)) + "</button>");
}
else
{
buf.push("<button" + (jade.attr("value", '' + (status.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info\">" + (jade.escape((jade_interp = status.name) == null ? '' : jade_interp)) + "</button>");
}
    }

  }
}).call(this);

buf.push("</div></div></div><div style=\"margin-top:30px\" class=\"row\"><div class=\"col-md-2 text-right text-muted small\">手机号：</div><div class=\"col-md-3\"><input type=\"text\" style=\"margin-top:-20px;width:170px\" id=\"telNo\" name=\"telNo\" class=\"holo mobile\"/></div><div class=\"col-md-2 text-right text-muted small\">Email：</div><div class=\"col-md-3\"><input type=\"text\" style=\"margin-top:-20px;width:170px\" id=\"email\" name=\"email\" class=\"holo email\"/></div></div><div style=\"margin-top:30px\" class=\"row\"><div class=\"col-md-2 text-right text-muted small\">分公司：</div><div class=\"col-md-10 text-left\"><div data-toggle=\"buttons-radio\" id=\"area\" name=\"area\" class=\"btn-group\">");
// iterate rootOrg
;(function(){
  var $$obj = rootOrg;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var area = $$obj[i];

if ( i == 0)
{
buf.push("<button" + (jade.attr("value", '' + (area.code) + '', true, false)) + " type=\"button\" class=\"btn btn-sm btn-light-info active\"> " + (jade.escape((jade_interp = area.name) == null ? '' : jade_interp)) + "</button>");
}
else
{
buf.push("<button" + (jade.attr("value", '' + (area.code) + '', true, false)) + " type=\"button\" class=\"btn btn-sm btn-light-info\"> " + (jade.escape((jade_interp = area.name) == null ? '' : jade_interp)) + "</button>");
}
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var area = $$obj[i];

if ( i == 0)
{
buf.push("<button" + (jade.attr("value", '' + (area.code) + '', true, false)) + " type=\"button\" class=\"btn btn-sm btn-light-info active\"> " + (jade.escape((jade_interp = area.name) == null ? '' : jade_interp)) + "</button>");
}
else
{
buf.push("<button" + (jade.attr("value", '' + (area.code) + '', true, false)) + " type=\"button\" class=\"btn btn-sm btn-light-info\"> " + (jade.escape((jade_interp = area.name) == null ? '' : jade_interp)) + "</button>");
}
    }

  }
}).call(this);

buf.push("</div></div></div><div style=\"margin-top:30px\" class=\"row\"><div class=\"col-md-2 text-right text-muted small\">部门：</div><div class=\"col-md-3\"><select data-size=\"6\" style=\"width:200px\" data-width=\"100%\" id=\"orgCode\" name=\"orgCode\" class=\"selectpicker show-tick required\">");
// iterate departments
;(function(){
  var $$obj = departments;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var orgCode = $$obj[$index];

buf.push("<option" + (jade.attr("value", '' + (orgCode.code) + '', true, false)) + ">" + (jade.escape((jade_interp = orgCode.name) == null ? '' : jade_interp)) + "</option>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var orgCode = $$obj[$index];

buf.push("<option" + (jade.attr("value", '' + (orgCode.code) + '', true, false)) + ">" + (jade.escape((jade_interp = orgCode.name) == null ? '' : jade_interp)) + "</option>");
    }

  }
}).call(this);

buf.push("</select></div></div><div style=\"margin-top:5px;\" class=\"row\"><div class=\"col-md-10 col-md-offset-1\"><input type=\"text\" style=\"width: 100%;\" placeholder=\"备注\" id=\"comment\" name=\"comment\" class=\"holo\"/><input type=\"hidden\" id=\"_id\" name=\"_id\" class=\"holo\"/><input type=\"hidden\" id=\"cuserid\" name=\"cuserid\" class=\"holo\"/><input type=\"hidden\" id=\"cusername\" name=\"cusername\" class=\"holo\"/><input type=\"hidden\" id=\"crealName\" name=\"crealName\" class=\"holo\"/><input type=\"hidden\" id=\"ctime\" name=\"ctime\" class=\"holo\"/></div></div></div><div class=\"modal-footer\"><div class=\"text-center\"><button style=\"margin-right: 40px;\" data-dismiss=\"modal\" class=\"cancel btn btn-lg btn-default\">取消</button><button id=\"ok\" type=\"submit\" class=\"btn btn-lg btn-success\">确定</button></div></div></form></div><div id=\"join\" tabindex=\"-1\" data-width=\"760\" style=\"display: none;\" class=\"modal fade\"><form id=\"formAdd\" action=\"/crm/employee/add\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><div class=\"row\"><div class=\"col-md-3\"><h4 class=\"modal-title\"> 添加员工信息</h4></div></div></div><div class=\"modal-body\"><div class=\"row\"><div style=\"display: none;\" class=\"alert alert-success\"></div></div><div class=\"row\"><div class=\"col-md-2 text-right text-muted small\">姓名：</div><div class=\"col-md-3\"><input type=\"text\" style=\"margin-top:-20px;width:170px\" id=\"name\" name=\"name\" class=\"holo required\"/></div><div class=\"col-md-2 text-right text-muted small\">工号：</div><div class=\"col-md-3\"><input type=\"text\" style=\"margin-top:-20px;width:170px\" id=\"workno\" name=\"workno\" class=\"holo required\"/></div></div><div style=\"margin-top:30px\" class=\"row\"><div class=\"col-md-2 text-right text-muted small\">性别：</div><div class=\"col-md-3 text-left\"><div data-toggle=\"buttons-radio\" id=\"sex\" name=\"sex\" class=\"btn-group\">");
// iterate sexList
;(function(){
  var $$obj = sexList;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var sex = $$obj[i];

if ( i == 0)
{
buf.push("<button" + (jade.attr("value", '' + (sex.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info active\">" + (jade.escape((jade_interp = sex.name) == null ? '' : jade_interp)) + "</button>");
}
else
{
buf.push("<button" + (jade.attr("value", '' + (sex.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info\">" + (jade.escape((jade_interp = sex.name) == null ? '' : jade_interp)) + "</button>");
}
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var sex = $$obj[i];

if ( i == 0)
{
buf.push("<button" + (jade.attr("value", '' + (sex.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info active\">" + (jade.escape((jade_interp = sex.name) == null ? '' : jade_interp)) + "</button>");
}
else
{
buf.push("<button" + (jade.attr("value", '' + (sex.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info\">" + (jade.escape((jade_interp = sex.name) == null ? '' : jade_interp)) + "</button>");
}
    }

  }
}).call(this);

buf.push("</div></div><div class=\"col-md-2 text-right text-muted small\">状态：</div><div class=\"col-md-3\"><div data-toggle=\"buttons-radio\" id=\"status\" name=\"status\" class=\"btn-group required\">");
// iterate statusList
;(function(){
  var $$obj = statusList;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var status = $$obj[i];

if ( i == 0)
{
buf.push("<button" + (jade.attr("value", '' + (status.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info active\">" + (jade.escape((jade_interp = status.name) == null ? '' : jade_interp)) + "</button>");
}
else
{
buf.push("<button" + (jade.attr("value", '' + (status.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info\">" + (jade.escape((jade_interp = status.name) == null ? '' : jade_interp)) + "</button>");
}
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var status = $$obj[i];

if ( i == 0)
{
buf.push("<button" + (jade.attr("value", '' + (status.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info active\">" + (jade.escape((jade_interp = status.name) == null ? '' : jade_interp)) + "</button>");
}
else
{
buf.push("<button" + (jade.attr("value", '' + (status.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info\">" + (jade.escape((jade_interp = status.name) == null ? '' : jade_interp)) + "</button>");
}
    }

  }
}).call(this);

buf.push("</div></div></div><div style=\"margin-top:30px\" class=\"row\"><div class=\"col-md-2 text-right text-muted small\">手机号：</div><div class=\"col-md-3\"><input type=\"text\" style=\"margin-top:-20px;width:170px\" id=\"telNo\" name=\"telNo\" class=\"holo mobile\"/></div><div class=\"col-md-2 text-right text-muted small\">Email：</div><div class=\"col-md-3\"><input type=\"text\" style=\"margin-top:-20px;width:170px\" id=\"email\" name=\"email\" class=\"holo email\"/></div></div><div style=\"margin-top:30px\" class=\"row\"><div class=\"col-md-2 text-right text-muted small\">分公司：</div><div class=\"col-md-10 text-left\"><div data-toggle=\"buttons-radio\" id=\"area\" name=\"area\" class=\"btn-group\">");
// iterate rootOrg
;(function(){
  var $$obj = rootOrg;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var area = $$obj[i];

if ( i == 0)
{
buf.push("<button" + (jade.attr("value", '' + (area.code) + '', true, false)) + " type=\"button\" class=\"btn btn-sm btn-light-info active\"> " + (jade.escape((jade_interp = area.name) == null ? '' : jade_interp)) + "</button>");
}
else
{
buf.push("<button" + (jade.attr("value", '' + (area.code) + '', true, false)) + " type=\"button\" class=\"btn btn-sm btn-light-info\"> " + (jade.escape((jade_interp = area.name) == null ? '' : jade_interp)) + "</button>");
}
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var area = $$obj[i];

if ( i == 0)
{
buf.push("<button" + (jade.attr("value", '' + (area.code) + '', true, false)) + " type=\"button\" class=\"btn btn-sm btn-light-info active\"> " + (jade.escape((jade_interp = area.name) == null ? '' : jade_interp)) + "</button>");
}
else
{
buf.push("<button" + (jade.attr("value", '' + (area.code) + '', true, false)) + " type=\"button\" class=\"btn btn-sm btn-light-info\"> " + (jade.escape((jade_interp = area.name) == null ? '' : jade_interp)) + "</button>");
}
    }

  }
}).call(this);

buf.push("</div></div></div><div style=\"margin-top:30px\" class=\"row\"><div class=\"col-md-2 text-right text-muted small\">部门：</div><div class=\"col-md-3\"><select style=\"width:200px\" data-size='6' data-width=\"100%\" id=\"orgCode\" name=\"orgCode\" class=\"selectpicker show-tick\">");
// iterate departments
;(function(){
  var $$obj = departments;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var orgCode = $$obj[$index];

buf.push("<option" + (jade.attr("value", '' + (orgCode.code) + '', true, false)) + ">" + (jade.escape((jade_interp = orgCode.name) == null ? '' : jade_interp)) + "</option>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var orgCode = $$obj[$index];

buf.push("<option" + (jade.attr("value", '' + (orgCode.code) + '', true, false)) + ">" + (jade.escape((jade_interp = orgCode.name) == null ? '' : jade_interp)) + "</option>");
    }

  }
}).call(this);

buf.push("</select></div></div><div style=\"margin-top:5px;\" class=\"row\"><div class=\"col-md-10 col-md-offset-1\"><input type=\"text\" style=\"width: 100%;\" placeholder=\"备注\" id=\"comment\" name=\"comment\" class=\"holo\"/></div></div></div><div class=\"modal-footer\"><div class=\"text-center\"><button id=\"cancel\" style=\"margin-right: 40px;\" type=\"button\" class=\"cancel btn btn-lg btn-default\">取消</button><button id=\"submit\" type=\"submit\" class=\"btn btn-lg btn-success\">确定</button></div></div></form></div><div class=\"row m-t-25\"><div class=\"col-sm-8 col-sm-offset-2\"><div id=\"employeeListData\" class=\"row\"></div></div></div><script>//load table list\n//ajaxPost('/crm/employee/list', backQuery);\n\nvar employeePagination = new pup.Pagination({\n    //pup template key, required\n    templateKey : \"employee.dataList\",\n    // name \"pagination\" is default, not required\n    paginationParamName : \"pagination\"\n});\n//跳转到第一页\nemployeePagination\n    //.condition('sex', 'male')\n    //or\n    //.setCondition({sex : 'male'})\n    //.sort('workno', 1)//1|-1|asc|desc\n    //or\n    //.setSort({workno : 1})\n    //.setWhere('this.ctime > new ISODate(\"2014-05-21\")')\n    .first();\n    \n$('#mu-apps').click(function() {\n    $('#apps').show();\n    $('#message').hide();\n});\n$('#mu-msg').click(function() {\n    $('#message').show();\n    $('#apps').hide();\n});\n$('.app-box').click(function() {\n    var path = $(this).data('href');\n    window.open(path);\n});\n$('.selectpicker').selectpicker({noneSelectedText:'请选择'});\n$('#muJoin').click(function() {\n    $('#join').modal('show');\n    $('#formAdd').validate_popover({onsubmit: false, popoverPosition: 'top'});\n    $(\"#join\").on(\"scroll\", function() { $.validator.reposition(); });\n    $('#join').on('hide.bs.modal', function (e) {\n       $('.popover').each( function() {\n          $(this).hide();\n       });\n    });\n    $(window).resize(function() {\n       $.validator.reposition();\n    });\n});\n$('#cancel, .close').click(function() {\n    $('#join').modal('hide');\n    $('.popover').each( function() {\n        $(this).hide();\n    });\n});\n$('#requireName').find('button').click(function() {\n    $('#formSearch').validate_popover({popoverPosition : 'top'});\n    if($('#formSearch').validate().form()){\n        employeePagination.setCondition({name : $('#formSearch #name').val()}).first();\n        $('#formSearch #name').val('');\n    }\n    return false;\n});\n$('#requireArea').find('button').click(function() {\n    if($(this).val() == 'all'){\n        employeePagination.setCondition({}).first();\n    }else{\n        employeePagination.setCondition({area : $(this).val()}).first();\n    }\n    \n});\n$('#formAdd #area').find('button').click(function() {\n    changeSelect('formAdd',$(this).val());\n});\n$('#formModify #area').find('button').click(function() {\n    changeSelect('formModify',$(this).val());\n});\nfunction changeSelect(id, val){\n    var code ='code='+val;\n    var url = '/crm/employee/code';\n    $.ajax({\n        type: 'POST',\n        url: url,\n        dataType: 'json',\n        data: code,\n        success: function (data) {\n            appendOption(id, data);\n        }\n    });\n};\nfunction appendOption(id, data){\n    $('#'+id+' #orgCode option').remove();\n    $.each(data, function(key, value) {\n        $('#'+id+' #orgCode').append('<option value='+value.code+'>'+value.name+'</option>');\n    })\n    $('.selectpicker').selectpicker('refresh');\n}\n$('#formModify').submit(function(ev) {\n    ev.preventDefault();\n    formSubmit('formModify', 'detail');\n});\n$('#formAdd').submit(function(ev) {\n    ev.preventDefault();\n    formSubmit('formAdd', 'join');\n});\nfunction formSubmit(id, show){\n    var sex = $('#'+id+' #sex > .btn.active').val();\n    var status = $('#'+id+' #status > .btn.active').val();\n    var area = $('#'+id+' #area > .btn.active').val();\n    var serializeForm = $('#'+id).serialize();\n    var allForm = 'sex='+sex+'&area='+area+'&status='+status+'&'+serializeForm;\n    if($('#'+id).validate().form()) {\n        var url = $('#'+id).attr('action');\n        $.ajax({\n            type: 'POST',\n            url: url,\n            dataType: 'json',\n            data: allForm,\n            success: function (data) {\n                if(data.msg.type == 'success') {\n                    $('#'+id)[0].reset();\n                    $('#'+id+' #area > .btn').first().button('toggle');\n                    changeSelect(id, $('#'+id+' #area > .btn.active').val());\n                    $('#'+show).modal('hide');\n                    employeePagination.first();\n                }\n                toast(data.msg);\n            }\n        });\n    }\n    return false;\n}\n// 手机号码验证\njQuery.validator.addMethod(\"mobile\", function(value, element) {\n    var length = value.length;\n    var mobile = /^0?(13[0-9]|15[012356789]|18[02356789]|14[57])[0-9]{8}$/ ;\n    return this.optional(element) || mobile.test(value);\n    }, \"请正确填写您的手机号码\");\n//// 联系电话(手机/电话皆可)验证\n//jQuery.validator.addMethod(\"isPhone\", function(value,element) {\n//var length = value.length;\n//var mobile = /^(((13[0-9]{1})|(15[0-9]{1}))+\\d{8})$/;\n//var tel = /^\\d{3,4}-?\\d{7,9}$/;\n//return this.optional(element) || (tel.test(value) || mobile.test(value));\n//                        }, \"请输入正确格式的电话号码\");</script>");}("rootOrg" in locals_for_with?locals_for_with.rootOrg:typeof rootOrg!=="undefined"?rootOrg:undefined,"sexList" in locals_for_with?locals_for_with.sexList:typeof sexList!=="undefined"?sexList:undefined,"statusList" in locals_for_with?locals_for_with.statusList:typeof statusList!=="undefined"?statusList:undefined,"departments" in locals_for_with?locals_for_with.departments:typeof departments!=="undefined"?departments:undefined));;return buf.join("");
}
function crm_employee_listTable(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (data, format) {
buf.push("<div class=\"style\"></div><table class=\"table mm-box\"><tr class=\"th-inverse\"><th style=\"width: 10%\"> 姓名</th><th style=\"width: 8%\"> 性别</th><th style=\"width: 20%\"> 分公司</th><th style=\"width: 20%\"> 部门</th><th style=\"width: 10%\"> 状态</th><th style=\"width: 17%\"> 入职时间</th><th style=\"width: 15%\"> 操作</th></tr><tbody>");
// iterate data
;(function(){
  var $$obj = data;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var employee = $$obj[$index];

buf.push("<tr><td>" + (jade.escape((jade_interp = employee.name) == null ? '' : jade_interp)) + "</td><td>");
if ( (employee.sex == 'male'))
{
buf.push("男");
}
else
{
buf.push("女");
}
buf.push("</td><td>" + (jade.escape((jade_interp = employee.areaName) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = employee.orgName) == null ? '' : jade_interp)) + "</td><td>");
if ( (employee.status == 'working'))
{
buf.push("在职");
}
else
{
buf.push("离职");
}
buf.push("</td><td>" + (jade.escape((jade_interp = format(employee.ctime)) == null ? '' : jade_interp)) + "</td><td><div class=\"text-center\"><span" + (jade.attr("id", '' + (employee._id) + '', true, false)) + " title=\"编辑\" class=\"icon-btn edit\"><i class=\"icon icon-edit-3\"></i></span><span title=\"删除\"" + (jade.attr("id", '' + (employee._id) + '', true, false)) + " class=\"icon-btn trash\"><i class=\"icon icon-trash\"></i></span></div></td></tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var employee = $$obj[$index];

buf.push("<tr><td>" + (jade.escape((jade_interp = employee.name) == null ? '' : jade_interp)) + "</td><td>");
if ( (employee.sex == 'male'))
{
buf.push("男");
}
else
{
buf.push("女");
}
buf.push("</td><td>" + (jade.escape((jade_interp = employee.areaName) == null ? '' : jade_interp)) + "</td><td>" + (jade.escape((jade_interp = employee.orgName) == null ? '' : jade_interp)) + "</td><td>");
if ( (employee.status == 'working'))
{
buf.push("在职");
}
else
{
buf.push("离职");
}
buf.push("</td><td>" + (jade.escape((jade_interp = format(employee.ctime)) == null ? '' : jade_interp)) + "</td><td><div class=\"text-center\"><span" + (jade.attr("id", '' + (employee._id) + '', true, false)) + " title=\"编辑\" class=\"icon-btn edit\"><i class=\"icon icon-edit-3\"></i></span><span title=\"删除\"" + (jade.attr("id", '' + (employee._id) + '', true, false)) + " class=\"icon-btn trash\"><i class=\"icon icon-trash\"></i></span></div></td></tr>");
    }

  }
}).call(this);

buf.push("</tbody></table><div id=\"employeePageBar\"></div><div id=\"opAcceptConfirm\" tabindex=\"-1\" style=\"display: none;\" class=\"modal fade\"><div class=\"modal-body\"><p id=\"confirmMsg\">确定删除？</p><p id=\"opStatus\" style=\"font-size: 20px; font-face: bold; display: none;\"><i class=\"icon icon-spin5 animate-spin text-success\"></i></p></div><div class=\"modal-footer\"><div class=\"text-center\"><button style=\"margin-right: 40px;\" data-dismiss=\"modal\" class=\"cancel btn btn-default\">取消</button><button id=\"ok\" class=\"btn btn-danger\">确定</button></div></div></div><script>$('.edit').click(function() {\n    var url = '/crm/employee/' + $(this).attr('id');\n    $.ajax({\n        type: 'POST',\n        url: url,\n        dataType: 'json',\n        data: '',\n        success: function (data) {\n            var formData = data.msg.body;\n            //console.log(formData);\n            if(data.msg.type == 'success'){\n                $('#formModify #name').val(formData.name);\n                $('#formModify #workno').val(formData.workno);\n                $(\"#formModify #sex\").find('button').each(function() {\n                    if(formData.sex == $(this).val()) {\n                        $(this).button('toggle');\n                    }\n                });\n                $('#formModify #telNo').val(formData.telNo);\n                $('#formModify #email').val(formData.email);\n                $(\"#formModify #status\").find('button').each(function() {\n                    if(formData.status == $(this).val()) {\n                        $(this).button('toggle');\n                    }\n                });\n                $(\"#formModify #area\").find('button').each(function() {\n                    if(formData.area == $(this).val()) {\n                        $(this).button('toggle');\n                        appendOption('formModify', formData.departments);\n                    }\n                });\n                $(\"#formModify #orgCode option\").each(function() {\n                    if(formData.orgCode == $(this).val()) {\n                        $(this).attr('selected', 'selected');\n                    }\n                });\n                $('.selectpicker').selectpicker('refresh');\n                $('#formModify #comment').val(formData.comment);\n                $('#formModify #_id').val(formData._id);\n                $('#formModify #cuserid').val(formData.cuserid);\n                $('#formModify #cusername').val(formData.cusername);\n                $('#formModify #crealName').val(formData.crealName);\n                $('#formModify #ctime').val(formData.ctime);\n                $('#detail').modal('show');\n            }else{\n                toast(data.msg);\n            }\n        }\n    });\n    \n});\n\nemployeePagination.bar('#employeePageBar');\n\nvar toDelEmployeeId = 0;\n$('tr .trash').click(function(ev) {\n    ev.stopPropagation();\n    $('#opAcceptConfirm').modal('show');\n    toDelEmployeeId = $(this).attr('id');\n});\n\n$('#opAcceptConfirm #ok').click(function() {\n    var url = '/crm/employee/' + toDelEmployeeId;\n    $('#opAcceptConfirm').modal('hide');\n    $.ajax({\n        type: 'DELETE',\n        url: url,\n        dataType: 'json',\n        data: {},\n        success: function (data) {\n            employeePagination.first();\n            toast(data.msg);\n        }\n    });\n});</script>");}("data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"format" in locals_for_with?locals_for_with.format:typeof format!=="undefined"?format:undefined));;return buf.join("");
}
function crm_header(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (session, chn) {
buf.push("<div class=\"navbar navbar-default navbar-fixed-top\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" class=\"navbar-toggle\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a href=\"/\" class=\"navbar-brand\">CRM</a></div><div class=\"collapse navbar-collapse\"><ul class=\"nav navbar-nav navbar-left\">");
if ( session.user.curApp.menu)
{
// iterate session.user.curApp.menu
;(function(){
  var $$obj = session.user.curApp.menu;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var menu = $$obj[$index];

buf.push("<li" + (jade.cls([(locals.chn && chn=='customer') ? 'dropdown active': 'dropdown'], [true])) + "><a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">" + (jade.escape((jade_interp = menu.url_name) == null ? '' : jade_interp)) + "<span class=\"caret\"></span></a><ul role=\"menu\" aria-labelledby=\"dropdownMenuCustomer\" class=\"dropdown-menu\">");
// iterate menu.urls
;(function(){
  var $$obj = menu.urls;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var url = $$obj[$index];

buf.push("<li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\"" + (jade.attr("href", '' + (session.user.curApp.prefix_url) + '' + (url.url) + '', true, false)) + ">" + (jade.escape((jade_interp = url.url_name) == null ? '' : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var url = $$obj[$index];

buf.push("<li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\"" + (jade.attr("href", '' + (session.user.curApp.prefix_url) + '' + (url.url) + '', true, false)) + ">" + (jade.escape((jade_interp = url.url_name) == null ? '' : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var menu = $$obj[$index];

buf.push("<li" + (jade.cls([(locals.chn && chn=='customer') ? 'dropdown active': 'dropdown'], [true])) + "><a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">" + (jade.escape((jade_interp = menu.url_name) == null ? '' : jade_interp)) + "<span class=\"caret\"></span></a><ul role=\"menu\" aria-labelledby=\"dropdownMenuCustomer\" class=\"dropdown-menu\">");
// iterate menu.urls
;(function(){
  var $$obj = menu.urls;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var url = $$obj[$index];

buf.push("<li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\"" + (jade.attr("href", '' + (session.user.curApp.prefix_url) + '' + (url.url) + '', true, false)) + ">" + (jade.escape((jade_interp = url.url_name) == null ? '' : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var url = $$obj[$index];

buf.push("<li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\"" + (jade.attr("href", '' + (session.user.curApp.prefix_url) + '' + (url.url) + '', true, false)) + ">" + (jade.escape((jade_interp = url.url_name) == null ? '' : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></li>");
    }

  }
}).call(this);

}
buf.push("</ul>");
if ( session.user)
{
buf.push("<ul class=\"nav navbar-nav navbar-right\"><li class=\"dropdown\"><a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">" + (jade.escape((jade_interp = session.user.name) == null ? '' : jade_interp)) + "</a><ul role=\"menu\" aria-labelledby=\"dropdownMenuUser\" class=\"dropdown-menu\"><li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"/user/setting\">设置</a></li><li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"/logout\">注销</a></li></ul></li></ul>");
}
buf.push("</div></div></div>");}("session" in locals_for_with?locals_for_with.session:typeof session!=="undefined"?session:undefined,"chn" in locals_for_with?locals_for_with.chn:typeof chn!=="undefined"?chn:undefined));;return buf.join("");
}
function crm_layout(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (title) {
buf.push("<!DOCTYPE html><html><head><title>" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</title><link rel=\"stylesheet\" href=\"/stylesheets/bootstrap.css\"><link rel=\"stylesheet\" href=\"/font-css/animation.css\"><link rel=\"stylesheet\" href=\"/font-css/fontello.css\"><link rel=\"stylesheet\" href=\"/stylesheets/style.css\"><link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-select.min.css\"><link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-modal-bs3patch.css\"><link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-modal.css\"><link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-tagsinput.css\"><link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-switch.css\"><script src=\"/javascripts/jquery-1.11.0.min.js\"></script><script src=\"/javascripts/bootstrap.min.js\"></script><script src=\"/javascripts/bootstrap-select.min.js\"></script><script src=\"/javascripts/bootstrap-button.js\"></script><script src=\"/javascripts/highcharts.js\"></script><script src=\"/javascripts/bootstrap-modalmanager.js\"></script><script src=\"/javascripts/bootstrap-modal.js\"></script><script src=\"/javascripts/bootstrap-tagsinput.js\"></script><script src=\"/javascripts/bootstrap-switch.js\"></script><script src=\"/javascripts/bootstrap-datetimepicker.min.js\"></script><script src=\"/javascripts/bootstrap-filestyle.min.js\"></script><!--script(src='/js/bootstrap.min.js')\nscript(src='/js/underscore-min.js')\nscript(src='/js/util.js')--></head><body style=\"\"><div id=\"wrap\"><div class=\"container\"><div id=\"msg\" style=\"display: none;\" class=\"alert alert-success col-md-6 col-md-offset-3 alert-dismissable\"><button data-dismiss=\"alert\" aria-hidden=\"true\" class=\"close\">&times;</button><p>操作成功</p></div></div></div></body></html>");}("title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));;return buf.join("");
}
function crm_message(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<!--Created by wangnan on 14-5-8.\n--><div class=\"col-sm-12 text-center m-b-20\"><div data-toggle=\"buttons-radio\" class=\"btn-group\"><div class=\"btn btn btn-light-info\"> 全部<span class=\"badge alert-danger m-l-10\">50</span></div><div class=\"btn btn btn-light-info\"> P1<span class=\"badge alert-danger m-l-10\">35</span></div><div class=\"btn btn btn-light-info active\"> P2<span class=\"badge alert-danger m-l-10\">15</span></div></div></div><div id=\"message\" style=\"margin-top: 10px;\" class=\"row\"><div style=\"height:200px;margin:10px;cursor:pointer;\" class=\"mm-box col-md-2 f-task\"><h4>20商机跟进</h4><div class=\"row\"><div class=\"col-md-12\"><i style=\"margin-right: 5px;\" class=\"icon-user-8\"></i><span>张先生</span></div></div><div class=\"row\"><div class=\"col-md-12\"><i style=\"margin-right: 5px;\" class=\"icon-phone-3\"></i><span>13812345678</span></div></div><div class=\"row\"><div style=\"background: #a52410;height: 1px;margin:10px auto;\" class=\"divider\"></div></div><p style=\"margin-top: 5px\" class=\"small text-muted\">介绍海外固定收益产品，客户了解怎么保证收益、时间、门槛、投资方式，表示感兴趣</p><div class=\"col-md-12 bottom\"><h6 class=\"text-info\">顾问消息示例</h6></div></div><div style=\"height:200px;margin:10px;cursor:pointer;\" class=\"mm-box col-md-2 f-task\"><h4>40商机判定</h4><div class=\"row\"><div class=\"col-md-12\"><i style=\"margin-right: 5px;\" class=\"icon-user-8\"></i><span>David</span></div></div><div class=\"row\"><div class=\"col-md-12\"><i style=\"margin-right: 5px;\" class=\"icon-clock\"></i><span>今天 16:00</span></div></div><div class=\"row\"><div style=\"background: #a52410;height: 1px;margin:10px auto;\" class=\"divider\"></div></div><p style=\"margin-top: 5px\" class=\"small text-muted\">电话跟进，约见</p><div class=\"col-md-12 bottom\"><h6 class=\"text-info\">质检消息示例</h6></div></div><div style=\"height:200px;margin:10px;cursor:pointer;\" class=\"mm-box col-md-3 f-task\"><h4>到账通知</h4><div class=\"row\"><div class=\"col-md-12\"><i style=\"margin-right: 5px;\" class=\"icon-user-8\"></i><span>张xx 先生</span></div></div><div class=\"row\"><div class=\"col-md-12\"><span>盛世神州苏州昂内地产基金</span></div></div><div class=\"row\"><div class=\"col-md-6\"><i style=\"margin-right: 5px;\" class=\"icon-yen\"></i><span>1000万</span></div><div class=\"col-md-6\"><i style=\"margin-right: 5px;\" class=\"icon-clock\"></i><span>今天 16:00</span></div></div><div class=\"col-md-12 bottom\"><h6 class=\"text-info\">RM消息示例</h6></div></div><div style=\"height:200px;margin:10px;cursor:pointer;\" class=\"mm-box col-md-3 f-task\"><h4>成立公告</h4><div class=\"row\"><div class=\"col-md-12\"><span>盛世神州苏州昂内地产基金</span></div></div><div class=\"row\"><div class=\"col-md-6\"><i style=\"margin-right: 5px;\" class=\"icon-calendar\"></i><span>2014.2.1</span></div></div><div class=\"row\"><div style=\"background: #a52410;height: 1px;margin:10px auto;\" class=\"divider\"></div></div><div class=\"row\"><span class=\"col-md-6 text-left\">张xx 先生</span><span class=\"col-md-6 text-right\">1000万</span></div><div class=\"row\"><span class=\"col-md-6 text-left\">李xx 先生</span><span class=\"col-md-6 text-right\">800万</span></div><div class=\"row\"><span class=\"col-md-6 text-left\">王xx 先生</span><span class=\"col-md-6 text-right\">800万</span></div><div class=\"col-md-12 bottom\"><h6 class=\"text-info\">RM消息示例</h6></div></div><div style=\"height:200px;margin:10px;cursor:pointer;\" class=\"mm-box col-md-3 f-task\"><h4>订单通知</h4><div class=\"row\"><div class=\"col-md-6\"><i style=\"margin-right: 5px;\" class=\"icon-user-8\"></i><span>张xx 先生</span></div><div class=\"col-md-6\"><i style=\"margin-right: 5px;\" class=\"icon-user-8-2\"></i><span>David</span></div></div><div class=\"row\"><div class=\"col-md-6\"><i style=\"margin-right: 5px;\" class=\"icon-yen\"></i><span>1000万</span></div><div class=\"col-md-6\"><i style=\"margin-right: 5px;\" class=\"icon-clock\"></i><span>今天 16:00</span></div></div><div class=\"row\"><div class=\"col-md-12\"><span>盛世神州苏州昂内地产基金</span></div></div><div class=\"row\"><div class=\"col-md-12\"><span>合同编号: A12345678</span></div></div><div class=\"row\"><div style=\"background: #a52410;height: 1px;margin:10px auto;\" class=\"divider\"></div></div><p class=\"text-muted small\">客户追投</p><div class=\"col-md-12 bottom\"><h6 class=\"text-info\">产品消息示例</h6></div></div></div><script src=\"/javascripts/bootstrap-button.js\"></script>");;return buf.join("");
}
function crm_online_account(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"sidebar sidebar-left mm-box\"><div id=\"muAdd\" class=\"sidemenu\"><i class=\"icon icon-plus-6\"></i>添加</div></div><div class=\"row m-t-20\"><div class=\"col-sm-8 col-sm-offset-2 mm-box form-horizontal filter-pan\"><div class=\"form-group\"><label class=\"control-label col-md-2\">关键字</label><div class=\"col-md-10\"><input type=\"text\" style=\"display: inline-block;margin-right:10px;width:300px;\" class=\"holo\"/><button class=\"btn btn-primary\"><i class=\"icon icon-search-8 m-r-5\"></i>查找</button></div></div><div class=\"form-group\"><label class=\"control-label col-md-2 text-right\">所属小组</label><div class=\"col-md-10 text-left\"><div data-toggle=\"buttons-radio\" class=\"btn-group\"><button type=\"button\" class=\"btn-sm btn btn-light-info active\">简怡组</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">嘉伟组</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">王菁组</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">家仪组</button></div></div></div></div></div><div class=\"row m-t-25\"><div class=\"col-sm-8 col-sm-offset-2\"><div class=\"row\"><table class=\"table mm-box\"><tr class=\"th-inverse\"><th> 微信号</th><th> 小组</th><th> 状态</th><th> 创建日期</th></tr>");
for (var x = 0; x < 10; x++)
{
buf.push("<tr class=\"cust-record\"><td> prosnav001</td><td> 组1</td><td> 正常</td><td> 2014-1-1</td></tr>");
}
buf.push("</table></div></div></div><div id=\"addAccount\" tabindex=\"-1\" data-width=\"760\" style=\"display: none;\" class=\"modal fade\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><div class=\"row\"><div class=\"col-md-3\"><h4 class=\"modal-title\">添加账号</h4></div></div></div><div class=\"modal-body\"><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">微信号</span><div class=\"col-md-4 text-left\"><input type=\"text\" name=\"tags\" class=\"holo\"/></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">所属小组</span><div class=\"col-md-10 text-left\"><div data-toggle=\"buttons-radio\" class=\"btn-group\"><button type=\"button\" class=\"btn-sm btn btn-light-info active\">简怡组</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">嘉伟组</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">王菁组</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">家仪组</button></div></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">描述</span><div class=\"col-md-10 text-left\"><input type=\"text\" style=\"width: 100%;\" class=\"holo\"/></div></div></div><div class=\"modal-footer\"><div class=\"text-center\"><button style=\"margin-right: 40px;\" class=\"cancel btn btn-lg btn-default\">取消</button><button id=\"ok\" class=\"btn btn-lg btn-success\">确定</button></div></div></div><div id=\"editAccount\" tabindex=\"-1\" data-width=\"760\" style=\"display: none;\" class=\"modal fade\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><div class=\"row\"><div class=\"col-md-3\"><h4 class=\"modal-title\">编辑账号</h4></div></div></div><div class=\"modal-body\"><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">微信号</span><div class=\"col-md-4 text-left\"><input type=\"text\" name=\"tags\" class=\"holo\"/></div><span class=\"col-md-2 text-right text-muted small\">帐号状态</span><div class=\"col-md-4 text-left\"><div data-toggle=\"buttons-radio\" class=\"btn-group\"><button type=\"button\" class=\"btn-sm btn btn-light-info active\">正常</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">被封</button></div></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">所属小组</span><div class=\"col-md-10 text-left\"><div data-toggle=\"buttons-radio\" class=\"btn-group\"><button type=\"button\" class=\"btn-sm btn btn-light-info active\">简怡组</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">嘉伟组</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">王菁组</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">家仪组</button></div></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">描述</span><div class=\"col-md-10 text-left\"><input type=\"text\" style=\"width: 100%;\" class=\"holo\"/></div></div></div><div class=\"modal-footer\"><div class=\"text-center\"><button style=\"margin-right: 40px;\" class=\"cancel btn btn-lg btn-default\">取消</button><button id=\"ok\" class=\"btn btn-lg btn-success\">确定</button></div></div></div><script>$('#muAdd').click(function() {\n    $('#addAccount').modal('show');\n});\n$('.cust-record').click(function() {\n    $('#editAccount').modal('show');\n});\n$('.cancel').click(function() {\n    $('#addAccount').modal('hide');\n    $('#editAccount').modal('hide');\n});</script>");;return buf.join("");
}
function crm_online_list(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"sidebar sidebar-left mm-box\"><div id=\"muTools\" class=\"sidemenu\"><i class=\"icon icon-split\"></i>拆分工具</div><div class=\"divider divider-default\"></div><div id=\"muListManage\" class=\"sidemenu\"><i class=\"icon glyphicon-import\"></i>状态录入</div><div class=\"divider divider-default\"></div><div id=\"muStat\" class=\"sidemenu\"><i class=\"icon icon-list-alt\"></i>统计</div></div><div id=\"dataTools\" class=\"m-t-20 m-b-20 f-func-box mm-box col-sm-8 col-sm-offset-2 form-horizontal\"><div class=\"modal-header row\"><h4 style=\"display: inline-block;\" class=\"pan-title modal-title\">拆分工具</h4></div><div class=\"row\"><div class=\"divider divider-danger\"></div></div><div class=\"row m-t-10\"><div class=\"col-sm-12 form-group\"><label class=\"control-label col-md-2\">文件</label><div style=\"margin-top:5px;\" class=\"col-md-10\"><input id=\"file\" type=\"file\"/></div></div></div><div class=\"row\"><div style=\"background: #999;height: 1px;margin:20px auto;\" class=\"divider\"></div></div><div style=\"height: 80px;\" class=\"row text-center\"><button id=\"splitBtn\" type=\"button\" class=\"btn btn-lg btn-success\">导入</button></div><div style=\"opacity: .9;\" class=\"box-mask mask-full\"><div style=\"margin-top: 60px\" class=\"row\"><div class=\"col-sm-6 col-sm-offset-3 text-center\"><h3 id=\"progress\" style=\"color: #FFFFFF;\">正在处理</h3></div></div><div id=\"next-actions\" style=\"margin-top: 20px; display: none;\" class=\"row\"><div class=\"col-sm-6 col-sm-offset-3 text-center\"><button id=\"cancel\" class=\"btn btn-primary\">继续导入</button><button class=\"btn btn-success m-l-15\">下载数据</button></div></div></div></div><div id=\"listImport\" style=\"display:none;\" class=\"m-t-20 m-b-20 f-func-box mm-box col-sm-8 col-sm-offset-2 form-horizontal\"><div class=\"modal-header row\"><h4 style=\"display: inline-block;\" class=\"pan-title modal-title\">名单状态录入</h4></div><div class=\"row\"><div class=\"divider divider-danger\"></div></div><div class=\"row m-t-10\"><div class=\"col-sm-12 form-group\"><label class=\"control-label col-md-2\">状态</label><div style=\"margin-top:5px;\" class=\"col-md-10\"><div data-toggle=\"buttons-radio\" class=\"btn-group\"><button type=\"button\" class=\"btn-sm btn btn-light-info active\">添加</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">认证</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">进群</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">退群</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">删除</button></div></div></div></div><div class=\"row m-t-10\"><div class=\"col-sm-12 form-group\"><label for=\"cycle\" class=\"col-sm-2 control-label\">操作账号</label><div class=\"col-sm-10\"><select class=\"selectpicker\"><option value=\"1\">Prosnav1</option><option value=\"2\">Prosnav2</option><option value=\"3\">Prosnav3</option><option value=\"4\">Prosnav4</option></select></div></div></div><div class=\"row m-t-10\"><div class=\"col-sm-12 form-group\"><label class=\"control-label col-md-2\">名单</label><div style=\"margin-top:5px;\" class=\"col-md-10\"><textarea type=\"text\" cols=\"80\" rows=\"10\"></textarea></div></div></div><div class=\"row\"><div style=\"background: #999;height: 1px;margin:20px auto;\" class=\"divider\"></div></div><div style=\"height: 80px;\" class=\"row text-center\"><button id=\"splitBtn\" type=\"button\" class=\"btn btn-lg btn-success\">确定</button></div></div><div id=\"stat\" style=\"display:none;\" class=\"row m-b-20\"><div class=\"row m-t-20\"><div class=\"col-sm-8 col-sm-offset-2 mm-box form-horizontal filter-pan\"><div class=\"form-group\"><label class=\"control-label col-md-2\">状态</label><div class=\"col-md-8\"><div data-toggle=\"buttons-radio\" class=\"btn-group\"><button type=\"button\" class=\"btn-sm btn btn-light-info active\">添加</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">认证</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">进群</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">退群</button><button type=\"button\" class=\"btn-sm btn btn-light-info\">删除</button></div></div></div><div class=\"form-group\"><label class=\"control-label col-md-2\">日期</label><div class=\"col-md-4\"><input type=\"text\" placeholder=\"开始\" class=\"holo\"/></div><div class=\"col-md-4\"><input type=\"text\" placeholder=\"截止\" class=\"holo\"/></div></div><div class=\"row m-t-10 m-b-10\"><div class=\"divider divider-default\"></div></div><div class=\"row text-center m-b-10\"><button class=\"btn btn-primary\"><i class=\"icon icon-filter-1 m-r-5\"></i>过滤</button></div></div></div><div class=\"row m-t-25\"><div class=\"col-sm-8 col-sm-offset-2 mm-box form-horizontal filter-pan\"><div id=\"stat-report\" style=\"height: 400px;width: 768px;\"></div></div></div><div class=\"row m-t-25\"><div class=\"col-sm-8 col-sm-offset-2\"><div class=\"row\"><table class=\"table mm-box\"><tr class=\"th-inverse\"><th> 日期</th><th> 添加</th><th> 认证</th><th> 进群</th><th> 退群</th><th> 删除</th><th> 认证率</th></tr>");
for (var x = 0; x < 10; x++)
{
buf.push("<tr class=\"cust-record\"><td> 2012-1-1</td><td> 400</td><td> 30</td><td> 20</td><td> 3</td><td> 2</td><td> 7.5%</td></tr>");
}
buf.push("</table></div></div></div></div><script>$('.selectpicker').selectpicker({noneSelectedText:'请选择'});\n$(\":file\").filestyle({\n    'buttonText' : '选择文件',\n    'classButton' : 'btn btn-primary',\n    'classIcon' : 'icon-plus-6'\n});\n$('#muTools').click(function() {\n    $('.f-func-box').hide();\n    $('#stat').hide();\n    $('#dataTools').show();\n});\n$('#muListManage').click(function() {\n    $('.f-func-box').hide();\n    $('#stat').hide();\n    $('#listImport').show();\n});\n$('#muStat').click(function() {\n    $('.f-func-box').hide();\n    $('#stat').show();\n});\n$('#splitBtn').click(function () {\n    $('#dataTools').find('.box-mask').slideDown(150);\n    setTimeout(function() {\n        $('#progress').text('导入成功，读取数据1000000条')\n        $('#next-actions').show();\n    }, 2000);\n});\n$('#cancel').click(function() {\n    $('#dataTools').find('.box-mask').hide();\n});\n$('#stat-report').highcharts({\n    title: {\n        text: '微信数据按日统计',\n        x: 20 //center\n    },\n    xAxis: {\n        categories: ['2014-1-1', '2014-1-2', '2014-1-3', '2014-1-4', '2014-1-5']\n    },\n    yAxis: {\n        title: {\n            text: '数量'\n        },\n        plotLines: [{\n            value: 0,\n            width: 1,\n            color: '#808080'\n        }],\n        min: 0\n    },\n    tooltip: {\n        valueSuffix: ''\n    },\n    legend: {\n        layout: 'vertical',\n        align: 'right',\n        verticalAlign: 'middle',\n        borderWidth: 0\n    },\n    series: [{\n        name: '添加',\n        data: [400, 380, 370, 410, 400]\n    },\n    {\n        name: '认证',\n        data: [200, 100, 120, 130, 150]\n    },\n    {\n        name: '进群',\n        data: [100, 80, 44, 66, 88]\n    },\n    {\n        name: '退群',\n        data: [20, 3, 43, 5, 11]\n    },\n    {\n        name: '删除',\n        data: [10, 20, 2, 3, 4]\n    }]\n});</script>");;return buf.join("");
}
function crm_opportunity_validate(locals) {
var jade_debug = [{ lineno: 1, filename: "validate.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, title) {
jade_debug.unshift({ lineno: 0, filename: "../layout.jade" });
jade_debug.unshift({ lineno: 1, filename: "../layout.jade" });
buf.push("<!DOCTYPE html>");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "../layout.jade" });
buf.push("<html>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "../layout.jade" });
buf.push("<head>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "../layout.jade" });
jade_debug.unshift({ lineno: 5, filename: "../layout.jade" });
buf.push("<title>" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</title>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "../layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/stylesheets/bootstrap.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "../layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/font-css/animation.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "../layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/font-css/fontello.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "../layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/stylesheets/style.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "../layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-select.min.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "../layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-modal-bs3patch.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "../layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-modal.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "../layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-tagsinput.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "../layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-switch.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: undefined, filename: "../layout.jade" });
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "../layout.jade" });
buf.push("<script src=\"/javascripts/jquery-1.11.0.min.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "../layout.jade" });
buf.push("<script src=\"/javascripts/bootstrap.min.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "../layout.jade" });
buf.push("<script src=\"/javascripts/bootstrap-select.min.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "../layout.jade" });
buf.push("<script src=\"/javascripts/bootstrap-button.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 20, filename: "../layout.jade" });
buf.push("<script src=\"/javascripts/highcharts.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "../layout.jade" });
buf.push("<script src=\"/javascripts/bootstrap-modalmanager.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "../layout.jade" });
buf.push("<script src=\"/javascripts/bootstrap-modal.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 23, filename: "../layout.jade" });
buf.push("<script src=\"/javascripts/bootstrap-tagsinput.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 24, filename: "../layout.jade" });
buf.push("<script src=\"/javascripts/bootstrap-switch.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 25, filename: "../layout.jade" });
buf.push("<script src=\"/javascripts/bootstrap-datetimepicker.min.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 26, filename: "../layout.jade" });
buf.push("<script src=\"/javascripts/bootstrap-filestyle.min.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 31, filename: "../layout.jade" });
buf.push("<!--");
jade_debug.unshift({ lineno: 28, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 28, filename: jade_debug[0].filename });
buf.push("script(src='/js/bootstrap.min.js')");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push("script(src='/js/underscore-min.js')");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 30, filename: jade_debug[0].filename });
buf.push("script(src='/js/util.js')");
jade_debug.shift();
jade_debug.shift();
buf.push("-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "../layout.jade" });
jade_debug.unshift({ lineno: 3, filename: "validate.jade" });
buf.push("<script>");
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("$(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("    $('#acceptBtn').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("        $('#opAcceptConfirm').modal('show');");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("    $('#rejectBtn').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("        $('#opRejectConfirm').modal('show');");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("    $('#ok').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 12, filename: jade_debug[0].filename });
buf.push("        $('#confirmMsg').hide();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("        $('#opStatus').show();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("        setTimeout(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("            $('#opStatus').hide();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("            $('#confirmMsg').text('处理成功，页面将自动关闭');");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("            $('#confirmMsg').show();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("            setTimeout(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("                window.close();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 20, filename: jade_debug[0].filename });
buf.push("            }, 3000);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 21, filename: jade_debug[0].filename });
buf.push("        }, 1000);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("    ");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 24, filename: jade_debug[0].filename });
buf.push("    $('#call-wx-switch').bootstrapSwitch();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("    $('#add-wx-switch').bootstrapSwitch();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push("    ");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 27, filename: jade_debug[0].filename });
buf.push("    $('.app-box').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 28, filename: jade_debug[0].filename });
buf.push("        var path = $(this).data('href');");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push("        window.open(path);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 30, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 31, filename: jade_debug[0].filename });
buf.push("    $('.f-task').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 32, filename: jade_debug[0].filename });
buf.push("        window.open('/crm/opt/validate');");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 33, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 34, filename: jade_debug[0].filename });
buf.push("});");
jade_debug.shift();
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
buf.push("</head>");
jade_debug.shift();
jade_debug.unshift({ lineno: 32, filename: "../layout.jade" });
buf.push("<body style=\"\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 33, filename: "../layout.jade" });
buf.push("<div id=\"wrap\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: undefined, filename: "../layout.jade" });
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 35, filename: "../layout.jade" });
buf.push("<div class=\"container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 37, filename: "../layout.jade" });
buf.push("<div id=\"msg\" style=\"display: none;\" class=\"alert alert-success col-md-6 col-md-offset-3 alert-dismissable\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: "../layout.jade" });
buf.push("<button data-dismiss=\"alert\" aria-hidden=\"true\" class=\"close\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: jade_debug[0].filename });
buf.push("&times;");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 39, filename: "../layout.jade" });
buf.push("<p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 39, filename: jade_debug[0].filename });
buf.push("操作成功");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 35, filename: "../layout.jade" });
jade_debug.unshift({ lineno: 36, filename: "validate.jade" });
buf.push("<div class=\"row m-t-20\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 37, filename: "validate.jade" });
buf.push("<div class=\"mm-box col-md-8 col-md-offset-2\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: "validate.jade" });
buf.push("<div class=\"modal-header row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 39, filename: "validate.jade" });
buf.push("<h4 style=\"display: inline-block;\" class=\"pan-title modal-title\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 39, filename: jade_debug[0].filename });
buf.push("40商机判定");
jade_debug.shift();
jade_debug.shift();
buf.push("</h4>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 40, filename: "validate.jade" });
buf.push("<div class=\"row m-t-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 41, filename: "validate.jade" });
buf.push("<div class=\"col-md-4\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 42, filename: "validate.jade" });
buf.push("<a href=\"javascript:void(0);\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 43, filename: "validate.jade" });
buf.push("<i style=\"margin-right: 5px;\" class=\"icon-user-1\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 44, filename: "validate.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 44, filename: jade_debug[0].filename });
buf.push("张先生 13812345678");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 45, filename: "validate.jade" });
buf.push("<div style=\"margin-left: 20px;\" class=\"label label-info\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 46, filename: "validate.jade" });
buf.push("录音");
jade_debug.shift();
jade_debug.unshift({ lineno: 47, filename: "validate.jade" });
buf.push("<i class=\"icon-play\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 48, filename: "validate.jade" });
buf.push("<div class=\"col-md-4\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 49, filename: "validate.jade" });
buf.push("<div class=\"col-md-2\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 50, filename: "validate.jade" });
buf.push("<i style=\"margin-right: 5px;\" class=\"icon-user-8\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 51, filename: "validate.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 51, filename: jade_debug[0].filename });
buf.push("David");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 52, filename: "validate.jade" });
buf.push("<div class=\"col-md-2\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 53, filename: "validate.jade" });
buf.push("<i style=\"margin-right: 5px;\" class=\"icon-clock\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 54, filename: "validate.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 54, filename: jade_debug[0].filename });
buf.push("今天 16:00");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 55, filename: "validate.jade" });
buf.push("<div class=\"row m-t-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 56, filename: "validate.jade" });
buf.push("<p style=\"margin-top: 5px;min-height:40px;\" class=\"col-sm-12 text-muted\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 56, filename: jade_debug[0].filename });
buf.push("介绍海外固定收益产品，客户了解怎么保证收益、时间、门槛、投资方式，表示感兴趣");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 57, filename: "validate.jade" });
buf.push("<div class=\"row m-t-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 58, filename: "validate.jade" });
buf.push("<div class=\"col-sm-1 text-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 58, filename: jade_debug[0].filename });
buf.push("结果");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 59, filename: "validate.jade" });
buf.push("<div class=\"col-sm-3 text-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 60, filename: "validate.jade" });
buf.push("<div data-toggle=\"buttons-radio\" class=\"btn-group\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 61, filename: "validate.jade" });
buf.push("<div class=\"btn btn-light-info btn-sm active\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 61, filename: jade_debug[0].filename });
buf.push("20");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 62, filename: "validate.jade" });
buf.push("<div class=\"btn btn-light-info btn-sm\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 62, filename: jade_debug[0].filename });
buf.push("40");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 64, filename: "validate.jade" });
buf.push("<div class=\"col-sm-2 text-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 64, filename: jade_debug[0].filename });
buf.push("微信电话添加");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 65, filename: "validate.jade" });
buf.push("<div class=\"col-sm-2 text-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 66, filename: "validate.jade" });
buf.push("<div data-on-label=\"是\" data-off-label=\"否\" data-on=\"info\" class=\"switch switch-mini\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 67, filename: "validate.jade" });
buf.push("<input id=\"call-wx-switch\" type=\"checkbox\" value=\"1\">");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 68, filename: "validate.jade" });
buf.push("<div class=\"col-sm-2 text-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 68, filename: jade_debug[0].filename });
buf.push("微信号录入");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 69, filename: "validate.jade" });
buf.push("<div class=\"col-sm-2 text-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 70, filename: "validate.jade" });
buf.push("<div data-on-label=\"是\" data-off-label=\"否\" data-on=\"info\" class=\"switch switch-mini\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 71, filename: "validate.jade" });
buf.push("<input id=\"add-wx-switch\" type=\"checkbox\" value=\"1\">");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 72, filename: "validate.jade" });
buf.push("<div class=\"row m-t-10\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 73, filename: "validate.jade" });
buf.push("<div class=\"col-sm-10 col-sm-offset-1\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 74, filename: "validate.jade" });
buf.push("<input type=\"text\" style=\"width: 100%\" placeholder=\"备注\" class=\"holo\">");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 75, filename: "validate.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 76, filename: "validate.jade" });
buf.push("<div style=\"background: #999;height: 1px;margin:20px auto;\" class=\"divider\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 77, filename: "validate.jade" });
buf.push("<div style=\"height: 80px;\" class=\"row text-center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 78, filename: "validate.jade" });
buf.push("<button id=\"rejectBtn\" style=\"margin-right: 40px;\" class=\"btn btn-lg btn-danger\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 78, filename: jade_debug[0].filename });
buf.push("驳回");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 79, filename: "validate.jade" });
buf.push("<button id=\"acceptBtn\" class=\"btn btn-lg btn-success\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 79, filename: jade_debug[0].filename });
buf.push("通过");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 81, filename: "validate.jade" });
buf.push("<div id=\"opAcceptConfirm\" tabindex=\"-1\" style=\"display: none;\" class=\"modal fade\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 82, filename: "validate.jade" });
buf.push("<div class=\"modal-body\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 83, filename: "validate.jade" });
buf.push("<p id=\"confirmMsg\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 83, filename: jade_debug[0].filename });
buf.push("确定通过？");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 84, filename: "validate.jade" });
buf.push("<p id=\"opStatus\" style=\"font-size: 20px; font-face: bold; display: none;\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 85, filename: "validate.jade" });
buf.push("<i class=\"icon icon-spin5 animate-spin text-success\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 86, filename: "validate.jade" });
buf.push("<div class=\"modal-footer\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 87, filename: "validate.jade" });
buf.push("<div class=\"text-center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 88, filename: "validate.jade" });
buf.push("<button style=\"margin-right: 40px;\" data-dismiss=\"modal\" class=\"cancel btn btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 88, filename: jade_debug[0].filename });
buf.push("取消");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 89, filename: "validate.jade" });
buf.push("<button id=\"ok\" class=\"btn btn-success\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 89, filename: jade_debug[0].filename });
buf.push("确定");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 90, filename: "validate.jade" });
buf.push("<div id=\"opRejectConfirm\" tabindex=\"-1\" style=\"display: none;\" class=\"modal fade\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 91, filename: "validate.jade" });
buf.push("<div class=\"modal-body\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 92, filename: "validate.jade" });
buf.push("<p id=\"confirmMsg\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 92, filename: jade_debug[0].filename });
buf.push("确定驳回？");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 93, filename: "validate.jade" });
buf.push("<p id=\"opStatus\" style=\"font-size: 20px; font-face: bold; display: none;\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 94, filename: "validate.jade" });
buf.push("<i class=\"icon icon-spin5 animate-spin text-success\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 95, filename: "validate.jade" });
buf.push("<div class=\"modal-footer\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 96, filename: "validate.jade" });
buf.push("<div class=\"text-center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 97, filename: "validate.jade" });
buf.push("<button style=\"margin-right: 40px;\" data-dismiss=\"modal\" class=\"cancel btn btn-default\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 97, filename: jade_debug[0].filename });
buf.push("取消");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 98, filename: "validate.jade" });
buf.push("<button id=\"ok\" class=\"btn btn-success\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 98, filename: jade_debug[0].filename });
buf.push("确定");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: undefined, filename: "../layout.jade" });
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
buf.push("</body>");
jade_debug.shift();
jade_debug.shift();
buf.push("</html>");
jade_debug.shift();
jade_debug.shift();}("undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "extends ../layout\nblock script\n    script.\n        $(function() {\n            $('#acceptBtn').click(function() {\n                $('#opAcceptConfirm').modal('show');\n            });\n            $('#rejectBtn').click(function() {\n                $('#opRejectConfirm').modal('show');\n            });\n            $('#ok').click(function() {\n                $('#confirmMsg').hide();\n                $('#opStatus').show();\n                setTimeout(function() {\n                    $('#opStatus').hide();\n                    $('#confirmMsg').text('处理成功，页面将自动关闭');\n                    $('#confirmMsg').show();\n                    setTimeout(function() {\n                        window.close();\n                    }, 3000);\n                }, 1000);\n            });\n\n            $('#call-wx-switch').bootstrapSwitch();\n            $('#add-wx-switch').bootstrapSwitch();\n\n            $('.app-box').click(function() {\n                var path = $(this).data('href');\n                window.open(path);\n            });\n            $('.f-task').click(function() {\n                window.open('/crm/opt/validate');\n            });\n        });\nblock content\n    .row.m-t-20\n        .mm-box.col-md-8.col-md-offset-2\n            .modal-header.row\n                h4.pan-title.modal-title(style='display: inline-block;') 40商机判定\n            .row.m-t-10\n                .col-md-4\n                    a(href='javascript:void(0);')\n                        i.icon-user-1(style='margin-right: 5px;')\n                    span 张先生 13812345678\n                    .label.label-info(style='margin-left: 20px;')\n                        |录音\n                        i.icon-play\n                .col-md-4\n                .col-md-2\n                    i.icon-user-8(style='margin-right: 5px;')\n                    span David\n                .col-md-2\n                    i.icon-clock(style='margin-right: 5px;')\n                    span 今天 16:00\n            .row.m-t-10\n                p.col-sm-12.text-muted(style='margin-top: 5px;min-height:40px;') 介绍海外固定收益产品，客户了解怎么保证收益、时间、门槛、投资方式，表示感兴趣\n            .row.m-t-10\n                .col-sm-1.text-right 结果\n                .col-sm-3.text-left\n                    .btn-group(data-toggle='buttons-radio')\n                        .btn.btn-light-info.btn-sm.active 20\n                        .btn.btn-light-info.btn-sm 40\n\n                .col-sm-2.text-right 微信电话添加\n                .col-sm-2.text-left\n                    .switch.switch-mini(data-on-label=\"是\", data-off-label=\"否\",data-on=\"info\")\n                        input#call-wx-switch(type='checkbox', value='1')\n                .col-sm-2.text-right 微信号录入\n                .col-sm-2.text-left\n                    .switch.switch-mini(data-on-label=\"是\", data-off-label=\"否\",data-on=\"info\")\n                        input#add-wx-switch(type='checkbox', value='1')\n            .row.m-t-10\n                .col-sm-10.col-sm-offset-1\n                    input.holo(type='text', style='width: 100%', placeholder='备注')\n            .row\n                .divider(style='background: #999;height: 1px;margin:20px auto;')\n            .row.text-center(style='height: 80px;')\n                button#rejectBtn.btn.btn-lg.btn-danger(style='margin-right: 40px;') 驳回\n                button#acceptBtn.btn.btn-lg.btn-success 通过\n\n        #opAcceptConfirm.modal.fade(tabindex='-1', style='display: none;')\n            .modal-body\n                p#confirmMsg 确定通过？\n                p#opStatus(style='font-size: 20px; font-face: bold; display: none;')\n                    i.icon.icon-spin5.animate-spin.text-success\n            .modal-footer\n                .text-center\n                    button.cancel.btn.btn-default(style='margin-right: 40px;', data-dismiss='modal') 取消\n                    button#ok.btn.btn-success 确定\n        #opRejectConfirm.modal.fade(tabindex='-1', style='display: none;')\n            .modal-body\n                p#confirmMsg 确定驳回？\n                p#opStatus(style='font-size: 20px; font-face: bold; display: none;')\n                    i.icon.icon-spin5.animate-spin.text-success\n            .modal-footer\n                .text-center\n                    button.cancel.btn.btn-default(style='margin-right: 40px;', data-dismiss='modal') 取消\n                    button#ok.btn.btn-success 确定");
}
}
function crm_order_detail(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (_id, code, customer, crealName, product, amount, statusName, format, ctime, comment) {
buf.push("<div class=\"sidebar sidebar-left mm-box\"><div id=\"muAdd\" class=\"sidemenu\"><i class=\"icon icon-yen\"></i>派息</div></div><div style=\"margin-top: 20px;\" class=\"row\"><div style=\"padding-bottom: 15px\" class=\"mm-box col-md-8 col-md-offset-2\"><div class=\"modal-header row\"><h4 style=\"display: inline-block;\" class=\"pan-title modal-title\">订单信息</h4></div><div class=\"row m-t-10\"><input type=\"hidden\" name=\"_id\" id=\"_id\"" + (jade.attr("value", '' + (_id) + '', true, false)) + "/><span class=\"col-md-2 text-right text-muted small\">订单号</span><span class=\"col-md-2 text-left\">" + (jade.escape((jade_interp = code) == null ? '' : jade_interp)) + "</span><span class=\"col-md-2 text-right text-muted small\">客户</span><span class=\"col-md-2 text-left\">" + (jade.escape((jade_interp = customer.name) == null ? '' : jade_interp)) + "</span><span class=\"col-md-2 text-right text-muted small\">销售</span><span class=\"col-md-2 text-left\">" + (jade.escape((jade_interp = crealName) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">产品名称</span><span class=\"col-md-6 text-left\">" + (jade.escape((jade_interp = product.name) == null ? '' : jade_interp)) + "</span><span class=\"col-md-2 text-right text-muted small\">金额</span><span class=\"col-md-2 text-left\">" + (jade.escape((jade_interp = amount) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">状态</span><span class=\"col-md-2 text-left\">" + (jade.escape((jade_interp = statusName) == null ? '' : jade_interp)) + "</span><span class=\"col-md-2 text-right text-muted small\">下单日期</span><span class=\"col-md-2 text-left\">" + (jade.escape((jade_interp = format(ctime)) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">备注</span><span class=\"col-md-10 text-left\">" + (jade.escape((jade_interp = comment) == null ? '' : jade_interp)) + "</span></div></div></div><div style=\"margin-top: 20px;\" class=\"row\"><div style=\"padding-bottom: 0;\" class=\"mm-box col-md-8 col-md-offset-2\"><div class=\"modal-header row\"><h4 style=\"display: inline-block;\" class=\"pan-title modal-title\">派息统计</h4><div class=\"pull-right\"><span id=\"addPayout\" class=\"m-l-15 icon-btn\"><i class=\"icon-yen\"></i></span></div></div><div id=\"dividendListData\" class=\"row\"></div></div></div><div id=\"detailAdd\" tabindex=\"-1\" data-width=\"760\" style=\"display: none;\" class=\"modal fade\"><form id=\"detailFormDividend\" action=\"/crm/order/dividend\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><div class=\"row\"><div class=\"col-md-3\"><h4 class=\"modal-title\">添加派息</h4></div></div></div><div class=\"modal-body\"><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">成立日期</span><div class=\"col-md-3 text-right\"><input type=\"text\" name=\"establishDate\" id=\"establishDate\" readonly=\"readonly\" class=\"holo required\"/></div><span class=\"col-md-2 text-right text-muted small\">起息日期</span><div class=\"col-md-3 text-left\"><input type=\"text\" name=\"valueDate\" id=\"valueDate\" readonly=\"readonly\" class=\"holo required endDate\"/></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">金额</span><div class=\"col-md-3 text-right\"><input type=\"text\" name=\"amount\" id=\"amount\" class=\"holo required digits\"/></div><div class=\"col-md-1 text-left\"></div><h6 class=\"text-muted\">万元</h6></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">备注</span><div class=\"col-md-8\"><input type=\"text\" style=\"width: 100%;\" placeholder=\"备注\" name=\"comment\" id=\"comment\" class=\"holo\"/></div></div></div><div class=\"modal-footer\"><div class=\"text-center\"><button style=\"margin-right: 40px;\" type=\"reset\" class=\"cancel btn btn-lg btn-default\">取消</button><button id=\"ok\" type=\"submit\" class=\"btn btn-lg btn-success\">确定</button></div></div></form></div><script>$('#detailFormDividend #establishDate').datepicker({format: 'yyyy-mm-dd', autoclose: true});\n$('#detailFormDividend #valueDate').datepicker({format: 'yyyy-mm-dd', autoclose: true});\npup.template.renderTemplateByKey('order.dividendList', {id : curOrderId});\n\n$('#muAdd, #addPayout').click(function() {\n    $('#detailAdd').modal('show');\n});\n\n$('.cancel, .close').click(function() {\n    $('.modal').modal('hide');\n});\n\n$('#formDividend').validate_popover({popoverPosition : 'top'});\n\njQuery.validator.addMethod(\"endDate\", function(value, element) {\n    var endDate = $(element).val();\n    var minDate = $('#formDividend #establishDate').val();\n    return this.optional(element) || (endDate >= minDate);\n    }, \"请填写合法起息日期\");\n$('#detailFormDividend').validate();\n$('#detailFormDividend').submit(function(ev) {\n    ev.preventDefault();\n    var formData = $('#detailFormDividend').serializeObject();\n    formData.orderId = curOrderId;\n    if($('#detailFormDividend').validate().form()) {\n        var url = $(this).attr('action');\n        $.ajax({\n            type: \"POST\",\n            url: url,\n            dataType: 'json',\n            data: formData,\n            success: function (data) {\n                if(data.type == 'success') {\n                    $('#detailFormDividend')[0].reset();\n                    $('#detailAdd').modal('hide');\n                    pup.template.renderTemplateByKey('order.dividendList', {id : curOrderId});\n                }\n                toast(data);\n            }\n        });\n    }\n    return false;\n});\n\npup.showView('fsl-2');</script>");}("_id" in locals_for_with?locals_for_with._id:typeof _id!=="undefined"?_id:undefined,"code" in locals_for_with?locals_for_with.code:typeof code!=="undefined"?code:undefined,"customer" in locals_for_with?locals_for_with.customer:typeof customer!=="undefined"?customer:undefined,"crealName" in locals_for_with?locals_for_with.crealName:typeof crealName!=="undefined"?crealName:undefined,"product" in locals_for_with?locals_for_with.product:typeof product!=="undefined"?product:undefined,"amount" in locals_for_with?locals_for_with.amount:typeof amount!=="undefined"?amount:undefined,"statusName" in locals_for_with?locals_for_with.statusName:typeof statusName!=="undefined"?statusName:undefined,"format" in locals_for_with?locals_for_with.format:typeof format!=="undefined"?format:undefined,"ctime" in locals_for_with?locals_for_with.ctime:typeof ctime!=="undefined"?ctime:undefined,"comment" in locals_for_with?locals_for_with.comment:typeof comment!=="undefined"?comment:undefined));;return buf.join("");
}
function crm_order_dividendListTable(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (data, format) {
buf.push("<!--Created by michael on 5/29/14.\n--><table class=\"table m-b-0\"><tr class=\"th-inverse\"><th class=\"col-sm-2\"> 成立日期</th><th class=\"col-sm-2\"> 起息日期</th><th class=\"col-sm-2\"> 金额(万元)</th><th class=\"col-sm-4\"> 备注</th></tr>");
// iterate data
;(function(){
  var $$obj = data;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var dividend = $$obj[$index];

buf.push("<tr class=\"cust-record\"><td> " + (jade.escape((jade_interp = format(dividend.establishDate)) == null ? '' : jade_interp)) + "</td><td> " + (jade.escape((jade_interp = format(dividend.valueDate)) == null ? '' : jade_interp)) + "</td><td> " + (jade.escape((jade_interp = dividend.amount) == null ? '' : jade_interp)) + "</td><td> " + (jade.escape((jade_interp = dividend.comment) == null ? '' : jade_interp)) + "</td></tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var dividend = $$obj[$index];

buf.push("<tr class=\"cust-record\"><td> " + (jade.escape((jade_interp = format(dividend.establishDate)) == null ? '' : jade_interp)) + "</td><td> " + (jade.escape((jade_interp = format(dividend.valueDate)) == null ? '' : jade_interp)) + "</td><td> " + (jade.escape((jade_interp = dividend.amount) == null ? '' : jade_interp)) + "</td><td> " + (jade.escape((jade_interp = dividend.comment) == null ? '' : jade_interp)) + "</td></tr>");
    }

  }
}).call(this);

buf.push("</table>");}("data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"format" in locals_for_with?locals_for_with.format:typeof format!=="undefined"?format:undefined));;return buf.join("");
}
function crm_order_editForm(locals) {
var jade_debug = [{ lineno: 1, filename: "editForm.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined) {
jade_debug.unshift({ lineno: 0, filename: "editForm.jade" });
jade_debug.unshift({ lineno: 1, filename: "editForm.jade" });
buf.push("<div style=\"margin-top: 20px;\" class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "editForm.jade" });
buf.push("<div class=\"mm-box col-md-8 col-md-offset-2\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "editForm.jade" });
buf.push("<h4 style=\"color:#a52410;\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: jade_debug[0].filename });
buf.push("创建订单");
jade_debug.shift();
jade_debug.shift();
buf.push("</h4>");
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "editForm.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "editForm.jade" });
buf.push("<div style=\"background: #a52410;height: 1px;margin:10px auto;\" class=\"divider\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "editForm.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "editForm.jade" });
buf.push("<div class=\"col-md-2\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "editForm.jade" });
buf.push("<input type=\"text\" style=\"width: 100%\" placeholder=\"选择客户\" class=\"holo\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "editForm.jade" });
buf.push("<div class=\"col-md-6\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "editForm.jade" });
buf.push("<input type=\"text\" style=\"width: 100%\" placeholder=\"选择产品\" class=\"holo\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "editForm.jade" });
buf.push("<div class=\"col-md-2\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "editForm.jade" });
buf.push("<input type=\"text\" style=\"width: 100%\" placeholder=\"下单金额\" class=\"holo\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "editForm.jade" });
buf.push("<h6 class=\"text-muted\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("万元");
jade_debug.shift();
jade_debug.shift();
buf.push("</h6>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "editForm.jade" });
buf.push("<input type=\"text\" style=\"width: 100%\" placeholder=\"备注\" class=\"holo\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 15, filename: "editForm.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "editForm.jade" });
buf.push("<div style=\"background: #999;height: 1px;margin:20px auto;\" class=\"divider\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "editForm.jade" });
buf.push("<div style=\"height: 80px;\" class=\"row text-center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: "editForm.jade" });
buf.push("<button style=\"margin-right: 40px;\" class=\"btn btn-lg btn-danger\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("取消");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "editForm.jade" });
buf.push("<button class=\"btn btn-lg btn-success\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("确定");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "editForm.jade" });
buf.push("<script>");
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("$('#mu-apps').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("    $('#apps').show();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 24, filename: jade_debug[0].filename });
buf.push("    $('#message').hide();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("});");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push("$('#mu-msg').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 27, filename: jade_debug[0].filename });
buf.push("    $('#message').show();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 28, filename: jade_debug[0].filename });
buf.push("    $('#apps').hide();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push("});");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 30, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 31, filename: jade_debug[0].filename });
buf.push("$('.app-box').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 32, filename: jade_debug[0].filename });
buf.push("    var path = $(this).data('href');");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 33, filename: jade_debug[0].filename });
buf.push("    window.open(path);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 34, filename: jade_debug[0].filename });
buf.push("});");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 35, filename: jade_debug[0].filename });
buf.push("$('.f-task').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 36, filename: jade_debug[0].filename });
buf.push("    window.open('/crm/audit/detail');");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 37, filename: jade_debug[0].filename });
buf.push("});");
jade_debug.shift();
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.shift();}("undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".row(style='margin-top: 20px;')\n    .mm-box.col-md-8.col-md-offset-2\n        h4(style='color:#a52410;') 创建订单\n        .row\n            .divider(style='background: #a52410;height: 1px;margin:10px auto;')\n        .row\n            .col-md-2\n                input.holo(type='text', style='width: 100%', placeholder='选择客户')\n            .col-md-6\n                input.holo(type='text', style='width: 100%', placeholder='选择产品')\n            .col-md-2\n                input.holo(type='text', style='width: 100%', placeholder='下单金额')\n            h6.text-muted 万元\n        input.holo(type='text', style='width: 100%', placeholder='备注')\n        .row\n            .divider(style='background: #999;height: 1px;margin:20px auto;')\n        .row.text-center(style='height: 80px;')\n            button.btn.btn-lg.btn-danger(style='margin-right: 40px;') 取消\n            button.btn.btn-lg.btn-success 确定\n\nscript.\n    $('#mu-apps').click(function() {\n        $('#apps').show();\n        $('#message').hide();\n    });\n    $('#mu-msg').click(function() {\n        $('#message').show();\n        $('#apps').hide();\n    });\n\n    $('.app-box').click(function() {\n        var path = $(this).data('href');\n        window.open(path);\n    });\n    $('.f-task').click(function() {\n        window.open('/crm/audit/detail');\n    });");
}
}
function crm_order_list(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (typeList, statusList) {
buf.push("<div class=\"row m-t-20\"><div class=\"col-sm-8 col-sm-offset-2 mm-box form-horizontal filter-pan\"><form id=\"query\" onsubmit=\"return false;\"><div class=\"form-group\"><label class=\"control-label col-md-2\">客户手机</label><div class=\"col-md-10\"><input type=\"text\" name=\"telNo\" id=\"telNo\" style=\"display: inline-block;margin-right:10px;width:300px;\" class=\"holo\"/><button data-toggle=\"modal\" type=\"submit\" id=\"queryQuick\" class=\"btn btn-primary m-l-5\"><i style=\"margin-right: 5px;\" class=\"icon-search-8\"></i><span>快速查找</span></button></div></div><div class=\"form-group\"><label class=\"control-label col-md-2\">产品类型</label><div style=\"margin-top:5px;\" class=\"col-md-10\"><div id=\"type\" class=\"labelRadio\"><input name=\"type\" type=\"radio\" value=\"\" data-name=\"全部\" checked=\"checked\"/>");
// iterate typeList
;(function(){
  var $$obj = typeList;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var type = $$obj[$index];

buf.push("<input name=\"type\" type=\"radio\"" + (jade.attr("value", '' + (type.key) + '', true, false)) + (jade.attr("data-name", "" + (type.name) + "", true, false)) + "/>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var type = $$obj[$index];

buf.push("<input name=\"type\" type=\"radio\"" + (jade.attr("value", '' + (type.key) + '', true, false)) + (jade.attr("data-name", "" + (type.name) + "", true, false)) + "/>");
    }

  }
}).call(this);

buf.push("</div></div></div></form></div></div><div id=\"detail\" tabindex=\"-1\" data-width=\"760\" style=\"display: none;\" class=\"modal fade\"><form id=\"formModify\" action=\"/crm/order/modify\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><div class=\"row\"><div class=\"col-md-3\"><h4 class=\"modal-title\">订单编辑</h4></div></div></div><div class=\"modal-body\"><div class=\"row\"><span class=\"col-md-2 text-right text-muted small\">订单号</span><span id=\"id\" class=\"col-md-3 text-left small\"></span><span class=\"col-md-2 text-right text-muted small\">客户</span><span id=\"cusName\" class=\"col-md-3 text-left small\"></span></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">产品类别</span><div style=\"margin-top:5px;\" class=\"col-md-3\"><div id=\"type\" data-toggle=\"buttons-radio\" class=\"btn-group\">");
// iterate typeList
;(function(){
  var $$obj = typeList;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var type = $$obj[$index];

buf.push("<button" + (jade.attr("value", '' + (type.key) + '', true, false)) + " type=\"button\" class=\"btn btn-sm btn-light-info\"> " + (jade.escape((jade_interp = type.name) == null ? '' : jade_interp)) + "</button>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var type = $$obj[$index];

buf.push("<button" + (jade.attr("value", '' + (type.key) + '', true, false)) + " type=\"button\" class=\"btn btn-sm btn-light-info\"> " + (jade.escape((jade_interp = type.name) == null ? '' : jade_interp)) + "</button>");
    }

  }
}).call(this);

buf.push("</div></div><span class=\"col-md-2 text-right text-muted small\">产品名称</span><span id=\"prdName\" class=\"col-md-3 text-left small\"></span></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">金额</span><div class=\"col-md-2 text-left\"><input type=\"hidden\" name=\"_id\" id=\"_id\" class=\"holo\"/><input type=\"text\" name=\"amount\" id=\"amount\" class=\"holo required digits\"/></div><div class=\"col-md-1 text-left\"><h6 class=\"text-muted\">万元</h6></div><span class=\"col-md-2 text-right text-muted small\">销售</span><div class=\"col-md-3 text-left\"><span id=\"crealName\" class=\"col-md-3 text-left small\"></span></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">下单日期</span><div class=\"col-md-5 text-left\"><input type=\"text\" name=\"ctime\" id=\"ctime\" ,=\",\" readonly=\"readonly\" class=\"holo required\"/></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">状态</span><div style=\"margin-top:5px;\" class=\"col-md-5\"><div id=\"status\" data-toggle=\"buttons-radio\" class=\"btn-group\">");
// iterate statusList
;(function(){
  var $$obj = statusList;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var status = $$obj[$index];

buf.push("<button" + (jade.attr("value", '' + (status.key) + '', true, false)) + " type=\"button\" class=\"btn btn-sm btn-light-info\"> " + (jade.escape((jade_interp = status.name) == null ? '' : jade_interp)) + "</button>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var status = $$obj[$index];

buf.push("<button" + (jade.attr("value", '' + (status.key) + '', true, false)) + " type=\"button\" class=\"btn btn-sm btn-light-info\"> " + (jade.escape((jade_interp = status.name) == null ? '' : jade_interp)) + "</button>");
    }

  }
}).call(this);

buf.push("</div></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">备注</span><div class=\"col-md-8 text-left\"><input type=\"text\" id=\"comment\" name=\"comment\" class=\"holo\"/></div></div></div><div class=\"modal-footer\"><div class=\"text-center\"><button style=\"margin-right: 40px;\" data-dismiss=\"modal\" type=\"button\" class=\"cancel btn btn-lg btn-default\">取消</button><button id=\"ok\" type=\"submit\" class=\"btn btn-lg btn-success\">确定</button></div></div></form></div><div class=\"row m-t-25\"><div class=\"col-sm-8 col-sm-offset-2\"><div id=\"orderListData\" class=\"row\"></div></div></div><div id=\"opAcceptConfirm\" tabindex=\"-1\" style=\"display: none;\" class=\"modal fade\"><div class=\"modal-body\"><p id=\"confirmMsg\">确定撤销？</p><p id=\"opStatus\" style=\"font-size: 20px; font-face: bold; display: none;\"><i class=\"icon icon-spin5 animate-spin text-success\"></i></p></div><div class=\"modal-footer\"><div class=\"text-center\"><button style=\"margin-right: 40px;\" data-dismiss=\"modal\" class=\"cancel btn btn-default\">取消</button><button id=\"ok\" class=\"btn btn-danger\">确定</button></div></div></div><div id=\"add\" tabindex=\"-1\" data-width=\"760\" style=\"display: none;\" class=\"modal fade\"><form id=\"formDividend\" action=\"/crm/order/dividend\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><div class=\"row\"><div class=\"col-md-3\"><h4 class=\"modal-title\">添加派息</h4></div></div></div><div class=\"modal-body\"><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">成立日期</span><div class=\"col-md-3 text-right\"><input type=\"text\" name=\"establishDate\" id=\"establishDate\" readonly=\"readonly\" class=\"holo required\"/></div><span class=\"col-md-2 text-right text-muted small\">起息日期</span><div class=\"col-md-3 text-left\"><input type=\"text\" name=\"valueDate\" id=\"valueDate\" readonly=\"readonly\" class=\"holo required endDate\"/></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">金额</span><div class=\"col-md-3 text-right\"><input type=\"text\" name=\"amount\" id=\"amount\" class=\"holo required digits\"/></div><div class=\"col-md-1 text-left\"></div><h6 class=\"text-muted\">万元</h6></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">备注</span><div class=\"col-md-8\"><input type=\"text\" style=\"width: 100%;\" placeholder=\"备注\" name=\"comment\" id=\"comment\" class=\"holo\"/></div></div></div><div class=\"modal-footer\"><div class=\"text-center\"><button style=\"margin-right: 40px;\" type=\"reset\" class=\"cancel btn btn-lg btn-default\">取消</button><button id=\"ok\" type=\"submit\" class=\"btn btn-lg btn-success\">确定</button></div></div></form></div><script>$('#formDividend #establishDate').datepicker({format: 'yyyy-mm-dd', autoclose: true});\n$('#formDividend #valueDate').datepicker({format: 'yyyy-mm-dd', autoclose: true});\n$('#ctime').datepicker({format: 'yyyy-mm-dd', autoclose: true});\nvar orderPagination = new pup.Pagination({\n    templateKey : \"order.dataList\",\n});\n//跳转到第一页\norderPagination.first();\n\n$('#query #queryQuick').click(function() {\n    if($('#telNo').val() == '') {\n        var condition = {};\n        if($('#query #type').find(\"input[type='radio']:checked\").val() != '') {\n            condition.type = $('#query #type').find(\"input[type='radio']:checked\").val();\n        }\n        orderPagination.setCondition(condition).first();\n    } else {\n        orderPagination.setCondition({telNo: $('#telNo').val()}).first();\n    }\n});\n\n$('#mu-apps').click(function() {\n    $('#apps').show();\n    $('#message').hide();\n});\n$('#mu-msg').click(function() {\n    $('#message').show();\n    $('#apps').hide();\n});\n$('.app-box').click(function() {\n    var path = $(this).data('href');\n    window.open(path);\n});\n\n$('.cancel, .close').click(function() {\n    $('.popover').each( function() {\n        $(this).hide();\n    });\n    $('.modal').modal('hide');\n});\n\n$('#formModify').validate_popover({popoverPosition : 'top'});\n\n$('#formModify').submit(function(ev) {\n    ev.preventDefault();\n    var type = $(\"#formModify #type > .btn.active\").val();\n    var status = $(\"#formModify #status > .btn.active\").val();\n    var serializeForm = $('#formModify').serialize();\n    var allForm = serializeForm + '&' + 'status='+status+'&type=' + type ;\n    if($('#formModify').validate().form()) {\n        var url = $(this).attr('action');\n        $.ajax({\n            type: \"POST\",\n            url: url,\n            dataType: 'json',\n            data: allForm,\n            success: function (data) {\n                if(data.type == 'success') {\n                    $('#detail').modal('hide');\n                    orderPagination.reload();\n                }\n                toast(data);\n            }\n        });\n    }\n    return false;\n});\n\nvar curOrderId = 0;\n\n$('#opAcceptConfirm #ok').click(function() {\n    $('#opAcceptConfirm').modal('hide');\n    var url = '/crm/order/' + curOrderId;\n    $.ajax({\n        type: 'DELETE',\n        url: url,\n        dataType: 'json',\n        data: {},\n        success: function (data) {\n            var formData = data.msg.body;\n            if(data.msg.type == 'success'){\n                orderPagination.reload();\n            }\n            toast(data.msg);\n            \n        }\n    });\n});\n$('#formDividend').validate_popover({popoverPosition : 'top'});\n\njQuery.validator.addMethod(\"endDate\", function(value, element) {\n    var endDate = $(element).val();\n    var minDate = $('#formDividend #establishDate').val();\n    return this.optional(element) || (endDate >= minDate);\n    }, \"请填写合法起息日期\");\n    \n$('#formDividend').submit(function(ev) {\n    ev.preventDefault();\n    var formData = $('#formDividend').serializeObject();\n    formData.orderId = curOrderId;\n    if($('#formDividend').validate().form()) {\n        var url = $(this).attr('action');\n        $.ajax({\n            type: \"POST\",\n            url: url,\n            dataType: 'json',\n            data: formData,\n            success: function (data) {\n                if(data.type == 'success') {\n                    $('#formDividend')[0].reset();\n                    $('#add').modal('hide');\n                    orderPagination.reload();\n                }\n                toast(data);\n            }\n        });\n    }\n    return false;\n});\n\nvar lr = new pup.widgets.labelRadio('#query #type').radio(function(value) {\n    var condition = {};\n    if(lr.val() != '') {\n        condition['product.type'] = lr.val();\n    }\n    orderPagination.setCondition(condition).first();\n});</script>");}("typeList" in locals_for_with?locals_for_with.typeList:typeof typeList!=="undefined"?typeList:undefined,"statusList" in locals_for_with?locals_for_with.statusList:typeof statusList!=="undefined"?statusList:undefined));;return buf.join("");
}
function crm_order_listTable(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (data, format) {
buf.push("<!--Created by michael on 5/29/14.\n--><table class=\"table mm-box\"><tr class=\"th-inverse\"><th> 客户</th><th> 产品名称</th><th> 产品类别</th><th> 金额(万元)</th><th> 销售</th><th> 下单日期</th><th> 状态</th><th> 操作</th></tr>");
// iterate data
;(function(){
  var $$obj = data;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var order = $$obj[$index];

buf.push("<tr" + (jade.attr("id", '' + (order._id) + '', true, false)) + " class=\"cust-record\"><td> " + (jade.escape((jade_interp = order.customer.name) == null ? '' : jade_interp)) + "</td><td> " + (jade.escape((jade_interp = order.product.name) == null ? '' : jade_interp)) + "</td><td> " + (jade.escape((jade_interp = order.product.typeName) == null ? '' : jade_interp)) + "</td><td> " + (jade.escape((jade_interp = order.amount) == null ? '' : jade_interp)) + "</td><td> " + (jade.escape((jade_interp = order.cusername) == null ? '' : jade_interp)) + "</td><td> " + (jade.escape((jade_interp = format(order.ctime)) == null ? '' : jade_interp)) + "</td><td> " + (jade.escape((jade_interp = order.statusName) == null ? '' : jade_interp)) + "</td><td><span title=\"编辑\"" + (jade.attr("id", '' + (order._id) + '', true, false)) + " class=\"icon-btn edit\"><i class=\"icon icon-edit-3\"></i></span><span title=\"撤销\"" + (jade.attr("id", '' + (order._id) + '', true, false)) + " class=\"icon-btn trash\"><i class=\"icon icon-trash\"></i></span><span title=\"派息\"" + (jade.attr("id", '' + (order._id) + '', true, false)) + " class=\"icon-btn payout\"><i class=\"icon icon-yen\"></i></span></td></tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var order = $$obj[$index];

buf.push("<tr" + (jade.attr("id", '' + (order._id) + '', true, false)) + " class=\"cust-record\"><td> " + (jade.escape((jade_interp = order.customer.name) == null ? '' : jade_interp)) + "</td><td> " + (jade.escape((jade_interp = order.product.name) == null ? '' : jade_interp)) + "</td><td> " + (jade.escape((jade_interp = order.product.typeName) == null ? '' : jade_interp)) + "</td><td> " + (jade.escape((jade_interp = order.amount) == null ? '' : jade_interp)) + "</td><td> " + (jade.escape((jade_interp = order.cusername) == null ? '' : jade_interp)) + "</td><td> " + (jade.escape((jade_interp = format(order.ctime)) == null ? '' : jade_interp)) + "</td><td> " + (jade.escape((jade_interp = order.statusName) == null ? '' : jade_interp)) + "</td><td><span title=\"编辑\"" + (jade.attr("id", '' + (order._id) + '', true, false)) + " class=\"icon-btn edit\"><i class=\"icon icon-edit-3\"></i></span><span title=\"撤销\"" + (jade.attr("id", '' + (order._id) + '', true, false)) + " class=\"icon-btn trash\"><i class=\"icon icon-trash\"></i></span><span title=\"派息\"" + (jade.attr("id", '' + (order._id) + '', true, false)) + " class=\"icon-btn payout\"><i class=\"icon icon-yen\"></i></span></td></tr>");
    }

  }
}).call(this);

buf.push("</table><div id=\"orderPageBar\"></div><script>$('.cust-record').click(function() {\n    var id = $(this).attr('id');\n    curOrderId = id;\n    pup.template.renderTemplateByKey('order.detail', {id : id});\n});\n\n$('tr .edit').click(function(ev) {\n    ev.stopPropagation();\n    var url = '/crm/order/detail';\n    $.ajax({\n        type: 'POST',\n        url: url,\n        dataType: 'json',\n        data: {id : $(this).attr('id')},\n        success: function (data) {\n            var formData = data.msg.body;\n            if(data.msg.type == 'success'){\n                var formData = data.msg.body;\n                \n                $('#detail #id').html(formData.code);\n                $('#detail #_id').val(formData._id);\n                $('#detail #cusName').html(formData.customer.name);\n                $('#detail #prdName').html(formData.product.name);\n                $('#detail #amount').val(formData.amount);\n                $('#detail #cusername').html(formData.cusername);\n                $('#detail #comment').val(formData.comment);\n                $('#detail #ctime').val(format(formData.ctime));\n                $(\"#detail #type\").find('button').each(function() {\n                    if(formData.product.type == $(this).val()) {\n                        $(this).button('toggle');\n                    }\n                });\n                $(\"#detail #status\").find('button').each(function() {\n                    if(formData.status == $(this).val()) {\n                        $(this).button('toggle');\n                    }\n                });\n                $('#detail').modal('show');\n            }else{\n                toast(data.msg);\n            }\n        }\n    });\n});\n\n$('tr .trash').click(function(ev) {\n    curOrderId = $(this).attr('id');\n    ev.stopPropagation();\n    $('#opAcceptConfirm').modal('show');\n});\n\n$('tr .payout').click(function(ev) {\n    curOrderId = $(this).attr('id');\n    ev.stopPropagation();\n    $('#add').modal('show');\n});\n\norderPagination.bar('#orderPageBar');</script>");}("data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"format" in locals_for_with?locals_for_with.format:typeof format!=="undefined"?format:undefined));;return buf.join("");
}
function crm_order_signList(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (statusList, typeList) {
buf.push("<div style=\"margin-top: 20px;\" class=\"row\"><div class=\"col-sm-8 col-sm-offset-2 mm-box form-horizontal\"><form id=\"query\" onsubmit=\"return false;\"><div class=\"form-group\"><label class=\"control-label col-md-2\">客户</label><div class=\"col-md-10\"><input type=\"text\" id=\"name\" style=\"display: inline-block;margin-right:10px;width:300px;\" class=\"holo\"/></div></div><div class=\"form-group\"><label class=\"control-label col-md-2\">手机号码</label><div class=\"col-md-10\"><input type=\"text\" id=\"telNo\" style=\"display: inline-block;margin-right:10px;width:300px;\" class=\"holo\"/><button type=\"submit\" id=\"queryQuick\" class=\"btn btn-primary\"><i style=\"margin-right: 5px;\" class=\"icon-search-8\"></i><span>快速查找</span></button></div></div><div class=\"form-group\"><label class=\"control-label col-md-2\">状态</label><div style=\"margin-top:5px;\" class=\"col-md-10\"><div id=\"status\" data-toggle=\"buttons-radio\" class=\"btn-group\"><button type=\"button\" value=\"\" class=\"btn-sm btn btn-light-info active\">全部</button>");
// iterate statusList
;(function(){
  var $$obj = statusList;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var status = $$obj[$index];

buf.push("<button type=\"button\"" + (jade.attr("value", '' + (status.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info\">" + (jade.escape((jade_interp = status.name) == null ? '' : jade_interp)) + "</button>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var status = $$obj[$index];

buf.push("<button type=\"button\"" + (jade.attr("value", '' + (status.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info\">" + (jade.escape((jade_interp = status.name) == null ? '' : jade_interp)) + "</button>");
    }

  }
}).call(this);

buf.push("</div></div></div><div class=\"form-group\"><label class=\"control-label col-md-2\">产品类型</label><div style=\"margin-top:5px;\" class=\"col-md-10\"><div id=\"type\" data-toggle=\"buttons-radio\" class=\"btn-group\"><button type=\"button\" value=\"\" class=\"btn-sm btn btn-light-info active\">全部</button>");
// iterate typeList
;(function(){
  var $$obj = typeList;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var type = $$obj[$index];

buf.push("<button type=\"button\"" + (jade.attr("value", '' + (type.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info\">" + (jade.escape((jade_interp = type.name) == null ? '' : jade_interp)) + "</button>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var type = $$obj[$index];

buf.push("<button type=\"button\"" + (jade.attr("value", '' + (type.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info\">" + (jade.escape((jade_interp = type.name) == null ? '' : jade_interp)) + "</button>");
    }

  }
}).call(this);

buf.push("</div></div></div></form></div></div><!--#detail.modal.fade(tabindex='-1', data-width='760', style='display: none;')--><!--    .modal-header--><!--        button.close(type='button', data-dismiss='modal', aria-hidden='true') &times;--><!--        .row--><!--            .col-md-3--><!--                h4.modal-title 详细信息--><!--    .modal-body--><!--        .row.m-t-10--><!--            span.col-md-2.text-right.text-muted.small 客户--><!--            span.col-md-2.text-left.small 张xx--><!--            span.col-md-2.text-right.text-muted.small 产品名称--><!--            span.col-md-4.text-left.small 长城母基金--><!--        .row.m-t-10--><!--            span.col-md-2.text-right.text-muted.small 产品类别--><!--            span.col-md-2.text-left.small 固定收益--><!--            span.col-md-2.text-right.text-muted.small 文件名--><!--            span.col-md-2.text-left.small 出资证明--><!--            .col-md-2.text-right--><!--                input.large(type='checkbox')--><!--                span.text-left.text-muted.small 签收--><!--        .row--><!----><!--        .row.m-t-10(style='margin-top:5px;')--><!--            span.col-md-2.text-right.text-muted.small 备注--><!--            .col-md-8--><!--                input.holo(type='text', style='width: 100%;', placeholder='备注')--><!--    .modal-footer--><!--        .text-center--><!--            button#cancel.btn.btn-lg.btn-default(style='margin-right: 40px;',type='button') 取消--><!--            button#submit.btn.btn-lg.btn-success(type='submit') 确定--><div class=\"row m-t-25\"><div class=\"col-sm-8 col-sm-offset-2\"><div id=\"signListData\" class=\"row\"></div></div></div><div id=\"opAcceptConfirm\" tabindex=\"-1\" style=\"display: none;\" class=\"modal fade\"><div class=\"modal-body\"><p id=\"confirmMsg\">确定签收？</p><p id=\"opStatus\" style=\"font-size: 20px; font-face: bold; display: none;\"><i class=\"icon icon-spin5 animate-spin text-success\"></i></p></div><div class=\"modal-footer\"><div class=\"text-center\"><button style=\"margin-right: 40px;\" data-dismiss=\"modal\" class=\"cancel btn btn-default\">取消</button><button id=\"ok\" class=\"btn btn-success\">确定</button></div></div></div><script>var signPagination = new pup.Pagination({\n    templateKey : \"order.signDataList\"\n});\n//跳转到第一页\nsignPagination.first();\n\n$('.selectpicker').selectpicker({noneSelectedText:'请选择'});\n\n$('#query #queryQuick').click(function() {\n    var condition = {};\n    if($('#telNo').val() == '' && $('#name').val() == '') {\n        var status = $(\"#query #status > .btn.active\").val();\n        var type = $(\"#query #type > .btn.active\").val();\n        if(status != '') {\n            condition.status = status;\n        }\n        if(type != '') {\n            condition['product.type'] = type;\n        }\n    } else {\n        if($('#telNo').val() != '') {\n            condition['customer.telNo'] = $('#telNo').val();\n        }\n        if($('#name').val() != '') {\n            condition['customer.name'] = $('#name').val();\n        }\n    }\n    signPagination.setCondition(condition).first();\n});\n\n$('#query #status').find('button').click(function() {\n    var condition = {};\n    if($(this).val() != ''){\n        condition.status = $(this).val();\n    }\n    if($(\"#query #type > .btn.active\").val() != '') {\n        condition['product.type'] = $(\"#query #type > .btn.active\").val();\n    }\n    signPagination.setCondition(condition).first();\n});\n\n$('#query #type').find('button').click(function() {\n    var condition = {};\n    if($(this).val() != ''){\n        condition['product.type'] = $(this).val();\n    }\n    if($(\"#query #status > .btn.active\").val() != '') {\n        condition.stauts = $(\"#query #status > .btn.active\").val();\n    }\n    signPagination.setCondition(condition).first();\n});\n\n$('#mu-apps').click(function() {\n    $('#apps').show();\n    $('#message').hide();\n});\n$('#mu-msg').click(function() {\n    $('#message').show();\n    $('#apps').hide();\n});\n$('.app-box').click(function() {\n    var path = $(this).data('href');\n    window.open(path);\n});\n//$('.cust-record').click(function() {\n    //$('#detail').modal('show');\n//});\n$('#cancel').click(function() {\n    $('#detail').modal('hide');\n});\n\nvar btnField = null;\nvar signId = 0;\n\nfunction sign(field) {\n    btnField = field;\n    signId = $(field).attr('id');\n    $('#opAcceptConfirm').modal('show');\n}\n\n$('#opAcceptConfirm #ok').click(function() {\n    $('#opAcceptConfirm').modal('hide');\n    var url = '/crm/order/sign';\n    $.ajax({\n        type: 'GET',\n        url: url,\n        dataType: 'json',\n        data: {id : signId},\n        success: function (data) {\n            var formData = data.msg.body;\n            if(data.msg.type == 'success'){\n                var parent = $(btnField).parent();\n                $(btnField).remove();\n                parent.html(\"<span class='m-l-15'>已签</span>\");\n                $('#opAcceptConfirm').modal('hide');\n                signPagination.reload();\n            }\n            toast(data.msg);\n        }\n    });\n});\n\n\n</script>");}("statusList" in locals_for_with?locals_for_with.statusList:typeof statusList!=="undefined"?statusList:undefined,"typeList" in locals_for_with?locals_for_with.typeList:typeof typeList!=="undefined"?typeList:undefined));;return buf.join("");
}
function crm_order_signListTable(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (data) {
buf.push("<!--Created by michael on 5/29/14.\n--><table class=\"table mm-box col-md-10\"><tr class=\"th-inverse\"><th> 客户</th><th> 文件名</th><th> 产品名称</th><th> 产品类别</th><th> 状态</th></tr>");
// iterate data
;(function(){
  var $$obj = data;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var prdSign = $$obj[$index];

buf.push("<tr class=\"cust-record\"><td> " + (jade.escape((jade_interp = prdSign.customer.name) == null ? '' : jade_interp)) + "</td><td> " + (jade.escape((jade_interp = prdSign.productRefData.name) == null ? '' : jade_interp)) + "</td><td> " + (jade.escape((jade_interp = prdSign.product.name) == null ? '' : jade_interp)) + "</td><td> " + (jade.escape((jade_interp = prdSign.product.typeName) == null ? '' : jade_interp)) + "</td><td>");
if ( prdSign.status == 'unsigned')
{
buf.push("<span title=\"签收\"" + (jade.attr("id", '' + (prdSign._id) + '', true, false)) + " onclick=\"sign(this);\" class=\"icon-btn sign\"><i class=\"icon icon-pencil\"></i></span>");
}
else
{
buf.push("<span class=\"m-l-15\">已签</span>");
}
buf.push("</td></tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var prdSign = $$obj[$index];

buf.push("<tr class=\"cust-record\"><td> " + (jade.escape((jade_interp = prdSign.customer.name) == null ? '' : jade_interp)) + "</td><td> " + (jade.escape((jade_interp = prdSign.productRefData.name) == null ? '' : jade_interp)) + "</td><td> " + (jade.escape((jade_interp = prdSign.product.name) == null ? '' : jade_interp)) + "</td><td> " + (jade.escape((jade_interp = prdSign.product.typeName) == null ? '' : jade_interp)) + "</td><td>");
if ( prdSign.status == 'unsigned')
{
buf.push("<span title=\"签收\"" + (jade.attr("id", '' + (prdSign._id) + '', true, false)) + " onclick=\"sign(this);\" class=\"icon-btn sign\"><i class=\"icon icon-pencil\"></i></span>");
}
else
{
buf.push("<span class=\"m-l-15\">已签</span>");
}
buf.push("</td></tr>");
    }

  }
}).call(this);

buf.push("</table><div id=\"signPageBar\"></div><script>signPagination.bar('#signPageBar');</script>");}("data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));;return buf.join("");
}
function crm_product_attachmentLatestListTable(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (data, user) {
// iterate data
;(function(){
  var $$obj = data;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var attachment = $$obj[i];

// iterate attachment.privilege
;(function(){
  var $$obj = attachment.privilege;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var privilege = $$obj[$index];

if ((privilege.userPosition == user.position))
{
buf.push("<div class=\"row m-t-10\"><span class=\"col-md-10 text-left\">" + (jade.escape((jade_interp = attachment.name) == null ? '' : jade_interp)) + "</span>");
if ( privilege.download)
{
buf.push("<span class=\"col-md-2 text-left\"><span class=\"m-l-15 icon-btn\"><i" + (jade.attr("id", '' + (attachment._id) + '', true, false)) + " class=\"icon-attach-1\"></i></span></span>");
}
buf.push("</div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var privilege = $$obj[$index];

if ((privilege.userPosition == user.position))
{
buf.push("<div class=\"row m-t-10\"><span class=\"col-md-10 text-left\">" + (jade.escape((jade_interp = attachment.name) == null ? '' : jade_interp)) + "</span>");
if ( privilege.download)
{
buf.push("<span class=\"col-md-2 text-left\"><span class=\"m-l-15 icon-btn\"><i" + (jade.attr("id", '' + (attachment._id) + '', true, false)) + " class=\"icon-attach-1\"></i></span></span>");
}
buf.push("</div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div>");
}
    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var attachment = $$obj[i];

// iterate attachment.privilege
;(function(){
  var $$obj = attachment.privilege;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var privilege = $$obj[$index];

if ((privilege.userPosition == user.position))
{
buf.push("<div class=\"row m-t-10\"><span class=\"col-md-10 text-left\">" + (jade.escape((jade_interp = attachment.name) == null ? '' : jade_interp)) + "</span>");
if ( privilege.download)
{
buf.push("<span class=\"col-md-2 text-left\"><span class=\"m-l-15 icon-btn\"><i" + (jade.attr("id", '' + (attachment._id) + '', true, false)) + " class=\"icon-attach-1\"></i></span></span>");
}
buf.push("</div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var privilege = $$obj[$index];

if ((privilege.userPosition == user.position))
{
buf.push("<div class=\"row m-t-10\"><span class=\"col-md-10 text-left\">" + (jade.escape((jade_interp = attachment.name) == null ? '' : jade_interp)) + "</span>");
if ( privilege.download)
{
buf.push("<span class=\"col-md-2 text-left\"><span class=\"m-l-15 icon-btn\"><i" + (jade.attr("id", '' + (attachment._id) + '', true, false)) + " class=\"icon-attach-1\"></i></span></span>");
}
buf.push("</div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div>");
}
    }

  }
}).call(this);

    }

  }
}).call(this);

buf.push("<div onclick=\"loadAttachmentByPage();\" class=\"row m-t-10 text-center text-center cust-record\"><a href=\"javascript:void(0);\" onclick=\"loadAttachmentByPage();\" title=\"加载更多\"><i class=\"icon icon-angle-double-down\"></i></a></div><script>$('.icon-attach-1').click(function() {\n    var url = \"/crm/productAttachment/download\";\n    location.href = url + \"?id=\" + $(this).attr('id');\n});</script>");}("data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return buf.join("");
}
function crm_product_attachmentListTable(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (data, user) {
// iterate data
;(function(){
  var $$obj = data;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var attachment = $$obj[$index];

// iterate attachment.privilege
;(function(){
  var $$obj = attachment.privilege;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var privilege = $$obj[$index];

if ((privilege.userPosition == user.position))
{
buf.push("<div class=\"row m-t-10\"><span class=\"col-md-10 text-left\">" + (jade.escape((jade_interp = attachment.name) == null ? '' : jade_interp)) + "</span>");
if ( privilege.download)
{
buf.push("<span class=\"col-md-2 text-left\"><span class=\"m-l-15 icon-btn\"><i" + (jade.attr("id", '' + (attachment._id) + '', true, false)) + " class=\"icon-attach-1\"></i></span></span>");
}
buf.push("</div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var privilege = $$obj[$index];

if ((privilege.userPosition == user.position))
{
buf.push("<div class=\"row m-t-10\"><span class=\"col-md-10 text-left\">" + (jade.escape((jade_interp = attachment.name) == null ? '' : jade_interp)) + "</span>");
if ( privilege.download)
{
buf.push("<span class=\"col-md-2 text-left\"><span class=\"m-l-15 icon-btn\"><i" + (jade.attr("id", '' + (attachment._id) + '', true, false)) + " class=\"icon-attach-1\"></i></span></span>");
}
buf.push("</div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div>");
}
    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var attachment = $$obj[$index];

// iterate attachment.privilege
;(function(){
  var $$obj = attachment.privilege;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var privilege = $$obj[$index];

if ((privilege.userPosition == user.position))
{
buf.push("<div class=\"row m-t-10\"><span class=\"col-md-10 text-left\">" + (jade.escape((jade_interp = attachment.name) == null ? '' : jade_interp)) + "</span>");
if ( privilege.download)
{
buf.push("<span class=\"col-md-2 text-left\"><span class=\"m-l-15 icon-btn\"><i" + (jade.attr("id", '' + (attachment._id) + '', true, false)) + " class=\"icon-attach-1\"></i></span></span>");
}
buf.push("</div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var privilege = $$obj[$index];

if ((privilege.userPosition == user.position))
{
buf.push("<div class=\"row m-t-10\"><span class=\"col-md-10 text-left\">" + (jade.escape((jade_interp = attachment.name) == null ? '' : jade_interp)) + "</span>");
if ( privilege.download)
{
buf.push("<span class=\"col-md-2 text-left\"><span class=\"m-l-15 icon-btn\"><i" + (jade.attr("id", '' + (attachment._id) + '', true, false)) + " class=\"icon-attach-1\"></i></span></span>");
}
buf.push("</div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div>");
}
    }

  }
}).call(this);

    }

  }
}).call(this);

buf.push("<script>productAttachmentPagination.bar('#productAttachmentPageBar');\n\n$('.icon-attach-1').click(function() {\n    var url = \"/crm/productAttachment/download\";\n    location.href = url + \"?id=\" + $(this).attr('id');\n});</script>");}("data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return buf.join("");
}
function crm_product_detail(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (id, name, issueOrg, minPeriod, maxPeriod, periodUnit, minAmount, totalAmount, typeName, preExpectedEarning, format, ctime, comment, trends, tags, refDatas, attachments, user, _id, manager, typeList, type, statusList, status) {
buf.push("<div class=\"sidebar sidebar-left mm-box\"><div id=\"muEdit\" class=\"sidemenu\"><i class=\"icon icon-edit-3\"></i>编辑</div><div class=\"divider divider-default\"></div><div id=\"muAddActivity\" class=\"sidemenu\"><i class=\"icon icon-rss-7\"></i>添加动态</div><div class=\"divider divider-default\"></div><div id=\"muAddNotice\" class=\"sidemenu\"><i class=\"icon icon-split\"></i>资料下发</div><div class=\"divider divider-default\"></div><!--#muAddCusEarnings.sidemenu--><!--    i.icon.icon-chart-bar--><!--    | 客户收益--><!--.divider.divider-default--><div id=\"muAddMaterial\" class=\"sidemenu\"><i class=\"icon icon-doc-1\"></i>产品资料</div></div><div style=\"margin-top: 80px;\" class=\"row\"><input type=\"hidden\"" + (jade.attr("value", '' + (id) + '', true, false)) + " id=\"id\"/><div id=\"prodInfo\" style=\"padding-bottom: 15px\" class=\"mm-box col-md-8 col-md-offset-2\"><div class=\"modal-header row\"><h4 style=\"display: inline-block;\" class=\"pan-title modal-title\">基本信息</h4><div class=\"pull-right\"><span id=\"editBtn\" class=\"m-l-15 icon-btn\"><i class=\"icon-edit-3\"></i></span></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">产品名称</span><span id=\"name\" class=\"col-md-6 text-left\">" + (jade.escape((jade_interp = name) == null ? '' : jade_interp)) + "</span><span class=\"col-md-2 text-right text-muted small\">发行机构</span><span id=\"issueOrg\" class=\"col-md-2 text-left\">" + (jade.escape((jade_interp = issueOrg) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">投资周期</span><span id=\"period\" class=\"col-md-2 text-left\">" + (jade.escape((jade_interp = minPeriod) == null ? '' : jade_interp)) + "-" + (jade.escape((jade_interp = maxPeriod) == null ? '' : jade_interp)) + "" + (jade.escape((jade_interp = periodUnit) == null ? '' : jade_interp)) + "</span><span class=\"col-md-2 text-right text-muted small\">最低金额</span><span id=\"minAmount\" class=\"col-md-2 text-left\">" + (jade.escape((jade_interp = minAmount) == null ? '' : jade_interp)) + "</span><span class=\"col-md-2 text-right text-muted small\">总金额</span><span id=\"totalAmount\" class=\"col-md-2 text-left\">" + (jade.escape((jade_interp = totalAmount) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">产品种类</span><span id=\"type\" class=\"col-md-2 text-left\">" + (jade.escape((jade_interp = typeName) == null ? '' : jade_interp)) + "</span><span class=\"col-md-2 text-right text-muted small\">收益预期</span><span id=\"preExpectedEarning\" class=\"col-md-2 text-left\">" + (jade.escape((jade_interp = preExpectedEarning) == null ? '' : jade_interp)) + "</span><span class=\"col-md-2 text-right text-muted small\">创建日期</span><span class=\"col-md-2 text-left\">" + (jade.escape((jade_interp = format(ctime)) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">募集进度</span><div class=\"col-md-4\"><div style=\"height: 10px\" class=\"progress\"><div role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 70%;\" class=\"progress-bar progress-bar-success\"><span class=\"sr-only\">70% Complete (success)</span></div></div></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">产品进度</span><div class=\"col-md-4\"><div style=\"height: 10px\" class=\"progress\"><div role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 70%;\" class=\"progress-bar progress-bar-success\"><span class=\"sr-only\">70% Complete (success)</span></div></div></div><div class=\"col-md-2\"><p>剩余3期</p></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">备注</span><span id=\"comment\" class=\"col-md-10 text-left\">" + (jade.escape((jade_interp = comment) == null ? '' : jade_interp)) + "</span></div></div></div><div style=\"margin-top: 20px;\" class=\"row\"><div style=\"padding-bottom: 15px\" class=\"mm-box col-md-8 col-md-offset-2\"><div class=\"modal-header row\"><h4 style=\"display: inline-block;\" class=\"pan-title modal-title\">最新动态</h4><div class=\"pull-right\"><span id=\"addActivityBtn\" class=\"m-l-15 icon-btn\"><i class=\"icon-plus-6\"></i></span></div></div><div id=\"productTrendData\">");
// iterate trends
;(function(){
  var $$obj = trends;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var trend = $$obj[i];

buf.push("<div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">类型</span><span class=\"col-md-4 text-left\">" + (jade.escape((jade_interp = tags(trend.tags)) == null ? '' : jade_interp)) + "</span><span class=\"col-md-2 text-right text-muted small\">创建日期</span><span class=\"col-md-2 text-left\">" + (jade.escape((jade_interp = format(trend.ctime)) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><span class=\"col-md-8 col-md-push-2 text-left\">" + (jade.escape((jade_interp = trend.description) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div>");
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var trend = $$obj[i];

buf.push("<div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">类型</span><span class=\"col-md-4 text-left\">" + (jade.escape((jade_interp = tags(trend.tags)) == null ? '' : jade_interp)) + "</span><span class=\"col-md-2 text-right text-muted small\">创建日期</span><span class=\"col-md-2 text-left\">" + (jade.escape((jade_interp = format(trend.ctime)) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><span class=\"col-md-8 col-md-push-2 text-left\">" + (jade.escape((jade_interp = trend.description) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div>");
    }

  }
}).call(this);

buf.push("<div onclick=\"loadTrendsByPage();\" class=\"row m-t-10 text-center cust-record\"><a href=\"javascript:void(0);\" onclick=\"loadTrendsByPage();\" title=\"加载更多\"><i class=\"icon icon-angle-double-down\"></i></a></div></div><div id=\"productTrendPageBar\"></div></div></div><div style=\"margin-top: 20px; margin-bottom: 20px;\" class=\"row\"><div style=\"padding-bottom: 15px\" class=\"mm-box col-md-8 col-md-offset-2\"><div class=\"modal-header row\"><h4 style=\"display: inline-block;\" class=\"pan-title modal-title\">资料下发公告</h4><div class=\"pull-right\"><span id=\"addRefDataBtn\" class=\"m-l-15 icon-btn\"><i class=\"icon-plus-6\"></i></span></div></div><div id=\"productRefData\">");
// iterate refDatas
;(function(){
  var $$obj = refDatas;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var refData = $$obj[i];

buf.push("<div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">文件名</span><span class=\"col-md-2 text-left\">" + (jade.escape((jade_interp = refData.name) == null ? '' : jade_interp)) + "</span><span class=\"col-md-1 text-right text-muted small\">描述</span><span class=\"col-md-5 text-left\">" + (jade.escape((jade_interp = refData.description) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div>");
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var refData = $$obj[i];

buf.push("<div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">文件名</span><span class=\"col-md-2 text-left\">" + (jade.escape((jade_interp = refData.name) == null ? '' : jade_interp)) + "</span><span class=\"col-md-1 text-right text-muted small\">描述</span><span class=\"col-md-5 text-left\">" + (jade.escape((jade_interp = refData.description) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div>");
    }

  }
}).call(this);

buf.push("<div onclick=\"loadRefDataByPage();\" class=\"row m-t-10 text-center cust-record\"><a href=\"javascript:void(0);\" onclick=\"loadRefDataByPage();\" title=\"加载更多\"><i class=\"icon icon-angle-double-down\"></i></a></div></div><div id=\"productRefDataPageBar\"></div></div></div><div style=\"margin-top: 20px;\" class=\"row\"><div style=\"padding-bottom: 15px\" class=\"mm-box col-md-8 col-md-offset-2\"><div class=\"modal-header row\"><h4 style=\"display: inline-block;\" class=\"pan-title modal-title\">产品资料</h4><div class=\"pull-right\"><span id=\"addProMeterialBtn\" class=\"m-l-15 icon-btn\"><i class=\"icon-upload-5\"></i></span></div></div><div id=\"productAttachmentData\">");
// iterate attachments
;(function(){
  var $$obj = attachments;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var attachment = $$obj[i];

// iterate attachment.privilege
;(function(){
  var $$obj = attachment.privilege;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var privilege = $$obj[$index];

if ((privilege.userPosition == user.position))
{
buf.push("<div class=\"row m-t-10\"><span class=\"col-md-10 text-left\">" + (jade.escape((jade_interp = attachment.name) == null ? '' : jade_interp)) + "</span>");
if ( privilege.download)
{
buf.push("<span class=\"col-md-2 text-left\"><span class=\"m-l-15 icon-btn\"><i" + (jade.attr("id", '' + (attachment._id) + '', true, false)) + " class=\"icon-attach-1\"></i></span></span>");
}
buf.push("</div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var privilege = $$obj[$index];

if ((privilege.userPosition == user.position))
{
buf.push("<div class=\"row m-t-10\"><span class=\"col-md-10 text-left\">" + (jade.escape((jade_interp = attachment.name) == null ? '' : jade_interp)) + "</span>");
if ( privilege.download)
{
buf.push("<span class=\"col-md-2 text-left\"><span class=\"m-l-15 icon-btn\"><i" + (jade.attr("id", '' + (attachment._id) + '', true, false)) + " class=\"icon-attach-1\"></i></span></span>");
}
buf.push("</div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div>");
}
    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var attachment = $$obj[i];

// iterate attachment.privilege
;(function(){
  var $$obj = attachment.privilege;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var privilege = $$obj[$index];

if ((privilege.userPosition == user.position))
{
buf.push("<div class=\"row m-t-10\"><span class=\"col-md-10 text-left\">" + (jade.escape((jade_interp = attachment.name) == null ? '' : jade_interp)) + "</span>");
if ( privilege.download)
{
buf.push("<span class=\"col-md-2 text-left\"><span class=\"m-l-15 icon-btn\"><i" + (jade.attr("id", '' + (attachment._id) + '', true, false)) + " class=\"icon-attach-1\"></i></span></span>");
}
buf.push("</div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var privilege = $$obj[$index];

if ((privilege.userPosition == user.position))
{
buf.push("<div class=\"row m-t-10\"><span class=\"col-md-10 text-left\">" + (jade.escape((jade_interp = attachment.name) == null ? '' : jade_interp)) + "</span>");
if ( privilege.download)
{
buf.push("<span class=\"col-md-2 text-left\"><span class=\"m-l-15 icon-btn\"><i" + (jade.attr("id", '' + (attachment._id) + '', true, false)) + " class=\"icon-attach-1\"></i></span></span>");
}
buf.push("</div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div>");
}
    }

  }
}).call(this);

    }

  }
}).call(this);

buf.push("<div onclick=\"loadAttachmentByPage();\" class=\"row m-t-10 text-center cust-record\"><a href=\"javascript:void(0);\" onclick=\"loadAttachmentByPage();\" title=\"加载更多\"><i class=\"icon icon-angle-double-down\"></i></a></div></div><div id=\"productAttachmentPageBar\"></div></div></div><div style=\"margin-top: 20px; margin-bottom: 30px;\" class=\"row\"><div style=\"padding-bottom: 15px\" class=\"mm-box col-md-8 col-md-offset-2\"><div class=\"modal-header row\"><h4 style=\"display: inline-block;\" class=\"pan-title modal-title\">成交记录</h4></div><div id=\"order-report\" style=\"height: 400px;width:940px;\" class=\"row m-t-10\"></div><div style=\"margin-top: 20px;\" class=\"row\"><div class=\"col-md-12 col-sm-12 col-lg-12\"><table class=\"table mm-box col-md-10\"><tr class=\"th-inverse\"><th class=\"col-sm-2\"> Sales</th><th class=\"col-sm-2\"> 所属团队</th><th class=\"col-sm-2\"> 金额(万元)</th><th class=\"col-sm-2\"> 客户名称</th><th class=\"col-sm-2\"> 订单状态</th></tr>");
for (var x = 0; x < 10; x++)
{
buf.push("<tr class=\"cust-record\"><td> 朱立哲</td><td> Kevin团队</td><td> 5000</td><td> xxx</td><td> 已到账</td></tr>");
}
buf.push("</table></div></div></div></div><div id=\"edit\" tabindex=\"-1\" data-width=\"760\" style=\"display: none;\" class=\"modal fade\"><form id=\"formModify\" action=\"/crm/product/modify\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><div class=\"row\"><div class=\"col-md-3\"><h4 class=\"modal-title\">编辑信息</h4></div></div></div><div class=\"modal-body\"><div style=\"margin-top:20px\" class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">名称</span><div class=\"col-md-3 text-right\"><input type=\"hidden\" id=\"_id\" name=\"_id\"" + (jade.attr("value", '' + (_id) + '', true, false)) + "/><input type=\"text\" id=\"name\" name=\"name\"" + (jade.attr("value", '' + (name) + '', true, false)) + " class=\"holo required\"/></div><span class=\"col-md-2 text-right text-muted small\">发行机构</span><div class=\"col-md-3 text-right\"><input type=\"text\" id=\"issueOrg\" name=\"issueOrg\"" + (jade.attr("value", '' + (issueOrg) + '', true, false)) + " class=\"holo required\"/></div></div><div style=\"margin-top:20px\" class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">收益预期</span><div class=\"col-md-3 text-right\"><input type=\"text\" id=\"preExpectedEarning\" name=\"preExpectedEarning\"" + (jade.attr("value", '' + (preExpectedEarning) + '', true, false)) + " class=\"holo required\"/></div><span class=\"col-md-2 text-right text-muted small\">总金额</span><div class=\"col-md-3 text-left\"><input type=\"text\" id=\"totalAmount\" name=\"totalAmount\"" + (jade.attr("value", '' + (totalAmount) + '', true, false)) + " class=\"holo required digits\"/></div></div><div style=\"margin-top:20px\" class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">管理人</span><div class=\"col-md-3 text-left\"><input type=\"text\" id=\"manager\" name=\"manager\"" + (jade.attr("value", '' + (manager) + '', true, false)) + " class=\"holo required\"/></div><span class=\"col-md-2 text-right text-muted small\">最低金额</span><div class=\"col-md-3 text-left\"><input type=\"text\" id=\"minAmount\" name=\"minAmount\"" + (jade.attr("value", '' + (minAmount) + '', true, false)) + " class=\"holo required\"/></div><div class=\"col-md-2 text-left\"><h6 class=\"text-muted\">万元</h6></div></div><div style=\"margin-top:20px\" class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">投资周期</span><div class=\"col-md-2 text-left\"><input type=\"text\" id=\"minPeriod\" name=\"minPeriod\"" + (jade.attr("value", '' + (minPeriod) + '', true, false)) + " class=\"holo required digits\"/></div><div class=\"col-md-1 text-left\"><h6 class=\"text-muted\">到</h6></div><div class=\"col-md-2 text-left\"><input type=\"text\" id=\"maxPeriod\" name=\"maxPeriod\"" + (jade.attr("value", '' + (maxPeriod) + '', true, false)) + " class=\"holo required digits legalNumber\"/></div><div class=\"col-md-1 text-left\"><h6 class=\"text-muted\">月</h6></div></div><div style=\"margin-top:20px\" class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">类型</span><div class=\"col-md-3 text-left\"><div data-toggle=\"buttons-radio\" id=\"type\" name=\"type\" class=\"btn-group\">");
// iterate typeList
;(function(){
  var $$obj = typeList;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var entity = $$obj[i];

if ((entity.key == type))
{
buf.push("<button type=\"button\"" + (jade.attr("value", '' + (entity.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info active\">" + (jade.escape((jade_interp = entity.name) == null ? '' : jade_interp)) + "</button>");
}
else
{
buf.push("<button type=\"button\"" + (jade.attr("value", '' + (entity.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info\">" + (jade.escape((jade_interp = entity.name) == null ? '' : jade_interp)) + "</button>");
}
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var entity = $$obj[i];

if ((entity.key == type))
{
buf.push("<button type=\"button\"" + (jade.attr("value", '' + (entity.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info active\">" + (jade.escape((jade_interp = entity.name) == null ? '' : jade_interp)) + "</button>");
}
else
{
buf.push("<button type=\"button\"" + (jade.attr("value", '' + (entity.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info\">" + (jade.escape((jade_interp = entity.name) == null ? '' : jade_interp)) + "</button>");
}
    }

  }
}).call(this);

buf.push("</div></div><span class=\"col-md-2 text-right text-muted small\">状态</span><div class=\"col-md-3 text-left\"><div data-toggle=\"buttons-radio\" id=\"status\" name=\"status\" class=\"btn-group\">");
// iterate statusList
;(function(){
  var $$obj = statusList;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var entity = $$obj[$index];

if ((entity.key == status))
{
buf.push("<button type=\"button\"" + (jade.attr("value", '' + (entity.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info active\">" + (jade.escape((jade_interp = entity.name) == null ? '' : jade_interp)) + "</button>");
}
else
{
buf.push("<button type=\"button\"" + (jade.attr("value", '' + (entity.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info\">" + (jade.escape((jade_interp = entity.name) == null ? '' : jade_interp)) + "</button>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var entity = $$obj[$index];

if ((entity.key == status))
{
buf.push("<button type=\"button\"" + (jade.attr("value", '' + (entity.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info active\">" + (jade.escape((jade_interp = entity.name) == null ? '' : jade_interp)) + "</button>");
}
else
{
buf.push("<button type=\"button\"" + (jade.attr("value", '' + (entity.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info\">" + (jade.escape((jade_interp = entity.name) == null ? '' : jade_interp)) + "</button>");
}
    }

  }
}).call(this);

buf.push("</div></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">备注</span><div class=\"col-md-8\"><input type=\"text\" name=\"comment\" id=\"comment\"" + (jade.attr("value", '' + (comment) + '', true, false)) + " class=\"holo\"/><input type=\"hidden\" id=\"periodUnit\" name=\"periodUnit\" value=\"月\" class=\"holo\"/></div></div></div><div class=\"modal-footer\"><div class=\"text-center\"><button style=\"margin-right: 40px;\" type=\"button\" class=\"cancel btn btn-lg btn-default\">取消</button><button id=\"ok\" type=\"submit\" class=\"btn btn-lg btn-success\">确定</button></div></div></form></div><div id=\"addActivity\" tabindex=\"-1\" data-width=\"760\" style=\"display: none;\" class=\"modal fade\"><form id=\"formCreateTrend\" action=\"/crm/productTrend/create\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><div class=\"row\"><div class=\"col-md-3\"><h4 class=\"modal-title\">添加动态</h4></div></div></div><div class=\"modal-body\"><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">类型</span><div class=\"col-md-8 text-left\"><input type=\"hidden\" name=\"productId\"" + (jade.attr("value", '' + (_id) + '', true, false)) + "/><input type=\"text\" placeholder=\"new tag\" name=\"tags\" data-role=\"tagsinput\" value=\"外企高管,固定收益\" class=\"holo required\"/></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">描述</span><div class=\"col-md-8 text-left\"><input type=\"text\" style=\"width: 100%;\" name=\"description\" class=\"holo required\"/></div></div></div><div class=\"modal-footer\"><div class=\"text-center\"><button style=\"margin-right: 40px;\" type=\"button\" class=\"cancel btn btn-lg btn-default\">取消</button><button id=\"ok\" type=\"submit\" class=\"btn btn-lg btn-success\">确定</button></div></div></form></div><div id=\"addNotice\" tabindex=\"-1\" data-width=\"760\" style=\"display: none;\" class=\"modal fade\"><form id=\"formCreateRefData\" action=\"/crm/productRefData/create\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><div class=\"row\"><div class=\"col-md-3\"><h4 class=\"modal-title\">添加资料下发提醒</h4></div></div></div><div class=\"modal-body\"><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">文件名</span><div class=\"col-md-4 text-left\"><input type=\"hidden\" name=\"productId\"" + (jade.attr("value", '' + (_id) + '', true, false)) + "/><input type=\"text\" style=\"width: 100%;\" name=\"name\" class=\"holo required\"/></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">描述</span><div class=\"col-md-8 text-left\"><input type=\"text\" style=\"width: 100%;\" name=\"description\" class=\"holo required\"/></div></div></div><div class=\"modal-footer\"><div class=\"text-center\"><button style=\"margin-right: 40px;\" type=\"button\" class=\"cancel btn btn-lg btn-default\">取消</button><button id=\"ok\" type=\"submit\" class=\"btn btn-lg btn-success\">确定</button></div></div></form></div><!--#addCusEarnings.modal.fade(tabindex='-1', data-width='760', style='display: none;')--><!--    .modal-header--><!--        button.close(type='button', data-dismiss='modal', aria-hidden='true') &times;--><!--        .row--><!--            .col-md-3--><!--                h4.modal-title 添加客户收益--><!--    .modal-body--><!--        .row.m-t-10--><!--            span.col-md-2.text-right.text-muted.small 客户--><!--            .col-md-2.text-right--><!--                select(data-width='150px',class='selectpicker')--><!--                    option(value='1') 100万--><!--                    option(value='2') 300万--><!--                    option(value='3') 500万--><!--                    option(value='4') 1000万--><!--                    option(value='4') 5000万--><!--        .row.m-t-10--><!--            span.col-md-2.text-right.text-muted.small 期次--><!--            .col-md-2.text-left--><!--                select(data-width='150px',class='selectpicker')--><!--                    option(value='1') Q1--><!--                    option(value='2') Q2--><!--                    option(value='3') Q3--><!--                    option(value='4') Q4--><!--            span.col-md-2.text-right.text-muted.small 收益--><!--            .col-md-2.text-left--><!--                input.input-sm.holo(type='text')--><!--            .col-md-1.text-left--><!--                h6.text-muted %--><!--    .modal-footer--><!--        .text-center--><!--            button.cancel.btn.btn-lg.btn-default(style='margin-right: 40px;', data-dismiss='modal') 取消--><!--            button#ok.btn.btn-lg.btn-success 确定--><div id=\"addProMaterial\" tabindex=\"-1\" data-width=\"760\" style=\"display: none;\" class=\"modal fade\"><form id=\"formCreateAttachment\" action=\"/crm/productAttachment/create\" enctype=\"multipart/form-data\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><div class=\"row\"><div class=\"col-md-3\"><h4 class=\"modal-title\">添加产品资料</h4></div></div></div><div class=\"modal-body\"><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">附件</span><div class=\"col-md-8 text-left\"><input type=\"file\" name=\"attach\" id=\"attach\"/></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">文件名</span><div class=\"col-md-8 text-right\"><input type=\"hidden\" name=\"productId\"" + (jade.attr("value", '' + (_id) + '', true, false)) + " class=\"holo\"/><input type=\"text\" name=\"name\" id=\"name\" class=\"holo required\"/></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">描述</span><div class=\"col-md-8 text-right\"><input type=\"text\" name=\"description\" class=\"holo\"/></div></div><div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">权限</span><div class=\"col-md-8 text-left\"><table class=\"table table-bordered mm-box col-md-10\"><tr><th class=\"col-sm-4\"> 岗位</th><th class=\"col-sm-4\"> 查看</th><th class=\"col-sm-4\"> 下载</th></tr><tr class=\"cust-record\"><td> RM</td><td><input type=\"checkbox\" checked=\"checked\" name=\"rmRead\" value=\"true\"/></td><td><input type=\"checkbox\" name=\"rmDownload\" value=\"true\"/></td></tr><tr class=\"cust-record\"><td> 顾问</td><td><input type=\"checkbox\" checked=\"checked\" name=\"conRead\" value=\"true\"/></td><td><input type=\"checkbox\" name=\"conDownload\" value=\"true\"/></td></tr></table></div></div></div><div class=\"modal-footer\"><div class=\"text-center\"><button style=\"margin-right: 40px;\" data-dismiss=\"modal\" type=\"button\" class=\"cancel btn btn-lg btn-default\">取消</button><button id=\"ok\" type=\"submit\" class=\"btn btn-lg btn-success\">确定</button></div></div></form></div><link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-tagsinput.css\"/><script src=\"/javascripts/bootstrap-tagsinput.js\"></script><script src=\"/javascripts/jquery.fileupload.js\"></script><script src=\"/javascripts/jquery.iframe-transport.js\"></script><script src=\"/javascripts/jquery.ui.widget.js\"></script><script>var trend = 0, refData = 0, attachment = 0;\nvar productTrendPagination = new pup.Pagination({\n    templateKey : \"productTrend.dataList\"\n});\n//跳转到第一页\nfunction loadTrendsByPage() {\n    productTrendPagination.setSort({ctime: -1}).first();\n    trend = 1;\n}\n\nvar productRefDataPagination = new pup.Pagination({\n    templateKey : \"productRefData.dataList\"\n});\n//跳转到第一页\nfunction loadRefDataByPage() {\n    productRefDataPagination.setSort({ctime: -1}).first();\n    refData = 1;\n}\n\nvar productAttachmentPagination = new pup.Pagination({\n    templateKey : \"productAttachment.dataList\"\n});\n//跳转到第一页\nfunction loadAttachmentByPage() {\n    productAttachmentPagination.setSort({ctime: -1}).first();\n    attachment = 1;\n}\n\n$('.icon-attach-1').click(function() {\n    var url = \"/crm/productAttachment/download\";\n    location.href = url + \"?id=\" + $(this).attr('id');\n});\n\n$('.selectpicker').selectpicker();\n$(\":file\").filestyle({\n    'buttonText' : '选择文件',\n    'classButton' : 'btn btn-primary',\n    'classIcon' : 'icon-plus-6'\n});\n$('#mu-apps').click(function() {\n    $('#apps').show();\n    $('#message').hide();\n});\n$('#mu-msg').click(function() {\n    $('#message').show();\n    $('#apps').hide();\n});\n\n$('.app-box').click(function() {\n    var path = $(this).data('href');\n    window.open(path);\n});\n$('.f-task').click(function() {\n    window.open('/crm/audit/detail');\n});\n$('#muAddActivity').click(function() {\n    openTrendModel();\n});\n$('#editBtn').click(function() {\n    openEditModel();\n});\n$('#muAddCusEarnings').click(function() {\n    $('#addCusEarnings').modal('show');\n});\n$('#muAddNotice').click(function() {\n    openRefDataModel();\n});\n$('#addRefDataBtn').click(function() {\n    openRefDataModel();\n});\n$('#addActivityBtn').click(function() {\n    openTrendModel();\n});\n$('#addProMeterialBtn').click(function() {\n    openAttachmentModel();\n});\n$('#muAddMaterial').click(function() {\n    openAttachmentModel();\n});\n$('.cancel, .close').click(function() {\n    $('.popover').each( function() {\n        $(this).hide();\n    });\n    $('.modal').modal('hide');\n});\n$('#order-report').highcharts({\n    chart: {\n        plotBackgroundColor: null,\n        plotBorderWidth: null,\n        plotShadow: false\n    },\n    title: {\n        text: '团队销售业绩统计'\n    },\n    tooltip: {\n        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'\n    },\n    plotOptions: {\n        pie: {\n            allowPointSelect: true,\n            cursor: 'pointer',\n            dataLabels: {\n                enabled: true,\n                color: '#000000',\n                connectorColor: '#000000',\n                format: '<b>{point.name}</b>: {point.percentage:.1f} %'\n            }\n        }\n    },\n    series: [{\n        type: 'pie',\n        name: '销售额占比',\n        data: [\n            ['产品市场部',   10.0],\n            ['Sally团队',   20.0],\n            {\n                name: 'Kevin团队',\n                y: 20.0,\n                sliced: true,\n                selected: true\n            },\n            ['Lafa团队',    20.0],\n            ['深圳分公司',   10.0],\n            ['海宁路总部',   20.0]\n        ]\n    }]\n});\n\njQuery.validator.addMethod(\"legalNumber\", function(value, element) {\n    var maxPeriod = $(element).val();\n    var minPeriod = $('#formModify #minPeriod').val();\n    return this.optional(element) || (maxPeriod >= minPeriod);\n    }, \"请填写合法字段\");\n    \n$('#muEdit').click(function() {\n    openEditModel();\n});\n\nfunction openEditModel() {\n    $('#edit').modal('show');\n    $('#formModify').validate_popover({onsubmit: false, popoverPosition: 'top'});\n    $(\"#edit\").on(\"scroll\", function() { $.validator.reposition(); });\n    $('#edit').on('hide.bs.modal', function (e) {\n        $('.popover').each( function() {\n            $(this).hide();\n        });\n    });\n    $(window).resize(function() {\n        $.validator.reposition();\n    });\n}\n\nfunction openTrendModel() {\n    $('#addActivity').modal('show');\n    $('#formCreateTrend').validate_popover({onsubmit: false, popoverPosition: 'top'});\n    $(\"#addActivity\").on(\"scroll\", function() { $.validator.reposition(); });\n    $('#addActivity').on('hide.bs.modal', function (e) {\n        $('.popover').each( function() {\n            $(this).hide();\n        });\n    });\n    $(window).resize(function() {\n        $.validator.reposition();\n    });\n}\n\nfunction openRefDataModel() {\n    $('#addNotice').modal('show');\n    $('#formCreateRefData').validate_popover({onsubmit: false, popoverPosition: 'top'});\n    $(\"#addNotice\").on(\"scroll\", function() { $.validator.reposition(); });\n    $('#addNotice').on('hide.bs.modal', function (e) {\n        $('.popover').each( function() {\n            $(this).hide();\n        });\n    });\n    $(window).resize(function() {\n        $.validator.reposition();\n    });\n}\n\nfunction openAttachmentModel() {\n    $('#addProMaterial').modal('show');\n    $('#formCreateAttachment').validate_popover({onsubmit: false, popoverPosition: 'top'});\n    $(\"#addProMaterial\").on(\"scroll\", function() { $.validator.reposition(); });\n    $('#addProMaterial').on('hide.bs.modal', function (e) {\n        $('.popover').each( function() {\n            $(this).hide();\n        });\n    });\n    $(window).resize(function() {\n        $.validator.reposition();\n    });\n}\n\n$('#formCreateTrend').submit(function(ev) {\n    ev.preventDefault();\n    var serializeForm = $('#formCreateTrend').serialize();\n    if($('#formCreateTrend').validate().form()) {\n        var url = $(this).attr('action');\n        $.ajax({\n            type: \"POST\",\n            url: url,\n            dataType: 'json',\n            data: serializeForm,\n            success: function (data) {\n                if(data.msg.type == 'success') {\n                    $('#addActivity').modal('hide');\n                    $('#formCreateTrend')[0].reset();\n                    if(trend == 0) {\n                        pup.template.renderTemplateByKey(\"productTrend.latestList\", {id : $(\"#formModify #_id\").val()});\n                    } else {\n                        loadTrendsByPage();\n                    }\n                }\n                toast(data.msg);\n            }\n        });\n    }\n    return false;\n});\n\n$('#formCreateRefData').submit(function(ev) {\n    ev.preventDefault();\n    var serializeForm = $('#formCreateRefData').serialize();\n    if($('#formCreateRefData').validate().form()) {\n        var url = $(this).attr('action');\n        $.ajax({\n            type: \"POST\",\n            url: url,\n            dataType: 'json',\n            data: serializeForm,\n            success: function (data) {\n                if(data.msg.type == 'success') {\n                    $('#addNotice').modal('hide');\n                    $('#formCreateRefData')[0].reset();\n                    if(refData == 0) {\n                        pup.template.renderTemplateByKey(\"productRefData.latestList\", {id : $(\"#formModify #_id\").val()});\n                    } else {\n                        loadRefDataByPage();\n                    }\n                }\n                toast(data.msg);\n            }\n        });\n    }\n    return false;\n});\n\n$('#formCreateAttachment').submit(function(ev) {\n    if($(this).validate().form()) {\n        if($('#attach').next().children().first().val() == \"\") {\n            toast({type:'error', body:'请选择文件'});\n        }\n    }\n    return false;\n});\n\n$('#formCreateAttachment').fileupload({\n    formData: {},\n    validation: {\n        allowedExtensions: ['xlsl', 'jpg', 'gif', 'png']\n    },\n    add : function(e, data) {\n        var name = data.files[0].name;\n        name = name.substring(0, name.lastIndexOf('.'));\n        $('#formCreateAttachment #name').val(name);\n        $('#formCreateAttachment').submit(function(ev) {\n            if($(this).validate().form()) {\n                data.submit();\n            }\n            return false;\n        });\n    },\n    done : function(e, data) {\n        if(data.result.msg.type == 'success') {\n            $('#addProMaterial').modal('hide');\n            $('#formCreateAttachment')[0].reset();\n            if(attachment == 0) {\n                pup.template.renderTemplateByKey(\"productAttachment.dataList\", {id : $(\"#formModify #_id\").val()});\n            } else {\n                loadAttachmentByPage();\n            }\n        }\n        toast(data.result.msg);\n    }\n});\n\n$('#formCreateAttachment').bind('fileuploadsubmit', function (e, data) {\n    data.formData = $('#formCreateAttachment').serializeObject();\n});\n\n$('#formModify').submit(function(ev) {\n    ev.preventDefault();\n    var type = $(\"#formModify #type > .btn.active\").val();\n    var status = $(\"#formModify #status > .btn.active\").val();\n    var serializeForm = $('#formModify').serialize();\n    var allForm = serializeForm + '&' + 'status='+status+'&type=' + type ;\n    if($('#formModify').validate().form()) {\n        var url = $(this).attr('action');\n        $.ajax({\n            type: \"POST\",\n            url: url,\n            dataType: 'json',\n            data: allForm,\n            success: function (data) {\n                if(data.msg.type == 'success') {\n                    $('#edit').modal('hide');\n                    var product = data.msg.attach;\n                    $('#prodInfo #name').html(product.name);\n                    $('#prodInfo #issueOrg').html(product.issueOrg);\n                    $('#prodInfo #period').html(product.minPeriod + '-' + product.maxPeriod + product.periodUnit);\n                    $('#prodInfo #preExpectedEarning').html(product.preExpectedEarning);\n                    $('#prodInfo #minAmount').html(product.minAmount);\n                    $('#prodInfo #maxAmount').html(product.maxAmount);\n                    $('#prodInfo #type').html(product.typeName);\n                    $('#prodInfo #comment').html(product.comment);\n                }\n                toast(data.msg);\n            }\n        });\n    }\n    return false;\n});\n\npup.showView('fsl-2');\n</script>");}("id" in locals_for_with?locals_for_with.id:typeof id!=="undefined"?id:undefined,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"issueOrg" in locals_for_with?locals_for_with.issueOrg:typeof issueOrg!=="undefined"?issueOrg:undefined,"minPeriod" in locals_for_with?locals_for_with.minPeriod:typeof minPeriod!=="undefined"?minPeriod:undefined,"maxPeriod" in locals_for_with?locals_for_with.maxPeriod:typeof maxPeriod!=="undefined"?maxPeriod:undefined,"periodUnit" in locals_for_with?locals_for_with.periodUnit:typeof periodUnit!=="undefined"?periodUnit:undefined,"minAmount" in locals_for_with?locals_for_with.minAmount:typeof minAmount!=="undefined"?minAmount:undefined,"totalAmount" in locals_for_with?locals_for_with.totalAmount:typeof totalAmount!=="undefined"?totalAmount:undefined,"typeName" in locals_for_with?locals_for_with.typeName:typeof typeName!=="undefined"?typeName:undefined,"preExpectedEarning" in locals_for_with?locals_for_with.preExpectedEarning:typeof preExpectedEarning!=="undefined"?preExpectedEarning:undefined,"format" in locals_for_with?locals_for_with.format:typeof format!=="undefined"?format:undefined,"ctime" in locals_for_with?locals_for_with.ctime:typeof ctime!=="undefined"?ctime:undefined,"comment" in locals_for_with?locals_for_with.comment:typeof comment!=="undefined"?comment:undefined,"trends" in locals_for_with?locals_for_with.trends:typeof trends!=="undefined"?trends:undefined,"tags" in locals_for_with?locals_for_with.tags:typeof tags!=="undefined"?tags:undefined,"refDatas" in locals_for_with?locals_for_with.refDatas:typeof refDatas!=="undefined"?refDatas:undefined,"attachments" in locals_for_with?locals_for_with.attachments:typeof attachments!=="undefined"?attachments:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined,"_id" in locals_for_with?locals_for_with._id:typeof _id!=="undefined"?_id:undefined,"manager" in locals_for_with?locals_for_with.manager:typeof manager!=="undefined"?manager:undefined,"typeList" in locals_for_with?locals_for_with.typeList:typeof typeList!=="undefined"?typeList:undefined,"type" in locals_for_with?locals_for_with.type:typeof type!=="undefined"?type:undefined,"statusList" in locals_for_with?locals_for_with.statusList:typeof statusList!=="undefined"?statusList:undefined,"status" in locals_for_with?locals_for_with.status:typeof status!=="undefined"?status:undefined));;return buf.join("");
}
function crm_product_list(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (statusList, typeList) {
buf.push("<div class=\"sidebar sidebar-left mm-box\"><div id=\"muCreate\" class=\"sidemenu\"><i class=\"icon icon-plus-6\"></i>添加</div></div><div class=\"mm-box col-md-8 col-md-offset-2 form-horizontal m-b-20\"><form id=\"query\" onsubmit=\"return false;\"><div class=\"form-group m-t-10\"><label class=\"control-label col-md-2\">关键字</label><div class=\"col-md-10\"><input type=\"text\" style=\"display: inline-block;width: 300px;margin-right:10px;\" name=\"keyword\" id=\"keyword\" placeholder=\"产品或发行方名称关键字\" class=\"holo required\"/><button id=\"queryQuick\" type=\"submit\" class=\"btn btn-info\"><i style=\"margin-right: 5px;\" class=\"icon-search-8\"></i><span>快速查找</span></button></div></div><div class=\"form-group\"><label class=\"control-label col-md-2\">状态</label><div style=\"margin-top:5px;\" class=\"col-md-10\"><div id=\"status\" data-toggle=\"buttons-radio\" class=\"btn-group\"><button value=\"\" class=\"btn btn-sm btn-light-info active\">全部</button>");
// iterate statusList
;(function(){
  var $$obj = statusList;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var status = $$obj[$index];

buf.push("<button" + (jade.attr("value", '' + (status.key) + '', true, false)) + " class=\"btn btn-sm btn-light-info\"> " + (jade.escape((jade_interp = status.name) == null ? '' : jade_interp)) + "</button>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var status = $$obj[$index];

buf.push("<button" + (jade.attr("value", '' + (status.key) + '', true, false)) + " class=\"btn btn-sm btn-light-info\"> " + (jade.escape((jade_interp = status.name) == null ? '' : jade_interp)) + "</button>");
    }

  }
}).call(this);

buf.push("</div></div></div><div class=\"form-group\"><label class=\"control-label col-md-2\">类型</label><div style=\"margin-top:5px;\" class=\"col-md-10\"><div id=\"type\" class=\"labelRadio\"><input name=\"type\" type=\"radio\" value=\"\" data-name=\"全部\" checked=\"checked\"/>");
// iterate typeList
;(function(){
  var $$obj = typeList;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var type = $$obj[$index];

buf.push("<input name=\"type\" type=\"radio\"" + (jade.attr("value", '' + (type.key) + '', true, false)) + (jade.attr("data-name", "" + (type.name) + "", true, false)) + "/>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var type = $$obj[$index];

buf.push("<input name=\"type\" type=\"radio\"" + (jade.attr("value", '' + (type.key) + '', true, false)) + (jade.attr("data-name", "" + (type.name) + "", true, false)) + "/>");
    }

  }
}).call(this);

buf.push("</div></div></div></form></div><!--#dlg-add.modal.fade(tabindex='-1', data-width='760', style='display: none;')--><!--    .modal-header--><!--        button.close(type='button', data-dismiss='modal', aria-hidden='true') &times;--><!--        .row--><!--            .col-md-3--><!--                h4.modal-title 添加产品--><!--    .modal-body--><!--        .form-horizontal--><!--            .row.m-t-10--><!--                label.col-sm-2.control-label(for='name') 产品名称--><!--                .col-sm-4--><!--                    input.holo(type='text',id='name')--><!--                label.col-sm-2.control-label(for='amount') 募集金额--><!--                .col-sm-3--><!--                    input.holo(type='text',id='amount')--><!--                .col-sm-1--><!--                    span.text-muted.small 万元--><!----><!--            .row.m-t-10--><!--                label.col-sm-2.control-label(for='cycle') 周期--><!--                .col-sm-3--><!--                    input.holo(type='text',id='cycle')--><!--                .col-sm-1--><!--                    span.text-muted.small 月--><!--                label.col-sm-2.control-label(for='minConsume') 起购额--><!--                .col-sm-3--><!--                    input.holo(type='text',id='minConsume')--><!--                .col-sm-1--><!--                    span.text-muted.small 万元--><!--            .row.m-t-10--><!--                label.col-sm-2.control-label(for='cycle') 类型--><!--                .col-sm-4--><!--                    .btn-group--><!--                        button.btn.btn-sm.btn-default  固收--><!--                        button.btn.btn-sm.btn-default  PE--><!--                label.col-sm-2.control-label(for='cycle') 状态--><!--                .col-sm-4--><!--                    .btn-group--><!--                        button.btn.btn-sm.btn-default  在售--><!--                        button.btn.btn-sm.btn-default  活跃--><!--                        button.btn.btn-sm.btn-default  已退出--><!--        input.holo.m-t-20(type='text', style='width: 100%', placeholder='备注')--><!--    .modal-footer--><!--        .text-center--><!--            button.btn.btn-default 取消--><!--            button.btn.btn-primary.m-l-15 保存--><div style=\"margin-top: 20px;\" class=\"row\"><div id=\"prodListData\" class=\"list-container\"></div></div><div id=\"productPageBar\" class=\"list-container\"></div><div id=\"create\" tabindex=\"-1\" data-width=\"760\" style=\"display: none;\" class=\"modal fade\"><form id=\"formCreate\" action=\"/crm/product/create\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><div class=\"row\"><div class=\"col-md-3\"><h4 class=\"modal-title\">添加产品</h4></div></div></div><div class=\"modal-body\"><div class=\"row\"><div style=\"display: none;\" class=\"alert alert-success\"></div></div><div style=\"margin-top:20px\" class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">名称</span><div class=\"col-md-3 text-right\"><input type=\"text\" id=\"name\" name=\"name\" class=\"holo required\"/></div><span class=\"col-md-2 text-right text-muted small\">发行机构</span><div class=\"col-md-3 text-right\"><input type=\"text\" id=\"issueOrg\" name=\"issueOrg\" class=\"holo required\"/></div></div><div style=\"margin-top:20px\" class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">收益预期</span><div class=\"col-md-3 text-right\"><input type=\"text\" id=\"preExpectedEarning\" name=\"preExpectedEarning\" class=\"holo required\"/></div><span class=\"col-md-2 text-right text-muted small\">总金额</span><div class=\"col-md-3 text-left\"><input type=\"text\" id=\"totalAmount\" name=\"totalAmount\" class=\"holo required digits\"/></div></div><div style=\"margin-top:20px\" class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">管理人</span><div class=\"col-md-3 text-left\"><input type=\"text\" id=\"manager\" name=\"manager\" class=\"holo required\"/></div><span class=\"col-md-2 text-right text-muted small\">最低金额</span><div class=\"col-md-3 text-left\"><input type=\"text\" id=\"minAmount\" name=\"minAmount\" class=\"holo required\"/></div><div class=\"col-md-2 text-left\"><h6 class=\"text-muted\">万元</h6></div></div><div style=\"margin-top:20px\" class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">投资周期</span><div class=\"col-md-2 text-left\"><input type=\"text\" id=\"minPeriod\" name=\"minPeriod\" class=\"holo required digits\"/></div><div class=\"col-md-1 text-left\"><h6 class=\"text-muted\">到</h6></div><div class=\"col-md-2 text-left\"><input type=\"text\" id=\"maxPeriod\" name=\"maxPeriod\" class=\"holo required digits legalNumber\"/></div><div class=\"col-md-1 text-left\"><h6 class=\"text-muted\">月</h6></div></div><div style=\"margin-top:20px\" class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">类型</span><div class=\"col-md-8 text-left\"><div data-toggle=\"buttons-radio\" id=\"type\" name=\"type\" class=\"btn-group\">");
// iterate typeList
;(function(){
  var $$obj = typeList;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var type = $$obj[i];

if ((i == 0))
{
buf.push("<button type=\"button\"" + (jade.attr("value", '' + (type.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info active\">" + (jade.escape((jade_interp = type.name) == null ? '' : jade_interp)) + "</button>");
}
else
{
buf.push("<button type=\"button\"" + (jade.attr("value", '' + (type.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info\">" + (jade.escape((jade_interp = type.name) == null ? '' : jade_interp)) + "</button>");
}
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var type = $$obj[i];

if ((i == 0))
{
buf.push("<button type=\"button\"" + (jade.attr("value", '' + (type.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info active\">" + (jade.escape((jade_interp = type.name) == null ? '' : jade_interp)) + "</button>");
}
else
{
buf.push("<button type=\"button\"" + (jade.attr("value", '' + (type.key) + '', true, false)) + " class=\"btn-sm btn btn-light-info\">" + (jade.escape((jade_interp = type.name) == null ? '' : jade_interp)) + "</button>");
}
    }

  }
}).call(this);

buf.push("</div></div></div><div style=\"margin-top:30px\" class=\"row\"><div class=\"col-md-10 col-md-offset-1\"><input type=\"text\" style=\"width: 100%;\" placeholder=\"备注\" id=\"comment\" name=\"comment\" class=\"holo\"/><input type=\"hidden\" id=\"periodUnit\" name=\"periodUnit\" value=\"月\" class=\"holo\"/><input type=\"hidden\" id=\"status\" name=\"status\" value=\"selling\" class=\"holo\"/></div></div><div class=\"modal-footer\"><div class=\"text-center\"><button id=\"cancel\" style=\"margin-right: 40px;\" type=\"button\" data-dismiss=\"modal\" class=\"btn btn-lg btn-default\">取消</button><button id=\"submit\" type=\"submit\" class=\"btn btn-lg btn-success\">确定</button></div></div></div></form></div><script>var productPagination = new pup.Pagination({\n    templateKey : \"product.dataList\",\n    paginationParamName : \"pagination\"\n});\n//跳转到第一页\nproductPagination.first();\n\n$('#query #queryQuick').click(function() {\n    if($('#keyword').val() == '') {\n        var condition = {};\n        if($('#query #status > .btn.active').val() != '') {\n            condition.status = $('#query #status > .btn.active').val();\n        }\n        if($('#query #type').find(\"input[type='radio']:checked\").val() != '') {\n            condition.type = $('#query #type').find(\"input[type='radio']:checked\").val();\n        }\n        productPagination.setCondition(condition).first();\n    } else {\n        productPagination.setCondition({keyword: $('#keyword').val()}).first();\n    }\n});\n\n$('#query #status').find('button').click(function() {\n    var condition = {};\n    if($(this).val() != '') {\n        condition.status = $(this).val();\n    }\n    if($('#query #type').find(\"input[type='radio']:checked\").val() != '') {\n        condition.type = $('#query #type').find(\"input[type='radio']:checked\").val();\n    }\n    productPagination.setCondition(condition).first();\n});\n\n$('.selectpicker').selectpicker({noneSelectedText:'请选择'});\n$('#muCreate').click(function() {\n    $('#create').modal('show');\n    $('#formCreate').validate_popover({onsubmit: false, popoverPosition: 'top'});\n    $(\"#create\").on(\"scroll\", function() { $.validator.reposition(); });\n    $('#create').on('hide.bs.modal', function (e) {\n        $('.popover').each( function() {\n            $(this).hide();\n        });\n    });\n    $(window).resize(function() {\n        $.validator.reposition();\n    });\n});\n$('#formCreate').submit(function(ev) {\n    ev.preventDefault();\n    var type = $(\"#type > .btn.active\").val();\n    var serializeForm = $('#formCreate').serialize();\n    var allForm = 'type='+type+'&'+ serializeForm;\n    if($('#formCreate').validate().form()) {\n        var url = $(this).attr('action');\n        $.ajax({\n            type: \"POST\",\n            url: url,\n            dataType: 'json',\n            data: allForm,\n            success: function (data) {\n                if(data.msg.type == 'success') {\n                    $('#formCreate')[0].reset();\n                    $('#formCreate #type > .btn').first().button('toggle');\n                    $('#create').modal('hide');\n                }\n                toast(data.msg);\n            }\n        });\n    }\n    return false;\n});\n\nfunction showAMsg(msg) {\n    $('.alert').html(msg);\n    $('.alert').show();\n    $('.alert').fadeOut(3000);\n}\njQuery.validator.addMethod(\"legalNumber\", function(value, element) {\n    var maxPeriod = $(element).val();\n    var minPeriod = $('#formCreate #minPeriod').val();\n    return this.optional(element) || (maxPeriod >= minPeriod);\n    }, \"请填写合法字段\");\n    \n//刷新当前页面数据\npup.context.put('fsl-1', onResume);\n\nfunction onResume() {\n    productPagination.reload();\n}\n\nvar typeRadio = new pup.widgets.labelRadio('#type').radio(function(value) {\n    var condition = {};\n    if($('#query #status > .btn.active').val() != '') {\n        condition.status = $('#query #status > .btn.active').val();\n    }\n    if(typeRadio.val() != '') {\n        condition.type = typeRadio.val();\n    }\n    productPagination.setCondition(condition).first();\n});</script>");}("statusList" in locals_for_with?locals_for_with.statusList:typeof statusList!=="undefined"?statusList:undefined,"typeList" in locals_for_with?locals_for_with.typeList:typeof typeList!=="undefined"?typeList:undefined));;return buf.join("");
}
function crm_product_listTable(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (data) {
// iterate data
;(function(){
  var $$obj = data;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var product = $$obj[$index];

buf.push("<div style=\"cursor:pointer;width: 238px; height: 250px; margin: 5px; position: relative;\"" + (jade.attr("data-id", '' + (product._id) + '', true, false)) + " class=\"mm-box col-md-3 f-product\"><h5>" + (jade.escape((jade_interp = product.name) == null ? '' : jade_interp)) + "</h5><div class=\"row\"><div class=\"col-md-12\"><i style=\"margin-right: 5px;\" class=\"icon-user-8\"></i><span>" + (jade.escape((jade_interp = product.issueOrg) == null ? '' : jade_interp)) + "</span></div></div><div class=\"row\"><div class=\"col-md-12\"><i style=\"margin-right: 5px;\" class=\"icon-clock\"></i><span>" + (jade.escape((jade_interp = product.minPeriod) == null ? '' : jade_interp)) + "-" + (jade.escape((jade_interp = product.maxPeriod) == null ? '' : jade_interp)) + "" + (jade.escape((jade_interp = product.periodUnit) == null ? '' : jade_interp)) + "</span></div></div><div class=\"row\"><div class=\"col-md-12\"><i style=\"margin-right: 5px;\" class=\"icon-yen\"></i><span>" + (jade.escape((jade_interp = product.minAmount) == null ? '' : jade_interp)) + " / 总" + (jade.escape((jade_interp = product.totalAmount) == null ? '' : jade_interp)) + "万</span></div></div><div class=\"row\"><div class=\"col-md-12\"><div style=\"height: 10px\" class=\"progress\"><div role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 70%;\" class=\"progress-bar progress-bar-success\"><span class=\"sr-only\">70% Complete (success)</span></div></div></div></div><div class=\"row\"><div style=\"background: #a52410;height: 1px;\" class=\"divider\"></div></div><p style=\"margin-top: 5px\" class=\"small text-muted\">" + (jade.escape((jade_interp = product.comment) == null ? '' : jade_interp)) + "</p><div class=\"box-mask f-action\"><div style=\"margin: 50px auto;position:relative;\" class=\"row text-center\"><button class=\"btn btn-info btn-sm\"><i class=\"icon-pencil-1\"></i>编辑</button><button class=\"btn btn-danger btn-sm m-l-5\"><i class=\"icon-cancel\"></i>删除</button></div></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var product = $$obj[$index];

buf.push("<div style=\"cursor:pointer;width: 238px; height: 250px; margin: 5px; position: relative;\"" + (jade.attr("data-id", '' + (product._id) + '', true, false)) + " class=\"mm-box col-md-3 f-product\"><h5>" + (jade.escape((jade_interp = product.name) == null ? '' : jade_interp)) + "</h5><div class=\"row\"><div class=\"col-md-12\"><i style=\"margin-right: 5px;\" class=\"icon-user-8\"></i><span>" + (jade.escape((jade_interp = product.issueOrg) == null ? '' : jade_interp)) + "</span></div></div><div class=\"row\"><div class=\"col-md-12\"><i style=\"margin-right: 5px;\" class=\"icon-clock\"></i><span>" + (jade.escape((jade_interp = product.minPeriod) == null ? '' : jade_interp)) + "-" + (jade.escape((jade_interp = product.maxPeriod) == null ? '' : jade_interp)) + "" + (jade.escape((jade_interp = product.periodUnit) == null ? '' : jade_interp)) + "</span></div></div><div class=\"row\"><div class=\"col-md-12\"><i style=\"margin-right: 5px;\" class=\"icon-yen\"></i><span>" + (jade.escape((jade_interp = product.minAmount) == null ? '' : jade_interp)) + " / 总" + (jade.escape((jade_interp = product.totalAmount) == null ? '' : jade_interp)) + "万</span></div></div><div class=\"row\"><div class=\"col-md-12\"><div style=\"height: 10px\" class=\"progress\"><div role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 70%;\" class=\"progress-bar progress-bar-success\"><span class=\"sr-only\">70% Complete (success)</span></div></div></div></div><div class=\"row\"><div style=\"background: #a52410;height: 1px;\" class=\"divider\"></div></div><p style=\"margin-top: 5px\" class=\"small text-muted\">" + (jade.escape((jade_interp = product.comment) == null ? '' : jade_interp)) + "</p><div class=\"box-mask f-action\"><div style=\"margin: 50px auto;position:relative;\" class=\"row text-center\"><button class=\"btn btn-info btn-sm\"><i class=\"icon-pencil-1\"></i>编辑</button><button class=\"btn btn-danger btn-sm m-l-5\"><i class=\"icon-cancel\"></i>删除</button></div></div></div>");
    }

  }
}).call(this);

buf.push("<script>productPagination.bar('#productPageBar');\n\n$('.f-product').click(function() {\n    var id = $(this).data('id');\n    pup.template.renderTemplateByKey('product.detail', {id : id});\n});</script>");}("data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));;return buf.join("");
}
function crm_product_refDataLatestListTable(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (data) {
// iterate data
;(function(){
  var $$obj = data;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var refData = $$obj[i];

buf.push("<div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">文件名</span><span class=\"col-md-2 text-left\">" + (jade.escape((jade_interp = refData.name) == null ? '' : jade_interp)) + "</span><span class=\"col-md-1 text-right text-muted small\">描述</span><span class=\"col-md-5 text-left\">" + (jade.escape((jade_interp = refData.description) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div>");
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var refData = $$obj[i];

buf.push("<div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">文件名</span><span class=\"col-md-2 text-left\">" + (jade.escape((jade_interp = refData.name) == null ? '' : jade_interp)) + "</span><span class=\"col-md-1 text-right text-muted small\">描述</span><span class=\"col-md-5 text-left\">" + (jade.escape((jade_interp = refData.description) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div>");
    }

  }
}).call(this);

buf.push("<div onclick=\"loadRefDataByPage();\" class=\"row m-t-10 text-center cust-record\"><a href=\"javascript:void(0);\" onclick=\"loadRefDataByPage();\" title=\"加载更多\"><i class=\"icon icon-angle-double-down\"></i></a></div>");}("data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));;return buf.join("");
}
function crm_product_refDataListTable(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (data) {
// iterate data
;(function(){
  var $$obj = data;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var refData = $$obj[$index];

buf.push("<div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">文件名</span><span class=\"col-md-2 text-left\">" + (jade.escape((jade_interp = refData.name) == null ? '' : jade_interp)) + "</span><span class=\"col-md-1 text-right text-muted small\">描述</span><span class=\"col-md-5 text-left\">" + (jade.escape((jade_interp = refData.description) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var refData = $$obj[$index];

buf.push("<div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">文件名</span><span class=\"col-md-2 text-left\">" + (jade.escape((jade_interp = refData.name) == null ? '' : jade_interp)) + "</span><span class=\"col-md-1 text-right text-muted small\">描述</span><span class=\"col-md-5 text-left\">" + (jade.escape((jade_interp = refData.description) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div>");
    }

  }
}).call(this);

buf.push("<script>productRefDataPagination.bar('#productRefDataPageBar');</script>");}("data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));;return buf.join("");
}
function crm_product_trendLatestListTable(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (data, tags, format) {
// iterate data
;(function(){
  var $$obj = data;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var trend = $$obj[i];

buf.push("<div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">类型</span><span class=\"col-md-4 text-left\">" + (jade.escape((jade_interp = tags(trend.tags)) == null ? '' : jade_interp)) + "</span><span class=\"col-md-2 text-right text-muted small\">创建日期</span><span class=\"col-md-2 text-left\">" + (jade.escape((jade_interp = format(trend.ctime)) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><span class=\"col-md-8 col-md-push-2 text-left\">" + (jade.escape((jade_interp = trend.description) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div>");
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var trend = $$obj[i];

buf.push("<div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">类型</span><span class=\"col-md-4 text-left\">" + (jade.escape((jade_interp = tags(trend.tags)) == null ? '' : jade_interp)) + "</span><span class=\"col-md-2 text-right text-muted small\">创建日期</span><span class=\"col-md-2 text-left\">" + (jade.escape((jade_interp = format(trend.ctime)) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><span class=\"col-md-8 col-md-push-2 text-left\">" + (jade.escape((jade_interp = trend.description) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div>");
    }

  }
}).call(this);

buf.push("<div onclick=\"loadTrendsByPage();\" class=\"row m-t-10 text-center cust-record\"><a href=\"javascript:void(0);\" onclick=\"loadTrendsByPage();\" title=\"加载更多\"><i class=\"icon icon-angle-double-down\"></i></a></div>");}("data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"tags" in locals_for_with?locals_for_with.tags:typeof tags!=="undefined"?tags:undefined,"format" in locals_for_with?locals_for_with.format:typeof format!=="undefined"?format:undefined));;return buf.join("");
}
function crm_product_trendListTable(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (data, tags, format) {
// iterate data
;(function(){
  var $$obj = data;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var trend = $$obj[$index];

buf.push("<div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">类型</span><span class=\"col-md-4 text-left\">" + (jade.escape((jade_interp = tags(trend.tags)) == null ? '' : jade_interp)) + "</span><span class=\"col-md-2 text-right text-muted small\">创建日期</span><span class=\"col-md-2 text-left\">" + (jade.escape((jade_interp = format(trend.ctime)) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><span class=\"col-md-8 col-md-push-2 text-left\">" + (jade.escape((jade_interp = trend.description) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var trend = $$obj[$index];

buf.push("<div class=\"row m-t-10\"><span class=\"col-md-2 text-right text-muted small\">类型</span><span class=\"col-md-4 text-left\">" + (jade.escape((jade_interp = tags(trend.tags)) == null ? '' : jade_interp)) + "</span><span class=\"col-md-2 text-right text-muted small\">创建日期</span><span class=\"col-md-2 text-left\">" + (jade.escape((jade_interp = format(trend.ctime)) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><span class=\"col-md-8 col-md-push-2 text-left\">" + (jade.escape((jade_interp = trend.description) == null ? '' : jade_interp)) + "</span></div><div class=\"row m-t-10\"><div class=\"divider divider-default\"></div></div>");
    }

  }
}).call(this);

buf.push("<script>productTrendPagination.bar('#productTrendPageBar');</script>");}("data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"tags" in locals_for_with?locals_for_with.tags:typeof tags!=="undefined"?tags:undefined,"format" in locals_for_with?locals_for_with.format:typeof format!=="undefined"?format:undefined));;return buf.join("");
}
function example_calendar_default(locals) {
var jade_debug = [{ lineno: 1, filename: "default.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined) {
jade_debug.unshift({ lineno: 0, filename: "default.jade" });
jade_debug.unshift({ lineno: 1, filename: "default.jade" });
buf.push("<!DOCTYPE html>");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "default.jade" });
buf.push("<html>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "default.jade" });
buf.push("<head>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "default.jade" });
buf.push("<link href=\"/stylesheets/jquery-ui-1.10.4.custom.min.css\" rel=\"stylesheet\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "default.jade" });
buf.push("<link href=\"/stylesheets/fullcalendar.css\" rel=\"stylesheet\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "default.jade" });
buf.push("<link href=\"/stylesheets/fullcalendar.print.css\" rel=\"stylesheet\" media=\"print\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "default.jade" });
buf.push("<script src=\"/javascripts/jquery-1.11.0.min.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "default.jade" });
buf.push("<script src=\"/javascripts/jquery-ui-1.10.4.custom.min.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "default.jade" });
buf.push("<script src=\"/javascripts/fullcalendar.min.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "default.jade" });
buf.push("<script>");
jade_debug.unshift({ lineno: 12, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: jade_debug[0].filename });
buf.push("$(document).ready(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("    var date = new Date();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("    var d = date.getDate();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("    var m = date.getMonth();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("    var y = date.getFullYear();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("    ");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("    $('#calendar').fullCalendar({");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 20, filename: jade_debug[0].filename });
buf.push("        theme : true,");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 21, filename: jade_debug[0].filename });
buf.push("        header: {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("            left: 'prev,next today',");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("            center: 'title',");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 24, filename: jade_debug[0].filename });
buf.push("            right: 'month'");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("        },");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push("        editable: false,");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 27, filename: jade_debug[0].filename });
buf.push("        events: [");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 28, filename: jade_debug[0].filename });
buf.push("            {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push("                title: '重要任务（2）',");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 30, filename: jade_debug[0].filename });
buf.push("                start: new Date(y, m, 1, 1),");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 31, filename: jade_debug[0].filename });
buf.push("                url : 'javascript: console.dir($(this));'");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 32, filename: jade_debug[0].filename });
buf.push("            },");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 33, filename: jade_debug[0].filename });
buf.push("            {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 34, filename: jade_debug[0].filename });
buf.push("                title: '中等任务（1）',");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 35, filename: jade_debug[0].filename });
buf.push("                start: new Date(y, m, 1, 2)");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 36, filename: jade_debug[0].filename });
buf.push("            },");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 37, filename: jade_debug[0].filename });
buf.push("            {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 38, filename: jade_debug[0].filename });
buf.push("                title: '普通任务（10）',");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 39, filename: jade_debug[0].filename });
buf.push("                start: new Date(y, m, 1, 3)");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 40, filename: jade_debug[0].filename });
buf.push("            }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 41, filename: jade_debug[0].filename });
buf.push("        ]");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 42, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 43, filename: jade_debug[0].filename });
buf.push("    ");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 44, filename: jade_debug[0].filename });
buf.push("});");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 45, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.shift();
buf.push("</head>");
jade_debug.shift();
jade_debug.shift();
buf.push("</html>");
jade_debug.shift();
jade_debug.unshift({ lineno: 46, filename: "default.jade" });
buf.push("<style>");
jade_debug.unshift({ lineno: 47, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 47, filename: jade_debug[0].filename });
buf.push("body {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 48, filename: jade_debug[0].filename });
buf.push("    margin-top: 40px;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 49, filename: jade_debug[0].filename });
buf.push("    text-align: center;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 50, filename: jade_debug[0].filename });
buf.push("    font-size: 14px;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 51, filename: jade_debug[0].filename });
buf.push("    font-family: \"Lucida Grande\", Helvetica, Arial, Verdana, sans-serif;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 52, filename: jade_debug[0].filename });
buf.push("}");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 53, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 54, filename: jade_debug[0].filename });
buf.push("#calendar {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 55, filename: jade_debug[0].filename });
buf.push("    width: 900px;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 56, filename: jade_debug[0].filename });
buf.push("    margin: 0 auto;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 57, filename: jade_debug[0].filename });
buf.push("}");
jade_debug.shift();
jade_debug.shift();
buf.push("</style>");
jade_debug.shift();
jade_debug.unshift({ lineno: 58, filename: "default.jade" });
buf.push("<body>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 59, filename: "default.jade" });
buf.push("<div id=\"calendar\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</body>");
jade_debug.shift();
jade_debug.shift();}("undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "doctype html\r\nhtml\r\n    head\r\n        link(href='/stylesheets/jquery-ui-1.10.4.custom.min.css', rel='stylesheet')\r\n        link(href='/stylesheets/fullcalendar.css', rel='stylesheet')\r\n        link(href='/stylesheets/fullcalendar.print.css', rel='stylesheet', media='print')\r\n        script(src='/javascripts/jquery-1.11.0.min.js')\r\n        script(src='/javascripts/jquery-ui-1.10.4.custom.min.js')\r\n        script(src='/javascripts/fullcalendar.min.js')\r\n        script.\r\n\r\n            $(document).ready(function() {\r\n\r\n                var date = new Date();\r\n                var d = date.getDate();\r\n                var m = date.getMonth();\r\n                var y = date.getFullYear();\r\n\r\n                $('#calendar').fullCalendar({\r\n                    theme : true,\r\n                    header: {\r\n                        left: 'prev,next today',\r\n                        center: 'title',\r\n                        right: 'month'\r\n                    },\r\n                    editable: false,\r\n                    events: [\r\n                        {\r\n                            title: '重要任务（2）',\r\n                            start: new Date(y, m, 1, 1),\r\n                            url : 'javascript: console.dir($(this));'\r\n                        },\r\n                        {\r\n                            title: '中等任务（1）',\r\n                            start: new Date(y, m, 1, 2)\r\n                        },\r\n                        {\r\n                            title: '普通任务（10）',\r\n                            start: new Date(y, m, 1, 3)\r\n                        }\r\n                    ]\r\n                });\r\n\r\n            });\r\n\r\nstyle.\r\n    body {\r\n        margin-top: 40px;\r\n        text-align: center;\r\n        font-size: 14px;\r\n        font-family: \"Lucida Grande\", Helvetica, Arial, Verdana, sans-serif;\r\n    }\r\n\r\n    #calendar {\r\n        width: 900px;\r\n        margin: 0 auto;\r\n    }\r\nbody\r\n    #calendar\r\n");
}
}
function example_pageLoad_show(locals) {
var jade_debug = [{ lineno: 1, filename: "show.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (msg) {
jade_debug.unshift({ lineno: 0, filename: "show.jade" });
jade_debug.unshift({ lineno: 1, filename: "show.jade" });
buf.push("<!--");
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
buf.push("Created by wangnan on 14-4-23.");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 3, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
jade_debug.shift();
buf.push("-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "show.jade" });
buf.push("<p id=\"p1\">");
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("hello page load " + (jade.escape((jade_interp = msg) == null ? '' : jade_interp)) + "");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 12, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 20, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 21, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 24, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 27, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 28, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 30, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 31, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 32, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 33, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 34, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 35, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 36, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 37, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 38, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 39, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 40, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 41, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 42, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 43, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 44, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 45, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 46, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 47, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 48, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 49, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 50, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 51, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 52, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 53, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 54, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 55, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 56, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 57, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 58, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 59, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 60, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 61, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 62, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 63, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 64, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 65, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 66, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 67, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 68, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 69, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 70, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 71, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 72, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 73, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 74, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 75, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 76, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 77, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 78, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 79, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 80, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 81, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 82, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 83, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 84, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 85, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 86, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 87, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 88, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 89, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 90, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 91, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 92, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 93, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 94, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 95, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 96, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 97, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 98, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 99, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 100, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 101, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 102, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 103, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 104, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 105, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 106, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 107, filename: jade_debug[0].filename });
buf.push("asdfsdfsdfdsf</br>");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 108, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 109, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 110, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 111, filename: "show.jade" });
buf.push("<script>");
jade_debug.unshift({ lineno: 112, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 112, filename: jade_debug[0].filename });
buf.push("$('#p1').append('<strong> end.</strong>');");
jade_debug.shift();
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.shift();}("msg" in locals_for_with?locals_for_with.msg:typeof msg!=="undefined"?msg:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "//\n   Created by wangnan on 14-4-23.\n\np#p1.\n    hello page load #{msg}\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n    asdfsdfsdfdsf</br>\n\n\n\nscript.\n    $('#p1').append('<strong> end.</strong>');\n");
}
}
function footer(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div id=\"footer\" data-viewgroup=\"fullScreenLayers\" data-viewid=\"fsl-1\"><div class=\"container\"><div class=\"row\"><div style=\"margin: 20px 0; font-size: small;\" class=\"col-md-6 text-muted\"><p class=\"text-left\">Copyright © 2014 帆茂投资管理有限公司</p></div><div style=\"margin: 20px 0; font-size: small;\" class=\"col-md-6 text-muted\"><p class=\"text-right\">帮助</p></div></div></div></div>");;return buf.join("");
}
function header(locals) {
var jade_debug = [{ lineno: 1, filename: "header.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, currentApp, session, menus) {
jade_debug.unshift({ lineno: 0, filename: "header.jade" });
jade_debug.unshift({ lineno: 1, filename: "header.jade" });
buf.push("<script src=\"/socket.io/socket.io.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "header.jade" });
buf.push("<script>");
jade_debug.unshift({ lineno: 3, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: jade_debug[0].filename });
buf.push("$(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("    if('" + (jade.escape((jade_interp = currentApp.code) == null ? '' : jade_interp)) + "' == 'CRM') {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("        $('#msgCount').hide();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("        $('#msgBar').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("            pup.template.renderTemplateByKey('crm.message');");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("        });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("        var socket = io.connect(\"http://localhost:3000\");");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("        socket.emit('message.list', {}, function(result) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("            $('#msgCount').hide();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 12, filename: jade_debug[0].filename });
buf.push("            resetMessageMenu(result);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("        });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("        socket.on('notification', function(result) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("            $('#msgCount').hide();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("            resetMessageMenu(result);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("        });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("    }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("});");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 20, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 21, filename: jade_debug[0].filename });
buf.push("function resetMessageMenu(data) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("    var totalNum = data.totalNum;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("    var msgArr = data.data;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 24, filename: jade_debug[0].filename });
buf.push("    $('#msgCount').html(totalNum);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("    if(totalNum && totalNum > 0) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push("        $('#msgCount').show();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 27, filename: jade_debug[0].filename });
buf.push("    }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 28, filename: jade_debug[0].filename });
buf.push("    $( \"#msgMenu\" ).remove();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push("    var msgDropDownHtml = $('#msgDropDown').html();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 30, filename: jade_debug[0].filename });
buf.push("    var msgMenuBuffer = \"\";");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 31, filename: jade_debug[0].filename });
buf.push("    if(msgArr && msgArr.length > 0) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 32, filename: jade_debug[0].filename });
buf.push("        msgMenuBuffer += \"<ul id='msgMenu' role='menu' aria-labelledby='dropdownMenuUser' class='dropdown-menu'>\";");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 33, filename: jade_debug[0].filename });
buf.push("        for(var i = 0; i < msgArr.length; i++) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 34, filename: jade_debug[0].filename });
buf.push("            var msg = msgArr[i];");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 35, filename: jade_debug[0].filename });
buf.push("            msgMenuBuffer += \"<li role='presentation'>\"");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 36, filename: jade_debug[0].filename });
buf.push("            + \"<a role='menuitem' tabindex='-1' href='/user/setting'>\"");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 37, filename: jade_debug[0].filename });
buf.push("            + \"<i style='position: absolute;' class='text-left'>\" + msg.key_name");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 38, filename: jade_debug[0].filename });
buf.push("            + \"</i><div style='margin-left: 100px;' class='label text-right label-danger'>\" + msg.count");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 39, filename: jade_debug[0].filename });
buf.push("            + \"</div></a></li>\";");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 40, filename: jade_debug[0].filename });
buf.push("        }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 41, filename: jade_debug[0].filename });
buf.push("        msgMenuBuffer += \"</ul>\";");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 42, filename: jade_debug[0].filename });
buf.push("        var ul = $(msgMenuBuffer);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 43, filename: jade_debug[0].filename });
buf.push("        ul.insertAfter(\"#mu-msg\");");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 44, filename: jade_debug[0].filename });
buf.push("    }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 45, filename: jade_debug[0].filename });
buf.push("}");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 46, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 47, filename: "header.jade" });
buf.push("<input type=\"hidden\" id=\"userId\"" + (jade.attr("value", '' + (session.user._id) + '', true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 48, filename: "header.jade" });
buf.push("<div class=\"navbar navbar-default navbar-fixed-top\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 49, filename: "header.jade" });
buf.push("<div class=\"container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 50, filename: "header.jade" });
buf.push("<div class=\"navbar-header\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 51, filename: "header.jade" });
buf.push("<button type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" class=\"navbar-toggle\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 52, filename: "header.jade" });
buf.push("<span class=\"icon-bar\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 53, filename: "header.jade" });
buf.push("<span class=\"icon-bar\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 54, filename: "header.jade" });
buf.push("<span class=\"icon-bar\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 55, filename: "header.jade" });
buf.push("<a" + (jade.attr("href", '/' + currentApp.code + '/main', true, false)) + " class=\"navbar-brand\">" + (jade.escape(null == (jade_interp = currentApp.code) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 56, filename: "header.jade" });
if ( session.user && currentApp.code)
{
jade_debug.unshift({ lineno: 57, filename: "header.jade" });
jade_debug.unshift({ lineno: 57, filename: "header.jade" });
if ( currentApp.code == 'PUP')
{
jade_debug.unshift({ lineno: 58, filename: "header.jade" });
jade_debug.unshift({ lineno: 58, filename: "header.jade" });
buf.push("<div class=\"collapse navbar-collapse\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 59, filename: "header.jade" });
buf.push("<ul class=\"nav navbar-nav navbar-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 60, filename: "header.jade" });
buf.push("<li class=\"dropdown\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 61, filename: "header.jade" });
buf.push("<a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 61, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = session.user.username) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 62, filename: "header.jade" });
buf.push("<ul role=\"menu\" aria-labelledby=\"dropdownMenuUser\" class=\"dropdown-menu\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 63, filename: "header.jade" });
buf.push("<li role=\"presentation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 64, filename: "header.jade" });
buf.push("<a role=\"menuitem\" tabindex=\"-1\" href=\"/user/setting\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 64, filename: jade_debug[0].filename });
buf.push("设置");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 65, filename: "header.jade" });
buf.push("<li role=\"presentation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 66, filename: "header.jade" });
buf.push("<a role=\"menuitem\" tabindex=\"-1\" href=\"/logout\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 66, filename: jade_debug[0].filename });
buf.push("注销");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 68, filename: "header.jade" });
jade_debug.unshift({ lineno: 68, filename: "header.jade" });
buf.push("<div class=\"collapse navbar-collapse\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 69, filename: "header.jade" });
buf.push("<ul class=\"nav navbar-nav navbar-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 0, filename: "header.jade" });
jade_debug.unshift({ lineno: 1, filename: "portal/menu.jade" });
buf.push("<!--");
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
buf.push("Created by wangnan on 14-4-25.");
jade_debug.shift();
jade_debug.shift();
buf.push("-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "includes/utils.jade" });
jade_debug.unshift({ lineno: 1, filename: "includes/utils.jade" });
buf.push("<!--");
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
buf.push("Created by wangnan on 14-5-6.");
jade_debug.shift();
jade_debug.shift();
buf.push("-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "includes/utils.jade" });
var utils = {};
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "includes/utils.jade" });
utils.authFunc = function(fnCode) {
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "includes/utils.jade" });
if(!fnCode) return false;
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "includes/utils.jade" });
var functionMap = session.user.functionMap;
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "includes/utils.jade" });
if(functionMap[fnCode]) {
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "includes/utils.jade" });
return true;
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "includes/utils.jade" });
}
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "includes/utils.jade" });
};
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "portal/menu.jade" });
if ( session && session.user && menus && menus.length)
{
jade_debug.unshift({ lineno: 5, filename: "portal/menu.jade" });
jade_debug.unshift({ lineno: 5, filename: "portal/menu.jade" });
// iterate menus
;(function(){
  var $$obj = menus;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var m = $$obj[$index];

jade_debug.unshift({ lineno: 5, filename: "portal/menu.jade" });
jade_debug.unshift({ lineno: 6, filename: "portal/menu.jade" });
if ( utils.authFunc(m.code))
{
jade_debug.unshift({ lineno: 7, filename: "portal/menu.jade" });
jade_debug.unshift({ lineno: 7, filename: "portal/menu.jade" });
buf.push("<li class=\"dropdown\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "portal/menu.jade" });
buf.push("<a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "portal/menu.jade" });
buf.push("" + (jade.escape((jade_interp = m.name) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "portal/menu.jade" });
buf.push("<span class=\"caret\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "portal/menu.jade" });
buf.push("<ul role=\"menu\" aria-labelledby=\"dropdownMenu\" class=\"dropdown-menu\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "portal/menu.jade" });
if ( m.children && m.children.length)
{
jade_debug.unshift({ lineno: 13, filename: "portal/menu.jade" });
jade_debug.unshift({ lineno: 13, filename: "portal/menu.jade" });
// iterate m.children
;(function(){
  var $$obj = m.children;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var func = $$obj[$index];

jade_debug.unshift({ lineno: 13, filename: "portal/menu.jade" });
jade_debug.unshift({ lineno: 14, filename: "portal/menu.jade" });
if ( utils.authFunc(func.code))
{
jade_debug.unshift({ lineno: 15, filename: "portal/menu.jade" });
jade_debug.unshift({ lineno: 15, filename: "portal/menu.jade" });
buf.push("<li role=\"presentation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "portal/menu.jade" });
buf.push("<a role=\"menuitem\" tabindex=\"-1\"" + (jade.attr("href", 'javascript:pup.template.renderTemplateByKey("' + (func.funcAction) + '");', true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "portal/menu.jade" });
buf.push("" + (jade.escape((jade_interp = func.name) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var func = $$obj[$index];

jade_debug.unshift({ lineno: 13, filename: "portal/menu.jade" });
jade_debug.unshift({ lineno: 14, filename: "portal/menu.jade" });
if ( utils.authFunc(func.code))
{
jade_debug.unshift({ lineno: 15, filename: "portal/menu.jade" });
jade_debug.unshift({ lineno: 15, filename: "portal/menu.jade" });
buf.push("<li role=\"presentation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "portal/menu.jade" });
buf.push("<a role=\"menuitem\" tabindex=\"-1\"" + (jade.attr("href", 'javascript:pup.template.renderTemplateByKey("' + (func.funcAction) + '");', true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "portal/menu.jade" });
buf.push("" + (jade.escape((jade_interp = func.name) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var m = $$obj[$index];

jade_debug.unshift({ lineno: 5, filename: "portal/menu.jade" });
jade_debug.unshift({ lineno: 6, filename: "portal/menu.jade" });
if ( utils.authFunc(m.code))
{
jade_debug.unshift({ lineno: 7, filename: "portal/menu.jade" });
jade_debug.unshift({ lineno: 7, filename: "portal/menu.jade" });
buf.push("<li class=\"dropdown\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "portal/menu.jade" });
buf.push("<a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "portal/menu.jade" });
buf.push("" + (jade.escape((jade_interp = m.name) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "portal/menu.jade" });
buf.push("<span class=\"caret\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "portal/menu.jade" });
buf.push("<ul role=\"menu\" aria-labelledby=\"dropdownMenu\" class=\"dropdown-menu\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "portal/menu.jade" });
if ( m.children && m.children.length)
{
jade_debug.unshift({ lineno: 13, filename: "portal/menu.jade" });
jade_debug.unshift({ lineno: 13, filename: "portal/menu.jade" });
// iterate m.children
;(function(){
  var $$obj = m.children;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var func = $$obj[$index];

jade_debug.unshift({ lineno: 13, filename: "portal/menu.jade" });
jade_debug.unshift({ lineno: 14, filename: "portal/menu.jade" });
if ( utils.authFunc(func.code))
{
jade_debug.unshift({ lineno: 15, filename: "portal/menu.jade" });
jade_debug.unshift({ lineno: 15, filename: "portal/menu.jade" });
buf.push("<li role=\"presentation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "portal/menu.jade" });
buf.push("<a role=\"menuitem\" tabindex=\"-1\"" + (jade.attr("href", 'javascript:pup.template.renderTemplateByKey("' + (func.funcAction) + '");', true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "portal/menu.jade" });
buf.push("" + (jade.escape((jade_interp = func.name) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var func = $$obj[$index];

jade_debug.unshift({ lineno: 13, filename: "portal/menu.jade" });
jade_debug.unshift({ lineno: 14, filename: "portal/menu.jade" });
if ( utils.authFunc(func.code))
{
jade_debug.unshift({ lineno: 15, filename: "portal/menu.jade" });
jade_debug.unshift({ lineno: 15, filename: "portal/menu.jade" });
buf.push("<li role=\"presentation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "portal/menu.jade" });
buf.push("<a role=\"menuitem\" tabindex=\"-1\"" + (jade.attr("href", 'javascript:pup.template.renderTemplateByKey("' + (func.funcAction) + '");', true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "portal/menu.jade" });
buf.push("" + (jade.escape((jade_interp = func.name) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.unshift({ lineno: 71, filename: "header.jade" });
if ( currentApp.code == 'CRM')
{
jade_debug.unshift({ lineno: 72, filename: "header.jade" });
jade_debug.unshift({ lineno: 72, filename: "header.jade" });
buf.push("<ul class=\"nav navbar-nav navbar-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 73, filename: "header.jade" });
buf.push("<li id=\"msgBar\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 74, filename: "header.jade" });
buf.push("<a id=\"mu-msg\" href=\"javascript:void(0);\" class=\"dropdown-toggle\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 75, filename: "header.jade" });
buf.push("<i class=\"icon-comment-1\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 76, filename: "header.jade" });
buf.push("<div id=\"msgCount\" style=\"display : none;\" class=\"label label-danger\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 76, filename: jade_debug[0].filename });
buf.push("5");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 77, filename: "header.jade" });
buf.push("<li id=\"taskBar\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 78, filename: "header.jade" });
buf.push("<a id=\"mu-task\" href=\"javascript:void(0);\" class=\"dropdown-toggle\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 79, filename: "header.jade" });
buf.push("<i class=\"icon-tasks-1\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 80, filename: "header.jade" });
buf.push("<div id=\"taskCount\" style=\"display : none;\" class=\"label label-danger\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 80, filename: jade_debug[0].filename });
buf.push("6");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();}("undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"currentApp" in locals_for_with?locals_for_with.currentApp:typeof currentApp!=="undefined"?currentApp:undefined,"session" in locals_for_with?locals_for_with.session:typeof session!=="undefined"?session:undefined,"menus" in locals_for_with?locals_for_with.menus:typeof menus!=="undefined"?menus:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "script(src='/socket.io/socket.io.js')\nscript.\n    $(function() {\n        if('#{currentApp.code}' == 'CRM') {\n            $('#msgCount').hide();\n            $('#msgBar').click(function() {\n                pup.template.renderTemplateByKey('crm.message');\n            });\n            var socket = io.connect(\"http://localhost:3000\");\n            socket.emit('message.list', {}, function(result) {\n                $('#msgCount').hide();\n                resetMessageMenu(result);\n            });\n            socket.on('notification', function(result) {\n                $('#msgCount').hide();\n                resetMessageMenu(result);\n            });\n        }\n    });\n\n    function resetMessageMenu(data) {\n        var totalNum = data.totalNum;\n        var msgArr = data.data;\n        $('#msgCount').html(totalNum);\n        if(totalNum && totalNum > 0) {\n            $('#msgCount').show();\n        }\n        $( \"#msgMenu\" ).remove();\n        var msgDropDownHtml = $('#msgDropDown').html();\n        var msgMenuBuffer = \"\";\n        if(msgArr && msgArr.length > 0) {\n            msgMenuBuffer += \"<ul id='msgMenu' role='menu' aria-labelledby='dropdownMenuUser' class='dropdown-menu'>\";\n            for(var i = 0; i < msgArr.length; i++) {\n                var msg = msgArr[i];\n                msgMenuBuffer += \"<li role='presentation'>\"\n                + \"<a role='menuitem' tabindex='-1' href='/user/setting'>\"\n                + \"<i style='position: absolute;' class='text-left'>\" + msg.key_name\n                + \"</i><div style='margin-left: 100px;' class='label text-right label-danger'>\" + msg.count\n                + \"</div></a></li>\";\n            }\n            msgMenuBuffer += \"</ul>\";\n            var ul = $(msgMenuBuffer);\n            ul.insertAfter(\"#mu-msg\");\n        }\n    }\n\ninput(type='hidden', id='userId', value='#{session.user._id}')\n.navbar.navbar-default.navbar-fixed-top\n    .container\n        .navbar-header\n            button.navbar-toggle(type='button', data-toggle='collapse', data-target='.navbar-collapse')\n                span.icon-bar\n                span.icon-bar\n                span.icon-bar\n            a.navbar-brand(href='/' + currentApp.code + '/main')=currentApp.code\n        if session.user && currentApp.code\n            if currentApp.code == 'PUP'\n                .collapse.navbar-collapse\n                    ul.nav.navbar-nav.navbar-right\n                        li.dropdown\n                            a.dropdown-toggle(href='#', data-toggle='dropdown') #{session.user.username}\n                            ul.dropdown-menu(role=\"menu\", aria-labelledby=\"dropdownMenuUser\")\n                                li(role=\"presentation\")\n                                    a(role='menuitem', tabindex=\"-1\", href='/user/setting') 设置\n                                li(role=\"presentation\")\n                                    a(role='menuitem', tabindex=\"-1\", href='/logout') 注销\n            else\n                .collapse.navbar-collapse\n                    ul.nav.navbar-nav.navbar-left\n                        include portal/menu\n                    if currentApp.code == 'CRM'\n                        ul.nav.navbar-nav.navbar-right\n                            li#msgBar\n                                a#mu-msg.dropdown-toggle(href='javascript:void(0);')\n                                    i.icon-comment-1\n                                    #msgCount.label.label-danger(style='display : none;') 5\n                            li#taskBar\n                                a#mu-task.dropdown-toggle(href='javascript:void(0);')\n                                    i.icon-tasks-1\n                                    #taskCount.label.label-danger(style='display : none;') 6\n");
}
}
function includes_util(locals) {
var jade_debug = [{ lineno: 1, filename: "utils.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (session) {
jade_debug.unshift({ lineno: 0, filename: "utils.jade" });
jade_debug.unshift({ lineno: 1, filename: "utils.jade" });
buf.push("<!--");
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
buf.push("Created by wangnan on 14-5-6.");
jade_debug.shift();
jade_debug.shift();
buf.push("-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "utils.jade" });
var utils = {};
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "utils.jade" });
utils.authFunc = function(fnCode) {
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "utils.jade" });
if(!fnCode) return false;
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "utils.jade" });
var functionMap = session.user.functionMap;
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "utils.jade" });
if(functionMap[fnCode]) {
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "utils.jade" });
return true;
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "utils.jade" });
}
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "utils.jade" });
};
jade_debug.shift();
jade_debug.shift();}("session" in locals_for_with?locals_for_with.session:typeof session!=="undefined"?session:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "//\n   Created by wangnan on 14-5-6.\n- var utils = {};\n- utils.authFunc = function(fnCode) {\n-     if(!fnCode) return false;\n-     var functionMap = session.user.functionMap;\n-     if(functionMap[fnCode]) {\n-         return true;\n-     }\n- };");
}
}
function index(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (title, currentApp, session, menus) {
buf.push("<!DOCTYPE html><html><head><title>" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</title><link href=\"/stylesheets/jq/jquery-ui-1.10.4.custom.min.css\" rel=\"stylesheet\"><link rel=\"stylesheet\" href=\"/stylesheets/bootstrap.css\"><link rel=\"stylesheet\" href=\"/font-css/fontello.css\"><link rel=\"stylesheet\" href=\"/stylesheets/style.css\"><link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-select.min.css\"><link href=\"/stylesheets/fullcalendar.css\" rel=\"stylesheet\"><link href=\"/stylesheets/fullcalendar.print.css\" rel=\"stylesheet\" media=\"print\"><link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-modal-bs3patch.css\"><link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-modal.css\"><link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-switch.css\"><link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-tagsinput.css\"><link rel=\"stylesheet\" href=\"/stylesheets/toastr.min.css\"><link rel=\"stylesheet\" href=\"/stylesheets/pagination.css\"><link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-tagsinput.css\"><link rel=\"stylesheet\" href=\"/stylesheets/datepicker.css\"><script src=\"/javascripts/jquery-1.11.0.min.js\"></script><script src=\"/javascripts/jquery.validate.min.js\"></script><script src=\"/javascripts/messages_cn.js\"></script><script src=\"/javascripts/jquery.validate.bootstrap.popover.min.js\"></script><script src=\"/javascripts/bootstrap.min.js\"></script><script src=\"/javascripts/bootstrap-select.min.js\"></script><script src=\"/javascripts/runtime.js\"></script><script src=\"/javascripts/jquery-ui-1.10.4.custom.min.js\"></script><script src=\"/javascripts/fullcalendar.min.js\"></script><script src=\"/javascripts/bootstrap-button.js\"></script><script src=\"/javascripts/bootstrap-modalmanager.js\"></script><script src=\"/javascripts/bootstrap-modal.js\"></script><script src=\"/javascripts/bootstrap-switch.js\"></script><script src=\"/javascripts/bootstrap-tagsinput.js\"></script><script src=\"/javascripts/bootstrap-filestyle.min.js\"></script><script src=\"/javascripts/toastr.min.js\"></script><script src=\"/javascripts/highcharts.js\"></script><script src=\"/javascripts/pup.js\"></script><script src=\"/javascripts/utils.js\"></script><script src=\"/javascripts/jquery.pagination.js\"></script><script src=\"/javascripts/template.js\"></script><script src=\"/javascripts/bootstrap-tagsinput.js\"></script><script src=\"/javascripts/jquery.fileupload.js\"></script><script src=\"/javascripts/jquery.iframe-transport.js\"></script><script src=\"/javascripts/jquery.ui.widget.js\"></script><script src=\"/javascripts/bootstrap-datepicker.js\"></script><script>$(function() {\n    pup.template.setup();\n    if('" + (jade.escape((jade_interp = currentApp.indexPage) == null ? '' : jade_interp)) + "' != '')\n        pup.template.renderTemplateByKey('" + (jade.escape((jade_interp = currentApp.indexPage) == null ? '' : jade_interp)) + "');\n        \n    $('ul.nav li.dropdown').hover(function() {\n      $(this).find('.dropdown-menu').stop(true, true).show();\n      $(this).addClass('open');\n    }, function() {\n      $(this).find('.dropdown-menu').stop(true, true).hide();\n      $(this).removeClass('open');\n    });\n    \n});\n</script></head><body style=\"\"><div id=\"wrap\" data-viewgroup=\"fullScreenLayers\" data-viewid=\"fsl-1\"><script src=\"/socket.io/socket.io.js\"></script><script>$(function() {\n    if('" + (jade.escape((jade_interp = currentApp.code) == null ? '' : jade_interp)) + "' == 'CRM') {\n        $('#msgCount').hide();\n        $('#msgBar').click(function() {\n            pup.template.renderTemplateByKey('crm.message');\n        });\n        var socket = io.connect(\"http://localhost:3000\");\n        socket.emit('message.list', {}, function(result) {\n            $('#msgCount').hide();\n            resetMessageMenu(result);\n        });\n        socket.on('notification', function(result) {\n            $('#msgCount').hide();\n            resetMessageMenu(result);\n        });\n    }\n});\n\nfunction resetMessageMenu(data) {\n    var totalNum = data.totalNum;\n    var msgArr = data.data;\n    $('#msgCount').html(totalNum);\n    if(totalNum && totalNum > 0) {\n        $('#msgCount').show();\n    }\n    $( \"#msgMenu\" ).remove();\n    var msgDropDownHtml = $('#msgDropDown').html();\n    var msgMenuBuffer = \"\";\n    if(msgArr && msgArr.length > 0) {\n        msgMenuBuffer += \"<ul id='msgMenu' role='menu' aria-labelledby='dropdownMenuUser' class='dropdown-menu'>\";\n        for(var i = 0; i < msgArr.length; i++) {\n            var msg = msgArr[i];\n            msgMenuBuffer += \"<li role='presentation'>\"\n            + \"<a role='menuitem' tabindex='-1' href='/user/setting'>\"\n            + \"<i style='position: absolute;' class='text-left'>\" + msg.key_name\n            + \"</i><div style='margin-left: 100px;' class='label text-right label-danger'>\" + msg.count\n            + \"</div></a></li>\";\n        }\n        msgMenuBuffer += \"</ul>\";\n        var ul = $(msgMenuBuffer);\n        ul.insertAfter(\"#mu-msg\");\n    }\n}\n</script><input type=\"hidden\" id=\"userId\"" + (jade.attr("value", '' + (session.user._id) + '', true, true)) + "><div class=\"navbar navbar-default navbar-fixed-top\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" class=\"navbar-toggle\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a" + (jade.attr("href", '/' + currentApp.code + '/main', true, true)) + " class=\"navbar-brand\">" + (jade.escape(null == (jade_interp = currentApp.code) ? "" : jade_interp)) + "</a></div>");
if ( session.user && currentApp.code)
{
if ( currentApp.code == 'PUP')
{
buf.push("<div class=\"collapse navbar-collapse\"><ul class=\"nav navbar-nav navbar-right\"><li class=\"dropdown\"><a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">" + (jade.escape((jade_interp = session.user.username) == null ? '' : jade_interp)) + "</a><ul role=\"menu\" aria-labelledby=\"dropdownMenuUser\" class=\"dropdown-menu\"><li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"/user/setting\">设置</a></li><li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"/logout\">注销</a></li></ul></li></ul></div>");
}
else
{
buf.push("<div class=\"collapse navbar-collapse\"><ul class=\"nav navbar-nav navbar-left\"><!--Created by wangnan on 14-4-25.--><!--Created by wangnan on 14-5-6.-->");
var utils = {};
utils.authFunc = function(fnCode) {
if(!fnCode) return false;
var functionMap = session.user.functionMap;
if(functionMap[fnCode]) {
return true;
}
};
if ( session && session.user && menus && menus.length)
{
// iterate menus
;(function(){
  var $$obj = menus;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var m = $$obj[$index];

if ( utils.authFunc(m.code))
{
buf.push("<li class=\"dropdown\"><a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">" + (jade.escape((jade_interp = m.name) == null ? '' : jade_interp)) + "<span class=\"caret\"></span></a><ul role=\"menu\" aria-labelledby=\"dropdownMenu\" class=\"dropdown-menu\">");
if ( m.children && m.children.length)
{
// iterate m.children
;(function(){
  var $$obj = m.children;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var func = $$obj[$index];

if ( utils.authFunc(func.code))
{
buf.push("<li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\"" + (jade.attr("href", 'javascript:pup.template.renderTemplateByKey("' + (func.funcAction) + '");', true, true)) + ">" + (jade.escape((jade_interp = func.name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var func = $$obj[$index];

if ( utils.authFunc(func.code))
{
buf.push("<li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\"" + (jade.attr("href", 'javascript:pup.template.renderTemplateByKey("' + (func.funcAction) + '");', true, true)) + ">" + (jade.escape((jade_interp = func.name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  }
}).call(this);

}
buf.push("</ul></li>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var m = $$obj[$index];

if ( utils.authFunc(m.code))
{
buf.push("<li class=\"dropdown\"><a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">" + (jade.escape((jade_interp = m.name) == null ? '' : jade_interp)) + "<span class=\"caret\"></span></a><ul role=\"menu\" aria-labelledby=\"dropdownMenu\" class=\"dropdown-menu\">");
if ( m.children && m.children.length)
{
// iterate m.children
;(function(){
  var $$obj = m.children;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var func = $$obj[$index];

if ( utils.authFunc(func.code))
{
buf.push("<li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\"" + (jade.attr("href", 'javascript:pup.template.renderTemplateByKey("' + (func.funcAction) + '");', true, true)) + ">" + (jade.escape((jade_interp = func.name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var func = $$obj[$index];

if ( utils.authFunc(func.code))
{
buf.push("<li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\"" + (jade.attr("href", 'javascript:pup.template.renderTemplateByKey("' + (func.funcAction) + '");', true, true)) + ">" + (jade.escape((jade_interp = func.name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  }
}).call(this);

}
buf.push("</ul></li>");
}
    }

  }
}).call(this);

}
buf.push("</ul>");
if ( currentApp.code == 'CRM')
{
buf.push("<ul class=\"nav navbar-nav navbar-right\"><li id=\"msgBar\"><a id=\"mu-msg\" href=\"javascript:void(0);\" class=\"dropdown-toggle\"><i class=\"icon-comment-1\"></i><div id=\"msgCount\" style=\"display : none;\" class=\"label label-danger\">5</div></a></li><li id=\"taskBar\"><a id=\"mu-task\" href=\"javascript:void(0);\" class=\"dropdown-toggle\"><i class=\"icon-tasks-1\"></i><div id=\"taskCount\" style=\"display : none;\" class=\"label label-danger\">6</div></a></li></ul>");
}
buf.push("</div>");
}
}
buf.push("</div></div><div class=\"container\"><div id=\"msg\" style=\"display: none;\" class=\"alert alert-success col-md-6 col-md-offset-3 alert-dismissable\"><button data-dismiss=\"alert\" aria-hidden=\"true\" class=\"close\">&times;</button><p>操作成功</p></div><div id=\"main\"></div></div></div><div id=\"footer\" data-viewgroup=\"fullScreenLayers\" data-viewid=\"fsl-1\"><div class=\"container\"><div class=\"row\"><div style=\"margin: 20px 0; font-size: small;\" class=\"col-md-6 text-muted\"><p class=\"text-left\">Copyright © 2014 帆茂投资管理有限公司</p></div><div style=\"margin: 20px 0; font-size: small;\" class=\"col-md-6 text-muted\"><p class=\"text-right\">帮助</p></div></div></div></div><div id=\"second\" style=\"display:none;\" data-viewGroup=\"fullScreenLayers\" data-viewId=\"fsl-2\" class=\"row\"><div class=\"layer-close\"><div style=\"margin-right: 30px;\" class=\"pull-right m-t-10 m-b-15\"><a href=\"javasript:void(0);\" onclick=\"javascript:pup.hideView('fsl-2');\" title=\"关闭\" class=\"btn btn-info btn-circle\"><i style=\"font-size: 24px;\" class=\"icon-cancel-7\"></i></a></div></div><div style=\"overflow: auto;\" class=\"col-sm-12\"><div id=\"secondMain\"></div></div></div><div id=\"third\" style=\"display:none;\" data-viewGroup=\"fullScreenLayers\" data-viewId=\"fsl-3\" class=\"row\"><div class=\"layer-close\"><div style=\"margin-right: 30px;\" class=\"pull-right m-t-10 m-b-15\"><a href=\"javasript:void(0);\" onclick=\"javascript:pup.hideView('fsl-3');\" title=\"关闭\" class=\"btn btn-info btn-circle\"><i style=\"font-size: 24px;\" class=\"icon-cancel-7\"></i></a></div></div><div style=\"overflow: auto;\" class=\"col-sm-12\"><div id=\"thirdMain\"></div></div></div></body></html>");}("title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"currentApp" in locals_for_with?locals_for_with.currentApp:typeof currentApp!=="undefined"?currentApp:undefined,"session" in locals_for_with?locals_for_with.session:typeof session!=="undefined"?session:undefined,"menus" in locals_for_with?locals_for_with.menus:typeof menus!=="undefined"?menus:undefined));;return buf.join("");
}
function layout(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (title, currentApp, session, menus) {
buf.push("<!DOCTYPE html><html><head><title>" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</title><link href=\"/stylesheets/jq/jquery-ui-1.10.4.custom.min.css\" rel=\"stylesheet\"><link rel=\"stylesheet\" href=\"/stylesheets/bootstrap.css\"><link rel=\"stylesheet\" href=\"/font-css/fontello.css\"><link rel=\"stylesheet\" href=\"/stylesheets/style.css\"><link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-select.min.css\"><link href=\"/stylesheets/fullcalendar.css\" rel=\"stylesheet\"><link href=\"/stylesheets/fullcalendar.print.css\" rel=\"stylesheet\" media=\"print\"><link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-modal-bs3patch.css\"><link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-modal.css\"><link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-switch.css\"><link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-tagsinput.css\"><link rel=\"stylesheet\" href=\"/stylesheets/toastr.min.css\"><link rel=\"stylesheet\" href=\"/stylesheets/pagination.css\"><link rel=\"stylesheet\" href=\"/stylesheets/bootstrap-tagsinput.css\"><link rel=\"stylesheet\" href=\"/stylesheets/datepicker.css\"><script src=\"/javascripts/jquery-1.11.0.min.js\"></script><script src=\"/javascripts/jquery.validate.min.js\"></script><script src=\"/javascripts/messages_cn.js\"></script><script src=\"/javascripts/jquery.validate.bootstrap.popover.min.js\"></script><script src=\"/javascripts/bootstrap.min.js\"></script><script src=\"/javascripts/bootstrap-select.min.js\"></script><script src=\"/javascripts/runtime.js\"></script><script src=\"/javascripts/jquery-ui-1.10.4.custom.min.js\"></script><script src=\"/javascripts/fullcalendar.min.js\"></script><script src=\"/javascripts/bootstrap-button.js\"></script><script src=\"/javascripts/bootstrap-modalmanager.js\"></script><script src=\"/javascripts/bootstrap-modal.js\"></script><script src=\"/javascripts/bootstrap-switch.js\"></script><script src=\"/javascripts/bootstrap-tagsinput.js\"></script><script src=\"/javascripts/bootstrap-filestyle.min.js\"></script><script src=\"/javascripts/toastr.min.js\"></script><script src=\"/javascripts/highcharts.js\"></script><script src=\"/javascripts/pup.js\"></script><script src=\"/javascripts/utils.js\"></script><script src=\"/javascripts/jquery.pagination.js\"></script><script src=\"/javascripts/template.js\"></script><script src=\"/javascripts/bootstrap-tagsinput.js\"></script><script src=\"/javascripts/jquery.fileupload.js\"></script><script src=\"/javascripts/jquery.iframe-transport.js\"></script><script src=\"/javascripts/jquery.ui.widget.js\"></script><script src=\"/javascripts/bootstrap-datepicker.js\"></script></head><body style=\"\"><div id=\"wrap\" data-viewgroup=\"fullScreenLayers\" data-viewid=\"fsl-1\"><script src=\"/socket.io/socket.io.js\"></script><script>$(function() {\n    if('" + (jade.escape((jade_interp = currentApp.code) == null ? '' : jade_interp)) + "' == 'CRM') {\n        $('#msgCount').hide();\n        $('#msgBar').click(function() {\n            pup.template.renderTemplateByKey('crm.message');\n        });\n        var socket = io.connect(\"http://localhost:3000\");\n        socket.emit('message.list', {}, function(result) {\n            $('#msgCount').hide();\n            resetMessageMenu(result);\n        });\n        socket.on('notification', function(result) {\n            $('#msgCount').hide();\n            resetMessageMenu(result);\n        });\n    }\n});\n\nfunction resetMessageMenu(data) {\n    var totalNum = data.totalNum;\n    var msgArr = data.data;\n    $('#msgCount').html(totalNum);\n    if(totalNum && totalNum > 0) {\n        $('#msgCount').show();\n    }\n    $( \"#msgMenu\" ).remove();\n    var msgDropDownHtml = $('#msgDropDown').html();\n    var msgMenuBuffer = \"\";\n    if(msgArr && msgArr.length > 0) {\n        msgMenuBuffer += \"<ul id='msgMenu' role='menu' aria-labelledby='dropdownMenuUser' class='dropdown-menu'>\";\n        for(var i = 0; i < msgArr.length; i++) {\n            var msg = msgArr[i];\n            msgMenuBuffer += \"<li role='presentation'>\"\n            + \"<a role='menuitem' tabindex='-1' href='/user/setting'>\"\n            + \"<i style='position: absolute;' class='text-left'>\" + msg.key_name\n            + \"</i><div style='margin-left: 100px;' class='label text-right label-danger'>\" + msg.count\n            + \"</div></a></li>\";\n        }\n        msgMenuBuffer += \"</ul>\";\n        var ul = $(msgMenuBuffer);\n        ul.insertAfter(\"#mu-msg\");\n    }\n}\n</script><input type=\"hidden\" id=\"userId\"" + (jade.attr("value", '' + (session.user._id) + '', true, true)) + "><div class=\"navbar navbar-default navbar-fixed-top\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" class=\"navbar-toggle\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a" + (jade.attr("href", '/' + currentApp.code + '/main', true, true)) + " class=\"navbar-brand\">" + (jade.escape(null == (jade_interp = currentApp.code) ? "" : jade_interp)) + "</a></div>");
if ( session.user && currentApp.code)
{
if ( currentApp.code == 'PUP')
{
buf.push("<div class=\"collapse navbar-collapse\"><ul class=\"nav navbar-nav navbar-right\"><li class=\"dropdown\"><a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">" + (jade.escape((jade_interp = session.user.username) == null ? '' : jade_interp)) + "</a><ul role=\"menu\" aria-labelledby=\"dropdownMenuUser\" class=\"dropdown-menu\"><li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"/user/setting\">设置</a></li><li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"/logout\">注销</a></li></ul></li></ul></div>");
}
else
{
buf.push("<div class=\"collapse navbar-collapse\"><ul class=\"nav navbar-nav navbar-left\"><!--Created by wangnan on 14-4-25.--><!--Created by wangnan on 14-5-6.-->");
var utils = {};
utils.authFunc = function(fnCode) {
if(!fnCode) return false;
var functionMap = session.user.functionMap;
if(functionMap[fnCode]) {
return true;
}
};
if ( session && session.user && menus && menus.length)
{
// iterate menus
;(function(){
  var $$obj = menus;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var m = $$obj[$index];

if ( utils.authFunc(m.code))
{
buf.push("<li class=\"dropdown\"><a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">" + (jade.escape((jade_interp = m.name) == null ? '' : jade_interp)) + "<span class=\"caret\"></span></a><ul role=\"menu\" aria-labelledby=\"dropdownMenu\" class=\"dropdown-menu\">");
if ( m.children && m.children.length)
{
// iterate m.children
;(function(){
  var $$obj = m.children;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var func = $$obj[$index];

if ( utils.authFunc(func.code))
{
buf.push("<li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\"" + (jade.attr("href", 'javascript:pup.template.renderTemplateByKey("' + (func.funcAction) + '");', true, true)) + ">" + (jade.escape((jade_interp = func.name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var func = $$obj[$index];

if ( utils.authFunc(func.code))
{
buf.push("<li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\"" + (jade.attr("href", 'javascript:pup.template.renderTemplateByKey("' + (func.funcAction) + '");', true, true)) + ">" + (jade.escape((jade_interp = func.name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  }
}).call(this);

}
buf.push("</ul></li>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var m = $$obj[$index];

if ( utils.authFunc(m.code))
{
buf.push("<li class=\"dropdown\"><a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">" + (jade.escape((jade_interp = m.name) == null ? '' : jade_interp)) + "<span class=\"caret\"></span></a><ul role=\"menu\" aria-labelledby=\"dropdownMenu\" class=\"dropdown-menu\">");
if ( m.children && m.children.length)
{
// iterate m.children
;(function(){
  var $$obj = m.children;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var func = $$obj[$index];

if ( utils.authFunc(func.code))
{
buf.push("<li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\"" + (jade.attr("href", 'javascript:pup.template.renderTemplateByKey("' + (func.funcAction) + '");', true, true)) + ">" + (jade.escape((jade_interp = func.name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var func = $$obj[$index];

if ( utils.authFunc(func.code))
{
buf.push("<li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\"" + (jade.attr("href", 'javascript:pup.template.renderTemplateByKey("' + (func.funcAction) + '");', true, true)) + ">" + (jade.escape((jade_interp = func.name) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  }
}).call(this);

}
buf.push("</ul></li>");
}
    }

  }
}).call(this);

}
buf.push("</ul>");
if ( currentApp.code == 'CRM')
{
buf.push("<ul class=\"nav navbar-nav navbar-right\"><li id=\"msgBar\"><a id=\"mu-msg\" href=\"javascript:void(0);\" class=\"dropdown-toggle\"><i class=\"icon-comment-1\"></i><div id=\"msgCount\" style=\"display : none;\" class=\"label label-danger\">5</div></a></li><li id=\"taskBar\"><a id=\"mu-task\" href=\"javascript:void(0);\" class=\"dropdown-toggle\"><i class=\"icon-tasks-1\"></i><div id=\"taskCount\" style=\"display : none;\" class=\"label label-danger\">6</div></a></li></ul>");
}
buf.push("</div>");
}
}
buf.push("</div></div><div class=\"container\"><div id=\"msg\" style=\"display: none;\" class=\"alert alert-success col-md-6 col-md-offset-3 alert-dismissable\"><button data-dismiss=\"alert\" aria-hidden=\"true\" class=\"close\">&times;</button><p>操作成功</p></div></div></div><div id=\"footer\" data-viewgroup=\"fullScreenLayers\" data-viewid=\"fsl-1\"><div class=\"container\"><div class=\"row\"><div style=\"margin: 20px 0; font-size: small;\" class=\"col-md-6 text-muted\"><p class=\"text-left\">Copyright © 2014 帆茂投资管理有限公司</p></div><div style=\"margin: 20px 0; font-size: small;\" class=\"col-md-6 text-muted\"><p class=\"text-right\">帮助</p></div></div></div></div></body></html>");}("title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"currentApp" in locals_for_with?locals_for_with.currentApp:typeof currentApp!=="undefined"?currentApp:undefined,"session" in locals_for_with?locals_for_with.session:typeof session!=="undefined"?session:undefined,"menus" in locals_for_with?locals_for_with.menus:typeof menus!=="undefined"?menus:undefined));;return buf.join("");
}
function portal_appList(locals) {
var jade_debug = [{ lineno: 1, filename: "appList.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, apps) {
jade_debug.unshift({ lineno: 0, filename: "appList.jade" });
jade_debug.unshift({ lineno: 1, filename: "appList.jade" });
buf.push("<!--");
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
buf.push("Created by wangnan on 14-4-25.2");
jade_debug.shift();
jade_debug.shift();
buf.push("-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "appList.jade" });
buf.push("<div id=\"portal_app\" style=\"margin-top: 20px;\" class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "appList.jade" });
if ( apps)
{
jade_debug.unshift({ lineno: 5, filename: "appList.jade" });
jade_debug.unshift({ lineno: 5, filename: "appList.jade" });
// iterate apps
;(function(){
  var $$obj = apps;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var app = $$obj[$index];

jade_debug.unshift({ lineno: 5, filename: "appList.jade" });
jade_debug.unshift({ lineno: 6, filename: "appList.jade" });
buf.push("<div style=\"background: #D46408;\"" + (jade.attr("onclick", 'changeApp("' + (app.code) + '", "' + (app.indexPage) + '");', true, false)) + " class=\"mm-box app-box col-md-12\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "appList.jade" });
buf.push("<h1 class=\"text-center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = app.name) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "appList.jade" });
buf.push("<p class=\"col-md-12 text-center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = app.desc) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var app = $$obj[$index];

jade_debug.unshift({ lineno: 5, filename: "appList.jade" });
jade_debug.unshift({ lineno: 6, filename: "appList.jade" });
buf.push("<div style=\"background: #D46408;\"" + (jade.attr("onclick", 'changeApp("' + (app.code) + '", "' + (app.indexPage) + '");', true, false)) + " class=\"mm-box app-box col-md-12\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "appList.jade" });
buf.push("<h1 class=\"text-center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = app.name) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "appList.jade" });
buf.push("<p class=\"col-md-12 text-center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = app.desc) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "appList.jade" });
buf.push("<script>");
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("function changeApp(code, indexPage) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 12, filename: jade_debug[0].filename });
buf.push("    console.log('change app to ' + code);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("    window.open('/' + code + '/main', code);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("    //pup.template.renderTemplateByKey(\"portal.menu\", {code : code});");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("    //$.getJSON('/portal/menuTree', {code : code}, function(menuTree) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("    //    console.dir(menuTree);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("    //});");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("}");
jade_debug.shift();
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.shift();}("undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"apps" in locals_for_with?locals_for_with.apps:typeof apps!=="undefined"?apps:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "//\n   Created by wangnan on 14-4-25.2\n#portal_app.row(style='margin-top: 20px;')\n    if apps\n        each app in apps\n            .mm-box.app-box.col-md-12(style='background: #D46408;', onclick='changeApp(\"#{app.code}\", \"#{app.indexPage}\");')\n                h1.text-center #{app.name}\n                p.col-md-12.text-center #{app.desc}\n\nscript.\n    function changeApp(code, indexPage) {\n        console.log('change app to ' + code);\n        window.open('/' + code + '/main', code);\n        //pup.template.renderTemplateByKey(\"portal.menu\", {code : code});\n        //$.getJSON('/portal/menuTree', {code : code}, function(menuTree) {\n        //    console.dir(menuTree);\n        //});\n    }");
}
}
function portal_header(locals) {
var jade_debug = [{ lineno: 1, filename: "header.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, session, chn) {
jade_debug.unshift({ lineno: 0, filename: "header.jade" });
jade_debug.unshift({ lineno: 1, filename: "header.jade" });
buf.push("<script src=\"/socket.io/socket.io.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "header.jade" });
buf.push("<script>");
jade_debug.unshift({ lineno: 3, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: jade_debug[0].filename });
buf.push("$(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("    $('#msgCount').hide();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("    var socket = io.connect(\"http://localhost:3000\");");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("    socket.emit('message.list', {}, function(result) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("        $('#msgCount').hide();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("        resetMessageMenu(result);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("    socket.on('notification', function(result) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("        $('#msgCount').hide();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 12, filename: jade_debug[0].filename });
buf.push("        resetMessageMenu(result);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("});");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("function resetMessageMenu(data) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("    var totalNum = data.totalNum;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("    var msgArr = data.data;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("    $('#msgCount').html(totalNum);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 20, filename: jade_debug[0].filename });
buf.push("    if(totalNum && totalNum > 0) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 21, filename: jade_debug[0].filename });
buf.push("        $('#msgCount').show();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("    }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("    $( \"#msgMenu\" ).remove();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 24, filename: jade_debug[0].filename });
buf.push("    var msgDropDownHtml = $('#msgDropDown').html();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("    var msgMenuBuffer = \"\";");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push("    if(msgArr && msgArr.length > 0) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 27, filename: jade_debug[0].filename });
buf.push("        msgMenuBuffer += \"<ul id='msgMenu' role='menu' aria-labelledby='dropdownMenuUser' class='dropdown-menu'>\";");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 28, filename: jade_debug[0].filename });
buf.push("        for(var i = 0; i < msgArr.length; i++) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push("            var msg = msgArr[i];");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 30, filename: jade_debug[0].filename });
buf.push("            msgMenuBuffer += \"<li role='presentation'>\"");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 31, filename: jade_debug[0].filename });
buf.push("            + \"<a role='menuitem' tabindex='-1' href='/user/setting'>\"");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 32, filename: jade_debug[0].filename });
buf.push("            + \"<i style='position: absolute;' class='text-left'>\" + msg.key_name");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 33, filename: jade_debug[0].filename });
buf.push("            + \"</i><div style='margin-left: 100px;' class='label text-right label-danger'>\" + msg.count");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 34, filename: jade_debug[0].filename });
buf.push("            + \"</div></a></li>\";");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 35, filename: jade_debug[0].filename });
buf.push("        }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 36, filename: jade_debug[0].filename });
buf.push("        msgMenuBuffer += \"</ul>\";");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 37, filename: jade_debug[0].filename });
buf.push("        var ul = $(msgMenuBuffer);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 38, filename: jade_debug[0].filename });
buf.push("        ul.insertAfter(\"#mu-msg\");");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 39, filename: jade_debug[0].filename });
buf.push("    }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 40, filename: jade_debug[0].filename });
buf.push("}");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 41, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 42, filename: "header.jade" });
buf.push("<input type=\"hidden\" id=\"userId\"" + (jade.attr("value", '' + (session.user._id) + '', true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 43, filename: "header.jade" });
buf.push("<div class=\"navbar navbar-default navbar-fixed-top\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 44, filename: "header.jade" });
buf.push("<div class=\"container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 45, filename: "header.jade" });
buf.push("<div class=\"navbar-header\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 46, filename: "header.jade" });
buf.push("<button type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" class=\"navbar-toggle\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 47, filename: "header.jade" });
buf.push("<span class=\"icon-bar\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 48, filename: "header.jade" });
buf.push("<span class=\"icon-bar\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 49, filename: "header.jade" });
buf.push("<span class=\"icon-bar\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 50, filename: "header.jade" });
buf.push("<a href=\"/\" class=\"navbar-brand\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 50, filename: jade_debug[0].filename });
buf.push("PUP");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 51, filename: "header.jade" });
buf.push("<div class=\"collapse navbar-collapse\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 52, filename: "header.jade" });
buf.push("<ul class=\"nav navbar-nav navbar-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 53, filename: "header.jade" });
buf.push("<li" + (jade.cls([(locals.chn && chn=='app') ? 'active': ''], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 54, filename: "header.jade" });
buf.push("<a id=\"mu-apps\" href=\"javascript:void(0);\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 54, filename: jade_debug[0].filename });
buf.push("系统列表");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.unshift({ lineno: 56, filename: "header.jade" });
if ( session.user)
{
jade_debug.unshift({ lineno: 57, filename: "header.jade" });
jade_debug.unshift({ lineno: 57, filename: "header.jade" });
buf.push("<ul class=\"nav navbar-nav navbar-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 58, filename: "header.jade" });
buf.push("<li id=\"msgDropDown\"" + (jade.cls(['dropdown',(locals.chn && chn=='message') ? 'active': ''], [null,true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 59, filename: "header.jade" });
buf.push("<a id=\"mu-msg\" href=\"javascript:void(0);\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 60, filename: "header.jade" });
buf.push("<i class=\"icon-list-bullet\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 61, filename: "header.jade" });
buf.push("<div id=\"msgCount\" class=\"label label-danger\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 61, filename: jade_debug[0].filename });
buf.push("6");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 63, filename: "header.jade" });
buf.push("<!--ul#msgMenu.dropdown-menu(role=\"menu\", aria-labelledby=\"dropdownMenuUser\")-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 64, filename: "header.jade" });
buf.push("<!--    li(role=\"presentation\")-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 65, filename: "header.jade" });
buf.push("<!--        a(role='menuitem', tabindex=\"-1\", href='/user/setting')-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 66, filename: "header.jade" });
buf.push("<!--            i.text-left(style=\"position: absolute;\") 新分配名单-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 67, filename: "header.jade" });
buf.push("<!--            .label.text-right.label-danger(style=\"margin-left: 100px;\") 1-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 68, filename: "header.jade" });
buf.push("<!--    li(role=\"presentation\")-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 69, filename: "header.jade" });
buf.push("<!--        a(role='menuitem', tabindex=\"-1\", href='/user/setting')-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 70, filename: "header.jade" });
buf.push("<!--            i.text-left(style=\"position: absolute;\") 系统公告-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 71, filename: "header.jade" });
buf.push("<!--            .label.text-right.label-danger(style=\"margin-left: 100px;\") 3-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 72, filename: "header.jade" });
buf.push("<!--    li(role=\"presentation\")-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 73, filename: "header.jade" });
buf.push("<!--        a(role='menuitem', tabindex=\"-1\", href='/user/setting')-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 74, filename: "header.jade" });
buf.push("<!--            i.text-left(style=\"position: absolute;\") 行动计划-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 75, filename: "header.jade" });
buf.push("<!--            .label.text-right.label-danger(style=\"margin-left: 100px;\") 1-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 76, filename: "header.jade" });
buf.push("<!--    li(role=\"presentation\")-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 77, filename: "header.jade" });
buf.push("<!--        a(role='menuitem', tabindex=\"-1\", href='/user/setting')-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 78, filename: "header.jade" });
buf.push("<!--            i.text-left(style=\"position: absolute;\") 质检-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 79, filename: "header.jade" });
buf.push("<!--            .label.text-right.label-danger(style=\"margin-left: 100px;\") 1-->");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 79, filename: "header.jade" });
buf.push("<li class=\"dropdown\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 80, filename: "header.jade" });
buf.push("<a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 80, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = session.user.name) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 81, filename: "header.jade" });
buf.push("<ul role=\"menu\" aria-labelledby=\"dropdownMenuUser\" class=\"dropdown-menu\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 82, filename: "header.jade" });
buf.push("<li role=\"presentation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 83, filename: "header.jade" });
buf.push("<a role=\"menuitem\" tabindex=\"-1\" href=\"/user/setting\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 83, filename: jade_debug[0].filename });
buf.push("设置");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 84, filename: "header.jade" });
buf.push("<li role=\"presentation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 85, filename: "header.jade" });
buf.push("<a role=\"menuitem\" tabindex=\"-1\" href=\"/logout\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 85, filename: jade_debug[0].filename });
buf.push("注销");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();}("undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"session" in locals_for_with?locals_for_with.session:typeof session!=="undefined"?session:undefined,"chn" in locals_for_with?locals_for_with.chn:typeof chn!=="undefined"?chn:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "script(src='/socket.io/socket.io.js')\nscript.\n    $(function() {\n        $('#msgCount').hide();\n        var socket = io.connect(\"http://localhost:3000\");\n        socket.emit('message.list', {}, function(result) {\n            $('#msgCount').hide();\n            resetMessageMenu(result);\n        });\n        socket.on('notification', function(result) {\n            $('#msgCount').hide();\n            resetMessageMenu(result);\n        });\n    });\n\n    function resetMessageMenu(data) {\n        var totalNum = data.totalNum;\n        var msgArr = data.data;\n        $('#msgCount').html(totalNum);\n        if(totalNum && totalNum > 0) {\n            $('#msgCount').show();\n        }\n        $( \"#msgMenu\" ).remove();\n        var msgDropDownHtml = $('#msgDropDown').html();\n        var msgMenuBuffer = \"\";\n        if(msgArr && msgArr.length > 0) {\n            msgMenuBuffer += \"<ul id='msgMenu' role='menu' aria-labelledby='dropdownMenuUser' class='dropdown-menu'>\";\n            for(var i = 0; i < msgArr.length; i++) {\n                var msg = msgArr[i];\n                msgMenuBuffer += \"<li role='presentation'>\"\n                + \"<a role='menuitem' tabindex='-1' href='/user/setting'>\"\n                + \"<i style='position: absolute;' class='text-left'>\" + msg.key_name\n                + \"</i><div style='margin-left: 100px;' class='label text-right label-danger'>\" + msg.count\n                + \"</div></a></li>\";\n            }\n            msgMenuBuffer += \"</ul>\";\n            var ul = $(msgMenuBuffer);\n            ul.insertAfter(\"#mu-msg\");\n        }\n    }\n\ninput(type='hidden', id='userId', value='#{session.user._id}')\n.navbar.navbar-default.navbar-fixed-top\n    .container\n        .navbar-header\n            button.navbar-toggle(type='button', data-toggle='collapse', data-target='.navbar-collapse')\n                span.icon-bar\n                span.icon-bar\n                span.icon-bar\n            a.navbar-brand(href='/') PUP\n        .collapse.navbar-collapse\n            ul.nav.navbar-nav.navbar-left\n                li(class= (locals.chn && chn=='app') ? 'active': '')\n                    a#mu-apps(href='javascript:void(0);') 系统列表\n\n            if session.user\n                ul.nav.navbar-nav.navbar-right\n                    li#msgDropDown.dropdown(class= (locals.chn && chn=='message') ? 'active': '')\n                        a#mu-msg.dropdown-toggle(href='javascript:void(0);', data-toggle='dropdown')\n                            i.icon-list-bullet\n                            #msgCount.label.label-danger 6\n                        //ul#msgMenu.dropdown-menu(role=\"menu\", aria-labelledby=\"dropdownMenuUser\")\n                        //    li(role=\"presentation\")\n                        //        a(role='menuitem', tabindex=\"-1\", href='/user/setting')\n                        //            i.text-left(style=\"position: absolute;\") 新分配名单\n                        //            .label.text-right.label-danger(style=\"margin-left: 100px;\") 1\n                        //    li(role=\"presentation\")\n                        //        a(role='menuitem', tabindex=\"-1\", href='/user/setting')\n                        //            i.text-left(style=\"position: absolute;\") 系统公告\n                        //            .label.text-right.label-danger(style=\"margin-left: 100px;\") 3\n                        //    li(role=\"presentation\")\n                        //        a(role='menuitem', tabindex=\"-1\", href='/user/setting')\n                        //            i.text-left(style=\"position: absolute;\") 行动计划\n                        //            .label.text-right.label-danger(style=\"margin-left: 100px;\") 1\n                        //    li(role=\"presentation\")\n                        //        a(role='menuitem', tabindex=\"-1\", href='/user/setting')\n                        //            i.text-left(style=\"position: absolute;\") 质检\n                        //            .label.text-right.label-danger(style=\"margin-left: 100px;\") 1\n                    li.dropdown\n                        a.dropdown-toggle(href='#', data-toggle='dropdown') #{session.user.name}\n                        ul.dropdown-menu(role=\"menu\", aria-labelledby=\"dropdownMenuUser\")\n                            li(role=\"presentation\")\n                                a(role='menuitem', tabindex=\"-1\", href='/user/setting') 设置\n                            li(role=\"presentation\")\n                                a(role='menuitem', tabindex=\"-1\", href='/logout') 注销");
}
}
function portal_index(locals) {
var jade_debug = [{ lineno: 1, filename: "index.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, title, session, chn) {
jade_debug.unshift({ lineno: 0, filename: "layout.jade" });
jade_debug.unshift({ lineno: 1, filename: "layout.jade" });
buf.push("<!DOCTYPE html>");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "layout.jade" });
buf.push("<html>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "layout.jade" });
buf.push("<head>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "layout.jade" });
jade_debug.unshift({ lineno: 5, filename: "layout.jade" });
buf.push("<title>" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</title>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/stylesheets/bootstrap.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/font-css/fontello.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/stylesheets/style.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: undefined, filename: "layout.jade" });
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "layout.jade" });
buf.push("<script src=\"/javascripts/jquery-1.11.0.min.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "layout.jade" });
buf.push("<script src=\"/javascripts/bootstrap.min.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "layout.jade" });
jade_debug.unshift({ lineno: 3, filename: "index.jade" });
buf.push("<script>");
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("$(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("    $('#mu-apps').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("        $('#apps').show();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("        $('#message').hide();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("    $('#mu-msg').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("        $('#message').show();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("        $('#apps').hide();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 12, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("    ");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("    $('.app-box').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("        var path = $(this).data('href');");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("        window.open(path);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("    $('.f-task').click(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("        window.open('/crm/audit/detail');");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 20, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 21, filename: jade_debug[0].filename });
buf.push("});");
jade_debug.shift();
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
buf.push("</head>");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "layout.jade" });
buf.push("<body style=\"\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: "layout.jade" });
buf.push("<div id=\"wrap\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 0, filename: "layout.jade" });
jade_debug.unshift({ lineno: 1, filename: "header.jade" });
buf.push("<script src=\"/socket.io/socket.io.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "header.jade" });
buf.push("<script>");
jade_debug.unshift({ lineno: 3, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: jade_debug[0].filename });
buf.push("$(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("    $('#msgCount').hide();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("    var socket = io.connect(\"http://localhost:3000\");");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("    socket.emit('message.list', {}, function(result) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("        $('#msgCount').hide();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("        resetMessageMenu(result);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("    socket.on('notification', function(result) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("        $('#msgCount').hide();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 12, filename: jade_debug[0].filename });
buf.push("        resetMessageMenu(result);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("});");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("function resetMessageMenu(data) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("    var totalNum = data.totalNum;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("    var msgArr = data.data;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("    $('#msgCount').html(totalNum);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 20, filename: jade_debug[0].filename });
buf.push("    if(totalNum && totalNum > 0) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 21, filename: jade_debug[0].filename });
buf.push("        $('#msgCount').show();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("    }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("    $( \"#msgMenu\" ).remove();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 24, filename: jade_debug[0].filename });
buf.push("    var msgDropDownHtml = $('#msgDropDown').html();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("    var msgMenuBuffer = \"\";");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push("    if(msgArr && msgArr.length > 0) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 27, filename: jade_debug[0].filename });
buf.push("        msgMenuBuffer += \"<ul id='msgMenu' role='menu' aria-labelledby='dropdownMenuUser' class='dropdown-menu'>\";");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 28, filename: jade_debug[0].filename });
buf.push("        for(var i = 0; i < msgArr.length; i++) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push("            var msg = msgArr[i];");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 30, filename: jade_debug[0].filename });
buf.push("            msgMenuBuffer += \"<li role='presentation'>\"");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 31, filename: jade_debug[0].filename });
buf.push("            + \"<a role='menuitem' tabindex='-1' href='/user/setting'>\"");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 32, filename: jade_debug[0].filename });
buf.push("            + \"<i style='position: absolute;' class='text-left'>\" + msg.key_name");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 33, filename: jade_debug[0].filename });
buf.push("            + \"</i><div style='margin-left: 100px;' class='label text-right label-danger'>\" + msg.count");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 34, filename: jade_debug[0].filename });
buf.push("            + \"</div></a></li>\";");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 35, filename: jade_debug[0].filename });
buf.push("        }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 36, filename: jade_debug[0].filename });
buf.push("        msgMenuBuffer += \"</ul>\";");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 37, filename: jade_debug[0].filename });
buf.push("        var ul = $(msgMenuBuffer);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 38, filename: jade_debug[0].filename });
buf.push("        ul.insertAfter(\"#mu-msg\");");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 39, filename: jade_debug[0].filename });
buf.push("    }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 40, filename: jade_debug[0].filename });
buf.push("}");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 41, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 42, filename: "header.jade" });
buf.push("<input type=\"hidden\" id=\"userId\"" + (jade.attr("value", '' + (session.user._id) + '', true, true)) + ">");
jade_debug.shift();
jade_debug.unshift({ lineno: 43, filename: "header.jade" });
buf.push("<div class=\"navbar navbar-default navbar-fixed-top\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 44, filename: "header.jade" });
buf.push("<div class=\"container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 45, filename: "header.jade" });
buf.push("<div class=\"navbar-header\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 46, filename: "header.jade" });
buf.push("<button type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" class=\"navbar-toggle\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 47, filename: "header.jade" });
buf.push("<span class=\"icon-bar\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 48, filename: "header.jade" });
buf.push("<span class=\"icon-bar\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 49, filename: "header.jade" });
buf.push("<span class=\"icon-bar\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 50, filename: "header.jade" });
buf.push("<a href=\"/\" class=\"navbar-brand\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 50, filename: jade_debug[0].filename });
buf.push("PUP");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 51, filename: "header.jade" });
buf.push("<div class=\"collapse navbar-collapse\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 52, filename: "header.jade" });
buf.push("<ul class=\"nav navbar-nav navbar-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 53, filename: "header.jade" });
buf.push("<li" + (jade.cls([(locals.chn && chn=='app') ? 'active': ''], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 54, filename: "header.jade" });
buf.push("<a id=\"mu-apps\" href=\"javascript:void(0);\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 54, filename: jade_debug[0].filename });
buf.push("系统列表");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.unshift({ lineno: 56, filename: "header.jade" });
if ( session.user)
{
jade_debug.unshift({ lineno: 57, filename: "header.jade" });
jade_debug.unshift({ lineno: 57, filename: "header.jade" });
buf.push("<ul class=\"nav navbar-nav navbar-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 58, filename: "header.jade" });
buf.push("<li id=\"msgDropDown\"" + (jade.cls(['dropdown',(locals.chn && chn=='message') ? 'active': ''], [null,true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 59, filename: "header.jade" });
buf.push("<a id=\"mu-msg\" href=\"javascript:void(0);\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 60, filename: "header.jade" });
buf.push("<i class=\"icon-list-bullet\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 61, filename: "header.jade" });
buf.push("<div id=\"msgCount\" class=\"label label-danger\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 61, filename: jade_debug[0].filename });
buf.push("6");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 63, filename: "header.jade" });
buf.push("<!--ul#msgMenu.dropdown-menu(role=\"menu\", aria-labelledby=\"dropdownMenuUser\")-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 64, filename: "header.jade" });
buf.push("<!--    li(role=\"presentation\")-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 65, filename: "header.jade" });
buf.push("<!--        a(role='menuitem', tabindex=\"-1\", href='/user/setting')-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 66, filename: "header.jade" });
buf.push("<!--            i.text-left(style=\"position: absolute;\") 新分配名单-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 67, filename: "header.jade" });
buf.push("<!--            .label.text-right.label-danger(style=\"margin-left: 100px;\") 1-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 68, filename: "header.jade" });
buf.push("<!--    li(role=\"presentation\")-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 69, filename: "header.jade" });
buf.push("<!--        a(role='menuitem', tabindex=\"-1\", href='/user/setting')-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 70, filename: "header.jade" });
buf.push("<!--            i.text-left(style=\"position: absolute;\") 系统公告-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 71, filename: "header.jade" });
buf.push("<!--            .label.text-right.label-danger(style=\"margin-left: 100px;\") 3-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 72, filename: "header.jade" });
buf.push("<!--    li(role=\"presentation\")-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 73, filename: "header.jade" });
buf.push("<!--        a(role='menuitem', tabindex=\"-1\", href='/user/setting')-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 74, filename: "header.jade" });
buf.push("<!--            i.text-left(style=\"position: absolute;\") 行动计划-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 75, filename: "header.jade" });
buf.push("<!--            .label.text-right.label-danger(style=\"margin-left: 100px;\") 1-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 76, filename: "header.jade" });
buf.push("<!--    li(role=\"presentation\")-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 77, filename: "header.jade" });
buf.push("<!--        a(role='menuitem', tabindex=\"-1\", href='/user/setting')-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 78, filename: "header.jade" });
buf.push("<!--            i.text-left(style=\"position: absolute;\") 质检-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 79, filename: "header.jade" });
buf.push("<!--            .label.text-right.label-danger(style=\"margin-left: 100px;\") 1-->");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 79, filename: "header.jade" });
buf.push("<li class=\"dropdown\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 80, filename: "header.jade" });
buf.push("<a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 80, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = session.user.name) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 81, filename: "header.jade" });
buf.push("<ul role=\"menu\" aria-labelledby=\"dropdownMenuUser\" class=\"dropdown-menu\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 82, filename: "header.jade" });
buf.push("<li role=\"presentation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 83, filename: "header.jade" });
buf.push("<a role=\"menuitem\" tabindex=\"-1\" href=\"/user/setting\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 83, filename: jade_debug[0].filename });
buf.push("设置");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 84, filename: "header.jade" });
buf.push("<li role=\"presentation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 85, filename: "header.jade" });
buf.push("<a role=\"menuitem\" tabindex=\"-1\" href=\"/logout\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 85, filename: jade_debug[0].filename });
buf.push("注销");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "layout.jade" });
buf.push("<div class=\"container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "layout.jade" });
buf.push("<div id=\"msg\" style=\"display: none;\" class=\"alert alert-success col-md-6 col-md-offset-3 alert-dismissable\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: "layout.jade" });
buf.push("<button data-dismiss=\"alert\" aria-hidden=\"true\" class=\"close\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("&times;");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "layout.jade" });
buf.push("<p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("操作成功");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "layout.jade" });
jade_debug.unshift({ lineno: 23, filename: "index.jade" });
buf.push("<div id=\"message\" style=\"margin-top: 10px;\" class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 24, filename: "index.jade" });
buf.push("<div style=\"height:200px;margin:10px;cursor:pointer;\" class=\"mm-box col-md-2 f-task\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: "index.jade" });
buf.push("<h4>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("20商机跟进");
jade_debug.shift();
jade_debug.shift();
buf.push("</h4>");
jade_debug.shift();
jade_debug.unshift({ lineno: 26, filename: "index.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 27, filename: "index.jade" });
buf.push("<div class=\"col-md-12\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 28, filename: "index.jade" });
buf.push("<i style=\"margin-right: 5px;\" class=\"icon-user-8\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 29, filename: "index.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push("张先生");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 30, filename: "index.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 31, filename: "index.jade" });
buf.push("<div class=\"col-md-12\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 32, filename: "index.jade" });
buf.push("<i style=\"margin-right: 5px;\" class=\"icon-phone-3\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 33, filename: "index.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 33, filename: jade_debug[0].filename });
buf.push("13812345678");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 34, filename: "index.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 35, filename: "index.jade" });
buf.push("<div style=\"background: #a52410;height: 1px;margin:10px auto;\" class=\"divider\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 36, filename: "index.jade" });
buf.push("<p style=\"margin-top: 5px\" class=\"small text-muted\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 36, filename: jade_debug[0].filename });
buf.push("介绍海外固定收益产品，客户了解怎么保证收益、时间、门槛、投资方式，表示感兴趣");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 37, filename: "index.jade" });
buf.push("<div class=\"col-md-12 bottom\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: "index.jade" });
buf.push("<h6 class=\"text-info\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: jade_debug[0].filename });
buf.push("顾问消息示例");
jade_debug.shift();
jade_debug.shift();
buf.push("</h6>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 39, filename: "index.jade" });
buf.push("<div style=\"height:200px;margin:10px;cursor:pointer;\" class=\"mm-box col-md-2 f-task\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 40, filename: "index.jade" });
buf.push("<h4>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 40, filename: jade_debug[0].filename });
buf.push("40商机判定");
jade_debug.shift();
jade_debug.shift();
buf.push("</h4>");
jade_debug.shift();
jade_debug.unshift({ lineno: 41, filename: "index.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 42, filename: "index.jade" });
buf.push("<div class=\"col-md-12\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 43, filename: "index.jade" });
buf.push("<i style=\"margin-right: 5px;\" class=\"icon-user-8\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 44, filename: "index.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 44, filename: jade_debug[0].filename });
buf.push("David");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 45, filename: "index.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 46, filename: "index.jade" });
buf.push("<div class=\"col-md-12\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 47, filename: "index.jade" });
buf.push("<i style=\"margin-right: 5px;\" class=\"icon-clock\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 48, filename: "index.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 48, filename: jade_debug[0].filename });
buf.push("今天 16:00");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 49, filename: "index.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 50, filename: "index.jade" });
buf.push("<div style=\"background: #a52410;height: 1px;margin:10px auto;\" class=\"divider\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 51, filename: "index.jade" });
buf.push("<p style=\"margin-top: 5px\" class=\"small text-muted\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 51, filename: jade_debug[0].filename });
buf.push("电话跟进，约见");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 52, filename: "index.jade" });
buf.push("<div class=\"col-md-12 bottom\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 53, filename: "index.jade" });
buf.push("<h6 class=\"text-info\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 53, filename: jade_debug[0].filename });
buf.push("质检消息示例");
jade_debug.shift();
jade_debug.shift();
buf.push("</h6>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 54, filename: "index.jade" });
buf.push("<div style=\"height:200px;margin:10px;cursor:pointer;\" class=\"mm-box col-md-3 f-task\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 55, filename: "index.jade" });
buf.push("<h4>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 55, filename: jade_debug[0].filename });
buf.push("到账通知");
jade_debug.shift();
jade_debug.shift();
buf.push("</h4>");
jade_debug.shift();
jade_debug.unshift({ lineno: 56, filename: "index.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 57, filename: "index.jade" });
buf.push("<div class=\"col-md-12\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 58, filename: "index.jade" });
buf.push("<i style=\"margin-right: 5px;\" class=\"icon-user-8\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 59, filename: "index.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 59, filename: jade_debug[0].filename });
buf.push("张xx 先生");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 60, filename: "index.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 61, filename: "index.jade" });
buf.push("<div class=\"col-md-12\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 62, filename: "index.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 62, filename: jade_debug[0].filename });
buf.push("盛世神州苏州昂内地产基金");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 63, filename: "index.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 64, filename: "index.jade" });
buf.push("<div class=\"col-md-6\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 65, filename: "index.jade" });
buf.push("<i style=\"margin-right: 5px;\" class=\"icon-yen\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 66, filename: "index.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 66, filename: jade_debug[0].filename });
buf.push("1000万");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 67, filename: "index.jade" });
buf.push("<div class=\"col-md-6\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 68, filename: "index.jade" });
buf.push("<i style=\"margin-right: 5px;\" class=\"icon-clock\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 69, filename: "index.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 69, filename: jade_debug[0].filename });
buf.push("今天 16:00");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 70, filename: "index.jade" });
buf.push("<div class=\"col-md-12 bottom\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 71, filename: "index.jade" });
buf.push("<h6 class=\"text-info\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 71, filename: jade_debug[0].filename });
buf.push("RM消息示例");
jade_debug.shift();
jade_debug.shift();
buf.push("</h6>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 72, filename: "index.jade" });
buf.push("<div style=\"height:200px;margin:10px;cursor:pointer;\" class=\"mm-box col-md-3 f-task\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 73, filename: "index.jade" });
buf.push("<h4>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 73, filename: jade_debug[0].filename });
buf.push("成立公告");
jade_debug.shift();
jade_debug.shift();
buf.push("</h4>");
jade_debug.shift();
jade_debug.unshift({ lineno: 74, filename: "index.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 75, filename: "index.jade" });
buf.push("<div class=\"col-md-12\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 76, filename: "index.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 76, filename: jade_debug[0].filename });
buf.push("盛世神州苏州昂内地产基金");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 77, filename: "index.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 78, filename: "index.jade" });
buf.push("<div class=\"col-md-6\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 79, filename: "index.jade" });
buf.push("<i style=\"margin-right: 5px;\" class=\"icon-calendar\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 80, filename: "index.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 80, filename: jade_debug[0].filename });
buf.push("2014.2.1");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 81, filename: "index.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 82, filename: "index.jade" });
buf.push("<div style=\"background: #a52410;height: 1px;margin:10px auto;\" class=\"divider\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 83, filename: "index.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 84, filename: "index.jade" });
buf.push("<span class=\"col-md-6 text-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 84, filename: jade_debug[0].filename });
buf.push("张xx 先生");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 85, filename: "index.jade" });
buf.push("<span class=\"col-md-6 text-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 85, filename: jade_debug[0].filename });
buf.push("1000万");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 86, filename: "index.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 87, filename: "index.jade" });
buf.push("<span class=\"col-md-6 text-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 87, filename: jade_debug[0].filename });
buf.push("李xx 先生");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 88, filename: "index.jade" });
buf.push("<span class=\"col-md-6 text-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 88, filename: jade_debug[0].filename });
buf.push("800万");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 89, filename: "index.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 90, filename: "index.jade" });
buf.push("<span class=\"col-md-6 text-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 90, filename: jade_debug[0].filename });
buf.push("王xx 先生");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 91, filename: "index.jade" });
buf.push("<span class=\"col-md-6 text-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 91, filename: jade_debug[0].filename });
buf.push("800万");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 92, filename: "index.jade" });
buf.push("<div class=\"col-md-12 bottom\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 93, filename: "index.jade" });
buf.push("<h6 class=\"text-info\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 93, filename: jade_debug[0].filename });
buf.push("RM消息示例");
jade_debug.shift();
jade_debug.shift();
buf.push("</h6>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 94, filename: "index.jade" });
buf.push("<div style=\"height:200px;margin:10px;cursor:pointer;\" class=\"mm-box col-md-3 f-task\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 95, filename: "index.jade" });
buf.push("<h4>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 95, filename: jade_debug[0].filename });
buf.push("订单通知");
jade_debug.shift();
jade_debug.shift();
buf.push("</h4>");
jade_debug.shift();
jade_debug.unshift({ lineno: 96, filename: "index.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 97, filename: "index.jade" });
buf.push("<div class=\"col-md-6\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 98, filename: "index.jade" });
buf.push("<i style=\"margin-right: 5px;\" class=\"icon-user-8\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 99, filename: "index.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 99, filename: jade_debug[0].filename });
buf.push("张xx 先生");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 100, filename: "index.jade" });
buf.push("<div class=\"col-md-6\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 101, filename: "index.jade" });
buf.push("<i style=\"margin-right: 5px;\" class=\"icon-user-8\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 102, filename: "index.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 102, filename: jade_debug[0].filename });
buf.push("David");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 103, filename: "index.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 104, filename: "index.jade" });
buf.push("<div class=\"col-md-6\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 105, filename: "index.jade" });
buf.push("<i style=\"margin-right: 5px;\" class=\"icon-yen\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 106, filename: "index.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 106, filename: jade_debug[0].filename });
buf.push("1000万");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 107, filename: "index.jade" });
buf.push("<div class=\"col-md-6\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 108, filename: "index.jade" });
buf.push("<i style=\"margin-right: 5px;\" class=\"icon-clock\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 109, filename: "index.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 109, filename: jade_debug[0].filename });
buf.push("今天 16:00");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 110, filename: "index.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 111, filename: "index.jade" });
buf.push("<div class=\"col-md-12\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 112, filename: "index.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 112, filename: jade_debug[0].filename });
buf.push("盛世神州苏州昂内地产基金");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 113, filename: "index.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 114, filename: "index.jade" });
buf.push("<div class=\"col-md-12\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 115, filename: "index.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 115, filename: jade_debug[0].filename });
buf.push("合同编号: A12345678");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 116, filename: "index.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 117, filename: "index.jade" });
buf.push("<div style=\"background: #a52410;height: 1px;margin:10px auto;\" class=\"divider\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 118, filename: "index.jade" });
buf.push("<p class=\"text-muted small\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 118, filename: jade_debug[0].filename });
buf.push("客户追投");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 119, filename: "index.jade" });
buf.push("<div class=\"col-md-12 bottom\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 120, filename: "index.jade" });
buf.push("<h6 class=\"text-info\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 120, filename: jade_debug[0].filename });
buf.push("产品消息示例");
jade_debug.shift();
jade_debug.shift();
buf.push("</h6>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 121, filename: "index.jade" });
buf.push("<div id=\"apps\" style=\"display: none;margin-top: 20px;\" class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 122, filename: "index.jade" });
if ( session.user.apps)
{
jade_debug.unshift({ lineno: 123, filename: "index.jade" });
jade_debug.unshift({ lineno: 123, filename: "index.jade" });
// iterate session.user.apps
;(function(){
  var $$obj = session.user.apps;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var app = $$obj[$index];

jade_debug.unshift({ lineno: 123, filename: "index.jade" });
jade_debug.unshift({ lineno: 124, filename: "index.jade" });
buf.push("<div style=\"background: #D46408;\"" + (jade.attr("data-href", '' + (app.prefix_url) + '', true, true)) + " class=\"mm-box app-box col-md-12\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 125, filename: "index.jade" });
buf.push("<h1 class=\"text-center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 125, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = app.title) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.unshift({ lineno: 126, filename: "index.jade" });
buf.push("<p class=\"col-md-12 text-center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 126, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = app.name) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var app = $$obj[$index];

jade_debug.unshift({ lineno: 123, filename: "index.jade" });
jade_debug.unshift({ lineno: 124, filename: "index.jade" });
buf.push("<div style=\"background: #D46408;\"" + (jade.attr("data-href", '' + (app.prefix_url) + '', true, true)) + " class=\"mm-box app-box col-md-12\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 125, filename: "index.jade" });
buf.push("<h1 class=\"text-center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 125, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = app.title) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.unshift({ lineno: 126, filename: "index.jade" });
buf.push("<p class=\"col-md-12 text-center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 126, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = app.name) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 0, filename: "layout.jade" });
jade_debug.unshift({ lineno: 1, filename: "footer.jade" });
buf.push("<div id=\"footer\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "footer.jade" });
buf.push("<div class=\"container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "footer.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "footer.jade" });
buf.push("<div style=\"margin: 20px 0; font-size: small;\" class=\"col-md-6 text-muted\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "footer.jade" });
buf.push("<p class=\"text-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("© 2014 帆茂投资管理有限公司");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "footer.jade" });
buf.push("<div style=\"margin: 20px 0; font-size: small;\" class=\"col-md-6 text-muted\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "footer.jade" });
buf.push("<p class=\"text-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("帮助");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
buf.push("</body>");
jade_debug.shift();
jade_debug.shift();
buf.push("</html>");
jade_debug.shift();
jade_debug.shift();}("undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"session" in locals_for_with?locals_for_with.session:typeof session!=="undefined"?session:undefined,"chn" in locals_for_with?locals_for_with.chn:typeof chn!=="undefined"?chn:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "extends layout\nblock script\n    script.\n        $(function() {\n            $('#mu-apps').click(function() {\n                $('#apps').show();\n                $('#message').hide();\n            });\n            $('#mu-msg').click(function() {\n                $('#message').show();\n                $('#apps').hide();\n            });\n\n            $('.app-box').click(function() {\n                var path = $(this).data('href');\n                window.open(path);\n            });\n            $('.f-task').click(function() {\n                window.open('/crm/audit/detail');\n            });\n        });\nblock content\n    #message.row(style='margin-top: 10px;')\n        .mm-box.col-md-2.f-task(style='height:200px;margin:10px;cursor:pointer;')\n            h4 20商机跟进\n            .row\n                .col-md-12\n                    i.icon-user-8(style='margin-right: 5px;')\n                    span 张先生\n            .row\n                .col-md-12\n                    i.icon-phone-3(style='margin-right: 5px;')\n                    span 13812345678\n            .row\n                .divider(style='background: #a52410;height: 1px;margin:10px auto;')\n            p.small.text-muted(style='margin-top: 5px') 介绍海外固定收益产品，客户了解怎么保证收益、时间、门槛、投资方式，表示感兴趣\n            .col-md-12.bottom\n                h6.text-info 顾问消息示例\n        .mm-box.col-md-2.f-task(style='height:200px;margin:10px;cursor:pointer;')\n            h4 40商机判定\n            .row\n                .col-md-12\n                    i.icon-user-8(style='margin-right: 5px;')\n                    span David\n            .row\n                .col-md-12\n                    i.icon-clock(style='margin-right: 5px;')\n                    span 今天 16:00\n            .row\n                .divider(style='background: #a52410;height: 1px;margin:10px auto;')\n            p.small.text-muted(style='margin-top: 5px') 电话跟进，约见\n            .col-md-12.bottom\n                h6.text-info 质检消息示例\n        .mm-box.col-md-3.f-task(style='height:200px;margin:10px;cursor:pointer;')\n            h4 到账通知\n            .row\n                .col-md-12\n                    i.icon-user-8(style='margin-right: 5px;')\n                    span 张xx 先生\n            .row\n                .col-md-12\n                    span 盛世神州苏州昂内地产基金\n            .row\n                .col-md-6\n                    i.icon-yen(style='margin-right: 5px;')\n                    span 1000万\n                .col-md-6\n                    i.icon-clock(style='margin-right: 5px;')\n                    span 今天 16:00\n            .col-md-12.bottom\n                h6.text-info RM消息示例\n        .mm-box.col-md-3.f-task(style='height:200px;margin:10px;cursor:pointer;')\n            h4 成立公告\n            .row\n                .col-md-12\n                    span 盛世神州苏州昂内地产基金\n            .row\n                .col-md-6\n                    i.icon-calendar(style='margin-right: 5px;')\n                    span 2014.2.1\n            .row\n                .divider(style='background: #a52410;height: 1px;margin:10px auto;')\n            .row\n                span.col-md-6.text-left 张xx 先生\n                span.col-md-6.text-right 1000万\n            .row\n                span.col-md-6.text-left 李xx 先生\n                span.col-md-6.text-right 800万\n            .row\n                span.col-md-6.text-left 王xx 先生\n                span.col-md-6.text-right 800万\n            .col-md-12.bottom\n                h6.text-info RM消息示例\n        .mm-box.col-md-3.f-task(style='height:200px;margin:10px;cursor:pointer;')\n            h4 订单通知\n            .row\n                .col-md-6\n                    i.icon-user-8(style='margin-right: 5px;')\n                    span 张xx 先生\n                .col-md-6\n                    i.icon-user-8(style='margin-right: 5px;')\n                    span David\n            .row\n                .col-md-6\n                    i.icon-yen(style='margin-right: 5px;')\n                    span 1000万\n                .col-md-6\n                    i.icon-clock(style='margin-right: 5px;')\n                    span 今天 16:00\n            .row\n                .col-md-12\n                    span 盛世神州苏州昂内地产基金\n            .row\n                .col-md-12\n                    span 合同编号: A12345678\n            .row\n                .divider(style='background: #a52410;height: 1px;margin:10px auto;')\n            p.text-muted.small 客户追投\n            .col-md-12.bottom\n                h6.text-info 产品消息示例\n    #apps.row(style='display: none;margin-top: 20px;')\n        if session.user.apps\n            each app in session.user.apps\n                .mm-box.app-box.col-md-12(style='background: #D46408;', data-href='#{app.prefix_url}')\n                    h1.text-center #{app.title}\n                    p.col-md-12.text-center #{app.name}\n\n\n");
}
}
function portal_layout(locals) {
var jade_debug = [{ lineno: 1, filename: "layout.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, title, session, chn) {
jade_debug.unshift({ lineno: 0, filename: "layout.jade" });
jade_debug.unshift({ lineno: 1, filename: "layout.jade" });
buf.push("<!DOCTYPE html>");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "layout.jade" });
buf.push("<html>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "layout.jade" });
buf.push("<head>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "layout.jade" });
jade_debug.unshift({ lineno: 5, filename: "layout.jade" });
buf.push("<title>" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</title>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/stylesheets/bootstrap.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/font-css/fontello.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "layout.jade" });
buf.push("<link rel=\"stylesheet\" href=\"/stylesheets/style.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: undefined, filename: "layout.jade" });
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "layout.jade" });
buf.push("<script src=\"/javascripts/jquery-1.11.0.min.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "layout.jade" });
buf.push("<script src=\"/javascripts/bootstrap.min.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: undefined, filename: "layout.jade" });
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
buf.push("</head>");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "layout.jade" });
buf.push("<body style=\"\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: "layout.jade" });
buf.push("<div id=\"wrap\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 0, filename: "layout.jade" });
jade_debug.unshift({ lineno: 1, filename: "header.jade" });
buf.push("<script src=\"/socket.io/socket.io.js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "header.jade" });
buf.push("<script>");
jade_debug.unshift({ lineno: 3, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: jade_debug[0].filename });
buf.push("$(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("    $('#msgCount').hide();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("    var socket = io.connect(\"http://localhost:3000\");");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("    socket.emit('message.list', {}, function(result) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("        $('#msgCount').hide();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("        resetMessageMenu(result);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("    socket.on('notification', function(result) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("        $('#msgCount').hide();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 12, filename: jade_debug[0].filename });
buf.push("        resetMessageMenu(result);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("});");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("function resetMessageMenu(data) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("    var totalNum = data.totalNum;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("    var msgArr = data.data;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("    $('#msgCount').html(totalNum);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 20, filename: jade_debug[0].filename });
buf.push("    if(totalNum && totalNum > 0) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 21, filename: jade_debug[0].filename });
buf.push("        $('#msgCount').show();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("    }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("    $( \"#msgMenu\" ).remove();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 24, filename: jade_debug[0].filename });
buf.push("    var msgDropDownHtml = $('#msgDropDown').html();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("    var msgMenuBuffer = \"\";");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push("    if(msgArr && msgArr.length > 0) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 27, filename: jade_debug[0].filename });
buf.push("        msgMenuBuffer += \"<ul id='msgMenu' role='menu' aria-labelledby='dropdownMenuUser' class='dropdown-menu'>\";");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 28, filename: jade_debug[0].filename });
buf.push("        for(var i = 0; i < msgArr.length; i++) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push("            var msg = msgArr[i];");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 30, filename: jade_debug[0].filename });
buf.push("            msgMenuBuffer += \"<li role='presentation'>\"");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 31, filename: jade_debug[0].filename });
buf.push("            + \"<a role='menuitem' tabindex='-1' href='/user/setting'>\"");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 32, filename: jade_debug[0].filename });
buf.push("            + \"<i style='position: absolute;' class='text-left'>\" + msg.key_name");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 33, filename: jade_debug[0].filename });
buf.push("            + \"</i><div style='margin-left: 100px;' class='label text-right label-danger'>\" + msg.count");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 34, filename: jade_debug[0].filename });
buf.push("            + \"</div></a></li>\";");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 35, filename: jade_debug[0].filename });
buf.push("        }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 36, filename: jade_debug[0].filename });
buf.push("        msgMenuBuffer += \"</ul>\";");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 37, filename: jade_debug[0].filename });
buf.push("        var ul = $(msgMenuBuffer);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 38, filename: jade_debug[0].filename });
buf.push("        ul.insertAfter(\"#mu-msg\");");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 39, filename: jade_debug[0].filename });
buf.push("    }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 40, filename: jade_debug[0].filename });
buf.push("}");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 41, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift({ lineno: 42, filename: "header.jade" });
buf.push("<input type=\"hidden\" id=\"userId\"" + (jade.attr("value", '' + (session.user._id) + '', true, true)) + ">");
jade_debug.shift();
jade_debug.unshift({ lineno: 43, filename: "header.jade" });
buf.push("<div class=\"navbar navbar-default navbar-fixed-top\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 44, filename: "header.jade" });
buf.push("<div class=\"container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 45, filename: "header.jade" });
buf.push("<div class=\"navbar-header\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 46, filename: "header.jade" });
buf.push("<button type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" class=\"navbar-toggle\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 47, filename: "header.jade" });
buf.push("<span class=\"icon-bar\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 48, filename: "header.jade" });
buf.push("<span class=\"icon-bar\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 49, filename: "header.jade" });
buf.push("<span class=\"icon-bar\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 50, filename: "header.jade" });
buf.push("<a href=\"/\" class=\"navbar-brand\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 50, filename: jade_debug[0].filename });
buf.push("PUP");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 51, filename: "header.jade" });
buf.push("<div class=\"collapse navbar-collapse\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 52, filename: "header.jade" });
buf.push("<ul class=\"nav navbar-nav navbar-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 53, filename: "header.jade" });
buf.push("<li" + (jade.cls([(locals.chn && chn=='app') ? 'active': ''], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 54, filename: "header.jade" });
buf.push("<a id=\"mu-apps\" href=\"javascript:void(0);\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 54, filename: jade_debug[0].filename });
buf.push("系统列表");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.unshift({ lineno: 56, filename: "header.jade" });
if ( session.user)
{
jade_debug.unshift({ lineno: 57, filename: "header.jade" });
jade_debug.unshift({ lineno: 57, filename: "header.jade" });
buf.push("<ul class=\"nav navbar-nav navbar-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 58, filename: "header.jade" });
buf.push("<li id=\"msgDropDown\"" + (jade.cls(['dropdown',(locals.chn && chn=='message') ? 'active': ''], [null,true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 59, filename: "header.jade" });
buf.push("<a id=\"mu-msg\" href=\"javascript:void(0);\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 60, filename: "header.jade" });
buf.push("<i class=\"icon-list-bullet\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.unshift({ lineno: 61, filename: "header.jade" });
buf.push("<div id=\"msgCount\" class=\"label label-danger\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 61, filename: jade_debug[0].filename });
buf.push("6");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 63, filename: "header.jade" });
buf.push("<!--ul#msgMenu.dropdown-menu(role=\"menu\", aria-labelledby=\"dropdownMenuUser\")-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 64, filename: "header.jade" });
buf.push("<!--    li(role=\"presentation\")-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 65, filename: "header.jade" });
buf.push("<!--        a(role='menuitem', tabindex=\"-1\", href='/user/setting')-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 66, filename: "header.jade" });
buf.push("<!--            i.text-left(style=\"position: absolute;\") 新分配名单-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 67, filename: "header.jade" });
buf.push("<!--            .label.text-right.label-danger(style=\"margin-left: 100px;\") 1-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 68, filename: "header.jade" });
buf.push("<!--    li(role=\"presentation\")-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 69, filename: "header.jade" });
buf.push("<!--        a(role='menuitem', tabindex=\"-1\", href='/user/setting')-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 70, filename: "header.jade" });
buf.push("<!--            i.text-left(style=\"position: absolute;\") 系统公告-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 71, filename: "header.jade" });
buf.push("<!--            .label.text-right.label-danger(style=\"margin-left: 100px;\") 3-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 72, filename: "header.jade" });
buf.push("<!--    li(role=\"presentation\")-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 73, filename: "header.jade" });
buf.push("<!--        a(role='menuitem', tabindex=\"-1\", href='/user/setting')-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 74, filename: "header.jade" });
buf.push("<!--            i.text-left(style=\"position: absolute;\") 行动计划-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 75, filename: "header.jade" });
buf.push("<!--            .label.text-right.label-danger(style=\"margin-left: 100px;\") 1-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 76, filename: "header.jade" });
buf.push("<!--    li(role=\"presentation\")-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 77, filename: "header.jade" });
buf.push("<!--        a(role='menuitem', tabindex=\"-1\", href='/user/setting')-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 78, filename: "header.jade" });
buf.push("<!--            i.text-left(style=\"position: absolute;\") 质检-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 79, filename: "header.jade" });
buf.push("<!--            .label.text-right.label-danger(style=\"margin-left: 100px;\") 1-->");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 79, filename: "header.jade" });
buf.push("<li class=\"dropdown\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 80, filename: "header.jade" });
buf.push("<a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 80, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = session.user.name) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 81, filename: "header.jade" });
buf.push("<ul role=\"menu\" aria-labelledby=\"dropdownMenuUser\" class=\"dropdown-menu\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 82, filename: "header.jade" });
buf.push("<li role=\"presentation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 83, filename: "header.jade" });
buf.push("<a role=\"menuitem\" tabindex=\"-1\" href=\"/user/setting\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 83, filename: jade_debug[0].filename });
buf.push("设置");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 84, filename: "header.jade" });
buf.push("<li role=\"presentation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 85, filename: "header.jade" });
buf.push("<a role=\"menuitem\" tabindex=\"-1\" href=\"/logout\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 85, filename: jade_debug[0].filename });
buf.push("注销");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "layout.jade" });
buf.push("<div class=\"container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "layout.jade" });
buf.push("<div id=\"msg\" style=\"display: none;\" class=\"alert alert-success col-md-6 col-md-offset-3 alert-dismissable\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: "layout.jade" });
buf.push("<button data-dismiss=\"alert\" aria-hidden=\"true\" class=\"close\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("&times;");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "layout.jade" });
buf.push("<p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("操作成功");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: undefined, filename: "layout.jade" });
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
buf.push("");
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 0, filename: "layout.jade" });
jade_debug.unshift({ lineno: 1, filename: "footer.jade" });
buf.push("<div id=\"footer\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "footer.jade" });
buf.push("<div class=\"container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "footer.jade" });
buf.push("<div class=\"row\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "footer.jade" });
buf.push("<div style=\"margin: 20px 0; font-size: small;\" class=\"col-md-6 text-muted\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "footer.jade" });
buf.push("<p class=\"text-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("© 2014 帆茂投资管理有限公司");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "footer.jade" });
buf.push("<div style=\"margin: 20px 0; font-size: small;\" class=\"col-md-6 text-muted\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "footer.jade" });
buf.push("<p class=\"text-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("帮助");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
buf.push("</body>");
jade_debug.shift();
jade_debug.shift();
buf.push("</html>");
jade_debug.shift();
jade_debug.shift();}("undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"session" in locals_for_with?locals_for_with.session:typeof session!=="undefined"?session:undefined,"chn" in locals_for_with?locals_for_with.chn:typeof chn!=="undefined"?chn:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "doctype html\nhtml\n    head\n        block head\n            title= title\n            link(rel='stylesheet', href='/stylesheets/bootstrap.css')\n            link(rel='stylesheet', href='/font-css/fontello.css')\n            link(rel='stylesheet', href='/stylesheets/style.css')\n            block style\n            script(src='/javascripts/jquery-1.11.0.min.js')\n            script(src='/javascripts/bootstrap.min.js')\n            block script\n    body(style='')\n        #wrap\n            include header\n            .container\n                #msg.alert.alert-success.col-md-6.col-md-offset-3.alert-dismissable(style='display: none;')\n                    button(class=\"close\", data-dismiss=\"alert\", aria-hidden=\"true\") &times;\n                    p 操作成功\n                block content\n        include footer");
}
}
function portal_menu(locals) {
var jade_debug = [{ lineno: 1, filename: "menu.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (session, menus, undefined) {
jade_debug.unshift({ lineno: 0, filename: "menu.jade" });
jade_debug.unshift({ lineno: 1, filename: "menu.jade" });
buf.push("<!--");
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
buf.push("Created by wangnan on 14-4-25.");
jade_debug.shift();
jade_debug.shift();
buf.push("-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "../includes/utils.jade" });
jade_debug.unshift({ lineno: 1, filename: "../includes/utils.jade" });
buf.push("<!--");
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
buf.push("Created by wangnan on 14-5-6.");
jade_debug.shift();
jade_debug.shift();
buf.push("-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "../includes/utils.jade" });
var utils = {};
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "../includes/utils.jade" });
utils.authFunc = function(fnCode) {
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "../includes/utils.jade" });
if(!fnCode) return false;
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "../includes/utils.jade" });
var functionMap = session.user.functionMap;
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "../includes/utils.jade" });
if(functionMap[fnCode]) {
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "../includes/utils.jade" });
return true;
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "../includes/utils.jade" });
}
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "../includes/utils.jade" });
};
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "menu.jade" });
if ( session && session.user && menus && menus.length)
{
jade_debug.unshift({ lineno: 5, filename: "menu.jade" });
jade_debug.unshift({ lineno: 5, filename: "menu.jade" });
// iterate menus
;(function(){
  var $$obj = menus;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var m = $$obj[$index];

jade_debug.unshift({ lineno: 5, filename: "menu.jade" });
jade_debug.unshift({ lineno: 6, filename: "menu.jade" });
if ( utils.authFunc(m.code))
{
jade_debug.unshift({ lineno: 7, filename: "menu.jade" });
jade_debug.unshift({ lineno: 7, filename: "menu.jade" });
buf.push("<li class=\"dropdown\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "menu.jade" });
buf.push("<a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "menu.jade" });
buf.push("" + (jade.escape((jade_interp = m.name) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "menu.jade" });
buf.push("<span class=\"caret\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "menu.jade" });
buf.push("<ul role=\"menu\" aria-labelledby=\"dropdownMenu\" class=\"dropdown-menu\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "menu.jade" });
if ( m.children && m.children.length)
{
jade_debug.unshift({ lineno: 13, filename: "menu.jade" });
jade_debug.unshift({ lineno: 13, filename: "menu.jade" });
// iterate m.children
;(function(){
  var $$obj = m.children;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var func = $$obj[$index];

jade_debug.unshift({ lineno: 13, filename: "menu.jade" });
jade_debug.unshift({ lineno: 14, filename: "menu.jade" });
if ( utils.authFunc(func.code))
{
jade_debug.unshift({ lineno: 15, filename: "menu.jade" });
jade_debug.unshift({ lineno: 15, filename: "menu.jade" });
buf.push("<li role=\"presentation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "menu.jade" });
buf.push("<a role=\"menuitem\" tabindex=\"-1\"" + (jade.attr("href", 'javascript:pup.template.renderTemplateByKey("' + (func.funcAction) + '");', true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "menu.jade" });
buf.push("" + (jade.escape((jade_interp = func.name) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var func = $$obj[$index];

jade_debug.unshift({ lineno: 13, filename: "menu.jade" });
jade_debug.unshift({ lineno: 14, filename: "menu.jade" });
if ( utils.authFunc(func.code))
{
jade_debug.unshift({ lineno: 15, filename: "menu.jade" });
jade_debug.unshift({ lineno: 15, filename: "menu.jade" });
buf.push("<li role=\"presentation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "menu.jade" });
buf.push("<a role=\"menuitem\" tabindex=\"-1\"" + (jade.attr("href", 'javascript:pup.template.renderTemplateByKey("' + (func.funcAction) + '");', true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "menu.jade" });
buf.push("" + (jade.escape((jade_interp = func.name) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var m = $$obj[$index];

jade_debug.unshift({ lineno: 5, filename: "menu.jade" });
jade_debug.unshift({ lineno: 6, filename: "menu.jade" });
if ( utils.authFunc(m.code))
{
jade_debug.unshift({ lineno: 7, filename: "menu.jade" });
jade_debug.unshift({ lineno: 7, filename: "menu.jade" });
buf.push("<li class=\"dropdown\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "menu.jade" });
buf.push("<a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "menu.jade" });
buf.push("" + (jade.escape((jade_interp = m.name) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "menu.jade" });
buf.push("<span class=\"caret\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "menu.jade" });
buf.push("<ul role=\"menu\" aria-labelledby=\"dropdownMenu\" class=\"dropdown-menu\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "menu.jade" });
if ( m.children && m.children.length)
{
jade_debug.unshift({ lineno: 13, filename: "menu.jade" });
jade_debug.unshift({ lineno: 13, filename: "menu.jade" });
// iterate m.children
;(function(){
  var $$obj = m.children;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var func = $$obj[$index];

jade_debug.unshift({ lineno: 13, filename: "menu.jade" });
jade_debug.unshift({ lineno: 14, filename: "menu.jade" });
if ( utils.authFunc(func.code))
{
jade_debug.unshift({ lineno: 15, filename: "menu.jade" });
jade_debug.unshift({ lineno: 15, filename: "menu.jade" });
buf.push("<li role=\"presentation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "menu.jade" });
buf.push("<a role=\"menuitem\" tabindex=\"-1\"" + (jade.attr("href", 'javascript:pup.template.renderTemplateByKey("' + (func.funcAction) + '");', true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "menu.jade" });
buf.push("" + (jade.escape((jade_interp = func.name) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var func = $$obj[$index];

jade_debug.unshift({ lineno: 13, filename: "menu.jade" });
jade_debug.unshift({ lineno: 14, filename: "menu.jade" });
if ( utils.authFunc(func.code))
{
jade_debug.unshift({ lineno: 15, filename: "menu.jade" });
jade_debug.unshift({ lineno: 15, filename: "menu.jade" });
buf.push("<li role=\"presentation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "menu.jade" });
buf.push("<a role=\"menuitem\" tabindex=\"-1\"" + (jade.attr("href", 'javascript:pup.template.renderTemplateByKey("' + (func.funcAction) + '");', true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "menu.jade" });
buf.push("" + (jade.escape((jade_interp = func.name) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();}("session" in locals_for_with?locals_for_with.session:typeof session!=="undefined"?session:undefined,"menus" in locals_for_with?locals_for_with.menus:typeof menus!=="undefined"?menus:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "//\n   Created by wangnan on 14-4-25.\ninclude ../includes/utils\nif session && session.user && menus && menus.length\n    each m in menus\n        if utils.authFunc(m.code)\n            li(class='dropdown')\n                a.dropdown-toggle(href='#', data-toggle='dropdown')\n                    | #{m.name}\n                    span.caret\n                ul.dropdown-menu(role=\"menu\", aria-labelledby=\"dropdownMenu\")\n                    if m.children && m.children.length\n                        each func in m.children\n                            if utils.authFunc(func.code)\n                                li(role=\"presentation\")\n                                    a(role='menuitem', tabindex=\"-1\", href='javascript:pup.template.renderTemplateByKey(\"#{func.funcAction}\");')\n                                        | #{func.name}\n");
}
}
