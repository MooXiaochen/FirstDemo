/* 
 * 数据模型 - 用户
 */

Ext.define("App.model.Users", {
	extend: "Ext.data.Model",
	fields: [
	    {name: "id", type: 'int'},
	    {name: "nickName", type: 'string'},
	    {name: "userName", type: 'string'},
	    {name: "userNameEn", type: 'string'},
	    {name: "loginName", type: 'string'},
	    {name: "sex", type: 'int'},
	    {name: "grade", type: 'int'}
	]
});