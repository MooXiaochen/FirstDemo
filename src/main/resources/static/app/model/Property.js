Ext.define("App.model.Property", {
    extend: "Ext.data.Model",

    fields: [
        { name: 'propertyId', type: 'int'},
        { name: 'userId', type: 'int'},
        { name: 'propertyTypeId', type: 'int' },
        { name: 'propertyName', type: 'string' },
        { name: 'equipmentNo', type: 'string' },
        { name: 'propertyPrice', type: 'auto' },
        { name: 'count', type: 'int' },
        { name: 'createTime', type: 'date',
            convert: function(value){
                if(!Ext.isEmpty(value)) {
                    return Ext.util.Format.date(value, 'Y-m-d H-i-s');
                }　else {
                    return value;
                }
            }},
        { name: 'updateTime', type: 'date',
            convert: function(value){
                if(!Ext.isEmpty(value)) {
                    return Ext.util.Format.date(value, 'Y-m-d H-i-s');
                }　else {
                    return value;
                }
            }},
        { name: 'description', type: 'string'},
        { name: 'registrant', type: 'string'}
    ]
});