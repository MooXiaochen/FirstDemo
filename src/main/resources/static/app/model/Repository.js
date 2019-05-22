Ext.define("App.model.Repository",{
    extend: "Ext.data.Model",

    fields: [{ name: "id", type: 'int' },
        { name: "userId", type: 'int' },
        { name: "keyword", type: "string" },
        { name: "section", type: 'string' },
        { name: "publish_time", type: 'date' },
        { name: "theme", type: 'string' },
        { name: "content", type: 'string',
            convert: function(value, red){
                value =  red.data.repositoryDetails.content
                return value;
            } },
        { name: "publishState", type: 'int' }
    ]
});