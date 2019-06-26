/*
 * 视图模型 - 用户管理
 */

Ext.define("App.view.users.UsersModel", {
	extend: "Ext.app.ViewModel",
	alias: "viewmodel.users",
	requires: ["App.store.Users", "App.store.Role"],
	
	data: {},
	
	stores: {
		users: {
			type: "users",
			pageSize: 10,
			autoLoad: true
		},
		role: {
			type: "role",
			autoLoad: true
		},
		state: Ext.create("Ext.data.Store", {
			fields: ["stateId", "stateName"],
			data: [
				["0", "启用"],
				["1", "禁用"]
			]
		})
	}
});
