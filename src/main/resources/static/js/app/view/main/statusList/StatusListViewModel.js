Ext.define("app.view.main.statusList.StatusListViewModel",{
    extend: "Ext.app.ViewModel",
    alias: 'viewmodel.statusList',

    requires: [
        "app.view.main.statusList.StatusListModel",
        "app.view.main.statusList.StatusListStore"
    ],

    stores: {
        statusListStore : {
            type: "statusList",
			autoLoad: true
        }
    },
    init: function () {
        debugger
    }
});