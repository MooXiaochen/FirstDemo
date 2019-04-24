Ext.define("app.view.main.trademarkInformation.TrademarkInformationModel",{
    extend: "Ext.data.Model",

    fileds:[{
        name: "id",
        type: 'int'
    }, {
        name: "number",
        type: 'int'
    }, {
        name: "name",
        type: 'string'
    }, {
        name: "type",
        type: 'string'
    }, {
        name: "user",
        type: 'string'
    }, {
        name: "isLock",
        type: 'int'
    }, {
        name: "dataTime",
        type: 'date'
    }]
});