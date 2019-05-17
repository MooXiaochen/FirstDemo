Ext.define('ERP.view.company.registeroff.registerOffPanelModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.company-registeroff-registeroffpanel',

    data: {
        name: 'ERP',
        formValues:{},        
        gridColumns:[
            {xtype:'rownumberer',maxWidth:30},
            {text:'代理名称',dataIndex:'customer_aliases',width:100},
            {text:'公司名称',dataIndex:'companyname',width:280},
            {text:'业务员',dataIndex:'salesman_contactcn',width:60},
            {text:'公司编号',dataIndex:'company_number',width:80},
            {text:'商业登记证',dataIndex:'business_number',width:80},
            {text:'订单递交日期',dataIndex:'orderingdate',width:90},            
            {text:'IRC 状态',dataIndex:'irc',width:80},
            {text:'状态描述',dataIndex:'irc_status',width:300,renderer:function(value,cell,record){
                var v = "";
                if(record.data.irc==='IRC 1816'){
                    if(value!=""){
                        var data = Ext.decode(value);
                        Ext.each(data.root,function(item){
                            v=v+'  ✪'+item.name;
                            //if(item.phone) v=v+' Call:'+item.phone;
                        })                    
                    }
                    if(v!=""){
                        if(record.data.follow_step==1) v = '<span style="color:red;">'+v+'</span>';
                        if(record.data.follow_step==2) v = '<span style="color:blue;">'+v+'</span>'
                    }
                }else if(value.length>0){
                    v = value
                }
                return v;
            }},
            {text:'发出日期',dataIndex:'sendDate',width:80},
            {text:'备注',dataIndex:'off_remark',width:300},
            {text:'更新时间',dataIndex:'datetime',width:150},
            {text:'状态',dataIndex:'sync',width:60,align:'center'}
        ],
        filter_form_items:[
            {fieldLabel:'代理名称',name:'customer_aliases'},
            {fieldLabel:'公司名称',name:'companyname'},
            {fieldLabel:'公司编号',name:'company_number'},
            {fieldLabel:'业务员',name:'salesman_contactcn'},
            {fieldLabel:'商业登记证',name:'business_number'},
            {xtype:'fieldcontainer',layout:'column',fieldLabel:'递交日期',items:[
                {xtype:'datefield',name:'orderingdate1',columnWidth:.46},{xtype:'datefield',fieldLabel:'To',name:'orderingdate2',labelWidth:20,columnWidth:.54}]
            },
            {xtype:'combo',displayField:'name',valueField:'name',
                store:Ext.create('Ext.data.Store',{
                    fields:['name'],
                    data:[{'name':'IRC 1815'},{'name':'IRC 1816'}]
                    
                }),
                name:'irc',
                emptyText:'请选择状态，默认为空',
                fieldLabel:'<span style="color:blue;"><strong>IRC</strong></span> 状态'
            },
            {fieldLabel:'状态描述',name:'irc_status',emptyText:'此选项如有电话可搜索电话'},                
            {xtype:'fieldcontainer',layout:'column',fieldLabel:'发出日期',items:[
                {xtype:'datefield',name:'sendDate1',columnWidth:.46},{xtype:'datefield',fieldLabel:'To',name:'sendDate2',labelWidth:20,columnWidth:.54}]
            },
            {fieldLabel:'备注',name:'off_remark'}
        ]
    }

});
