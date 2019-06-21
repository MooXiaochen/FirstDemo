Ext.define("App.model.Repository",{
    extend: "Ext.data.TreeModel",

    fields: [{ name: "id", type: 'int' },
        { name: "userId", type: 'int' },
        { name: "keyword", type: 'string' },
        { name: "section", type: 'string' },
        { name: "publish_time", type: 'date' },
        { name: "theme", type: 'string' },
        { name: "publishState", type: 'int' },
        { name: "content", type: 'string',
            convert: function(value, red){
                if (!Ext.isEmpty(value)){
                    value =  red.data.repositoryDetails.content
                }
                return value;
            } },
        { name: "repositoryDetails", type: 'auto'},
        { name: "repositoryComment", type: 'auto'}
    ]
});