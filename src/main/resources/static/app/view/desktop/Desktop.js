/* 
 * 视图 - 首页
 */

Ext.define("App.view.desktop.Desktop", {
	extend: "Ext.panel.Panel",
	xtype: "desktop",
	requires: [
	    "App.view.desktop.DesktopModel",
	    "App.view.desktop.DesktopController"
	],
	viewModel: {type: "desktop"},
	controller: "desktop",
	
	title: "首页",
	border: true,
	layout: "border",

    html: '<center><h1> - </h1></center>' +
		'<center><h1>对 我就是首页</h1></center>'
	
});