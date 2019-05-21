Ext.define("App.model.Content", {
    extend: "Ext.data.Model",

    fields: [
        { name: 'CategoryId', type: 'auto', defaultValue: null },
        { name: 'CategoryTitle', type: 'string', defaultValue: '' },
        { name: 'Title', type: 'string', defaultValue: '' },
        { name: 'Image', type: 'string', defaultValue: '' },
        { name: 'Summary', type: 'string', defaultValue: '' },
        { name: 'Body', type: 'string', defaultValue: '' },
        { name: 'Tags', type: 'string', defaultValue: '' },
        { name: 'Created', type: 'date', dateFormat: 'Y-m-d H:i:s'},
        { name: 'Hits', type: 'int' },
        { name: 'SortOrder', type: 'int', defaultValue: 0 }
    ]
});