Ext.define("app.view.main.statusList.StatusListView", {
	extend: "Ext.grid.Panel",
	xtype: "statusList",

    title: "状态清单管理",

    requires: [
        "app.view.main.statusList.StatusListViewModel",
		"app.view.main.statusList.StatusListContoller",
		"app.view.main.statusList.StatusListModel"
	],
    viewModel: {
		type: "statusList"
	},

	controller: "statusList",

	bind: {
		store: "{statusListStore}"
	},

    selType: "checkboxmodel",

	border: true,

	columns: [{
		text: "id",
		dataIndex: "id",
		flex : 1
	}, {
		text: "text",
		dataIndex: "text",
		flex : 1
	}, {
		text: "table_name",
		dataIndex: "tableName",
		flex : 2
	}, {
		text: "filed_name",
		dataIndex: "filedName",
		flex : 1
	}, {
		text: "status_no",
		dataIndex: "statusNo",
		flex : 1
	}, {
		text: "status_type",
		dataIndex: "statusType",
		flex : 1
	}, {
		text: "agent_explain",
		dataIndex: "agentExplain",
		flex : 1
	}, {
		text: "app_dept",
		dataIndex: "appDept",
		flex : 1
	}, {
		text: "group_name",
		dataIndex: "groupName",
		flex : 1
	}, {
        text: "remark",
        dataIndex: "remark",
        flex : 3
    }],
	tbar: [ "->", "->", {
		xtype: "button",
		text: "新增",
		icon: "extjs/resources/images/tree/drop-add.png",
		cls: "x-btn-text-icon",
		handler: "onCreate"
	}, {
        xtype: "button",
        text: "编辑",
        icon: "../icons/application_edit.png",
        cls: "x-btn-text-icon",
        handler: "onEdit"
    }, {
		xtype: "button",
		text: "删除",
		icon: "../icons/bullet_cross.png",
		cls: "x-btn-text-icon",
		handler: "onBatchDel"
	}, {
		xtype: "button",
		text: "刷新",
		icon: "../icons/arrow_rotate_clockwise.png",
		cls: "x-btn-text-icon",
		handler: "onRefresh"
	}],
    init: function () {
        debugger
    }
});