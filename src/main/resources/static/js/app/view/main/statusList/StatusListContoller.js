Ext.define("app.view.main.statusList.StatusListContoller",{
    extend : "Ext.app.ViewController",
    alias: "controller.statusList",

    uses: [
        'app.view.main.statusList.StatusInfoWindow'
    ],

    init: function(application) {

    },

    // 新增数据
    onCreate: function () {
        var win = Ext.create("app.view.main.statusList.StatusInfoWindow", {
            title: "新建状态信息",
            width: 600,
            height: 350,
        });
        win.show();
    },

    // 刷新
    onRefresh: function () {
        var me = this;
        var store = me.view.getStore();
        store.reload();
    },

    // 批量删除
    onBatchDel: function () {
        var me = this;
        var record = me.view.getSelectionModel().getSelection();
        var store = me.view.getStore();
        if (Ext.isEmpty(record)) {
            Ext.Msg.alert("信息", "请选择要删除的数据！");
            return;
        }
        Ext.Msg.confirm("确认", "确认删除以所选的" + record.length + "条数据吗？<br />", function(res) {
            if(res=="yes") {
                store.remove(record);
            }
        });
    },

    // 编辑
    onEdit: function() {
        var me = this;
        var records = me.view.getSelectionModel().getSelection();
        if (records.length == 0) {
            Ext.Msg.alert("信息", "请选择要编辑的数据！");
            return
        }
        if (records.length > 1) {
            Ext.Msg.alert("信息", "请选择一条要编辑的数据！");
            return
        }
        var win = Ext.create("app.view.main.statusList.StatusInfoWindow", {
            title: "编辑状态信息 - #" + records[0].get("id"),
            width: 600,
            height: 350
        });
        win.down("form").loadRecord(records[0]);
        win.show();
    },

    // 删除
    del: function(grid, index) {
        var me = this;
        var record = grid.getStore().getAt(index);		
        var store = me.view.getStore();		
        Ext.Msg.confirm("确认", "确认删除？<br />", function(res) {
            if(res=="yes") {
                store.remove(record);
            }
        });
    },

    // window 保存
    onSave: function (button) {
        var me = this;
        var store = me.getViewModel().get('statusListStore');
        store.reload();
        var gir = button.up('statusInfoWin');
        gir.close();
    },

    // window  取消
    onCancel: function (button) {
        var gir = button.up('statusInfoWin');
        gir.close();
    }
});