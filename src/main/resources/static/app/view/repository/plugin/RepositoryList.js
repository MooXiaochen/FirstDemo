Ext.define('App.view.repository.plugin.RepositoryList', {
    extend: 'App.ux.FixedHeightOfFirstItem',
    xtype: 'repositoryList',

    requires: [
        'Ext.tree.Panel',
        'Ext.grid.Panel',
        'Ext.layout.container.Border',
        'Ext.grid.plugin.DragDrop',
        'Ext.tree.plugin.TreeViewDragDrop'
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'container',
            layout: 'border',
            padding: 20,
            items: [
                {
                    xtype: 'treepanel', collapsible: true, region: 'west', width: 250, maxWidth: 500, minWidth: 200, split: true, reference: 'CategoryTree',
                    ui: 'light', title: '类别', iconCls: 'x-fa fa-list', stateId: 'articleView-treepanel', stateful: true, stateEvents: ['resize'],
                    rootVisible: false, useArrows: true, displayField: 'Title', bind: { store: '{categories}', selection:'{categorySelection}' },
                    tbar: [
                        { iconCls: "x-fa fa-file", ui: 'soft-green', tooltip: '新建', handler: 'onCategoryAdd' },
                        { iconCls: "x-fa fa-pencil", ui: 'soft-blue', tooltip: '编辑', handler: 'onCategoryEdit', bind: { disabled: '{isDisabledCategoryButton}' } },
                        { iconCls: "x-fa fa-newspaper-o", ui: 'soft-purple', tooltip: '详细信息', handler: 'onCategoryDetails', bind: { disabled: '{isDisabledCategoryButton}' } },
                        { iconCls: "x-fa fa-trash", ui: 'soft-red', tooltip: '删除', handler: 'onCategoryDelete', bind: { disabled: '{isLeaf}' } },
                        { iconCls: "x-fa fa-refresh", ui: 'soft-cyan', tooltip: '刷新', handler: 'onCategoryRefresh' }
                    ],
                    listeners: {
                        selectionchange: 'onCategorySelectionChange'
                    },
                    viewConfig: {
                        plugins: [
                            {
                                ptype: 'treeviewdragdrop',
                                dropGroup: 'ContentDrag',
                                enableDrag: false,
                                containerScroll: true,
                                dropZone: {
                                    handleNodeDrop: Ext.emptyFn
                                }
                            }
                        ],
                        listeners: {
                            drop: 'onContentDrop'
                        }
                    }
                },
                {
                    xtype: 'grid', region: 'center', flex: 1, ui: 'light', iconCls: 'x-fa fa-file-text',
                    emptyText: '没有任何数据',
                    reference: 'ContentGrid',
                    selModel: {
                        selType: 'checkboxmodel',
                        showHeaderCheckbox: false
                    },
                    cls: 'email-inbox-panel shadow',
                    headerBorders: false,
                    rowLines: false,
                    bind: { selection: '{selection}', store: '{contents}', title: '{title}>{categoryTitle}{searchValue}'},
                    columns: [
                        { xtype: 'rownumberer' },
                        { text: '编号', dataIndex: 'Id', width: 80 },
                        { text: '标题', dataIndex: 'Title', flex: 1, renderer: 'onContentTitleRenderer' },
                        { text: '标签', dataIndex: 'Tags', flex: 1, sortable: false },
                        { text: '创建日期', dataIndex: 'Created', width: 150, xtype: 'datecolumn', format: 'Y-m-d H:i:s' }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar', dock: 'top', items: [
                                { iconCls: "x-fa fa-file", ui: 'soft-green', tooltip: '新建', handler: 'onContentAdd' },
                                { iconCls: "x-fa fa-pencil", ui: 'soft-blue', tooltip: '编辑', handler: 'onContentEdit', bind: { disabled: '{!selection}' } },
                                { iconCls: "x-fa fa-trash", ui: 'soft-red', tooltip: '删除', handler: 'onContentDelete', bind: { disabled: '{!selection}' } },
                                { iconCls: "x-fa fa-refresh", ui: 'soft-cyan', tooltip: '刷新', handler: 'onContentRefresh' },
                                '-',
                                { iconCls: 'x-fa fa-search', tooltip: '查询', enableToggle: true, reference: 'contentSearchButton', pressed: false },
                                { iconCls: 'x-fa fa-tag', tooltip: '标签管理', handler: 'onTagManager' },
                                '->',
                                { xtype: 'tbtext', bind: '共{count}条' }
                            ]
                        },
                        {
                            xtype: 'toolbar', dock: 'top', bind: { hidden: '{!contentSearchButton.pressed}' }, reference: 'searchToolbar',
                            items: [
                                { xtype: 'tbtext', text: '日期：' },
                                {
                                    xtype: 'datefield', name: 'StartDate', width: 150, vtype: 'daterange',
                                    parentXtype: 'toolbar', itemId: 'StartDate', endDateField: 'EndDate', format: 'Y-m-d'
                                },
                                { xtype: 'tbtext', text: '～' },
                                {
                                    xtype: 'datefield', name: 'EndDate', width: 150, vtype: 'daterange',
                                    parentXtype: 'toolbar', itemId: 'EndDate', startDateField: 'StartDate', format: 'Y-m-d'
                                },
                                { xtype: 'tbtext', text: '文本：' },
                                { xtype: 'textfield', name: 'Query', width: 150, itemId: 'Query' },
                                { iconCls: 'x-fa fa-play', tooltip: '开始/取消搜索', handler: 'onStartSearch', reference: 'startSearchButton' }
                            ]
                        }
                    ],
                    listeners: {
                        cellclick: 'onContentGridCellClick'
                    },
                    viewConfig: {
                        plugins: {
                            ptype: 'gridviewdragdrop',
                            dragGroup: 'ContentDrag',
                            enableDrop: false
                        }
                    }
                }
            ]
        }
    ],

    listeners: {
        activate: 'onListActivate'
    },
    initComponent: function () {
        debugger
    }


})