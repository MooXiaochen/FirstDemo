Ext.define("App.model.Category", {
    extend: "Ext.data.Model",

    fields: [
        { name: 'ParentId', type: 'auto', defaultValue: null },
        { name: 'ParentTitle', defaultValue: '' },
        { name: 'Title', defaultValue: '' },
        { name: 'Image', defaultValue: '' },
        { name: 'Content', defaultValue: '' },
        { name: 'SortOrder', type: 'int', defaultValue: 0 },
        { name: 'Created', type: 'date', dateFormat: 'Y-m-d H:i:s' }
    ]
});