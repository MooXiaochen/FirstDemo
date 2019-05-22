Ext.define('App.view.repository.RepositoryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.repository',

    requires: [
        "App.view.repository.RepositoryWindow"
    ],

    onCreate: function () {
        var win = Ext.create("App.view.repository.RepositoryWindow", {
            title: "新建",
            width: '80%',
            height: '87%'
        });
        win.show();
    },

    onEdit: function (grid, index) {
        var rec = grid.getStore().getAt(index);
        var win = Ext.create("App.view.repository.RepositoryWindow", {
            title: "编辑",
            width: '80%',
            height: '87%'
        });
        win.down("form").loadRecord(rec);
        win.initParam = rec;
        win.show();
    },

    onRefresh: function (button){
        var me = this;
        var store = me.view.getStore();
        store.reload();
    },

    onCheckFile: function (grid, index){
        var me = this;
        var rec = grid.getStore().getAt(index);
        Ext.require(['App.view.repository.RepositoryDetails'], function () {
            me.con = Ext.getCmp("mainContent");
            me.con.removeAll();
            me.con.add({xtype: 'repositoryDetails'});
            debugger
        })
    },

    onDel: function (grid, index){

    },

    onWindowSubmit: function (button) {
        var win = button.up('repositoryWin');
        var form = win.down('form');
        form.submit({
            waitTitle : '请稍后...',
            waitMsg : '正在保存提交信息,请稍后...',
            url : '/repository/save',
            method : 'post',
            success : function() {
                Ext.Msg.alert("保存成功！");
                win.close();
            },
            failure : function(form , action){
                var responseJson = Ext.decode(action.response.responseText);
                Ext.Msg.alert("状态码：" + responseJson.status, "错误信息 ：" + responseJson.message);
            }
        });
    },

    onWindowCancel: function (button) {
        button.up('repositoryWin').close();
    },

});
