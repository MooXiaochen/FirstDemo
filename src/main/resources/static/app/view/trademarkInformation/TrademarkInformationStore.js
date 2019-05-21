Ext.define("App.view.trademarkInformation.TrademarkInformationStore", {
    extend: "Ext.data.Store",
    alias: "store.trademarkStore",

    model: "App.model.TrademarkInformation",

    proxy: {
        type: "ajax",
        url: "data/trademarkData.json", //TODO 后台访问地址
        reader: {
            type: "json",
            rootProperty: "data"
        }
    }
});