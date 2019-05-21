Ext.define("App.view.trademarkInformation.TrademarkInformationViewModel",{
    extend: "Ext.app.ViewModel",
    alias: 'viewmodel.trademark',

    requires: [
        "App.model.TrademarkInformation",
        "App.view.trademarkInformation.TrademarkInformationStore"
    ],

    stores: {
        trademark : {
            type: "trademarkStore",
            autoLoad: true
        }
    }
});