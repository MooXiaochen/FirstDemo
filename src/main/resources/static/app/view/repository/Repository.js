Ext.define("App.view.repository.Repository",{
    extend: "Ext.grid.Panel",

    xtype: 'repository',
 
    requires: [
        "App.view.repository.RepositoryController",
        "App.model.Repository",
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
            if (value == 1) return "<span style='color:green;'>已发布</span>";
            if (value == 0) return "<span style='color:red;'>编辑中</span>";
        }
    }, {
        text: "发布时间",
        dataIndex: "publishTime",
        flex : 1
    }, {
        text: "所属部门",
        dataIndex: "section",
        flex : 1,
        renderer: function(value){
            if (value == 1) return "商务部";
            if (value == 2) return "会计部";
            if (value == 3) return "开发部";
            return "未分配";
        }
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
        items: [
            {
            iconCls: "opt-edit",
            tooltip: "编辑",
            handler: "onEdit"
        }, {
            iconCls: "opt-search",
            tooltip: "查看",
            handler: "onCheckFile"
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
        text: "发布",
        icon: "icons/application_get.png",
        cls: "x-btn-text-icon",
        handler: "onBatchDel"
    }, {
        xtype: "button",
        text: "删除",
        icon: "icons/bullet_cross.png",
        cls: "x-btn-text-icon",
        handler: "onEdit"
    }, {
        xtype: "button",
        text: "刷新",
        icon: "icons/arrow_rotate_clockwise.png",
        cls: "x-btn-text-icon",
        handler: "onRefresh"
    }],

    initComponent: function() {
        var gridStore = Ext.create('Ext.data.Store', {
            model: "App.model.Repository",
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
