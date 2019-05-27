Ext.define("App.view.repository.details.RepositoryDetails",{
    extend: "Ext.panel.Panel",
    xtype: 'repositoryDetails',

    infoData: {},
    controller: "repository",

    bodyStyle: "overflow-x:hidden; overflow-y:auto",

    title:"查看文章",
    items: [{
        xtype: 'panel',
        html: "<div class='repositoryPanel' id='div_boby'></div>"
    }
    // , {
    //     xtype: 'panel',
    //     html: "<span>发表回复：</span>"
    // }, {
    //     xtype: "htmleditor",
    //     name: "content",
    //     style: {
    //         width: '96%',
    //         margin: '5px auto',
    //         height: 300
    //     }
    // }, {
    //     xtype: "button",
    //     text: "发布",
    //     icon: "icons/application_get.png",
    //     cls: "x-btn-text-icon",
    //     handler: "onBatchDel"
    // }
    ]

})