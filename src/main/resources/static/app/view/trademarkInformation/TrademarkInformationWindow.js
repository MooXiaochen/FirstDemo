Ext.define("App.view.trademarkInformation.TrademarkInformationWindow", {
    extend: "Ext.window.Window",
    xtype: "trademarkInformationWindow",
    id: "trademarkInformationWindow",

    requires: [
        "App.view.trademarkInformation.TrademarkInformationViewModel",
        "App.view.trademarkInformation.TrademarkInformationContoller",
        "App.model.TrademarkInformation"
    ],

    controller: "trademark",

    layout: 'fit',
    items: [{
        xtype: "gridpanel",
        selType: "checkboxmodel",
        reference: "trademarkInformationPanel",
        border: true,
        margin: 5,
        columns: [{
            text: "id",
            dataIndex: "id"
        }, {
            text: "number",
            dataIndex: "number",
            flex : 1,
        }, {
            text: "name",
            dataIndex: "name",
            flex : 1,
        }, {
            text: "type",
            dataIndex: "type",
            flex : 1,
        }, {
            text: "user",
            dataIndex: "user",
            flex : 2,
        }, {
            text: "is_lock",
            dataIndex: "isLock",
            flex : 1,
            renderer: function (value) {
                if (!Ext.isEmpty(value)) {
                    if (value == 0) {
                        return "草稿";
                    } else if (value == 1) {
                        return "生效";
                    } else if (value == 2) {
                        return "失效";
                    }
                }
            }
        }, {
            text: "data_time",
            dataIndex: "dataTime",
            flex : 1,
        }, {
            xtype: "actioncolumn",
            text: "操作",
            width: 70,
            align: "center",
            sortable: false,
            menuDisabled: true,
            items: [{
                iconCls: "opt-edit",
                tooltip: "编辑",
                handler: "onEdit"
            }]
        }],
        tbar: ["->", "->", {
            xtype: "button",
            text: "新增",
            icon: "extjs/resources/images/tree/drop-add.png",
            cls: "x-btn-text-icon",
            handler: "onCreate"
        }, {
            xtype: "button",
            text: "生效",
            icon: "icons/bullet_cross.png",
            cls: "x-btn-text-icon",
            handler: "onEffective"
        }, {
            xtype: "button",
            text: "失效",
            icon: "icons/bullet_cross.png",
            cls: "x-btn-text-icon",
            handler: "onInvalid"
        }, {
            xtype: "button",
            text: "刷新",
            icon: "icons/arrow_rotate_clockwise.png",
            cls: "x-btn-text-icon",
            handler: "onRefresh"
        }],
        viewModel: {
            type: "trademark"
        },

        bind: {
            store: "{trademark}"
        },

    }]
});