Ext.define("App.store.Users", {
	extend: "Ext.data.Store",
	alias: "store.users",
	
	model: "App.model.Users",
	proxy: {
		type: "ajax",
		url: "/users/findAll",
		reader: {
			type: "json",
			rootProperty: "data"
		}
	}
});