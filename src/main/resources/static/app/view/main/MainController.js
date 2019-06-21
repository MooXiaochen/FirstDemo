/* 
 * 视图控制器 - 系统主页
 */

Ext.define("App.view.main.MainController", {
	extend: "Ext.app.ViewController",
	alias: "controller.main",
	
	//点击菜单
	onMenuClick: function(view, rec, item, index) {
		var me = this;
		if(rec.data.mod && rec.data.modUrl) {
            var text = rec.data.text;
			var mod = rec.data.mod;
			var modUrl = "App.view." + rec.data.modUrl;
			Ext.require([modUrl], function() {
				me.loadModule(mod);
				var view = me.view.down(mod);
				if(text == "政策公告") {
                    view.setHtml("<center><h1>暂无公告</h1></center>");
                } else if (text == "团队建设"){
                    view.setHtml("<center><h1>暂无团建信息</h1></center>");
                } else if (text == "培训活动"){
                    view.setHtml("<center><h1>暂无培训文档</h1></center>");
                }
            });
		}else {
		    if (Ext.isEmpty(rec.data.children)) {
                Ext.Msg.alert("失败", "页面开发中。。。");
            }
		}
	},
	
	//加载模块
	loadModule: function(mod) {
		var me = this;
		if(!me.con) {
			me.con = Ext.getCmp("mainContent");
		}
		me.con.removeAll();
		me.con.add({xtype: mod});
	},
	
	//退出系统
	exitSys: function() {
		this.getView().destroy();
		Ext.create("App.view.login.Login");
	}
});