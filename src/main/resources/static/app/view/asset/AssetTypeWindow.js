Ext.define("App.view.asset.AssetTypeWindow", {
	extend: "Ext.window.Window",
	xtype: "assetTypeWin",
	
	requires: [
            "App.view.asset.AssetListViewModel",
            "App.view.asset.AssetListController"
        ],
	viewModel: {
		type: "assetList"
	},
	controller: "assetList",

    layout: 'fit',

    initComponent: function() {
        var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
            pluginId:'rowEditing',
            saveBtnText: '保存',
            cancelBtnText: "取消",
            autoCancel: false,
            clicksToEdit:2	//双击进行修改
        })
        Ext.apply(this, {
            items: [{
                xtype: "gridpanel",
                selType: "checkboxmodel",
                reference: "assetTypePanel",
                border: true,
                margin: 5,
                columns: [{
                    text: "资产序号",
                    dataIndex: "assetTypeId"
                }, {
                    text: "资产类型",
                    dataIndex: "assetTypeName",
                    flex : 1,
                    editor: 'textfield'
                }],
                tbar: ["->", "->", {
                    xtype: "button",
                    text: "新增",
                    icon: "extjs/resources/images/tree/drop-add.png",
                    cls: "x-btn-text-icon",
                    handler: "onCreateAssetType"
                }, {
                    xtype: "button",
                    text: "删除",
                    icon: "icons/bullet_cross.png",
                    cls: "x-btn-text-icon",
                    handler: "onDeleteAssetType"
                }, {
                    xtype: "button",
                    text: "刷新",
                    icon: "icons/arrow_rotate_clockwise.png",
                    cls: "x-btn-text-icon",
                    handler: "onRefresh"
                }],
                bind: {
                    store: "{assetTypeStore}"
                },
                plugins: [rowEditing]
            }],
        });
        this.callParent(arguments);
    }
});
