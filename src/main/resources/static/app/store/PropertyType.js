Ext.define("App.store.PropertyType", {
	extend: "Ext.data.Store",
	alias: "store.propertyType",

	model: "App.model.PropertyType",
	proxy: {
		type: "ajax",
		url: "/propertyType/find",
		reader: {
			type: "json",
			rootProperty: "data"
		}
	}
});