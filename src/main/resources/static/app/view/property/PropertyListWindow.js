Ext.define("App.view.property.PropertyListWindow", {
	extend: "Ext.window.Window",
	xtype: "propertyListWin",
	
	requires: [
            "App.view.property.PropertyListViewModel",
            "App.view.property.PropertyListController",
            "App.model.PropertyType"
        ],
	viewModel: {
		type: "propertyList"
	},
	controller: "propertyList",
	
	resizable: false,
	constrain: true,
	modal: true,

    items: [{
        xtype: "form",
        reference: "propertyListForm",
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
                name: "propertyId"
            }, {
                xtype: "combobox",
                fieldLabel: "资产拥有人",
                name: 'userId',
                editable: false,
                displayField: "userName",
                valueField: "id",
                bind: {
                    store: "{usersStore}"
                },
                queryMode: "local",
                columnWidth: .49
            }, {
                xtype: "combobox",
                fieldLabel: "资产类型",
                name: 'propertyTypeId',
                editable: false,
                displayField: "propertyTypeName",
                valueField: "id",
                bind: {
                    store: "{propertyTypeStore}"
                },
                queryMode: "local",
                columnWidth: .49
            }, {
                xtype: "textfield",
                name: "propertyName",
                fieldLabel: "名称",
                columnWidth: .49
            }, {
                xtype: "textfield",
                name: "equipmentNo",
                fieldLabel: "设备编号",
                columnWidth: .49
            }, {
                xtype: "textfield",
                name: "registrant",
                fieldLabel: "录单人",
                columnWidth: .33
            }, {
                xtype: "numberfield",
                name: "propertyPrice",
                allowDecimals: true, // 允许小数点
                allowNegative: false, // 不允许负数
                fieldLabel: "估值",
                columnWidth: .33
            }, {
                xtype: "numberfield",
                allowDecimals: false, // 不允许小数点
                allowNegative: false, // 不允许负数
                name: "count",
                fieldLabel: "数量",
                columnWidth: .32
            }, {
                xtype: "textarea",
                name: "description",
                fieldLabel: "描述",
                columnWidth: .98
            }]
        }]
    }],
    buttonAlign: "center",
    buttons: [{
        text: "保存",
        handler: "onPropertyWinSave"
    }, {
        text: "取消",
        handler: "onPropertyWinCancel"
    }],

	initComponent: function() {
		this.callParent(arguments);
	}
});
