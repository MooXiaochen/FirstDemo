Ext.define("App.view.property.PropertyListView", {
    extend: "Ext.grid.Panel",
    xtype: "propertyList",

    requires: [
        "App.view.property.PropertyListViewModel",
        "App.model.Property",
        "App.view.property.PropertyListController"
    ],

    viewModel: {
        type: "propertyList"
    },
    controller: "propertyList",

    selType: "checkboxmodel",

    border: true,

    columns: [{
        text: "propertyId",
        dataIndex: "propertyId",
        hidden : true
    }, {
        text: "userId",
        dataIndex: "userId",
        hidden : true
    }, {
        text: "资产类型",
        dataIndex: "propertyTypeId",
        flex : 1,
        editor: 'textfield'
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


    initComponent: function() {
        var gridStore = Ext.create('Ext.data.Store', {
            model: "App.model.Property",
            autoLoad: true,
            proxy: {
                type: "ajax",
                url: "/property/findList",
                reader: {
                    type: "json",
                    rootProperty: "totalProperty"
                }
            }
        });
        var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
            pluginId:'rowEditing',
            saveBtnText: '保存',
            cancelBtnText: "取消",
            autoCancel: false,
            clicksToEdit:2	//双击进行修改
        })
        gridStore.load();
        Ext.apply(this, {
            title: "资产信息管理",
            store: gridStore,
            plugins: [rowEditing],
            tbar: [{
                xtype: "textfield",
                maxWidth: 205,
                fieldLabel: "员工",
                width: 200,
                labelWidth: 45
            }, {
                xtype: "textfield",
                maxWidth: 205,
                fieldLabel: "资产类型",
                width: 200,
                labelWidth: 60
            }, {
                xtype: "textfield",
                maxWidth: 205,
                fieldLabel: "名称",
                width: 200,
                labelWidth: 45
            }, {
                xtype: "textfield",
                maxWidth: 205,
                fieldLabel: "编号",
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
            }]
        });
        this.callParent(arguments);
    }
});