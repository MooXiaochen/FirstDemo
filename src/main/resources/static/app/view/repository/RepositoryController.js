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

    onWindowSubmit: function (button) {
        var win = button.up().up();
        var form = win.down('form');
        form.submit({
            waitTitle : '请稍后...',
            waitMsg : '正在保存提交信息,请稍后...',
            url : '/repository/save',
            method : 'post',
            success : function(form, action) {
                alert(action.result.msg);
            },
        });
    },

    onWindowCancel: function (button) {
        button.up('repositoryWin').close();
    }

});
