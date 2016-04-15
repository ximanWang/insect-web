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
                adjustable: false,
                deletable: false,
                editable: false,
                addable: true,
                undoable: false,
                showMsg: false,
                dp: false,
                isRootUser: false,
                i18n: {
                    deleteNull: '请选择要删除的类目',
                    deleteConfirmation: '确定删除此类目吗?',
                    upgradeConfirmation: '确定升级为主路径吗?',
                    confirmButtonLabel: '确定',
                    editNull: '请选择要编辑的类目',
                    adjustNull: '请选择一个类目去迁移、合并或者复制',
                    copyNull: '请选择一个类目去复制',
                    editMultiple: '一次只能编辑一个类目',
                    addMultiple: '请选择类目节点去新增',
                    noPermission: '无权对次分类做此操作',
                    noPermissionUpgrade: '无权将原主路径降级为次路径',
                    noItemId: '刚新增的类目不能进行此操作',
                    noRepeatOpr: '已操作类目(相同ID)不能再做修改或者删除操作',
                    noDelNoLeaf: '非叶子节点不能做删除操作',
                    newCategoryExist: '此类目名称已存在，请从新增操作的下拉列表中选择此类目',
                    addRootConfirmation: '确定要添加一个频道吗?',
                    nameDuplicate: '类目名称已存在',
                    sameLevelNameDuplicate: '同级类目名称不能重复',
                    inTheSameAncestor: '不能复制到同一频道下',
                    collapseTip: 'collapse',
                    expandTip: 'expand',
                    selectTip: 'select',
                    unselectTip: 'unselect',
                    editTip: '编辑',
                    addTip: '新增',
                    undoTip: '撤销所有操作',
                    adjustTip: '合并、迁移或者复制',
                    deleteTip: '删除',
                    upgradeTip: '升级为主路径',
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
                        
                        if(isMain == 'false'){
                        	// 次路径
                        	$(this).addClass("secondary");
                        	$(this).find('span.glyphicon').append('<span class="secondary">(次)</span>');
                        } else if(hasMultiParent == 'true'){
                        	// 主路径，同时有多个父节点
                        	$(this).addClass("primary");
                        	$(this).find('span.glyphicon').append('<span class="primary">(主)</span>');
                        }

//                        $(".easy-tree li.disabled").find("a:first").click(function(e) {
//                            e.stopImmediatePropagation();
//                        });
                        $(this).find(' > span').append('<span style="margin-left:-3px">('+$(this).attr('id')+')</span>');
                    });

                    $(easyTree).find('li:has(ul)').addClass('parent_li').find(' > span').attr('title', options.i18n.collapseTip);

                    // add easy tree toolbar dom
                    if (options.deletable || options.editable || options.addable || options.adjustable) {
                        $(easyTree).prepend('<div class="easy-tree-toolbar" data-spy="affix"><div class="titleBar" style="background-color: #ffffff;width: 40%;"><label class="control-label m-t-20" style="text-align: left;padding-left: 20px;color: #666">当前选中类目：</label><label class="control-label selectedCateName" style="color: #5cb85c"></label></div><div class="operatebar"></div><div class="actionbar"></div></div> ');
                    }

                    // addable
                    if (options.addable) {
                        $(easyTree).find('.easy-tree-toolbar .operatebar').append('<div class="create"><button class="btn btn-default btn-md btn-success"><span class="icon icon-plus-6"></span></button></div> ');
                        $(easyTree).find('.easy-tree-toolbar .create > button').attr('title', options.i18n.addTip).click(function () {
                            var selected = getSelectedItems();
                            if(selected.length <= 0) {
                                var adjustBlock = $(easyTree).find('.actionbar');
                                $(adjustBlock).html(dangerAlert);
                                $(adjustBlock).find('.alert .alert-content').html(options.i18n.addRootConfirmation)
                                    .append('<a style="margin-left: 10px;" class="btn btn-default btn-danger confirm"></a>')
                                    .find('.confirm').html(options.i18n.confirmButtonLabel);
                                $(adjustBlock).find('.alert .alert-content .confirm').on('click', function () {
                                    addNewNode();

                                    $(dangerAlert).remove();
                                });
                            } else {
                                addNewNode();
                            }

                        });
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

                    // adjustable
                    if (options.adjustable) {
                        $(easyTree).find('.easy-tree-toolbar .operatebar').append('<div class="adjust"><button class="btn btn-default btn-md btn-primary disabled"><span class="icon icon-unlink"></span></button></div> ');
                        $(easyTree).find('.easy-tree-toolbar .adjust > button').attr('title', options.i18n.adjustTip).click(function () {
                            var selected = getSelectedItems();
                            if (selected.length <= 0) {
                                var adjustBlock = $(easyTree).find('.actionbar');
                                $(adjustBlock).html(warningAlert);
                                $(adjustBlock).find('.alert .alert-content').html(options.i18n.adjustNull);
                            } else {
                                //select other node to adjust
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
                                    if ($.isFunction(options.adjustSelect)) {
                                        options.adjustSelect();
                                    }
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
//                        $(easyTree).prepend(dangerAlert);
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

                    if (options.undoable) {
                        $(easyTree).find('.easy-tree-toolbar .operatebar').append('<div class="undo"><button class="btn btn-default btn-md btn-danger" disabled><span class="icon icon-ccw-2"></span></button></div> ');
                        $(easyTree).find('.easy-tree-toolbar .undo > button').attr('title', options.i18n.undoTip).click(function () {
                            if($.isFunction(options.undoCallback)) {
                                options.undoCallback();
                            }
                        })
                    }
                    
                    if(options.isRootUser){
                    	$(easyTree).find('.easy-tree-toolbar .operatebar').append('<div class="upgrade"><button class="btn btn-default btn-md btn-primary disabled"><span class="icon icon-level-up-1"></span></button></div>');
                    	$(easyTree).find('.easy-tree-toolbar .upgrade > button').attr('title', options.i18n.upgradeTip).click(function () {
                    		var selected = getSelectedItems();
                    		var selectedItemId = $(selected).attr('id');
                    		var upgradeBlock = $(easyTree).find('.actionbar');
                            $(upgradeBlock).html(dangerAlert);
                            $(easyTree).find('.alert .alert-content').html(options.i18n.upgradeConfirmation)
                                .append('<a style="margin-left: 10px;" class="btn btn-default btn-danger confirm"></a>')
                                .find('.confirm').html(options.i18n.confirmButtonLabel);
                            $(easyTree).find('.alert .alert-content .confirm').on('click', function () {
                                thiz.oprNodeIds.push(selectedItemId);
                                var targetNode = $(easyTree).find('#'+selectedItemId+'[ismain=true]');
                                if($(targetNode).attr('oprStatus') == 'false'){
                                	// 无权限修改原主路径
                                	var adjustBlock = $(easyTree).find('.actionbar');
                                    $(adjustBlock).html(warningAlert);
                                    $(adjustBlock).find('.alert .alert-content').text(options.i18n.noPermissionUpgrade);
                                	return false;
                                }
                                thiz.generateActionMsg(selected, targetNode, UPGRADE_TYPE);
                                $(selected).attr('ismain', 'true');
                                $(selected).removeClass('secondary').addClass('primary');
                                $(selected).find('span.secondary').removeClass('secondary').addClass('primary').html('(主)');
                                // 当前次路径升级之后，设置为不可删除状态
                                $(easyTree).find('.easy-tree-toolbar .remove > button').addClass('disabled');
                                // 使子节点可选、编辑
                                $(selected).find('li').removeClass('disabled');
                                $(selected).find('li').attr('oprstatus', true);
                                $(selected).find('li > span > a').bind('click', thiz.selectHandler);
                                $(targetNode).attr('ismain', 'false');
                                $(targetNode).removeClass('primary').addClass('secondary');
                                $(targetNode).find('span.primary').removeClass('primary').addClass('secondary').html('(次)');
                                // 使子节点不可选、不可编辑
                                $(targetNode).find('li').addClass('disabled');
                                $(targetNode).find('li').attr('oprstatus', false);
                                $(targetNode).find('li > span > a').unbind('click');
                                
                                $(dangerAlert).remove();
                            });
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

                        if (options.deletable || options.editable || options.addable || options.adjustable || options.copyable) {
                            var selected = $(easyTree).find('li.li_selected');
                            if (options.editable) {
                                if (selected.length <= 0 || selected.length > 1)
                                    $(easyTree).find('.easy-tree-toolbar .edit > button').addClass('disabled');
                                else
                                    $(easyTree).find('.easy-tree-toolbar .edit > button').removeClass('disabled');
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

                    var addNewNode = function() {
                        var selected = getSelectedItems();
                        var createBlock = $(easyTree).find('.actionbar');
                        $(createBlock).html('');
                        if(options.dp) {
                            createInput = $(createInputWithSelectHtm);
                            $selectOptions = $(options.copyAddableSelector + " > option").clone();
                            $(createInput).find('select').append($selectOptions);
                            $(createInput).find('select').select2({width: 180});
                            $(createInput).find('select').bind('change',function() {
                                if($(this).val() != '') {
                                    $(createInput).find('input').val($(this).find("option:selected").text());
                                }
                            });
                            $(createInput).find('input').bind('keyup',function() {
                                if($(this).val() != '') {
                                	var inputVal = $(this).val();
                                    var options = $('#addCategoryId').find('option');
                                    var isHit = false;
                                    $(options).each(function(item,index){
                                    	if(inputVal == $(this).html()){
                                    		setSelectValue($('#addCategoryId'), $(this).val());
                                    		isHit = true;
                                    		return;
                                    	}
                                    });
                                    if(!isHit){
                                    	setSelectValue($('#addCategoryId'), '');
                                    }
                                }
                            });
                        }
                        $(createBlock).html(createInput);


                        $(createInput).find('input').focus();
                        $(createInput).find('.confirm').text(options.i18n.confirmButtonLabel);
                        $(createInput).find('.confirm').click(function () {
                            if ($.trim($(createInput).find('input').val()) === '')
                                return;

                            //判断名称和其他频道名是否重复
                            var flag = true;
                            var selectSelector ;
                            if (selected.length <= 0) {
                                //频道
                                selectSelector = $('.easy-tree');
                            } else {

                            }
                            $.each($(easyTree).find('li'), function() {
                                if($(this).find('> span > a').html() == $.trim($(createInput).find('input').val())) {
                                    $(createBlock).html(warningAlert);
                                    $(createBlock).find('.alert .alert-content').html(options.i18n.nameDuplicate);
                                    flag = false;
                                    return;
                                }
                            });

                            if(!flag) return;
                            
                            var newCategoryId = undefined;
                            if(options.dp && $(createInput).find('select').val() != '') {
                            	newCategoryId = parseInt($(createInput).find('select').val());
                            }
                            var item = $('<li><span></span></li>');
                            item.find('span').eq(0).append('<span class="glyphicon glyphicon-file"></span>');
                            item.find('span').eq(0).append('<a href="javascript: void(0);">' + $(createInput).find('input').val() + '</a>');
                            newCategoryId ? item.find('span').eq(0).append('<span style="margin-left:-3px">(' + newCategoryId + ')</span>') : '';
                            $(item).find(' > span > span').attr('title', options.i18n.collapseTip);
                            $(item).find(' > span > a').attr('title', options.i18n.selectTip);
                            
                            if (selected.length <= 0) {
                                $(easyTree).find(' > ul').append($(item));
                                thiz.generateActionMsg(selected, item, ADD_TYPE, '', newCategoryId);
                            } else if (selected.length > 1) {
                                $(easyTree).prepend(warningAlert);
                                $(easyTree).find('.alert .alert-content').text(options.i18n.addMultiple);
                            } else {
                                var isMain = $(selected).attr('isMain');

                                if(isMain == 'false') {
                                    var adjustBlock = $(easyTree).find('.actionbar');
                                    $(adjustBlock).html(warningAlert);
                                    $(adjustBlock).find('.alert .alert-content').text(options.i18n.noPermission);
                                } else {
                                	if ($(selected).hasClass('parent_li')) {
                                		$(selected).find(' > ul').append(item);
                                    } else {
                                    	$(selected).addClass('parent_li').find(' > span > span').addClass('glyphicon-folder-open').removeClass('glyphicon-file');
                                    	$(selected).append($('<ul></ul>')).find(' > ul').append(item);
                                 	}
                                	thiz.generateActionMsg(selected, item, ADD_TYPE, '', newCategoryId);
                                }
                            }
                            $(createInput).find('input').val('');
                            if (options.selectable) {
                                $(item).find(' > span > a').attr('title', options.i18n.selectTip);
                                $(item).find(' > span > a').click(function (e) {
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

                                    if (options.deletable || options.editable || options.addable) {
                                        var selected = getSelectedItems();
                                        if (options.editable) {
                                            if (selected.length <= 0 || selected.length > 1)
                                                $(easyTree).find('.easy-tree-toolbar .edit > button').addClass('disabled');
                                            else
                                                $(easyTree).find('.easy-tree-toolbar .edit > button').removeClass('disabled');
                                        }

                                        if (options.deletable) {
                                        	var selected = $(easyTree).find('li.li_selected');
                                        	var isMain = selected.hasClass('primary');
                                            if (selected.length <= 0 || selected.length > 1 || isMain)
                                                $(easyTree).find('.easy-tree-toolbar .remove > button').addClass('disabled');
                                            else
                                                $(easyTree).find('.easy-tree-toolbar .remove > button').removeClass('disabled');
                                        }

                                    }

                                    e.stopPropagation();

                                });
                            }
                           $(createInput).remove();
                           $selectOptions = null;
                            //$(createBlock).html('');
                        });
                        $(createInput).find('input').val('');
                        $(createInput).find("select option[value='']").attr('selected','selected');
                        $(createInput).find('.cancel').text(options.i18n.cancelButtonLabel);
                        $(createInput).find('.cancel').click(function () {
                            $(createInput).remove();
                            $selectOptions = null;
                        	 //$(createBlock).html('');
                        });
                    }

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
                    if (actionType == ADD_TYPE) {
                        //新增
                        if($(selectedItem).length == 0) {
                            $(this.options.showMsgSelector).append("<li>创建新频道“" + $(targetNode).find(" > span > a").html() + "”</li>");
                            oprData = {
                            	oprType : 'addCate', 
                            	comment : $(this.options.showMsgSelector).find("li:last-child").html(), 
                            	categoryId : 0, 
                            	oprData : {
                            		categoryId : 0, 
                            		newCategoryName : $(targetNode).find(" > span > a").html()
                            	}
                            };
                        } else {
                            var selectItemId = parseInt($(selectedItem).attr("id"));
                            var selectItemName = $(selectedItem).find(" > span > a").html();
                            $(this.options.showMsgSelector).append("<li>在类目“" + selectItemName+"("+selectItemId+")"+"”下创建新类目“" + $(targetNode).find(" > span > a").html() + "”</li>");
                            if(selectItemId) {
                                oprData = {
                                	oprType : 'addCate', 
                                	comment : $(this.options.showMsgSelector).find("li:last-child").html(), 
                                	categoryId : selectItemId, 
                                	oprData : {
                                		categoryId : selectItemId, 
                                		newCategoryName : $(targetNode).find(" > span > a").html(),
                                	}
                                };
                            } else {
                                oprData = {
                                	oprType : 'addCate', 
                                	comment : $(this.options.showMsgSelector).find("li:last-child").html(), 
                                	categoryId : this.getParentExistId(selectedItem), 
                                	oprData : {
                                		categoryName : selectItemName, 
                                		newCategoryName : $(targetNode).find(" > span > a").html()
                                	}
                                };
                            }
                        }
                        if(this.options.dp) {
                            oprData.oprData.newCategoryId = newCategoryId;
                        }
                    } else if (actionType == MODIFY_TYPE) {
                        var selectItemId = parseInt($(selectedItem).attr("id"));
                        //更新
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
                    } else if (actionType == ADJUST_TYPE) {
                        var selectItemId = parseInt($(selectedItem).attr("id"));
                        var selectItemName = $(selectedItem).find(" > span > a").html();
                        var targetNodeId = parseInt($(targetNode).attr("id"));
                        var targetNodeName = $(targetNode).find(" > span > a").html();
                        //迁移
                        $(this.options.showMsgSelector).append("<li>将类目“" +selectItemName+"("+selectItemId+")"+"”迁移在类目“"+targetNodeName+"("+targetNodeId+")"+"”下</li>");
                        oprData = {
                        	oprType : 'updCateParentId', 
                        	comment : $(this.options.showMsgSelector).find("li:last-child").html(), 
                        	categoryId : selectItemId, 
                        	oprData : {
                        		categoryId : selectItemId, 
                        		targetCategoryId : targetNodeId
                        	}
                        };
                        if(this.options.dp) {
                            oprData.parentId = this.getParentId(selectedItem);
                        }
                    } else if (actionType == MERGE_TYPE) {
                        var selectItemId = parseInt($(selectedItem).attr("id"));
                        var selectItemName = $(selectedItem).find(" > span > a").html();
                        var targetNodeId = parseInt($(targetNode).attr("id"));
                        var targetNodeName = $(targetNode).find(" > span > a").html();
                        //合并
                        $(this.options.showMsgSelector).append("<li>将类目“"+selectItemName+"("+selectItemId+")" +"”合并在类目“"+targetNodeName+"("+targetNodeId+")"+"”下</li>");
                        oprData = {
                        	oprType : 'mergeCate', 
                        	comment : $(this.options.showMsgSelector).find("li:last-child").html(), 
                        	categoryId : selectItemId, 
                        	oprData : {
                        		categoryId : selectItemId, 
                        		targetCategoryId : targetNodeId
                        	}
                        };
                        if(this.options.dp) {
                            oprData.parentId = this.getParentId(selectedItem);
                        }
                    } else if(actionType == COPY_TYPE) {
                    	var selectItemId = parseInt($(selectedItem).attr("id"));
                    	var selectItemName = $(selectedItem).find(" > span > a").html();
                        var targetNodeId = parseInt($(targetNode).attr("id"));
                        var targetNodeName = $(targetNode).find(" > span > a").html();
                        //复制
                        $(this.options.showMsgSelector).append("<li>将类目“"+selectItemName+"("+selectItemId+")"+"”复制在类目“"+targetNodeName+"("+targetNodeId+")"+"”下作为该分类的次分类</li>");
                        oprData = {
                        	oprType : 'copyCate', 
                        	comment : $(this.options.showMsgSelector).find("li:last-child").html(), 
                        	categoryId : selectItemId, 
                        	oprData : {
                        		categoryId : selectItemId, 
                        		targetCategoryId : targetNodeId
                        	}
                        };
                        if(this.options.dp) {
                            oprData.parentId = this.getParentId(selectedItem);
                        }
                    } else if (actionType == UPGRADE_TYPE) {
                        var selectItemId = parseInt($(selectedItem).attr("id"));
                        var selectItemName = $(selectedItem).find(" > span > a").html();
                        var selectParent = $(selectedItem).parent().parent();
                        var selectParentName = $(selectParent).find(" > span > a").html();
                        
                        var targetNodeId = parseInt($(targetNode).attr("id"));
                        var targetNodeName = $(targetNode).find(" > span > a").html();
                        var targetParent = $(targetNode).parent().parent();
                        var targetParentName = $(targetParent).find(" > span > a").html();
                        // 升级为主路径
                        var upgradeText = '将类目“'+selectParentName+"("+parseInt($(selectParent).attr('id'))+")"+'”下的“'+selectItemName+"("+selectItemId+")"+'”升级为主路径';
                        var degradeText = '将类目“'+targetParentName+"("+parseInt($(targetParent).attr('id'))+")"+'”下的“'+targetNodeName+"("+targetNodeId+")"+'”降级为次路径';
                        $(this.options.showMsgSelector).append("<li>" + upgradeText + "," + degradeText + "</li>");
                        oprData = {
                        	oprType : 'upgradeCate', 
                        	comment : $(this.options.showMsgSelector).find("li:last-child").html(), 
                        	categoryId : selectItemId, 
                        	oprData : {
                        		categoryId : selectItemId, 
                        		targetCategoryId : this.getParentId(targetNode)
                        	}
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

            this.adjustNode = function(targetNodeId, adjustType) {
                var options = this.options;
                var thiz = this;
                $(this.easyTree).each(function () {
                    var easyTree = $(this);
                    //do something
                    var selected = $(easyTree).find('li.li_selected');
                    var selectedId = $(selected).attr("id");
                    var targetNodes = $(easyTree).find('li#' + targetNodeId);
                    var targetToDir = false;
                    var mergeSubIds = [];
                    var targetNode = $(targetNodes).first();
                    $.each($(targetNodes),function(){
                    	if(($(this).attr("ismain") == "true")){
                    		targetNode = $(this);
                    		return false;
                    	}
                    });
                    var isDuplicate = function() {
                        //判断名称和其他频道名是否重复
                        var _duplicate = false; 
                        if($(targetNode).find("ul li").length > 0){                    	
                            $.each($(targetNode).find('ul li'), function() {
                                if(!$(this).is($(selected))) {
                                    if(($(this).attr("id") ==  selectedId) && ($.trim($(this).find('> span > a').html()) == $.trim($(selected).find('> span > a').html()))) {
                                        _duplicate = true;
                                    }
                                }
                            });         	
                        }
                        return _duplicate;
                    };
                    // 递归查找某一节点的最上层父节点
                    var getParentNode = function(node){
                    	var parent = $(node).parent().parent();
                    	if($(parent).is('li')){
                    		return getParentNode(parent);
                    	} else {
                    		return node;
                    	}
                    }
                    // 判断两个Node是否在同一个频道下
                    var hasSameAncestor = function(node1, node2){
                    	var parent1 = getParentNode(node1);
                    	var parent2 = getParentNode(node2);
                    	return $(parent1).attr('id') == $(parent2).attr('id');
                    }
                    if (selected.length <= 0) {
                    	alert("请选择要迁移／合并／复制的类目！");
                    	return false;
                    } else if(selected.length == 1 && targetNodes) {
                        if(adjustType == ADJUST_TYPE) {
                        	if(isDuplicate()){
                        		alert(options.i18n.sameLevelNameDuplicate);
                        		return false;
                        	}
                            if($(selected).find("ul").length > 0) {
                                if($(targetNode).find("ul").length > 0) {
                                    //append li to ul
                                    $(targetNode).find("ul:first").append("<li class='parent_li li_selected' id='" + selectedId + "'>" + $(selected).html() + "</li>");
                                } else {
                                    //convert leaf to dir
                                    $(targetNode).append("<ul><li class='parent_li li_selected' id='" + selectedId + "'>" + $(selected).html() + "</li></ul>");
                                    targetToDir = true;
                                }
                            } else {
                                if($(targetNode).find("ul").length > 0) {
                                    //append li to ul
                                    $(targetNode).find("ul:first").append("<li class='li_selected' id='" + selectedId + "'>" + $(selected).html() + "</li>");
                                } else {
                                    //convert leaf to dir
                                    $(targetNode).append("<ul><li class='li_selected' id='" + selectedId + "'>" + $(selected).html() + "</li></ul>");
                                    targetToDir = true;
                                }
                            }
                            
                            thiz.generateActionMsg(selected, targetNode, ADJUST_TYPE);
                            $(selected).remove();
                        } else if(adjustType == MERGE_TYPE) {
                            if($(selected).find("ul").length > 0) {
                                if($(targetNode).find("ul").length > 0) {
                                    //append li to ul
                                    $(targetNode).find("ul:first").append($(selected).find("ul").html());
                                } else {
                                    //convert leaf to dir
                                    $(targetNode).append("<ul>" + $(selected).find("ul:first").html() + "</ul>");
                                    targetToDir = true;
                                }
                            } else {
                                //just remove itself
                            }
                            
                            thiz.generateActionMsg(selected, targetNode, MERGE_TYPE);
                            $.each($(selected).find("li"), function() {
                                mergeSubIds.push($(this).attr("id"));
                            });
                            $(selected).remove();
                        } else if(adjustType == COPY_TYPE) {
                        	//check if the copied category already exist in the target category tree.
                        	if(isDuplicate()) {
                              	alert(options.i18n.sameLevelNameDuplicate);
                        		return false;
                        	}
                        	if(hasSameAncestor(selected, targetNode)){
                        		alert(options.i18n.inTheSameAncestor);
                        		return false;
                        	}
                            if($(selected).find("ul").length > 0) {
                                if($(targetNode).find("ul").length > 0) {
                                    //append li to ul
                                    $(targetNode).find("ul:first").append("<li class='parent_li' id='" + selectedId + "'>" + $(selected).html() + "</li>");
                                } else {
                                    //convert leaf to dir
                                    $(targetNode).append("<ul><li class='parent_li' id='" + selectedId + "'>" + $(selected).html() + "</li></ul>");
                                    targetToDir = true;
                                }
                            } else {
                                if($(targetNode).find("ul").length > 0) {
                                    //append li to ul
                                    $(targetNode).find("ul:first").append("<li class='' id='" + selectedId + "'>" + $(selected).html() + "</li>");
                                } else {
                                    //convert leaf to dir
                                    $(targetNode).append("<ul><li class='' id='" + selectedId + "'>" + $(selected).html() + "</li></ul>");
                                    targetToDir = true;
                                }
                            }

                        
                            
                            $.each($(targetNode).find('#' + selectedId).find("li.disabled"), function() {
                                $(this).find("a:first").click(function(e) {
                                    e.stopImmediatePropagation();
                                });
                            })
                            $(targetNode).find('#' + selectedId).removeClass('primary').addClass('secondary');
                            $(targetNode).find('#' + selectedId).attr('ismain', 'false');
                            $(targetNode).find('#' + selectedId).attr('hasmultiparent', 'true');
                            $(targetNode).find('#' + selectedId).attr('oprstatus', 'true');
                            $(targetNode).find('#' + selectedId).attr('style', 'display: list-item;');
                            $(targetNode).find('#' + selectedId).addClass('copyli');
                            $(targetNode).find('#' + selectedId).find('span.glyphicon > .primary').remove();
                            $(targetNode).find('#' + selectedId).find('span.glyphicon:first').append('<span class="secondary">(次)</span>');
                            $(selected).removeClass('secondary').addClass('primary');
                            $(selected).attr('ismain', 'true');
                            $(selected).attr('hasmultiparent', 'true');
                            if($(selected).find(' > span').find('span.primary').length == 0){
                            	$(selected).find(' > span').find('span.glyphicon').append('<span class="primary">(主)</span>');
                            }
                            
                            thiz.generateActionMsg(selected, targetNode, COPY_TYPE);

                        }
                        
                        //force refreshing the li.
                        var children = $(targetNode).find(' > ul > li');
                        if (children.is(':visible')) {
                            children.show('fast');
                        }else{
                        	children.hide('fast');
                        }
                        
                        if(targetToDir) {
                            $(targetNode).find("span > span:first").removeClass();
                            $(targetNode).find("span > span:first").addClass("glyphicon glyphicon-folder-open");
                            $(targetNode).addClass("parent_li");
                        }

                        var bindClickSelector = "";
                        if(adjustType == ADJUST_TYPE || adjustType == COPY_TYPE) {
                            bindClickSelector = 'li#' + selectedId + ' span a';
                        } else if(adjustType == MERGE_TYPE) {
                            $.each(mergeSubIds, function(index, id) {
                                $(targetNode).find("li#" + id +" span a").on('click', function (e) {
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

                                    if (options.deletable || options.editable || options.addable) {
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

                                        if (options.deletable) {
                                        	var selected = $(easyTree).find('li.li_selected');
                                        	var isMain = selected.hasClass('primary');
                                            if (selected.length <= 0 || selected.length > 1 || isMain)
                                                $(easyTree).find('.easy-tree-toolbar .remove > button').addClass('disabled');
                                            else
                                                $(easyTree).find('.easy-tree-toolbar .remove > button').removeClass('disabled');
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

                                });
                            });
                        }
                        if(bindClickSelector != '') {
                            $(easyTree).find(targetNode).find(bindClickSelector).on('click', function (e) {
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

                                if (options.deletable || options.editable || options.addable || options.adjustable) {
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

                                    if (options.deletable) {
                                    	var selected = $(easyTree).find('li.li_selected');
                                    	var isMain = selected.hasClass('primary');
                                        if (selected.length <= 0 || selected.length > 1 || isMain)
                                            $(easyTree).find('.easy-tree-toolbar .remove > button').addClass('disabled');
                                        else
                                            $(easyTree).find('.easy-tree-toolbar .remove > button').removeClass('disabled');
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

                            });
                        }

                    }
                });
            };

            this.getOprList = function() {
                return this.oprList;
            }

        }
    }
}(jQuery);