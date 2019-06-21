Ext.define("App.view.login.LoginController", {
	extend: "Ext.app.ViewController",
	alias: "controller.login",
	uses: ["App.view.main.Main"],
	
	onSpecialKey: function(field, e) {
		if(e.getKey() == e.ENTER) {
			this.onLogin();
		}
	},
	
	onLogin: function() {
		var me = this;
        var form = this.lookupReference("loginForm");
        form.submit({
            waitTitle : '提示',
            waitMsg : '验证中，请稍后...',
            url : '/users/login',
            success : function(response, options) {
                var o = Ext.util.JSON.decode(response.responseText);
                me.getView().destroy();
                Ext.create("App.view.main.Main");
            },
            failure : function() {
                debugger
            }
		});

	}
	
});












