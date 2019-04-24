Ext.define("app.view.main.trademarkInformation.TrademarkInformationViewModel",{
    extend: "Ext.app.ViewModel",
    alias: 'viewmodel.trademark',

    requires: [
        "app.view.main.trademarkInformation.TrademarkInformationModel",
        "app.view.main.trademarkInformation.TrademarkInformationStore"
    ],

    stores: {
        business : {
            type: "trademark",
            autoLoad: true
        }
    }
});