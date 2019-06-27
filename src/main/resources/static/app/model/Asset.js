Ext.define("App.model.Asset", {
    extend: "Ext.data.Model",

    idProperty: 'assetId',

    fields: [
        { name: 'assetId', type: 'int'},
        { name: 'userId', type: 'int',
            mapping: {

            }},
        { name: 'assetTypeId', type: 'int' },
        { name: 'assetName', type: 'string' },
        { name: 'equipmentNo', type: 'string' },
        { name: 'assetPrice', type: 'auto' },
        { name: 'count', type: 'int' },
        { name: 'description', type: 'string'},
        { name: 'registrant', type: 'string'},
        { name: 'createTime', type: 'date',
            convert: function(value){
                if(!Ext.isEmpty(value)) {
                    return Ext.util.Format.date(value, 'Y-m-d H:i:s');
                }　else {
                    return value;
                }
            }},
        { name: 'updateTime', type: 'date',
            convert: function(value){
                if(!Ext.isEmpty(value)) {
                    return Ext.util.Format.date(value, 'Y-m-d H:m:s');
                }　else {
                    return value;
                }
            }},
        { name: 'assetTypeName', type: 'string',
            convert: function(value, red){
                if(!Ext.isEmpty(red.get('assetType'))) {
                    value = red.get('assetType').assetTypeName;
                }
                return value;
            }},
        { name: 'userName', type: 'string',
            convert: function(value, red){
                if(!Ext.isEmpty(red.get('users'))) {
                    value = red.get('users').userName;
                }
                return value;
            }}
    ]
});