Ext.define("App.store.Asset", {
	extend: "Ext.data.Store",
	alias: "store.asset",

    model: "App.model.Asset",
    groupField: 'userName',
    autoLoad: true,
    proxy: {
        type: "ajax",
        url: "/asset/findList",
        reader: {
            type: "json",
            rootProperty: "totalProperty"
        }
    }
});