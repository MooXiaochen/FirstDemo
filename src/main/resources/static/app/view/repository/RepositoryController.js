Ext.define('App.view.repository.RepositoryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.repository',

    requires: [
        "App.view.repository.details.RepositoryWindow"
    ],

    init: function(application){
        this.control({
            "repositoryDetails" : {
                afterrender  : 'onShow'
            }
        })
    },

    onShow: function(a, b) {
        var view = this.view;
        var repositoryId = view.infoData.id;
        if (Ext.isEmpty(repositoryId)) {
            return;
        }
        var panelTpl = new Ext.XTemplate('<h2  style="text-align:center">{theme}</h2>' +
                    '<p style="text-align:center">{publishTime:date("Y-m-d H:i:s")}</p>' +
                    '<table style="border:0;width:100%">' +
                    '<tr>' +
                    '<td style="border:0;width:50%;"><b>部门</b>：{section}</td>' +
                    '<td style="border:0;width:50%;"><b>关键字</b>：{keyword}</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td style="border:0;width:50%;"><b>发布人</b>：{userId}</td>' +
                    '</tr>' +
                    '</table>' +
                    '<h3 style="border-bottom:1px solid;line-height:30px;">{repositoryDetails.content}</h3>'
                );
        panelTpl.overwrite(Ext.get("div_boby"), view.infoData.data);
    },

    onCreate: function () {
        var win = Ext.create("App.view.repository.details.RepositoryWindow", {
            title: "新建",
            width: '80%',
            height: '87%'
        });
        win.show();
    },

    onEdit: function (grid, index) {
        var rec = grid.getStore().getAt(index);
        var win = Ext.create("App.view.repository.details.RepositoryWindow", {
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
        Ext.Ajax.request({
            url: "/repository/getById",
            params : {
                id : rec.get("id")
            },
            success : function(response) {
                var obj = Ext.decode(response.responseText);
                Ext.require(['App.view.repository.details.RepositoryDetails'], function () {
                    me.con = Ext.getCmp("mainContent");
                    me.con.removeAll();
                    me.con.add({ xtype: 'repositoryDetails', infoData: {id:rec.get("id"), data: obj}});
                })
            }
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
