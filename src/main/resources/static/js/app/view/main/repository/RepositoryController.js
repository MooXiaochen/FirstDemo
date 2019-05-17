Ext.define('app.view.main.repository.RepositoryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.repository',

    onCreate: function () {
        var me = this;
        var win = Ext.create("Ext.window.Window", {
            xtype: "repositoryWin",
            title: "新建",
            width: '80%',
            height: '85%',
            controller: 'repository',
            resizable: false,
            constrain: true,
            model: true,
            buttonAlign: "center",
            items: [{
                xtype: "form",
                reference: "repositoryForm",
                layout: "column",
                margin: 5,
                fieldDefaults: { margin: 10, labelWidth: 90},
                items:[{
                        xtype: "hiddenfield",
                        name: "id"
                    }, {
                        xtype: "textfield",
                        name: "theme",
                        fieldLabel: "标题",
                        columnWidth: .99
                    }, {
                        xtype: "textfield",
                        name: "keyword",
                        fieldLabel: "关键字",
                        columnWidth: .53
                    }, {
                        xtype: 'combo',
                        name: "section",
                        fieldLabel: "所属部门",
                        queryMode: 'local',
                        displayField: 'sectionName',
                        valueField: 'section',
                        columnWidth: .23,
                        store: Ext.create('Ext.data.Store', {
                                    fields: ['section', 'sectionName'],
                                    data: [{"section": 1, "sectionName":"商务部"},
                                           {"section": 2, "sectionName":"会计部"},
                                           {"section": 3, "sectionName":"开发部"}]
                                })
                    }, {
                        xtype: 'radiogroup',
                        fieldLabel: '直接发布',
                        vertical: true,
                        columnWidth: .23,
                        items: [{boxLabel: '否',name: 'publishState',inputValue: '0',checked: true},
                                {boxLabel: '是',name: 'publishState',inputValue: '1'}]
                    }, {
                        xtype: "htmleditor",
                        name: "content",
                        fieldLabel: "内容",
                        height: 500,
                        columnWidth: .99
                    }]
            }],
            buttons: [{
                text: "保存",
                handler: 'onWindowSubmit'
            }, {
                text: "取消",
                handler: 'onWindowCancel'
            }]
        });
        win.show();
    },

    onWindowSubmit: function (button) {
        var win = button.up().up();
        var form = win.down('form');
        form.submit({
            waitTitle : '请稍后...',
            waitMsg : '正在保存提交信息,请稍后...',
            url : '/repository/save',
            method : 'post',
            success : function(form, action) {
                alert(action.result.msg);
            },
        });
    },

    onWindowCancel: function (button) {

    }
    
});
