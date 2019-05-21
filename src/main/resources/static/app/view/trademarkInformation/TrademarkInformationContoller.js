Ext.define("App.view.trademarkInformation.TrademarkInformationContoller",{
    extend : "Ext.app.ViewController",
    alias: "controller.trademark",

    uses: ["App.view.trademarkInformation.TrademarkWindow"],

    init: function(applocation) {

    },

    // 新增数据
    onCreate: function (button, e) {
        var win = Ext.create("App.view.trademarkInformation.TrademarkWindow", {
            title: "新建商标信息",
            width: 400,
            height: 270
        });
        win.show();
    },

    // 刷新
    onRefresh: function (button) {
        var store = this.lookupReference("trademarkInformationPanel").getStore();
        store.reload();
    },

    // 批量生效
    onEffective: function (button) {
        var view = this.lookupReference("trademarkInformationPanel");
        var record = view.getSelectionModel().getSelection();
        var store = view.getStore();
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
        var view = this.lookupReference("trademarkInformationPanel");
        var record = view.getSelectionModel().getSelection();
        var store = view.getStore();
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
        var win = Ext.create("App.view.trademarkInformation.TrademarkWindow", {
            title: "编辑商标信息 - #" + rec.get("id"),
            width: 400,
            height: 270
        });
        win.down("form").loadRecord(rec);
        win.down("#isLock").setDisabled(true); // 设置状态栏为不可编辑
        win.show();
    },

    // window 保存
    onSave: function (button, e) {
        var trademarkForm = this.lookupReference("trademarkForm").getForm();
        var trademarkStore = Ext.getCmp("trademarkInformationWindow").down('gridpanel').getStore();
        if(trademarkForm.isValid()) {
            var id = trademarkForm.findField("id").getValue();
            if(id) { //编辑
                var rec = trademarkStore.getById(id);
                rec.set("number", trademarkForm.findField("number").getValue());
                rec.set("name", trademarkForm.findField("name").getValue());
                rec.set("type", trademarkForm.findField("type").getValue());
                rec.set("user", trademarkForm.findField("user").getValue());
                rec.set("name", trademarkForm.findField("name").getValue());
                trademarkStore.commitChanges();	//TODO 提交修改数据
            }else { //新增
                var obj = trademarkForm.getFieldValues();
                obj.id = trademarkStore.last() ? parseInt(trademarkStore.last().get("id"))+1 : 1;
                trademarkStore.add(obj);
            }
            button.up("trademarkWin").close();
        }
    },

    // window  取消
    onCancel: function (button, e) {
        var gir = button.up('trademarkWin');
        gir.close();
    },
    
});