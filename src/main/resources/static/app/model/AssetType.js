Ext.define("App.model.AssetType", {
    extend: "Ext.data.Model",

    idProperty: 'assetTypeId',

    fields: [
        { name: 'assetTypeId', type: 'int'},
        { name: 'assetTypeName', type: 'string'}
    ]
});