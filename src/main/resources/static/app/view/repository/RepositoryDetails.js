Ext.define("App.view.repository.RepositoryDetails",{
    extend: "Ext.grid.Panel",
    xtype: 'repositoryDetails',

    padding: 20,

    tpl: '<h2  style="text-align:center">{theme}</h2>' +
    '<p style="text-align:center">{publishTime:date("Y-m-d H:i:s")}</p>' +
        '<table style="border:0;width:100%">' +
    '<tr>' +
    '<td style="border:0;width:50%;"><b>部门:</b>：{section}</td>' +
    '<td style="border:0;width:50%;"><b>关键字:</b>：{keyword)}</td>' +
    '</tr>' +
    '<tr>' +
    '<td style="border:0;width:50%;"><b>发布人:</b>：{userId}</td>' +
    '</tr>' +
    '</table>' +
    '<h3 style="border-bottom:1px solid;;line-height:30px;">内容</h3>' +
    '{content:defaultValue("无内容")}'

})