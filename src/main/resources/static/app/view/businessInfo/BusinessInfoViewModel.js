/**
 * businessViewModel
 */
Ext.define("App.view.businessInfo.BusinessInfoViewModel",{
    extend: "Ext.app.ViewModel",
    alias: 'viewmodel.businessInfo',

    requires: [
        "App.model.BusinessInfo",
        "App.view.businessInfo.BusinessInfoStore"
    ],

	data: {
        // businessStore: 'businessInfoStore'
    },
    stores: {
        business : {
            type: "businessInfo",
			autoLoad: true
        }
    }
});