Ext.define("App.view.repository.details.RepositoryWindow", {
    extend: "Ext.window.Window",
    xtype: 'repositoryWin',

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
            columnWidth: .99,
            allowBlank : false,
            blankText: "标题不能为空"
        }, {
            xtype: "textfield",
            name: "keyword",
            fieldLabel: "关键字",
            columnWidth: .59
        }, {
            xtype: 'combo',
            name: "section",
            fieldLabel: "所属部门",
            queryMode: 'local',
            displayField: 'sectionName',
            valueField: 'section',
            columnWidth: .2,
            store: Ext.create('Ext.data.Store', {
                fields: ['section', 'sectionName'],
                data: [{"section": 1, "sectionName":"商务部"},
                    {"section": 2, "sectionName":"会计部"},
                    {"section": 3, "sectionName":"开发部"}]
            })
        }, {
            xtype: "htmleditor",
            name: "content",
            fieldLabel: "内容",
            height: 600,
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
})