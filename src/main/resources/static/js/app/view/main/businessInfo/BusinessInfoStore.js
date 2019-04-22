Ext.define("app.view.main.businessInfo.BusinessInfoStore", {
	extend: "Ext.data.Store",
	alias: "store.businessInfo",
	
	model: "app.view.main.businessInfo.BusinessInfoModel",
	
	proxy: {
		type: "ajax",
		// url: "data/businessInfoData.json", //TODO 后台访问地址
		url: "/user/top", //TODO 后台访问地址
		reader: {
			type: "json",
			rootProperty: "data"
		}
	}
});