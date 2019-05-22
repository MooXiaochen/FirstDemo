
Ext.define("ERP.view.company.registeroff.registerOffPanel",{
    extend: "Ext.panel.Panel",
    xtype:'registerOffPanel',
    requires: [
        "ERP.view.company.registeroff.registerOffPanelController",
        "ERP.view.company.registeroff.registerOffPanelModel"
    ],
    
    controller:'company-registeroff-registeroffpanel',
    viewModel: {
        type: "company-registeroff-registeroffpanel"
    },
    initComponent:function(){
        var me = this;
        var gridStore=Ext.create('Ext.data.Store',{
            model:'ERP.model.business.order.order',
            autoLoad:false,
            pageSize:webems.setting.pageSize,
            sorters:[{property:'orderdate',direction:'DESC'},{property:'id',direction:'DESC'}],
            proxy:{                
                url:'/office/action/company/store.jsp',
                type:'ajax',
                extraParams:{cmd:'getCompanyRegisterOff'},
                reader:{type:'json',rootProperty:'plant',totalProperty:'totalProperty'}
            }
        });
        gridStore.load();
        var grid = Ext.create('Ext.grid.Panel',{
            bind:{
                columns:'{gridColumns}'
                //store:'{gridStore}'
            },
            store:gridStore,
            tbar:[
                {iconCls:'menu-allocation',text:'分类查看',menu:[
                    {text:'查看所有',iconCls:'menu-annual',handler:'onRestClick'},
                    {text:'后续跟踪',iconCls:'menu-supplier',handler:'followStatus'},
                    {text:'完成跟踪',iconCls:'menu-unaudit',handler:'followStatus'},
                    {text:'IRC 1815',iconCls:'menu-1815',handler:'followStatus'},
                    {text:'IRC 1816',iconCls:'menu-1816',handler:'followStatus'}
                ]},'-',
                {xtype:'textfield',fieldLabel:'关键字搜索',labelWidth:70,width:420,name:'search',
                    emptyText:'仅限 公司名称，公司编号，商业登记证 全文搜索',enableKeyEvents:true,listeners:{keypress:'searchEnter'}
                },
                {text:'搜索',iconCls:'menu-search',handler:'search'},
                '->',
                {text:'筛选查询',iconCls:'menu-search_adv',handler:'filterWindowShow'},
                {text:'重置',iconCls:'menu-clear',tooltip:'清空查询条件',handler:'onRestClick'},
                {text:'刷新',iconCls:'menu-refresh',handler:'storeRefresh'},
                {text:'同步官网数据',iconCls:'menu-tongbu',handler:'register_off_synchronous'}
            ],
            dockedItems:[
                {
                    dock:'bottom',
                    xtype:'pagingtoolbar',                    
                    store:gridStore,
                    pageSize:webems.setting.pageSize,
                    displayInfo:true,
                    plugins:[
                        {ptype:'pagingtoolbarresizer'},
                        {ptype:'slidingpager'}
                    ]
                }
            ],            
            listeners:{
                rowdblclick:'rowEdit'
            }
            /*
            features:[{ftype:'grouping'}]
            */
        });       
        me.items = [grid];
        
        me.callParent();
    }
});
