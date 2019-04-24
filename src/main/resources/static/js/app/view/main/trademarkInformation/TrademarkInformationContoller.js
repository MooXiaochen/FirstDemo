Ext.define("app.view.main.trademarkInformation.TrademarkInformationContoller",{
    extend : "Ext.app.ViewController",
    alias: "controller.trademark",

    uses: ["app.view.main.trademarkInformation.TrademarkWindow"],

    init: function(applocation) {

    },

    // 新增数据
    onCreate: function (button, e) {
        var win = Ext.create("app.view.main.trademarkInformation.TrademarkWindow", {
            title: "新建商标信息",
            width: 400,
            height: 270
        });
        win.show();
    },

    // 刷新
    onRefresh: function (button, e) {
        var me = this;
        var store = me.view.getStore();
        store.reload();
    },

    // 批量生效
    onEffective: function (button, e) {
        var me = this;
        var record = me.view.getSelectionModel().getSelection();
        var store = me.view.getStore();
        if (Ext.isEmpty(record)) {
            Ext.Msg.alert("信息", "请选择要生效的数据！");
            return;
        }
        Ext.Msg.confirm("确认", "确认生效所选的" + record.length + "条数据吗？<br />", function(res) {
            if(res=="yes") {

            }
        });
    },

    // 批量失效
    onInvalid: function (button, e) {
        var me = this;
        var record = me.view.getSelectionModel().getSelection();
        var store = me.view.getStore();
        if (Ext.isEmpty(record)) {
            Ext.Msg.alert("信息", "请选择要生效的数据！");
            return;
        }
        Ext.Msg.confirm("确认", "确认失效所选的" + record.length + "条数据吗？<br />", function(res) {
            if(res=="yes") {

            }
        });
    },

    // 编辑
    onEdit: function(grid, index) {
        var rec = grid.getStore().getAt(index);
        var win = Ext.create("app.view.main.trademarkInformation.TrademarkWindow", {
            title: "编辑商标信息 - #" + rec.get("id"),
            width: 400,
            height: 270
        });
        win.down("form").loadRecord(rec);
        win.initParam = rec;
        win.show();
    },

    // window 保存
    onSave: function (button, e) {
        var me = this;
        var store = me.view.getStore();
        store.reload();
    },

    // window  取消
    onCancel: function (button, e) {
        var gir = button.up('trademarkWin');
        gir.close();
    },
    
});