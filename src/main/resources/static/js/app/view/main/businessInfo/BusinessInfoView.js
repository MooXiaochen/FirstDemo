Ext.define("app.view.main.businessInfo.BusinessInfoView", {
	extend: "Ext.grid.Panel",
	xtype: "businessInfo",
	
    requires: [
        "app.view.main.businessInfo.BusinessInfoViewModel", 
		"app.view.main.businessInfo.BusinessInfoContoller",
		"app.view.main.businessInfo.BusinessInfoModel"
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
				width: 100
			}, {
				text: "countryid",
				dataIndex: "countryid",
				width: 100
			}, {
				text: "name",
				dataIndex: "name",
				width: 100
			}, {
				text: "natureid",
				dataIndex: "natureid",
				width: 100
			}, {
				text: "groupid",
				dataIndex: "groupid",
				width: 100
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
				width: 100
			}, {
				text: "iscpa",
				dataIndex: "iscpa",
				width: 100
			}, {
				text: "materials",
				dataIndex: "materials",
				width: 100
			}, {
				text: "services",
				dataIndex: "services",
				width: 100
			}, {
				text: "dscription",
				dataIndex: "dscription",
				width: 100
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
				width: 100
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
				width: 100
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
				fieldLabel: "角色编号",
				labelWidth: 60
			}, {
				xtype: "textfield",
				maxWidth: 205,
				fieldLabel: "角色名称",
				labelWidth: 60
			}, {
				xtype: "button",
				text: "搜索",
				glyph: 0xf002,
				handler: "search"
			}, "->", "->", {
				xtype: "button",
				text: "新增",
				glyph: 0xf067,
				handler: "onCreate"
			}, {
				xtype: "button",
				text: "批量删除",
				glyph: 0xf00d,
				handler: "onBatchDel"
			}, {
				xtype: "button",
				text: "刷新",
				glyph: 0xf00d,
				handler: "onRefresh"
			}]
		});
		this.callParent(arguments);
	}
});