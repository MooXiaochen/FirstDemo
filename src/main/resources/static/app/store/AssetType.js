Ext.define("App.store.AssetType", {
	extend: "Ext.data.Store",
	alias: "store.assetType",

	model: "App.model.AssetType",
	proxy: {
		type: "ajax",
		url: "/assetType/find",
		reader: {
			type: "json",
			rootProperty: "data"
		}
	}
});