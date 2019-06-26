Ext.define("App.model.Property", {
    extend: "Ext.data.Model",

    idProperty: 'propertyId',

    fields: [
        { name: 'propertyId', type: 'int'},
        { name: 'userId', type: 'int',
            mapping: {

            }},
        { name: 'propertyTypeId', type: 'int' },
        { name: 'propertyName', type: 'string' },
        { name: 'equipmentNo', type: 'string' },
        { name: 'propertyPrice', type: 'auto' },
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
        { name: 'propertyTypeName', type: 'string',
            convert: function(value, red){
                if(!Ext.isEmpty(red.get('propertyType'))) {
                    value = red.get('propertyType').propertyTypeName;
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