/**
 * businessViewModel
 */
Ext.define("app.view.main.businessInfo.BusinessInfoViewModel",{
    extend: "Ext.app.ViewModel",
    alias: 'viewmodel.businessInfo',

    requires: [
        "app.view.main.businessInfo.BusinessInfoModel",
        "app.view.main.businessInfo.BusinessInfoStore"
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