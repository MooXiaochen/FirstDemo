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
					labelWidth: 60
				},
				items: [{
					xtype: "panel",
                    baseCls: "x-plain",
					layout: "column",

					items: [{
						xtype: "hiddenfield",
						name: "id"
					}, {
						xtype: "numberfield",
						name: "countryid",
						fieldLabel: "countryid"
					}, {
                        xtype: "textfield",
						fieldLabel: "name"
					}, {
                        xtype: "numberfield",
						name: "natureid",
						fieldLabel: "natureid"
					}, {
                        xtype: "numberfield",
						name: "groupid",
						fieldLabel: "groupid"
					}, {
                        xtype: "numberfield",
						name: "agentCheap",
						allowDecimals: true, // 允许小数点
						allowNegative: true, // 允许负数
						fieldLabel: "agent_cheap"
					}, {
                        xtype: "numberfield",
						name: "agentQuote",
						allowDecimals: true, // 允许小数点
						allowNegative: true, // 允许负数
						fieldLabel: "agent_quote"
					}, {
                        xtype: "textfield",
						name: "agentExplain",
						fieldLabel: "agent_explain"
					}, {
						xtype: "numberfield",
						allowDecimals: true, // 允许小数点
						allowNegative: true, // 允许负数
						name: "clientCheap",
						fieldLabel: "client_cheap"
					}, {
                        xtype: "numberfield",
						allowDecimals: true, // 允许小数点
						allowNegative: true, // 允许负数
						name: "clientQuote",
						fieldLabel: "client_quote"
					}, {
                        xtype: "textfield",
						name: "clientExplain",
						fieldLabel: "client_explain"
					}, {
                        xtype: "numberfield",
						name: "greenboxid",
						fieldLabel: "greenboxid"
					}, {
                        xtype: "numberfield",
						name: "iscpa",
						fieldLabel: "iscpa"
					}, {
						xtype: "textarea",
						name: "materials",
						fieldLabel: "materials"
					}, {
						xtype: "textarea",
						name: "services",
						fieldLabel: "services"
					}, {
                        xtype: "textfield",
						name: "dscription",
						fieldLabel: "dscription"
					}, {
                        xtype: "textfield",
						name: "prescription",
						fieldLabel: "prescription"
					}, {
                        xtype: "numberfield",
						name: "isLock",
						fieldLabel: "is_lock"
					}, {
                        xtype: "numberfield",
						name: "sortnum",
						fieldLabel: "sortnum"
					}, {
                        xtype: "numberfield",
						name: "content",
						fieldLabel: "content"
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
