/**
 * An easy tree view plugin for jQuery and Bootstrap
 * @Copyright yuez.me 2014
 * @Author yuez
 * @Version 0.1
 */

var EasyTree = function ($) {
    if (!$) throw Error('easyTree.js required jquery core');
    return {
        TreeLoader : function(treeSelector) {

            this.defaults = {
                selectable: true,
                deletable: true,
                editable: true,
//                addable: true,
                undoable: false,
                showMsg: true,
                dp: false,
                isRootUser: false,
                i18n: {
                    deleteNull: '请选择要删除的类目',
                    deleteConfirmation: '确定删除此类目吗?',
                    confirmButtonLabel: '确定',
                    editNull: '请选择要编辑的类目',
                    editMultiple: '一次只能编辑一个类目',
                    addMultiple: '请选择类目节点去新增',
                    noPermission: '无权对次分类做此操作',
                    noItemId: '刚新增的类目不能进行此操作',
                    noRepeatOpr: '已操作类目(相同ID)不能再做修改或者删除操作',
                    noDelNoLeaf: '非叶子节点不能做删除操作',
                    nameDuplicate: '类目名称已存在',
                    sameLevelNameDuplicate: '同级类目名称不能重复',
                    collapseTip: 'collapse',
                    expandTip: 'expand',
                    selectTip: 'select',
                    unselectTip: 'unselect',
                    editTip: '编辑',
                    undoTip: '撤销所有操作',
                    deleteTip: '删除',
                    cancelButtonLabel: '取消'
                },
                showMsgSelector : null,
                copyAddableSelector : null,
                adjustSelect : null,
                undoCallback: null
            };

            var ADD_TYPE = 0;

            var MODIFY_TYPE = 1;

            var DEL_TYPE = 2;

            var ADJUST_TYPE = 3;

            var MERGE_TYPE = 4;

            var COPY_TYPE = 5;
            
            var UPGRADE_TYPE = 6;

            this.oprList = [];

            this.oprNodeIds = [];

            this.easyTree = $(treeSelector);

            this.options = this.defaults;

            this.buildTree = function(customerOptions) {
                console.log(new Date().getTime())
                var warningAlert = $('<div class="alert alert-warning alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong></strong><span class="alert-content"></span> </div> ');
                var dangerAlert = $('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong></strong><span class="alert-content"></span> </div> ');
                var createInput = $('<div class="input-group" style="height:30px"><input type="text" class="form-control" style="height:30px"><span class="input-group-btn"><button type="button" class="btn btn-default btn-success confirm" style="height:30px"></button> </span><span class="input-group-btn"><button type="button" class="btn btn-default cancel" style="height:30px"></button> </span> </div> ');
                var createInputWithSelectHtm = '<div class="input-group" style="height:30px"><input type="text" class="form-control" style="width: 100px;height:30px;"></span><div style="float: left;border: 1px solid #ccc;height: 30px;"><select name="addCategoryId" id="addCategoryId" class="selectpicker" data-live-search="true"><option value="">-请选择-</option></select></div><span class="input-group-btn" style="float: left;height:30px"><button type="button" class="btn btn-default btn-success confirm" style="height:30px"></button><button type="button" class="btn btn-default cancel" style="height:30px"></button> </span> </div> ';
                //var createInputWithSelect = $('<div class="input-group"><input type="text" class="form-control" style="width: 100px"></span><div style="float: left;border: 1px solid #ccc;height: 32px;"><select name="addCategoryId" id="addCategoryId" class="selectpicker" data-live-search="true"><option value="">-请选择-</option></select></div><span class="input-group-btn" style="float: left"><button type="button" class="btn btn-default btn-success confirm"></button><button type="button" class="btn btn-default cancel"></button> </span> </div> ');
                this.options = $.extend(this.defaults, customerOptions);
                var options = this.options;
                var thiz = this;

                if(options.dp && options.copyAddableSelector) {
                    var $selectOptions = $(options.copyAddableSelector + " > option").clone();
                }

                $(this.easyTree).each(function () {
                    var easyTree = $(this);
                    $.each($(easyTree).find('ul > li'), function() {
                        var text;

                        if($(this).is('li:has(ul)')) {
                            var children = $(this).find(' > ul');
                            $(children).remove();
                            text = $(this).text();
                            $(this).html('<span><span class="glyphicon"></span><a href="javascript: void(0);"></a> </span>');
                            $(this).find(' > span > span').addClass('glyphicon-folder-open');
                            $(this).find(' > span > a').text(text);
                            $(this).append(children);
                        }
                        else {
                            text = $(this).text();
                            $(this).html('<span><span class="glyphicon"></span><a href="javascript: void(0);"></a> </span>');
                            $(this).find(' > span > span').addClass('glyphicon-file');
                            $(this).find(' > span > a').text(text);
                        }
                        var oprStatus = $(this).attr("oprStatus");
                        var isMain = $(this).attr('ismain');
                        var hasMultiParent = $(this).attr('hasMultiParent');
                        if(oprStatus == 'false') {
                            $(this).addClass("disabled");
                        }
                        if(isMain == 'false'){
                        	// 次路径
                        	$(this).addClass("secondary");
                        	$(this).find('span.glyphicon').append('<span class="secondary">(次)</span>');
                        } else if(hasMultiParent == 'true'){
                        	// 主路径，同时有多个父节点
                        	$(this).addClass("primary");
                        	$(this).find('span.glyphicon').append('<span class="primary">(主)</span>');
                        }
                        $(this).find(' > span').append('<span style="margin-left:-3px">('+$(this).attr('id')+')</span>');
                    });

                    $(easyTree).find('li:has(ul)').addClass('parent_li').find(' > span').attr('title', options.i18n.collapseTip);

                    // add easy tree toolbar dom
                    if (options.deletable || options.editable) {
                        $(easyTree).prepend('<div class="easy-tree-toolbar" data-spy="affix"><div class="titleBar" style="background-color: #ffffff;width: 40%;"><label class="control-label m-t-20" style="text-align: left;padding-left: 20px;color: #666">当前选中类目：</label><label class="control-label selectedCateName" style="color: #5cb85c"></label></div><div class="operatebar"></div><div class="actionbar"></div></div> ');
                    }

                    // editable
                    if (options.editable) {
                        $(easyTree).find('.easy-tree-toolbar .operatebar').append('<div class="edit"><button class="btn btn-default btn-md btn-primary disabled"><span class="icon icon-edit-3"></span></button></div> ');
                        $(easyTree).find('.easy-tree-toolbar .edit > button').attr('title', options.i18n.editTip).click(function () {
                            $(easyTree).find('input.easy-tree-editor').remove();
                            $(easyTree).find('li > span > a:hidden').show();
                            var selected = getSelectedItems();
                            if (selected.length <= 0) {
                                var adjustBlock = $(easyTree).find('.actionbar');
                                $(adjustBlock).html(warningAlert);
                                $(adjustBlock).find('.alert .alert-content').html(options.i18n.editNull);
                            }
                            else if (selected.length > 1) {
                                var adjustBlock = $(easyTree).find('.actionbar');
                                $(adjustBlock).html(warningAlert);
                                $(adjustBlock).find('.alert .alert-content').html(options.i18n.editMultiple);
                            }
                            else {
                                var isMain = $(selected).attr('isMain');

                                var selectedItemId = $(selected).attr('id');
                                if(!selectedItemId) {
                                    var adjustBlock = $(easyTree).find('.actionbar');
                                    $(adjustBlock).html(warningAlert);
                                    $(adjustBlock).find('.alert .alert-content').text(options.i18n.noItemId);
                                } else if(isMain == 'false') {
                                    var adjustBlock = $(easyTree).find('.actionbar');
                                    $(adjustBlock).html(warningAlert);
                                    $(adjustBlock).find('.alert .alert-content').text(options.i18n.noPermission);
                                } else {
                                    if($.inArray(selectedItemId, thiz.oprNodeIds) > -1) {
                                        var adjustBlock = $(easyTree).find('.actionbar');
                                        $(adjustBlock).html(warningAlert);
                                        $(adjustBlock).find('.alert .alert-content').text(options.i18n.noRepeatOpr);
                                        return;
                                    }

                                    var value = $(selected).find(' > span > a').text();
                                    $(selected).find(' > span > a').hide();
                                    $(selected).find(' > span').append('<input type="text" class="easy-tree-editor"><div class="btn-group"><button class="close" id="ok" type="button" title="确定" style="margin-left: 10px;font-size: 14px;float: left"><i class="icon icon-ok-6"></i></button><button class="close" id="cancel" type="button" title="取消" style="margin-left: 10px;font-size: 14px;"><i class="icon icon-cancel-7"></i></button></div>');
                                    var editor = $(selected).find(' > span > input.easy-tree-editor');
                                    var editorAction = $(selected).find(' > span > .btn-group');
                                    var okEditorBtn = $(selected).find(' > span > .btn-group > #ok');
                                    var cancelEditorBtn = $(selected).find(' > span > .btn-group > #cancel');
                                    $(editor).val($.trim(value));
                                    $(editor).focus();
                                    $(editor).keydown(function (e) {
                                        if (e.which == 13) {
                                        	var editorValue = $.trim($(editor).val());
                                            if (editorValue !== '') {

                                                $(editor).remove();
                                                $(editorAction).remove();

                                                if(validateNodeNewName(editorValue) && editorValue != value) {
                                                    thiz.oprNodeIds.push(selectedItemId);
                                                    $(selected).find(' > span > a').text(editorValue);
                                                    thiz.generateActionMsg(selected, null, MODIFY_TYPE, $.trim(value));
                                                }
                                                $(selected).find(' > span > a').show();

                                            }
                                        }
                                    });
                                    $(okEditorBtn).click(function() {
                                    	var editorValue = $.trim($(editor).val());
                                        if (editorValue !== '') {
                                            $(editor).remove();
                                            $(editorAction).remove();
                                            if(validateNodeNewName(editorValue) && editorValue != value) {
                                                thiz.oprNodeIds.push(selectedItemId);
                                                $(selected).find(' > span > a').text(editorValue);
                                                thiz.generateActionMsg(selected, null, MODIFY_TYPE, $.trim(value));
                                            }
                                            $(selected).find(' > span > a').show();

                                        }
                                    })

                                    $(cancelEditorBtn).click(function() {
                                        $(editor).remove();
                                        $(editorAction).remove();
                                        $(selected).find(' > span > a').show();
                                    });
                                }
                            }
                        });
                    }



                    // deletable
                    if (options.deletable) {
                        $(easyTree).find('.easy-tree-toolbar .operatebar').append('<div class="remove"><button class="btn btn-default btn-md btn-danger disabled"><span class="icon icon-trash"></span></button></div> ');
                        $(easyTree).find('.easy-tree-toolbar .remove > button').attr('title', options.i18n.deleteTip).click(function () {
                            var selected = getSelectedItems();
                            if (selected.length <= 0) {
                                var removeBlock = $(easyTree).find('.actionbar');
                                $(removeBlock).html(warningAlert);
                                $(removeBlock).find('.alert .alert-content').html(options.i18n.deleteNull);
                            } else {
                                var selectedItemId = $(selected).attr('id');
                                if(!selectedItemId) {
                                    var adjustBlock = $(easyTree).find('.actionbar');
                                    $(adjustBlock).html(warningAlert);
                                    $(adjustBlock).find('.alert .alert-content').text(options.i18n.noItemId);
                                } else {

                                    var isMain = $(selected).attr('isMain');

                                    if(isMain == 'true') {
                                        //主分类
                                        if($(selected).find('li').length > 0) {
                                            //非叶子节点不能删除
                                            var adjustBlock = $(easyTree).find('.actionbar');
                                            $(adjustBlock).html(warningAlert);
                                            $(adjustBlock).find('.alert .alert-content').text(options.i18n.noDelNoLeaf);
                                            return;
                                        }
                                    }

                                    if($.inArray(selectedItemId, thiz.oprNodeIds) > -1) {
                                        var adjustBlock = $(easyTree).find('.actionbar');
                                        $(adjustBlock).html(warningAlert);
                                        $(adjustBlock).find('.alert .alert-content').text(options.i18n.noRepeatOpr);
                                        return;
                                    }

                                    var removeBlock = $(easyTree).find('.actionbar');
                                    $(removeBlock).html(dangerAlert);
                                    $(easyTree).find('.alert .alert-content').html(options.i18n.deleteConfirmation)
                                        .append('<a style="margin-left: 10px;" class="btn btn-default btn-danger confirm"></a>')
                                        .find('.confirm').html(options.i18n.confirmButtonLabel);
                                    $(easyTree).find('.alert .alert-content .confirm').on('click', function () {
                                        thiz.oprNodeIds.push(selectedItemId);
                                        $(selected).find(' ul ').remove();
                                        thiz.generateActionMsg(selected, null, DEL_TYPE);
                                        if($(selected).parent('ul').find(' > li').length <= 1) {
                                            $(selected).parents('li').removeClass('parent_li').find(' > span > span').removeClass('glyphicon-folder-open').addClass('glyphicon-file');
                                            $(selected).parent('ul').remove();
                                        }
                                        $(selected).remove();
                                        var isMain = $(selected).attr('ismain');
                                        if(isMain == 'false'){
                                        	// 如果删除的是次路径，则把对应主路径的样式
                                        	var selectId = $(selected).attr('id');
                                        	var cateItems = $(easyTree).find('li[id='+selectId+']');
                                        	if(cateItems.length == 1 && cateItems.attr('ismain') == 'true'){
                                        		$('#'+selectId).removeClass('primary');
                                        		$('#'+selectId).find('.glyphicon').first().html('');
                                        	}
                                        }
                                        $(dangerAlert).remove();
                                        $(easyTree).find('.easy-tree-toolbar .selectedCateName').html('');
                                    });
                                }
                            }
                        });
                    }

                    
                    // collapse or expand
                    $(easyTree).delegate('li.parent_li > span', 'click', function (e) {
                        var children = $(this).parent('li.parent_li').find(' > ul > li');
                        if (children.is(':visible')) {
                            children.hide('fast');
                            $(this).attr('title', options.i18n.expandTip)
                                .find(' > span.glyphicon')
                                .addClass('glyphicon-folder-close')
                                .removeClass('glyphicon-folder-open');
                        } else {
                            children.show('fast');
                            $(this).attr('title', options.i18n.collapseTip)
                                .find(' > span.glyphicon')
                                .addClass('glyphicon-folder-open')
                                .removeClass('glyphicon-folder-close');
                        }
                        e.stopPropagation();
                    });

                    $(easyTree).show();
                    thiz.hideChildren($(this));
                    $('body').waitMe('hide');

                    // selectable, only single select
                    var selectHandler = function (e) {
                        var li = $(this).parent().parent();
                        if (li.hasClass('li_selected')) {
                            $(easyTree).find('.easy-tree-toolbar .selectedCateName').html('');
                            $(this).attr('title', options.i18n.selectTip);
                            $(li).removeClass('li_selected');
                        }
                        else {
                            $(easyTree).find('.easy-tree-toolbar .selectedCateName').html($(this).html());
                            $(easyTree).find('li.li_selected').removeClass('li_selected');
                            $(this).attr('title', options.i18n.unselectTip);
                            $(li).addClass('li_selected');
                        }

                        if (options.deletable || options.editable) {
                            var selected = $(easyTree).find('li.li_selected');
                            if (options.editable) {
                                if (selected.length <= 0 || selected.length > 1)
                                    $(easyTree).find('.easy-tree-toolbar .edit > button').addClass('disabled');
                                else
                                    $(easyTree).find('.easy-tree-toolbar .edit > button').removeClass('disabled');
                            }

                            if (options.adjustable) {
                                if (selected.length <= 0 || selected.length > 1)
                                    $(easyTree).find('.easy-tree-toolbar .adjust > button').addClass('disabled');
                                else
                                    $(easyTree).find('.easy-tree-toolbar .adjust > button').removeClass('disabled');
                            }

                            if (options.copyable) {
                                if (selected.length <= 0 || selected.length > 1)
                                    $(easyTree).find('.easy-tree-toolbar .copy > button').addClass('disabled');
                                else
                                    $(easyTree).find('.easy-tree-toolbar .copy > button').removeClass('disabled');
                            }
                            if (options.deletable) {
                            	var selected = $(easyTree).find('li.li_selected');
                            	var isMain = selected.hasClass('primary');
                                if (selected.length <= 0 || selected.length > 1 || isMain){
                                    $(easyTree).find('.easy-tree-toolbar .remove > button').addClass('disabled');
                                } else {
                                    $(easyTree).find('.easy-tree-toolbar .remove > button').removeClass('disabled');
                                }
                            }

                        }
                        
                        if (options.isRootUser){
                        	var selected = $(easyTree).find('li.li_selected');
                        	var isMain = selected.attr('ismain');
                        	if(isMain == 'false'){
                        		$(easyTree).find('.easy-tree-toolbar .upgrade > button').removeClass('disabled');
                        	} else {
                        		$(easyTree).find('.easy-tree-toolbar .upgrade > button').addClass('disabled');
                        	}
                        }

                        e.stopPropagation();

                    }
                    thiz.selectHandler = selectHandler;
                    
                    if (options.selectable) {
                        $(easyTree).find('li:not(.disabled) > span > a').attr('title', options.i18n.selectTip);
                        $(easyTree).find('li:not(.disabled) > span > a').click(selectHandler);
                    }
                    console.log(new Date().getTime())
                    // Get selected items
                    var getSelectedItems = function () {
                        return $(easyTree).find('li.li_selected');
                    };

                    var validateNodeNewName = function(newName) {
                        var selected = getSelectedItems();
                        //判断名称和其他频道名是否重复
                        var flag = true;
                        var selectSelector = $(selected).parent().closest('ul');

                        $.each($(easyTree).find('li'), function() {
                            if(!$(this).is($(selected))) {
                                if($(this).find('> span > a').html() == $.trim(newName)) {
                                    var adjustBlock = $(easyTree).find('.actionbar');
                                    $(adjustBlock).html(warningAlert);
                                    $(adjustBlock).find('.alert .alert-content').html(options.i18n.nameDuplicate);
                                    flag = false;
                                    return;
                                }
                            }
                        });
                        return flag;
                    };

                });
            };

            this.getParentExistId = function(selectedItem) {
                if(selectedItem  && selectedItem.length > 0) {
                    var itemId = $(selectedItem).attr("id");
                    if(!itemId) {
                        return this.getParentExistId($(selectedItem).parent().closest('li'));
                    } else {
                        return parseInt(itemId);
                    }
                } else {
                    return 0;
                }
            };

            this.getParentId = function(selectedItem) {
                if(selectedItem && selectedItem.length > 0) {
                	var parentItem = $(selectedItem).parent().closest('li');
                    if(parentItem) {
                        var itemId = parentItem.attr('id');
                        if(itemId) {
                            return parseInt(itemId);
                        }
                    }
                }
                return 0;
            };

            this.generateActionMsg = function (selectedItem, targetNode, actionType, oldName, newCategoryId) {
                if (this.options.undoable) {
                    $(this.easyTree).find('.easy-tree-toolbar .undo > button').removeAttr('disabled', 'disabled');
                }
                var oprData = {};
                if(this.options.showMsg && this.options.showMsgSelector) {
                     if (actionType == MODIFY_TYPE) {
                        var selectItemId = parseInt($(selectedItem).attr("id"));
                        //修改，更新
                        $(this.options.showMsgSelector).append("<li>将类目“" + oldName+"("+selectItemId+")" + "”名称更改为“" + $(selectedItem).find(" > span > a").html() + "”</li>");
                        oprData = {
                        	oprType : 'updCateName', 
                        	comment : $(this.options.showMsgSelector).find("li:last-child").html(), 
                        	categoryId : selectItemId, 
                        	oprData : {
                        		categoryId : selectItemId, 
                        		newCategoryName : $(selectedItem).find(" > span > a").html()
                        	}
                        };
                    } else if (actionType == DEL_TYPE) {
                        var selectItemId = parseInt($(selectedItem).attr("id"));
                        var selectItemName = $(selectedItem).find(" > span > a").html();
                        //删除
                        $(this.options.showMsgSelector).append("<li>删除类目“" +selectItemName+"("+selectItemId+")"+"”</li>");
                        oprData = {
                        	oprType : 'delCate', 
                        	comment : $(this.options.showMsgSelector).find("li:last-child").html(), 
                        	categoryId : selectItemId, 
                        	oprData : {categoryId : selectItemId}
                        };
                        if(this.options.dp) {
                            oprData.parentId = this.getParentId(selectedItem);
                        }
                    } 

                    this.oprList.push(oprData);

                    if (!$(this.options.showMsgSelector).closest('#accordion').is(':visible')) {
                        $(this.options.showMsgSelector).closest('#accordion').show();
                    }
                    $(this.options.showMsgSelector).scrollTop($(this.options.showMsgSelector)[0].scrollHeight);
                }
            }

            this.hideChildren = function(easyTree) {
                var options = this.options;
                $.each($(easyTree).find('li.parent_li'), function() {
                    var children = $(this).find(' > ul > li');
                    if (children.is(':visible')) {
                        children.hide('fast');
                        $(this).find(" > span").attr('title', options.i18n.expandTip)
                            .find(' > span.glyphicon')
                            .addClass('glyphicon-folder-close')
                            .removeClass('glyphicon-folder-open');
                    }

                });
            };

            this.getOprList = function() {
                return this.oprList;
            }

        }
    }
}(jQuery);