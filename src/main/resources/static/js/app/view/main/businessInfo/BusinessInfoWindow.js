/*
 * 窗口视图 - 用户管理
 */

Ext.define("app.view.main.businessInfo.BusinessInfoWindow", {
	extend: "Ext.window.Window",
	xtype: "businessWin",
	
	requires: [
            "app.view.main.businessInfo.BusinessInfoViewModel", 
            "app.view.main.businessInfo.BusinessInfoContoller"
        ],
	viewModel: {
		type: "businessInfo"
	},
	controller: "businessInfo",
	
	resizable: false,
	constrain: true,
	modal: true,
	
	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: "form",
				reference: "businessForm",
				margin: 10,
				defaults: {
					anchor: "100%"
				},
				fieldDefaults: {
					flex: 2,
					margin: 10,
					labelWidth: 90
				},
				items: [{
					xtype: "panel",
                    baseCls: "x-plain",
					layout: "column",
                    columnWidth: .49,
					items: [{
						xtype: "hiddenfield",
						name: "id"
					}, {
						xtype: "numberfield",
						name: "countryid",
						fieldLabel: "countryid",
                        columnWidth: .49
					}, {
                        xtype: "textfield",
                        name: "name",
						fieldLabel: "name",
                        columnWidth: .49
					}, {
                        xtype: "numberfield",
						name: "natureid",
						fieldLabel: "natureid",
                        columnWidth: .49
					}, {
                        xtype: "numberfield",
						name: "groupid",
						fieldLabel: "groupid",
                        columnWidth: .49
					}, {
                        xtype: "numberfield",
						name: "agentCheap",
						allowDecimals: true, // 允许小数点
						allowNegative: true, // 允许负数
						fieldLabel: "agent_cheap",
                        columnWidth: .49
					}, {
                        xtype: "numberfield",
						name: "agentQuote",
						allowDecimals: true, // 允许小数点
						allowNegative: true, // 允许负数
						fieldLabel: "agent_quote",
                        columnWidth: .49
					}, {
                        xtype: "textfield",
						name: "agentExplain",
						fieldLabel: "agent_explain",
                        columnWidth: .49
					}, {
						xtype: "numberfield",
						allowDecimals: true, // 允许小数点
						allowNegative: true, // 允许负数
						name: "clientCheap",
						fieldLabel: "client_cheap",
                        columnWidth: .49
					}, {
                        xtype: "numberfield",
						allowDecimals: true, // 允许小数点
						allowNegative: true, // 允许负数
						name: "clientQuote",
						fieldLabel: "client_quote",
                        columnWidth: .49
					}, {
                        xtype: "textfield",
						name: "clientExplain",
						fieldLabel: "client_explain",
                        columnWidth: .49
					}, {
                        xtype: "numberfield",
						name: "greenboxid",
						fieldLabel: "greenboxid",
                        columnWidth: .49
					}, {
                        xtype: "numberfield",
						name: "iscpa",
						fieldLabel: "iscpa",
                        columnWidth: .49
					}, {
						xtype: "textarea",
						name: "materials",
						fieldLabel: "materials",
                        columnWidth: .98
					}, {
						xtype: "textarea",
						name: "services",
						fieldLabel: "services",
                        columnWidth: .98
					}, {
                        xtype: "textfield",
						name: "dscription",
						fieldLabel: "dscription",
                        columnWidth: .98
					}, {
                        xtype: "textfield",
						name: "prescription",
						fieldLabel: "prescription",
                        columnWidth: .49
					}, {
                        xtype: "numberfield",
						name: "isLock",
						fieldLabel: "is_lock",
                        columnWidth: .49
					}, {
                        xtype: "numberfield",
						name: "sortnum",
						fieldLabel: "sortnum",
                        columnWidth: .49
					}, {
                        xtype: "numberfield",
						name: "content",
						fieldLabel: "content",
                        columnWidth: .49
					}]
				}]
			}],
			buttonAlign: "center",
			buttons: [{
				text: "保存",
				handler: "onSave"
			}, {
				text: "取消",
				handler: "onCancel"
			}]
		});
		this.callParent(arguments);
	}
});
