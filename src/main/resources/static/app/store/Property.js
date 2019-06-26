Ext.define("App.store.Property", {
	extend: "Ext.data.Store",
	alias: "store.property",

    model: "App.model.Property",
    groupField: 'userName',
    autoLoad: true,
    proxy: {
        type: "ajax",
        url: "/property/findList",
        reader: {
            type: "json",
            rootProperty: "totalProperty"
        }
    }
});