
(function($) {
    toastr.options.timeOut = 1000;
    toastr.options.extendedTimeOut = 3000;
    toastr.options.closeButton = true;
    toastr.options.positionClass = 'toast-top-center';
})(jQuery);


function toast(msg) {
    if(msg.type == 'SUCCESS') {
        toastr.success(msg.body);
    } else if(msg.type == 'INFO') {
        toastr.info(msg.body);
    } else if(msg.type == 'WARNING') {
        toastr.warning(msg.body);
    } else if(msg.type == 'ERROR') {
        toastr.error(msg.body);
    } else {
        toastr.info(msg.body);
    }
}

var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
};

function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
        return entityMap[s];
    });
}

function startloading() {
    $('body').waitMe({
        effect: 'bounce',
        text: 'Please wait...',
        bg: 'rgba(255,255,255,0.3)',
        color:'#000',
        sizeW:'',
        sizeH:'',
        source: 'images/img.svg'
    });
}

function closeLoading() {
    $('body').waitMe('hide');
}

Date.prototype.format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function format(dateStr, pattern) {
    if(pattern == undefined) {
        pattern = 'yyyy-MM-dd';
    }
    return new Date(dateStr).format(pattern);
}

function tags(tags) {
    var tagBuf = "";
    for(var i = 0; i < tags.length; i++) {
        if(i == 0) {
            tagBuf += tags[i];
        } else {
            tagBuf += "  " + tags[i];
        }
    }
    return tagBuf;
}

function posNum(value) {
    var pattern = /^\+?[1-9][0-9]*$/;
    if(!pattern.test(value)) return false;

    return true;

}

function ajaxPost(_url, _method, _para) {
    $.ajax({
        type: "post",
        url: _url,
        data: _para,
        timeout: 120000,
        dataType: "json",
        success: function (data){
            _method.call(this,data);
        },
        error: ajaxError
    });
}

function ajaxError(){
    toast({type: 'error', body: '操作出错'});
}

function ajaxPage(page) {
    $("#Pagination").pagination(page.totalNum, {
        callback: pageselectCallback,
        items_per_page : page.items_per_page,
        num_display_entries : page.num_display_entries,
        num_edge_entries : page.num_edge_entries,
        current_page : page.current_page,
        prev_text : 'Prev',
        next_text : 'Next'
    });
}

function msgObject(type, body) {
    this.type = type;
    this.body = body;
}

function showSuccMsg(msg) {
    toast({type : 'SUCCESS', body : msg});
}

function showInfoMsg(msg) {
    toast({type : 'INFO', body : msg});
}

function showWarningMsg(msg) {
    toast({type : 'WARNING', body : msg});
}

function showErrorMsg(msg) {
    toast({type : 'ERROR', body : msg});
}

/**
 * 根据对象中的某个属性进行排序
 * @param name
 * @returns {Function}
 */
function by(name) {
	return function(o, p) {
		var a, b;
		if (typeof o === "object" && typeof p === "object" && o && p){
			a = o[name];
			b = p[name];
			if (a === b) {return 0;}
			if (typeof a === typeof b) { return a < b ? -1 : 1;}
			return typeof a < typeof b ? -1 : 1;
		} else {
			throw ("error"); 
		}
	}
}

/**
 * 自定义下拉列表内容排序函数，用于select2组件
 * @param data 待排序数组
 * @param term 查询关键词
 * @returns
 */
function legoSorter(data, term){
	if(!$.isEmptyObject(term) && data && data.constructor == Array){
		if(data[0] && 'sortField' in data[0]){
			data.sort(by('sortField'));
		}
	}
	return data;
}

/**
 * 设置下拉选项的值
 * @param elm select2元素
 * @param value 值
 */
function setSelectValue(elm, value){
	$(elm).val(value);
	var id = $(elm).attr('id');
	var options = $(elm).find('option');
	var text = '';
	$(options).each(function(){
		if($(this).attr('value') == value){
			text = $(this).html();
			$(this).attr('selected', true);
		} else {
    		$(this).removeAttr('selected');
 		}
	});
	var textField = $(elm).parent().find('#select2-'+id+'-container');
	if(textField.length > 0){
		$(textField).attr('title', text).html(text);
	}
}

(function($){
    $.fn.serializeObject = function(){

        var self = this,
            json = {},
            push_counters = {},
            patterns = {
                "validate": /^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,
                "key":      /[a-zA-Z0-9_]+|(?=\[\])/g,
                "push":     /^$/,
                "fixed":    /^\d+$/,
                "named":    /^[a-zA-Z0-9_]+$/
            };


        this.build = function(base, key, value){
            base[key] = value;
            return base;
        };

        this.push_counter = function(key){
            if(push_counters[key] === undefined){
                push_counters[key] = 0;
            }
            return push_counters[key]++;
        };

        $.each($(this).serializeArray(), function(){

            // skip invalid keys
            if(!patterns.validate.test(this.name)){
                return;
            }

            var k,
                keys = this.name.match(patterns.key),
                merge = this.value,
                reverse_key = this.name;

            while((k = keys.pop()) !== undefined){

                // adjust reverse_key
                reverse_key = reverse_key.replace(new RegExp("\\[" + k + "\\]$"), '');

                // push
                if(k.match(patterns.push)){
                    merge = self.build([], self.push_counter(reverse_key), merge);
                }

                // fixed
                else if(k.match(patterns.fixed)){
                    merge = self.build([], k, merge);
                }

                // named
                else if(k.match(patterns.named)){
                    merge = self.build({}, k, merge);
                }
            }

            json = $.extend(true, json, merge);
        });

        return json;
    };
})(jQuery);
