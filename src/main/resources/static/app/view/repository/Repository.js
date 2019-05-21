Ext.define("App.view.repository.Repository",{
    extend: "Ext.grid.Panel",

    xtype: 'repository',
 
    requires: [
        "App.view.repository.RepositoryController",
        "App.view.repository.RepositoryModel"
    ],
    
    controller: "repository",

    selType: "checkboxmodel",

    border: true,

    viewModel: {
        type: "repository"
    },

    columns: [{
        text: "id",
        dataIndex: "id",
        hidden : true
    }, {
        text: "标题",
        dataIndex: "theme",
        flex : 3
    }, {
        text: "状态",
        dataIndex: "publishState",
        flex : 1,
        renderer: function(value){
            if (value == 1)
                return "已发布"
            if (value == 0)
                return "编辑中"
        }
    }, {
        text: "发布时间",
        dataIndex: "publishTime",
        flex : 1
    }, {
        text: "所属部门",
        dataIndex: "section",
        flex : 1
    }, {
        text: "关键字",
        dataIndex: "keyword",
        flex : 2
    }, {
        text: "发布人",
        dataIndex: "userId",
        flex : 1
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
            handler: "onEdit"
        }, {
            iconCls: "opt-edit",
            tooltip: "发布",
            handler: "onPublish"
        }, {
            iconCls: "opt-delete",
            tooltip: "删除",
            handler: "onDel"
        }]
    }],
    tbar: [{
        xtype: "textfield",
        maxWidth: 205,
        fieldLabel: "搜索关键字",
        width: 250,
        labelWidth: 80
    }, {
        xtype: "button",
        text: "搜索",
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
        text: "编辑",
        icon: "icons/application_edit.png",
        cls: "x-btn-text-icon",
        handler: "onEdit"
    }, {
        xtype: "button",
        text: "发布",
        icon: "icons/bullet_cross.png",
        cls: "x-btn-text-icon",
        handler: "onBatchDel"
    }, {
        xtype: "button",
        text: "刷新",
        icon: "icons/arrow_rotate_clockwise.png",
        cls: "x-btn-text-icon",
        handler: "onRefresh"
    }],

    initComponent: function() {
        var gridStore = Ext.create('Ext.data.Store', {
            fields: [{ name: "id", type: 'int' },
                     { name: "userId", type: 'int' },
                     { name: "keyword", type: "string" },
                     { name: "section", type: 'string' },
                     { name: "publish_time", type: 'date' },
                     { name: "theme", type: 'string' },
                     { name: "content", type: 'string',
                         convert: function(value, red){
                             value =  red.data.repositoryDetails.content
                             return value;
                         } },
                     { name: "publishState", type: 'int' }
                    ],
            autoLoad: true,
            proxy: {
                type: "ajax",
                url: "/repository/find",
                reader: {
                    type: "json",
                    rootProperty: "totalProperty"
                }
            }
        });
        gridStore.load();
        Ext.apply(this, {
            title: "知识库",
            store: gridStore
        });
        this.callParent(arguments);
    }
});
