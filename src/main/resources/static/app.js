/*
 * Application's entrance
 */

//设置插件加载目录
Ext.Loader.setConfig({
	enabled: true,
	paths: {
		"Ext.ux": "extjs/ux"
	}
});

Ext.application({
	extend: "App.Application",
	name: "App",

    requires: [
        'Overrides.*',
        'App.ux.*',
        'App.util.Toast',
        'App.view.main.Main'
    ],
	
	autoCreateViewport: "App.view.main.Main"
});