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
            <li>原尾目
                <ul>
                    <li>古蚖科 </li>
                    <li>华蚖科
                        <ul>
                            <li>属a</li>
                            <li>属b</li>
                            <li>属c</li>
                            <li>属d</li>
                        </ul>
                    </li>
                    <li>檗蚖科 </li>
                    <li>蚖科 </li>
                </ul>
            </li>
            <li>蜉蝣目
                <ul>
                    <li>鱼形蜉亚目
                        <ul>
                            <li>四节蜉科</li>
                        </ul>
                    </li>
                    <li>强气管蜉亚目
						<ul>
                            <li>蜉蝣科</li>
                            <li>蜉蝣科</li>
                        </ul>
					</li>
                    <li>多毛蜉亚目
                        <ul>
                            <li>扁蜉科
								<ul>
									<li>扁蜉属
                                        <ul>
                                            <li>种1</li>
                                            <li>种2</li>
                                        </ul>
                                    </li>
									<li>属2</li>
									<li>属3</li>
									<li>属4</li>
								</ul>
							</li>
                            <li>扁蜉科</li>
                            <li>扁蜉科</li>
                            <li>扁蜉科</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>原尾目
                <ul>
                    <li>古蚖科 </li>
                    <li>华蚖科
                        <ul>
                            <li>属a</li>
                            <li>属b</li>
                            <li>属c</li>
                            <li>属d</li>
                        </ul>
                    </li>
                    <li>檗蚖科 </li>
                    <li>蚖科 </li>
                </ul>
            </li>
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