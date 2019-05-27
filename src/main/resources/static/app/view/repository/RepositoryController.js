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
        var panelTpl = new Ext.XTemplate('<h2 style="text-align:center">{theme}</h2>' +
                    '<p style="text-align:center">{publishTime:date("Y-m-d H:i:s")}</p>' +
                    '<!--  -->'+
                    '<table style="border:0;width:100%">' +
                    '<tr>' +
                    '<td style="border:0;width:33%; text-align:center"><b>部门</b>：' +
                        '<tpl if="section == 1">商务部</tpl>' +
                        '<tpl if="section == 2">会计部</tpl>' +
                        '<tpl if="section == 3">开发部</tpl>' +
                    '</td>' +
                    '<td style="border:0;width:33%; text-align:center"><b>关键字</b>：{keyword}</td>' +
                    '<td style="border:0;width:33%; text-align:center"><b>发布人</b>：' +
                        '<tpl if="userId == 1">系统管理员</tpl>' +
                        '<tpl if="userId != 1">默认人员</tpl>' +
                    '</td>' +
                    '</tr>' +
                    '</table>' +
                    '<hr style="height: 2px;border:none;border-top:2px solid #555;margin: 20px auto;width: 96%">'+
                    '<div style="margin: 0 auto;width: 70%">{repositoryDetails.content}</div>' +
                    '<tpl for="repositoryCommentList">' +
                    '<hr style="height: 1px;border:none;border-top:1px solid #555;margin: 20px auto;width: 96%">'+
                    '<div style="margin: 5px auto; width: 96%">' +
                        '<div style="width:17%;float:left">' +
                            '<table style="border:0;width:100%">' +
                            '<tr>' +
                                '<td style="border:0;width:100%;"><img src="img/portrait.png" style="float:left;width:80px;height:80px"></td>' +
                            '</tr>' +
                            '<tr>' +
                                '<td style="border:0;width:100%;"><b>发布人</b>：{commentUserId}</td>' +
                            '</tr>' +
                            '<tr>' +
                                '<td style="border:0;width:100%;"><b>发布时间</b>：{commentTime:date("Y-m-d H:i:s")}</td>' +
                            '</tr>' +
                            '</table>' +
                        '</div>' +
                        '<div style="width: 75%;float: right;margin: 10px 100px 0px 0px">' +
                            '<span>{commentContent}</span>' +
                        '</div>' +
                    '</div>'+
                    '</tpl>'+
                    '<hr style="height: 1px;border:none;border-top:1px solid #555;margin: 20px auto;width: 96%">'+
                    '<span style="font-weight:bold;font-size:14px;margin-left:2%">发表回复：</span><br/>'+
                    '<textarea name="a" style="width:96%;height:160px;margin-left: 2%;margin-top: 10px;resize:none;" maxlength="20" placeholder="请输入不要超过15个字">这里写内容</textarea>'+
                    // '<div contenteditable="true" style="width:96%;min-height: 60px; max-height: 200px;border: 1px solid black;margin: 10px auto"></div>'+
                    '<button style="width: 65px;height: 30px;margin: 10px 0px 100px 48%">&nbsp发&nbsp表&nbsp</button>'
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
                if (Ext.isEmpty(response.responseText)){
                    Ext.Msg.alert("失败", "后台数据有误！未查询到数据。");
                    return
                }
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
