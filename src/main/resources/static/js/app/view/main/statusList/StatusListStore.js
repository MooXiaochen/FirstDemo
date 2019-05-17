Ext.define("app.view.main.statusList.StatusListStore", {
	extend: "Ext.data.Store",
	alias: "store.statusList",
	
	model: "app.view.main.statusList.StatusListModel",

	proxy: {
		type: "ajax",
		url: "/statusList/find", //TODO 后台访问地址
		reader: {
			type: "json",
			rootProperty: "data"
		}
	}
});