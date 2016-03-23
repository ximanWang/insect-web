 <#assign c=JspTaglibs["http://java.sun.com/jstl/core_rt"]>
<#assign fmt=JspTaglibs["http://java.sun.com/jsp/jstl/fmt"]>
<#assign fn=JspTaglibs["http://java.sun.com/jsp/jstl/functions"]>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insect Tree</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="http://cdn.bootcss.com/twitter-bootstrap/3.0.3/css/bootstrap.min.css">
<link rel="stylesheet", href="<@c.url value='/dist/css/easyTree.min.css'/>" >
<script type="text/javascript" src="<@c.url value='/js/jquery-1.10.2.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/js/bootstrap.min.js'/>" ></script>
<script type="text/javascript" src="<@c.url value='/dist/js/easyTree.min.js'/>" ></script>
<style>
        body {
            background: #eee;
        }
</style>
</head>
<body>
  <!-- html block -->
<div class="col-md-3">
  <h3 class="text-success">Insect Tree </h3>
    <div class="easy-tree">
        <ul>
             <#if poiCategoryHTML??>
                  ${poiCategoryHTML}
             </#if>
        </ul>
    </div>
</div>
<script>
    (function ($) {
        function init() {
            $('.easy-tree').EasyTree({
                addable: true,
                editable: true,
                deletable: true
            });
        }

        window.onload = init();
    })(jQuery)
</script>
</body>
</html>