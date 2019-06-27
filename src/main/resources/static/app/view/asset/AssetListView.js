Ext.define("App.view.asset.AssetListView", {
    extend: "Ext.grid.Panel",
    xtype: "assetList",

    requires: [
        "App.view.asset.AssetListViewModel",
        "App.view.asset.AssetListController",
        "App.view.asset.AssetListWindow",
        "App.view.asset.AssetTypeWindow",
        "App.model.Asset"
    ],

    viewModel: {
        type: "assetList"
    },
    controller: "assetList",

    selType: "checkboxmodel",

    border: true,

    // columnLines: true, // 表格线

    bind: {
        store: "{assetListStore}"
    },

    columns: [{
        text: "assetId",
        itemId: "assetId",
        dataIndex: "assetId",
        hidden : true
    }, {
        text: "userId",
        itemId: "userId",
        dataIndex: "userId",
        hidden : true
    }, {
        text: "assetTypeId",
        itemId: "assetTypeId",
        dataIndex: "assetTypeId",
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
                    var view = combo.up('assetList');
                    var data = view.selection.data;
                    data.users = record.data;
                    data.userId = record.data.id;
                    view.paramData = data;
                }
            }
        }
    }, {
        text: "资产类型",
        dataIndex: "assetTypeName",
        flex : 1,
        editor: {
            xtype: "combobox",
            name: 'assetTypeName',
            editable: false,
            displayField: "assetTypeName",
            valueField: "id",
            bind: {
                store: "{assetTypeStore}"
            },
            queryMode: "local",
            listeners: {
                select: function (combo, record, eOpts){
                    var view = combo.up('assetList');
                    var data = view.selection.data;
                    data.assetTypeId = record.data.id;
                    view.paramData = data;
                }
            }
        }
    }, {
        text: "名称",
        dataIndex: "assetName",
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
        dataIndex: "assetPrice",
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
        id: 'assetTypeName',
        maxWidth: 200,
        fieldLabel: "资产类型",
        name: 'assetTypeName',
        width: 150,
        labelWidth: 60,
        editable: false,
        displayField: "assetTypeName",
        valueField: "id",
        bind: {
            store: "{assetTypeStore}"
        },
        queryMode: "local"
    }, {
        xtype: "textfield",
        maxWidth: 205,
        fieldLabel: "名称",
        name: 'assetName',
        width: 200,
        labelWidth: 45
    }, {
        xtype: "textfield",
        maxWidth: 205,
        fieldLabel: "编号",
        name: 'assetNo',
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