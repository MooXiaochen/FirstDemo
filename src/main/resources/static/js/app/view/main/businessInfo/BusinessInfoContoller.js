/**
 * business控制器
 */
Ext.define("app.view.main.businessInfo.BusinessInfoContoller",{
    extend : "Ext.app.ViewController",
    alias: "controller.businessInfo",

    uses: ["app.view.main.businessInfo.BusinessInfoWindow"],
    
    init: function(view) {
        
    },

    // 新增数据
    onCreate: function (button, e) {
		var win = Ext.create("app.view.main.businessInfo.BusinessInfoWindow", {
            title: "新建信息",
            width: 600,
	        height: 850,
		});
		win.show();
    },

    // 刷新
    onRefresh: function (button, e) {
        var me = this;
        var store = me.view.getStore();
        store.reload();
    },

    // 批量删除
    onBatchDel: function (button, e) {
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
    edit: function(grid, index) {
        var rec = grid.getStore().getAt(index);		
		var win = Ext.create("app.view.main.businessInfo.BusinessInfoWindow", {
            title: "编辑用户 - #" + rec.get("id"),
            width: 600,
	        height: 850,
		});
        win.down("form").loadRecord(rec);
        win.initParam = rec;
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
    onSave: function (button, e) {
        var me = this;
        var store = me.view.getStore();
        store.reload();
    },

    // window  取消
    onCancel: function (button, e) {
        var me = this;
        var gir = button.up('businessWin')
        debugger
    },
});