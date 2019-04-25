Ext.define("app.view.main.trademarkInformation.TrademarkInformationStore", {
    extend: "Ext.data.Store",
    alias: "store.trademarkStore",

    model: "app.view.main.trademarkInformation.TrademarkInformationModel",

    proxy: {
        type: "ajax",
        url: "data/trademarkData.json", //TODO 后台访问地址
        reader: {
            type: "json",
            rootProperty: "data"
        }
    }
});