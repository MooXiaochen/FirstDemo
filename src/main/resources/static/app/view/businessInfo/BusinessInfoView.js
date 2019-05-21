Ext.define("App.view.businessInfo.BusinessInfoView", {
	extend: "Ext.grid.Panel",
	xtype: "businessInfo",
	
    requires: [
        "App.view.businessInfo.BusinessInfoViewModel",
		"App.view.businessInfo.BusinessInfoContoller",
		"App.model.BusinessInfo"
	],
	
	viewModel: {
		type: "businessInfo"
	},
	controller: "businessInfo",
	
	bind: {
		store: "{business}"
	},
	
	initComponent: function() {
		Ext.apply(this, {
			selType: "checkboxmodel",
			title: "事务信息管理",
            border: true,
			columns: [{
				text: "id",
				dataIndex: "id",
				width: 70
			}, {
				text: "countryid",
				dataIndex: "countryid",
				width: 70
			}, {
				text: "name",
				dataIndex: "name",
				width: 140
			}, {
				text: "natureid",
				dataIndex: "natureid",
				width: 90
			}, {
				text: "groupid",
				dataIndex: "groupid",
				width: 90
			}, {
				text: "agent_cheap",
				dataIndex: "agentCheap",
				width: 100
			}, {
				text: "agent_quote",
				dataIndex: "agentQuote",
				width: 100
			}, {
				text: "agent_explain",
				dataIndex: "agentExplain",
				width: 100
			}, {
				text: "client_cheap",
				dataIndex: "clientCheap",
				width: 100
			}, {
				text: "client_quote",
				dataIndex: "clientQuote",
				width: 100
			}, {
				text: "client_explain",
				dataIndex: "clientExplain",
				width: 100
			}, {
				text: "greenboxid",
				dataIndex: "greenboxid",
				width: 80
			}, {
				text: "iscpa",
				dataIndex: "iscpa",
				width: 70
			}, {
				text: "materials",
				dataIndex: "materials",
				width: 340
			}, {
				text: "services",
				dataIndex: "services",
				width: 340
			}, {
				text: "dscription",
				dataIndex: "dscription",
				width: 200
			}, {
				text: "prescription",
				dataIndex: "prescription",
				width: 100
			}, {
				text: "is_lock",
				dataIndex: "isLock",
				width: 100
			}, {
				text: "sortnum",
				dataIndex: "sortnum",
				width: 80
			}, {
				text: "querycount",
				dataIndex: "querycount",
				width: 100
			}, {
				text: "content",
				dataIndex: "content",
				width: 100
			}, {
				text: "updatetime",
				dataIndex: "updatetime",
				width: 140
			}, {
				xtype: "actioncolumn",
				text: "操作",
				width: 100,
				align: "center",
				sortable: false,
				menuDisabled: true,
				items: [{
					iconCls: "opt-edit",
					tooltip: "编辑",
					handler: "edit"
				}, {
					iconCls: "opt-delete",
					tooltip: "删除",
					handler: "del"
				}]
			}],
			tbar: [{
				xtype: "textfield",
				maxWidth: 205,
				fieldLabel: "id",
                width: 200,
				labelWidth: 45
			}, {
				xtype: "textfield",
				maxWidth: 205,
				fieldLabel: "name",
                width: 200,
				labelWidth: 45
			}, {
				xtype: "button",
				text: "搜索",
                icon: "icons/bullet_magnify.png",
                cls: "x-btn-text-icon",
				handler: "onSearch"
			}, "->", "->", {
                xtype: "button",
                text: "测试窗口",
                icon: "extjs/resources/images/tree/drop-add.png",
                cls: "x-btn-text-icon",
                handler: "onTest"
            }, {
                xtype: "button",
                text: "新增",
                icon: "extjs/resources/images/tree/drop-add.png",
                cls: "x-btn-text-icon",
                handler: "onCreate"
            }, {
				xtype: "button",
				text: "批量删除",
                icon: "icons/bullet_cross.png",
                cls: "x-btn-text-icon",
				handler: "onBatchDel"
			}, {
				xtype: "button",
				text: "刷新",
                icon: "icons/arrow_rotate_clockwise.png",
                cls: "x-btn-text-icon",
				handler: "onRefresh"
			}],

            dockedItems: [{
                xtype: 'pagingtoolbar',
                bind: {
                    store: "{business}"
                },
                dock: 'bottom',
                displayInfo: true
            }]
		});
		this.callParent(arguments);
	}
});