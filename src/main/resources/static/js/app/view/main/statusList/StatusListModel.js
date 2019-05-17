Ext.define("app.view.main.statusList.StatusListModel",{
    extend: "Ext.data.Model",

    fileds:[{
            name: "id",
            type: 'int'
        }, {
            name: "text",
            type: 'string'
        }, {
            name: "tableName",
            type: "string"
        }, {
            name: "filedName",
            type: 'string'
        }, {
            name: "remark",
            type: 'string'
        }, {
            name: "statusNo",
            type: 'int'
        }, {
            name: "statusType",
            type: 'string'
        }, {
            name: "appDept",
            type: 'string'
        }, {
            name: "groupName",
            type: 'string'
        }]
});