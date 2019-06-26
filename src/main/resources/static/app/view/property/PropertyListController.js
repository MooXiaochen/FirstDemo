Ext.define("App.view.property.PropertyListController",{
    extend : "Ext.app.ViewController",
    alias: "controller.propertyList",

    init: function(application){
        this.control({
            "propertyList" : {
                canceledit  : 'onPropertyRowEditCancel',
                edit: 'onPropertyRowEdit'
            },
            "propertyTypeWin gridpanel" : {
                canceledit  : 'onPropertyTypeCancel',
                edit: 'onPropertyTypeEdit'
            }
        });
        debugger
    },

    // initViewModel: function(){
    //     debugger
    // },

    // 查询操作
    onSearch: function () {
        var me = this;
        var store = me.view.getStore();
        Ext.Ajax.request({
            url: "/property/find",
            params : {
                userId: me.view.down('#userName').getValue(),
                propertyType: me.view.down('#propertyTypeName').getValue(),
                propertyName: Ext.query("[name=propertyName]")[0].value,
                equipmentNo: Ext.query("[name=propertyNo]")[0].value,
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
        var win = Ext.create("App.view.property.PropertyListWindow", {
            title: "新增资产信息",
            width: 650,
            height: 320,
        });
        win.show();
    },

    // 新增资产类型数据
    onCreatePropertyType: function () {
        var me = this;
        var store = me.getViewModel().get('propertyTypeStore');
        var newData = Ext.create('App.model.PropertyType', {});
        newData.data.propertyTypeId = "";
        store.insert(0, newData);
        me.view.down('gridpanel').editingPlugin.startEdit(0,0);
    },

    // 新增资产类型数据
    onCreateType: function () {
        var win = Ext.create("App.view.property.PropertyTypeWindow", {
            title: "资产类型管理",
            width: 700,
            height: 550,
        });
        win.show();
    },

    // 取消操作
    onPropertyRowEditCancel: function () {
        var me = this;
        var store = me.view.getStore();
        if (store.getAt(0).get('propertyId') == 0) {
            store.remove(store.getAt(0));
        }
        store.load();
    },

    // 资产信息管理[取消]操作
    onPropertyTypeCancel: function (button) {
        var me = this;
        var store = me.view.down('gridpanel').getStore();
        if (store.getAt(0).get('propertyTypeId') == 0) {
            store.remove(store.getAt(0));
        }
        store.load();
    },

    // 保存数据的操作
    onPropertyRowEdit: function (editor, context, eOpts) {
        var me = this;
        var red = me.view.selection.data
        var store = me.view.getStore();
        Ext.Ajax.request({
            url: "/property/save",
            params : red,
            success : function(response) {
                store.load();
            }
        })
    },

    // 保存数据的操作
    onPropertyTypeEdit: function (editor, context, eOpts) {
        var me = this;
        var panel = me.view.down("gridpanel");
        var red = panel.selection.data;
        var store = panel.getStore();
        Ext.Ajax.request({
            url: "/propertyType/save",
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
            ids.push(records[i].get('propertyId'));
        }
        Ext.Ajax.request({
            url: "/property/deletaPropertyList",
            params : {
                ids : [ids]
            },
            success : function(response) {
                store.load();
            }
        })
    },

    // 资产类型管理批量删除数据操作
    onDeletePropertyType: function () {
        var me = this;
        var panel = me.view.down("gridpanel");
        var records = panel.getSelectionModel().getSelection();
        var store = panel.getStore();
        var ids = [];
        if (Ext.isEmpty(records)){
            return Ext.MessageBox.alert("提示", "<center>请选择需要删除的数据</center>");
        }
        for (i in records) {
            ids.push(records[i].get('propertyTypeId'));
        }
        Ext.Ajax.request({
            url: "/propertyType/deletaByIds",
            params : {
                ids : [ids]
            },
            success : function(response) {
                store.load();
            }
        })
    },

    // PropertyWindow[保存]操作
    onPropertyWinSave: function (button) {
        var me = this;
        var form = me.view.down('form');
        var store = me.getViewModel().get('propertyListStore');
        Ext.Ajax.request({
            url: "/property/save",
            params : form.getValues(),
            success : function(response) {
                button.up('propertyListWin').close();
                store.load();
            }
        })
    },

    // PropertyWindow[取消]操作
    onPropertyWinCancel: function (button) {
        var gir = button.up('propertyListWin');
        gir.close();
    },

    // window  刷新
    onRefresh: function (button) {
        button.up().up().getStore().reload();
    },
});