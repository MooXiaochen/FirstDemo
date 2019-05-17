Ext.define("app.view.main.statusList.StatusInfoWindow", {
	extend: "Ext.window.Window",
	xtype: "statusInfoWin",
	
	requires: [
            "app.view.main.statusList.StatusListViewModel",
            "app.view.main.statusList.StatusListContoller"
        ],
	viewModel: {
		type: "statusList"
	},
	controller: "statusList",
	
	resizable: false,

	constrain: true,

	modal: true,
	
	items: [{
		xtype: "form",
		reference: "statusInfoForm",
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
				xtype: "textfield",
				name: "text",
				fieldLabel: "text",
				columnWidth: .49
			}, {
				xtype: "textfield",
				name: "tableName",
				fieldLabel: "table_name",
				columnWidth: .49
			}, {
				xtype: "textfield",
				name: "filedName",
				fieldLabel: "filed_name",
				columnWidth: .49
			}, {
				xtype: "numberfield",
				name: "statusNo",
				fieldLabel: "status_no",
				columnWidth: .49
			}, {
				xtype: "textfield",
				name: "statusType",
				fieldLabel: "status_type",
				columnWidth: .49
			}, {
                xtype: "textfield",
                name: "agentExplain",
                fieldLabel: "agent_explain",
                columnWidth: .49
            }, {
                xtype: "textfield",
                name: "appDept",
                fieldLabel: "app_dept",
                columnWidth: .49
            }, {
                xtype: "textfield",
                name: "groupName",
                fieldLabel: "group_name",
                columnWidth: .49
            }, {
                xtype: "textarea",
                name: "remark",
                fieldLabel: "remark",
                columnWidth: .98
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
