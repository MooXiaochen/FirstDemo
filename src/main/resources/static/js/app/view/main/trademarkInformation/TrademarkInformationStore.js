Ext.define("app.view.main.trademarkInformation.TrademarkInformationStore", {
    extend: "Ext.data.Store",
    alias: "store.trademark",

    model: "app.view.main.trademarkInformation.TrademarkInformationModel",

    pageSize: 25, // 分页大小

    proxy: {
        type: "ajax",
        url: "data/trademarkData.json", //TODO 后台访问地址
        reader: {
            type: "json",
            rootProperty: "data"
        }
    }
});