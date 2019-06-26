Ext.define("App.view.property.PropertyListView", {
    extend: "Ext.grid.Panel",
    xtype: "propertyList",

    requires: [
        "App.view.property.PropertyListViewModel",
        "App.view.property.PropertyListController",
        "App.view.property.PropertyListWindow",
        "App.view.property.PropertyTypeWindow",
        "App.model.Property"
    ],

    viewModel: {
        type: "propertyList"
    },
    controller: "propertyList",

    selType: "checkboxmodel",

    border: true,

    // columnLines: true, // 表格线

    bind: {
        store: "{propertyListStore}"
    },

    columns: [{
        text: "propertyId",
        itemId: "propertyId",
        dataIndex: "propertyId",
        hidden : true
    }, {
        text: "userId",
        itemId: "userId",
        dataIndex: "userId",
        hidden : true
    }, {
        text: "propertyTypeId",
        itemId: "propertyTypeId",
        dataIndex: "propertyTypeId",
        hidden : true
    }, {
        text: "资产拥有人",
        dataIndex: "userName",
        flex : 1,
        editor: {
            xtype: "combobox",
            name: 'userName',
            editable: false,
            displayField: "userName",
            valueField: "id",
            bind: {
                store: "{usersStore}"
            },
            queryMode: "local",
            listeners: {
                select: function (combo, record, eOpts){
                    var view = combo.up('propertyList');
                    var data = view.selection.data;
                    data.users = record.data;
                    data.userId = record.data.id;
                    view.paramData = data;
                }
            }
        }
    }, {
        text: "资产类型",
        dataIndex: "propertyTypeName",
        flex : 1,
        editor: {
            xtype: "combobox",
            name: 'propertyTypeName',
            editable: false,
            displayField: "propertyTypeName",
            valueField: "id",
            bind: {
                store: "{propertyTypeStore}"
            },
            queryMode: "local",
            listeners: {
                select: function (combo, record, eOpts){
                    var view = combo.up('propertyList');
                    var data = view.selection.data;
                    data.propertyTypeId = record.data.id;
                    view.paramData = data;
                }
            }
        }
    }, {
        text: "名称",
        dataIndex: "propertyName",
        flex : 1,
        editor: 'textfield'
    }, {
        text: "设备编号",
        dataIndex: "equipmentNo",
        flex : 1,
        editor: 'textfield'
    }, {
        text: "录单人",
        dataIndex: "registrant",
        flex : 1,
        editor: 'textfield'
    }, {
        text: "描述",
        dataIndex: "description",
        flex : 2,
        editor: 'textfield'
    }, {
        text: "估值",
        dataIndex: "propertyPrice",
        flex : 1,
        editor: 'textfield'
    }, {
        text: "数量",
        dataIndex: "count",
        flex : 1,
        editor: 'textfield'
    }, {
        text: "录入时间",
        dataIndex: "createTime",
        flex : 1
    }, {
        text: "更新时间",
        dataIndex: "updateTime",
        flex : 1
    }],

    tbar: [{
        xtype: "combobox",
        id: 'userName',
        maxWidth: 200,
        fieldLabel: "员工",
        name: 'userName',
        width: 150,
        labelWidth: 40,
        editable: false,
        displayField: "userName",
        valueField: "id",
        bind: {
            store: "{usersStore}"
        },
        queryMode: "local"
    }, {
        xtype: "combobox",
        id: 'propertyTypeName',
        maxWidth: 200,
        fieldLabel: "资产类型",
        name: 'propertyTypeName',
        width: 150,
        labelWidth: 60,
        editable: false,
        displayField: "propertyTypeName",
        valueField: "id",
        bind: {
            store: "{propertyTypeStore}"
        },
        queryMode: "local"
    }, {
        xtype: "textfield",
        maxWidth: 205,
        fieldLabel: "名称",
        name: 'propertyName',
        width: 200,
        labelWidth: 45
    }, {
        xtype: "textfield",
        maxWidth: 205,
        fieldLabel: "编号",
        name: 'propertyNo',
        width: 200,
        labelWidth: 45
    }, {
        xtype: "button",
        text: "查询",
        icon: "icons/bullet_magnify.png",
        cls: "x-btn-text-icon",
        handler: "onSearch"
    }, "->", "->", {
        xtype: "button",
        text: "新增",
        icon: "extjs/resources/images/tree/drop-add.png",
        cls: "x-btn-text-icon",
        handler: "onCreate"
    }, {
        xtype: "button",
        text: "删除",
        icon: "icons/bullet_cross.png",
        cls: "x-btn-text-icon",
        handler: "onBatchDel"
    }, {
        xtype: "button",
        text: "资产类型管理",
        icon: "extjs/resources/images/tree/drop-add.png",
        cls: "x-btn-text-icon",
        handler: "onCreateType"
    }],

    initComponent: function() {
        var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
            pluginId:'rowEditing',
            saveBtnText: '保存',
            cancelBtnText: "取消",
            autoCancel: false,
            clicksToEdit:2	//双击进行修改
        })
        var groupingFeature= Ext.create('Ext.grid.feature.Grouping',{
            groupHeaderTpl: '<strong>{userName}的资产</strong>'
        });
        Ext.apply(this, {
            title: "资产信息管理",
            plugins: [rowEditing],
            features: [groupingFeature]
        });
        this.callParent(arguments);
    }
});