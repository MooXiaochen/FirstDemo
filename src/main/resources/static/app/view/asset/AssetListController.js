Ext.define("App.view.asset.AssetListController",{
    extend : "Ext.app.ViewController",
    alias: "controller.assetList",

    init: function(application){
        this.control({
            "assetList" : {
                canceledit  : 'onAssetRowEditCancel',
                edit: 'onAssetRowEdit'
            },
            "assetTypeWin gridpanel" : {
                canceledit  : 'onAssetTypeCancel',
                edit: 'onAssetTypeEdit'
            }
        });
        // var usersModel = Ext.create("Ext.data.Model", {
        //         fields: [
        //             {name: "id", type: 'int'},
        //             {name: "nickName", type: 'string'},
        //             {name: "userName", type: 'string'},
        //             {name: "userNameEn", type: 'string'},
        //             {name: "loginName", type: 'string'},
        //             {name: "sex", type: 'int'},
        //             {name: "grade", type: 'int'}
        //         ]
        //     });
        // var usersStore = Ext.create("Ext.data.Store", {
        //     model: usersModel,
        //     autoLoad: true,
        //     proxy: {
        //         type: "ajax",
        //         url: "/users/findAll",
        //         reader: {
        //             type: "json",
        //             rootProperty: "data"
        //         }
        //     }
        // });
        // debugger
        // this.getViewModel().stores.push(usersStore);
    },

    // initViewModel: function(){
    //     debugger
    // },

    // 查询操作
    onSearch: function () {
        var me = this;
        var store = me.view.getStore();
        Ext.Ajax.request({
            url: "/asset/find",
            params : {
                userId: me.view.down('#userName').getValue(),
                assetType: me.view.down('#assetTypeName').getValue(),
                assetName: Ext.query("[name=assetName]")[0].value,
                equipmentNo: Ext.query("[name=assetNo]")[0].value,
            },
            success : function(response) {
                if (!Ext.isEmpty(response.responseText)){
                    store.loadData(JSON.parse(response.responseText));
                }
            }
        })
    },

    // 新增数据
    onCreate: function () {
        var win = Ext.create("App.view.asset.AssetListWindow", {
            title: "新增资产信息",
            width: 650,
            height: 320,
        });
        win.show();
    },

    // 新增资产类型数据
    onCreateAssetType: function () {
        var me = this;
        var store = me.getViewModel().get('assetTypeStore');
        var newData = Ext.create('App.model.AssetType', {});
        newData.data.assetTypeId = "";
        store.insert(0, newData);
        me.view.down('gridpanel').editingPlugin.startEdit(0,0);
    },

    // 新增资产类型数据
    onCreateType: function () {
        var win = Ext.create("App.view.asset.AssetTypeWindow", {
            title: "资产类型管理",
            width: 700,
            height: 550,
        });
        win.show();
    },

    // 取消操作
    onAssetRowEditCancel: function () {
        var me = this;
        var store = me.view.getStore();
        if (store.getAt(0).get('assetId') == 0) {
            store.remove(store.getAt(0));
        }
        store.load();
    },

    // 资产信息管理[取消]操作
    onAssetTypeCancel: function (button) {
        var me = this;
        var store = me.view.down('gridpanel').getStore();
        if (store.getAt(0).get('assetTypeId') == 0) {
            store.remove(store.getAt(0));
        }
        store.load();
    },

    // 保存数据的操作
    onAssetRowEdit: function (editor, context, eOpts) {
        var me = this;
        var red = me.view.selection.data
        var store = me.view.getStore();
        Ext.Ajax.request({
            url: "/asset/save",
            params : red,
            success : function(response) {
                store.load();
            }
        })
    },

    // 保存数据的操作
    onAssetTypeEdit: function (editor, context, eOpts) {
        var me = this;
        var panel = me.view.down("gridpanel");
        var red = panel.selection.data;
        var store = panel.getStore();
        Ext.Ajax.request({
            url: "/assetType/save",
            params : red,
            success : function(response) {
                store.load();
            }
        })
    },

    //删除数据操作
    onBatchDel: function () {
        var me = this;
        var records = me.view.getSelectionModel().getSelection();
        var store = me.view.getStore();
        var ids = [];
        if (Ext.isEmpty(records)){
            return Ext.MessageBox.alert("提示", "<center>请选择需要删除的数据</center>");
        }
        for (i in records) {
            ids.push(records[i].get('assetId'));
        }
        Ext.Ajax.request({
            url: "/asset/deletaAssetList",
            params : {
                ids : [ids]
            },
            success : function(response) {
                store.load();
            }
        })
    },

    // 资产类型管理批量删除数据操作
    onDeleteAssetType: function () {
        var me = this;
        var panel = me.view.down("gridpanel");
        var records = panel.getSelectionModel().getSelection();
        var store = panel.getStore();
        var ids = [];
        if (Ext.isEmpty(records)){
            return Ext.MessageBox.alert("提示", "<center>请选择需要删除的数据</center>");
        }
        for (i in records) {
            ids.push(records[i].get('assetTypeId'));
        }
        Ext.Ajax.request({
            url: "/asset/deletaByIds",
            params : {
                ids : [ids]
            },
            success : function(response) {
                store.load();
            }
        })
    },

    // AssetWindow[保存]操作
    onAssetWinSave: function (button) {
        var me = this;
        var form = me.view.down('form');
        var store = me.getViewModel().get('assetListStore');
        Ext.Ajax.request({
            url: "/asset/save",
            params : form.getValues(),
            success : function(response) {
                button.up('assetListWin').close();
                store.load();
            }
        })
    },

    // AssetWindow[取消]操作
    onAssetWinCancel: function (button) {
        var gir = button.up('assetListWin');
        gir.close();
    },

    // window  刷新
    onRefresh: function (button) {
        button.up().up().getStore().reload();
    },
});