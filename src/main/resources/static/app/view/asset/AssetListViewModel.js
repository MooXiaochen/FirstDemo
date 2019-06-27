Ext.define("App.view.asset.AssetListViewModel",{
    extend: "Ext.app.ViewModel",
    alias: 'viewmodel.assetList',

    requires: [
        "App.store.Users",
        "App.store.Asset",
        "App.store.AssetType"
    ],

    stores: {
        assetListStore: {
            type: "asset",
            autoLoad: true
        },
        usersStore: {
            type: "users",
            autoLoad: true
        },
        assetTypeStore: {
            type: "assetType",
            autoLoad: true
        }
    },
    // formulas : {
    //     groupName : function (data) {
    //         debugger
    //     }
    // }
});