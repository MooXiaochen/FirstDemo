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
    }],
    listeners:{
        // 发布回复请求
        afterlayout: function () {
            Ext.get('detailsBut').on("click", function(a, b) {
                var detailsValue = Ext.get('details').getValue();
                var repositoryId = this.getAttribute('parameterid');
                Ext.Ajax.request({
                    url: "//TODO",
                    params : {
                        // TODO
                    },
                    success : function(response) {
                        debugger
                    }
                })
            })
        }
    }

})