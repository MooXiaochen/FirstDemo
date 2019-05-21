Ext.define("App.view.trademarkInformation.TrademarkWindow", {
	extend: "Ext.window.Window",
	xtype: "trademarkWin",
	
	requires: [
            "App.view.trademarkInformation.TrademarkInformationViewModel",
            "App.view.trademarkInformation.TrademarkInformationContoller"
        ],
	viewModel: {
		type: "trademark"
	},
	controller: "trademark",
	
	resizable: false,
	constrain: true,
	modal: true,
	
	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: "form",
				reference: "trademarkForm",
				margin: 20,
				defaults: {
					anchor: "100%"
				},
				fieldDefaults: {
					flex: 2,
					margin: 20,
					labelWidth: 100
				},
				items: [{
					xtype: "panel",
                    baseCls: "x-plain",
					layout: "form",
					items: [{
						xtype: "hiddenfield",
						name: "id"
					}, {
						xtype: "numberfield",
						name: "number",
						fieldLabel: "number",
					}, {
                        xtype: "textfield",
                        name: "name",
						fieldLabel: "name",
					}, {
                        xtype: "combobox",
                        name: "type",
                        fieldLabel: "type",
                        editable: false,
                        displayField: "typeName",
                        valueField: "typeId",
                        emptyText: "--请选择--",
                        queryMode: "local",
						store : Ext.create("Ext.data.Store", {
                            fields: ["typeName", "typeId"],
                            data: [
                                { typeName: "商标类别", typeId: 1 },
                                { typeName: "业务类型", typeId: 2 },
                                { typeName: "案件阶段", typeId: 3 },
                                { typeName: "国家/地区", typeId: 4 }
                            ]
                        })
					}, {
                        xtype: "textfield",
                        name: "user",
                        fieldLabel: "user",
                    }, {
                        xtype: "combobox",
                        itemId: "isLock",
                        name: "isLock",
                        fieldLabel: "is_lock",
                        editable: false,
                        displayField: "state",
                        valueField: "value",
                        queryMode: "local",
                        store : Ext.create("Ext.data.Store", {
                            fields: ["state", "value"],
                            data: [
                                { state: "草稿", value: 0 },
                                { state: "生效", value: 1 },
                                { state: "失效", value: 2 }
                            ]
                        })
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
