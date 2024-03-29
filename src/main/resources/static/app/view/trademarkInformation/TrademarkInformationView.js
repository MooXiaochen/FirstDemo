Ext.define("App.view.trademarkInformation.TrademarkInformationView", {
    extend: "Ext.grid.Panel",
    xtype: "trademark",
    id: "trademark",

    requires: [
        "App.view.trademarkInformation.TrademarkInformationViewModel",
        "App.view.trademarkInformation.TrademarkInformationContoller",
        "App.model.TrademarkInformation"
    ],

    viewModel: {
        type: "trademark"
    },
    controller: "trademark",

    bind: {
        store: "{trademark}"
    },

    initComponent: function() {
        Ext.apply(this, {
            selType: "checkboxmodel",
            title: "商标系统设置",
            border: true,
            columns: [{
                text: "id",
                dataIndex: "id",
                width: 260
            }, {
                text: "number",
                dataIndex: "number",
                width: 260
            }, {
                text: "name",
                dataIndex: "name",
                width: 260
            }, {
                text: "type",
                dataIndex: "type",
                width: 260
            }, {
                text: "user",
                dataIndex: "user",
                width: 260
            }, {
                text: "is_lock",
                dataIndex: "isLock",
                width: 200,
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
                width: 200
            }, {
                xtype: "actioncolumn",
                text: "操作",
                width: 100,
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
            }]

        });
        this.callParent(arguments);
    }
});