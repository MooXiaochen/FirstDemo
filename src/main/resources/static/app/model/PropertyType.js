Ext.define("App.model.PropertyType", {
    extend: "Ext.data.Model",

    idProperty: 'propertyTypeId',

    fields: [
        { name: 'propertyTypeId', type: 'int'},
        { name: 'propertyTypeName', type: 'string'}
    ]
});






