Ext.define("App.view.property.PropertyListController",{
    extend : "Ext.app.ViewController",
    alias: "controller.propertyList",

    init: function(application){
        this.control({
            "propertyList" : {
                canceledit  : 'onCancel',
                edit: 'onEdit'
            }
        })
    },

    // 查询操作
    onSearch: function () {
        debugger
    },

    // 新增数据
    onCreate: function () {
        var me = this;
        var store = me.view.getStore();
        store.insert(0, Ext.create('App.model.Property', {}));
        me.view.editingPlugin.startEdit(0,0);
    },

    // 取消操作
    onCancel: function () {
        var me = this;
        var store = me.view.getStore();
        if (store.getAt(0).get('propertyId') == 0) {
            store.remove(store.getAt(0));
        }
        store.load();
    },

    // 保存数据的操作
    onEdit: function (editor, context, eOpts) {
        var me = this;
        var store = me.view.getStore();
        Ext.Ajax.request({
            url: "/property/save",
            params : context.record.data,
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
    }
});