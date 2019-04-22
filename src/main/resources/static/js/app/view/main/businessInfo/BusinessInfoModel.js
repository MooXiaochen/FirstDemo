/**
 * businessModel
 */
Ext.define("app.view.main.businessInfo.BusinessInfoModel",{
    extend: "Ext.data.Model",

    fileds:[{
            name: "id",
            type: 'int'
        }, {
            name: "countryid",
            type: 'int'
        }, {
            name: "name",
            type: "string"
        }, {
            name: "natureid",
            type: 'int'
        }, {
            name: "groupid",
            type: 'int'
        }, {
            name: "agentCheap",
            type: 'float'
        }, {
            name: "agentQuote",
            type: 'float'
        }, {
            name: "agentExplain",
            type: 'string'
        }, {
            name: "clientCheap",
            type: 'float'
        }, {
            name: "clientQuote",
            type: 'float'
        }, {
            name: "clientExplain",
            type: 'float'
        }, {
            name: "greenboxid",
            type: 'int'
        }, {
            name: "iscpa",
            type: 'int'
        }, {
            name: "materials",
            type: 'string'
        }, {
            name: "services",
            type: 'string'
        }, {
            name: "dscription",
            type: 'string'
        }, {
            name: "prescription",
            type: 'string'
        }, {
            name: "isLock",
            type: 'int'
        }, {
            name: "sortnum",
            type: 'int'
        }, {
            name: "querycount",
            type: 'int'
        }, {
            name: "content",
            type: 'string'
        }, {
            name: "updatetime",
            type: 'data',
            convert: function(value){
                if(!Ext.isEmpty(value)) {
                    debugger
            　    　return new Date(value).format('Y-m-d H-i-s');
                }　else {
            　　    return value;
                }
            }
        }]
});