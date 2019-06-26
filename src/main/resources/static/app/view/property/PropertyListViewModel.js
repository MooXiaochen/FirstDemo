Ext.define("App.view.property.PropertyListViewModel",{
    extend: "Ext.app.ViewModel",
    alias: 'viewmodel.propertyList',

    requires: [
        "App.store.Users",
        "App.store.Property",
        "App.store.PropertyType"
    ],

    stores: {
        propertyListStore: {
            type: "property",
            autoLoad: true
        },
        usersStore: {
            type: "users",
            autoLoad: true
        },
        propertyTypeStore: {
            type: "propertyType",
            autoLoad: true
        }
    }
});