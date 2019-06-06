Ext.define("App.view.businessInfo.BusinessInfoStore", {
	extend: "Ext.data.Store",
	alias: "store.businessInfo",
	
	model: "App.model.BusinessInfo",

    pageSize: 25, // 分页大小
	
	proxy: {
		type: "ajax",
		// url: "data/businessInfoData.json", //TODO 后台访问地址
		url: "/hello/top", //TODO 后台访问地址
		reader: {
			type: "json",
			rootProperty: "data",
            totalProperty: 'totalProperty'
		}
	}
});