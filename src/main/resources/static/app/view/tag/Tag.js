Ext.define('App.view.tag.Tag', {
    extend: 'Ext.window.Window',
    xtype: 'tagView',

    requires: [
        'Ext.grid.Panel',
        'Ext.selection.CheckboxModel',
        'Ext.grid.column.*',
        'App.ux.Search',
        'App.view.tag.TagModel',
        'App.view.tag.TagController'
    ],

    controller: 'tag',
    viewModel: 'tag',
    title: '标签管理',
    width: 700,
    height: 500,
    modal: true,
    closeAction: 'hide',
    hideMode: 'offsets',
    layout: 'fit',
    closable: true,
    resizable: false,


    items: [
        {
            xtype: 'grid',
            reference: 'TagGrid',
            emptyText: '没有任何数据',
            columns: [
                { xtype: 'rownumberer'},
                { text: '标签', dataIndex: 'Name', flex: 1, renderer: 'onHighLightRenderer'}
            ],

            selModel: { selType: 'checkboxmodel', showHeaderCheckbox: false },
            cls: 'email-inbox-panel shadow',
            headerBorders: false,
            rowLines: false,

            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        { iconCls: "x-fa fa-trash", ui: 'soft-red', tooltip: '删除', handler: 'onTagDelete', bind: { disabled: '{!selection}' }},
                        { iconCls: "x-fa fa-refresh", ui: 'soft-cyan', tooltip: '刷新', handler: 'onRefresh'},
                        '-',
                        { xtype: 'uxsearchfield', fieldLabel: '查询', labelWidth: 40, width: 200, bind: { store: '{tags}' }},
                        '->',
                        { xtype: 'tbtext', bind: '共{count}条' }
                    ]
                },
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        { xtype: 'tbtext', text: '标签' + '：' },
                        { xtype: 'textfield', width: 200, maxLength: 255, reference: 'tagNameField', bind: { value: '{tagName}' } },
                        { iconCls: 'x-fa fa-plus', handler: 'onTagAdd', tooltip: '新建', bind: { disabled: '{isDisabled}' } }
                    ]
                }
            ],

            bind: { selection: '{selection}', store: '{tags}' }
        }
    ]

})