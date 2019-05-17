Ext.define('ERP.view.company.registeroff.registerOffPanelController', {
    extend: 'ERP.controller.main',
    alias: 'controller.company-registeroff-registeroffpanel',
    
    rowEdit:function(dataview,record, element, rowIndex){
        var me = this;
        if(!record.data.company_number>0){
            util.msg('W','公司编号不能为空，请补公司编号后再操作。')
            return false;
        } 
        var dis_1816_store = Ext.create('Ext.data.Store',{
            fields:['name',{name:'sendDate',type:'string'},'phone','doc_number'],
            data:[{'name':'商业登记证费用'},{'name':'利得税'},{'name':'税款、法院费用和罚款等'},{'name':'雇主报税表'},{'name':'印花税'},{'name':'物业税'}]
        })
        var irc_store = Ext.create('Ext.data.Store',{
            fields:['name'],
            data:[{'name':'Null'},{'name':'IRC 1815'},{'name':'IRC 1816'}]
            
        })
        var show1816list = true;
        if(record.data.irc=='IRC 1816') show1816list = false;
        var radio1 = false,radio2=false;
        if(record.data.follow_step=='1') radio1 = true;
        if(record.data.follow_step=='2') radio2 = true;
       
        var rowEditing=Ext.create('Ext.grid.plugin.RowEditing',{errorSummary:false,clicksToEdit:2});
        var dis_1816_grid = Ext.create('Ext.grid.Panel',{
            store:dis_1816_store,height:'95%',
            selType : 'checkboxmodel',
            plugins:[rowEditing], 
            disabled:show1816list,          
            columns:[
                {text:'IRC1816类型描述',dataIndex:'name',width:160},
                {text:'联系电话',width:130,dataIndex:'phone',editor:{xtype:'textfield'}},
                {text:'档案编号',width:135,dataIndex:'doc_number',editor:{xtype:'textfield'}}
            ]
        })
        if(record.data.irc=='IRC 1816'){
            if(record.data.irc_status!=''){
                var select_grid_data = Ext.decode(record.data.irc_status);
                
                if(select_grid_data.root.length>0){
                    var tmp=[];
                    Ext.each(select_grid_data.root,function(item){                
                        Ext.each(dis_1816_store.data.items,function(dt){
                            if(dt.data.name == item.name){
                                tmp.push(dt);
                                if(item.phone!='undefined')
                                dt.data.phone = item.phone;
                                else dt.data.phone='';  
                                if(item.doc_number!='undefined')
                                dt.data.doc_number = item.doc_number;
                                else dt.data.doc_number='';                 
                            }
                        })                
                    })
                    dis_1816_grid.getView().getSelectionModel().select(tmp);
                }
            }
        }
        
        var win_height = 290;
        var st_log_store = Ext.create('Ext.data.Store',{
            model:'ERP.model.business.order.order',
            autoLoad:false,
            proxy:{
                pageSize:webems.setting.pageSize,
                url:'/office/action/company/store.jsp',
                type:'ajax',
                extraParams:{cmd:'getCompanyRegisterOffStatuLog',company_number:record.data.company_number},
                reader:{type:'json',rootProperty:'plant'}
            }
        })
        var st_log_grid = Ext.create('Ext.grid.Panel',{
            store:st_log_store,width:'100%',height:190,
            columns:[
                {xtype:'rownumberer',maxWidth:30},
                {text:'IRC 名称',dataIndex:'irc'},
                {text:'状态描述',dataIndex:'irc_status',renderer:function(value,cell,record){
                    if(record.data.irc=='IRC 1816'){
                        var v = "";
                        if(value!=""){
                            var data = Ext.decode(value);
                            Ext.each(data.root,function(item){
                                v=v+'  ✪'+item.name;
                                if(item.phone) 
                                    v=v+' Call:'+item.phone;
                                if(item.doc_number) 
                                    v=v+' 档案编号:'+item.doc_number;
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
                {text:'发送日期',dataIndex:'sendDate'},
                {text:'备注信息',dataIndex:'off_remark'},
                {text:'跟踪步骤',dataIndex:'follow_step',renderer:function(value,cell,record){
                    if(value===1) return "1.后续跟踪";
                    if(value===2) return "2.完成跟踪";
                    if(value===0) return "0.完成跟踪";
                }},
                {text:'操作用户',dataIndex:'user_name'},
                {text:'操作日期',dataIndex:'datetime'}
            ]
        });
        var st_log_form = Ext.create('Ext.form.Panel',{
            width:'100%',layout:'column',height:225,
            items:[
                {xtype:'fieldcontainer',columnWidth:.4,layout:'vbox',margin:'0 10px 0 0',defaults:{labelWidth:60,width:'100%'},items:[
                    {xtype:'combo',displayField:'name',valueField:'name',store:irc_store,name:'irc',value:record.data.irc,
                        fieldLabel:'<span style="color:blue;"><strong>IRC</strong></span> 状态',
                        listeners:{
                            change:function(combo,nv,ov){
                                if(nv == 'IRC 1816'){dis_1816_grid.setDisabled(false);}else{dis_1816_grid.setDisabled(true);}
                            }
                        }
                    },
                    {xtype:'datefield',fieldLabel:'发出日期',name:'sendDate',allowBlank:true,value:record.data.sendDate},
                    {xtype:'textarea',fieldLabel:'备注',enableKeyEvents:true,name:'off_remark',height:130,value:record.data.off_remark},
                    {xtype:'radiogroup',defaultType:'radiofield',layout:'hbox',fieldLabel:'跟踪步骤',
                        items:[
                            {boxLabel:'<span style="color:red;">后续跟踪</span>',name:'follow_step',inputValue:'1',flex:1,checked:radio1},
                            {boxLabel:'<span style="color:blue;">完成跟踪</span>',name:'follow_step',inputValue:'2',flex:1,checked:radio2},
                            {boxLabel:'关闭跟踪',name:'follow_step',inputValue:'0',flex:1,checked:false}
                        ]
                    }                          
                ]},
                {xtype:'fieldset',columnWidth:.6,title:'IRC1816 状态',defaults: {anchor: '100%'},layout: 'anchor',items:[dis_1816_grid]}
            ]
        });
        var reminder = Ext.create('Ext.form.Label',{text:''});
        var winid = 'company_register_off_'+record.data.keys;
        if(Ext.getCmp(winid)){return false};
        var win = Ext.create('Ext.window.Window',{
            title:'公司名称：'+record.data.company_name+' 注销进度',width:800,height:win_height,layout:'vbox',
            id:winid,resizable:false,
            items:[st_log_form,st_log_grid],
            dockedItems:[
                {dock:'bottom',xtype:'toolbar',
					items:[reminder,
                        '->',                        
                        {text:'保存资料',iconCls:'button-update',scale:'medium',handler:infoSave},
                        {text:'查看操作记录',iconCls:'button-upload_image',scale:'medium',handler:function(){
                            st_log_store.load();
                            if(this.text == '查看操作记录'){
                                this.up('window').setHeight(500);
                                this.setText('收起操作记录');                                                              
                            }else{
                                this.up('window').setHeight(win_height);
                                this.setText('查看操作记录');
                            }                            
                        }},
                        {text:'关闭窗口',iconCls:'button-cancel',scale:'medium',handler:function(){this.up('window').destroy();}}
					]
                }    
            ]
        }).show();
        
        function infoSave(){
            var form =win.down('form');
            var irc1816data = '';
            var selections = dis_1816_grid.getView().getSelectionModel().getSelection();
            var line = 0;
            reminder.setText("");
            if(selections.length>0){
                irc1816data ='{"root":[';
                var i = 0
                Ext.each(selections,function(item){
                    i++;
                    if(item.data.phone.trim()==='' || item.data.doc_number.trim()==='') line=2;
                    irc1816data = irc1816data+'{"name":"'+item.data.name+'","phone":"'+item.data.phone+'","doc_number":"'+item.data.doc_number+'"}';
                    if(i<selections.length) 
                        irc1816data = irc1816data+"," 
                    else 
                        irc1816data = irc1816data+"]}";
                })
            }else{line=1;}
            if(form.down('combo').getValue()==='IRC 1816'){
                if(line === 1) {reminder.setText("操作提示：请选择一个 IRC 1816 状态"); return false;}
                if(line === 2) {reminder.setText("操作提示：请完整填写选择项联系电话和档案编号"); return false;}
            }
            if(form.down('combo').getValue()==='IRC 1815'||form.down('combo').getValue()==='Null') irc1816data = '';
            form.submit({
                url:'/office/action/company/result.jsp',
                params:{cmd:'saveCompanyRegisterOffStepInfo',company_number:record.data.company_number,irc_status:irc1816data},
                success:function(response,opts){
                    util.info('Save done:','保存成功');
                    me.view.down('grid').getStore().reload();
                    win.destroy();                                    
                }
            });
        }
    },
    filterWindowShow:function(){        
        var view = this.view;
        var gridStore = view.down('grid').getStore();
        var filter_form = Ext.create('Ext.form.Panel',{
            layout:'vbox',defaults:{width:450,labelWidth:80},defaultType:'textfield',
            items:view.viewModel.data.filter_form_items          
        });
        filter_form.getForm().setValues(view.viewModel.data.formValues);
        
        var filter_window = Ext.create('Ext.window.Window',{
            title:'香港公司注销跟进表筛选查询',
            layout:'fit',height:355,width:500,
            items:[filter_form],
            dockedItems:[
                {dock:'bottom',xtype:'toolbar',
                    items:['->',
                        {text:'查   询',iconCls:'button-search',scale:'medium',handler:function(){
                            Ext.apply(gridStore.proxy.extraParams,filter_form.getForm().getValues());                            
                            gridStore.load();  
                            view.viewModel.data.formValues=filter_form.getForm().getValues(); 
                            this.up('window').destroy();
                        }},
                        {text:'清   空',iconCls:'button-reset',scale:'medium',handler:function(){filter_form.reset();}},
                        {text:'取   消',iconCls:'button-cancel',scale:'medium',handler:function(){this.up('window').destroy();}}
                    ]
                }
            ]
        });
        filter_window.show();
    },
    onRestClick:function(){
        var store = this.view.down('grid').getStore();
        store.proxy.extraParams={cmd:'getCompanyRegisterOff'}; 
        store.loadPage(1);
        store.load();
        this.view.viewModel.data.formValues={};
    },
    search:function(){
        var query_value = this.view.down('textfield[name=search]').getValue();
        var store = this.view.down('grid').getStore();
        store.proxy.extraParams={cmd:'getCompanyRegisterOff',query:query_value};
        store.loadPage(1);
        store.load();
    },
    searchEnter:function(v,e,o){
        if(e.getKey()==13){
            this.search();
        }
    },
    followStatus:function(item){
        var store = this.view.down('grid').getStore();        
        if(item.text==='后续跟踪'){
            store.proxy.extraParams={cmd:'getCompanyRegisterOff',followStatusQuery:1};
        }
        if(item.text==='完成跟踪'){
            store.proxy.extraParams={cmd:'getCompanyRegisterOff',followStatusQuery:2};
            //Ext.apply(store.proxy.extraParams,{followStatusQuery:2});
        }
        if(item.text==='IRC 1815'){
            store.proxy.extraParams={cmd:'getCompanyRegisterOff',irc:'IRC 1815'};
        }
        if(item.text==='IRC 1816'){
            store.proxy.extraParams={cmd:'getCompanyRegisterOff',irc:'IRC 1816'};
        }
        store.loadPage(1);
        store.load();
    },
    storeRefresh:function(){this.view.down('grid').getStore().reload();},

    register_off_synchronous:function(btn){         
        var store = btn.up('grid').getStore();
        store.reload(); 
        var isupdate = false;
        var itemrow = 0;   
        var getitemrow = 0; 
        
        var wait_msg = Ext.create('Ext.window.MessageBox')
        wait_msg.wait('系统正在与官网数据同步中，请稍后...','提示',{
            renderTo: Ext.getBody(),
            interval: 500, //bar will move fast!
            duration: 300000,
            increment: 50,
            text: 'Updating...'
        });
       
        Ext.each(store.data.items,function(item){            
            if((item.data.irc==='IRC 1815'||item.data.irc==='')&&(item.data.irc_status==='')){
                itemrow++;
                Ext.Ajax.request({
                    url:'/office/action/company/result.jsp',timeout:3000000,async:true,
                    params:{cmd:'register_off_synchronous',crno:item.data.company_number,irc:item.data.irc,irc_status:item.data.irc_status,offid:item.data.offid},
                    success:function(response,opt){                        
                        var res = Ext.decode(response.responseText);
                        getitemrow++;
                        if(res.success){
                            item.set({sync:'已更新' })
                        }else{
                            item.set({sync:'未更新'});
                        } 
                        if(getitemrow===itemrow){store.reload();isupdate=true;}                  
                    }
                });
            }
        })
        var task = {
            run:function(){
                if(isupdate){
                    wait_msg.destroy();                   
                    task.stop();
                }
            },
            interval:1000
        }
        Ext.TaskManager.start(task);
    }
});
