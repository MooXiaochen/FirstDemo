/*
 * 页面底部
 */

Ext.define("App.view.main.Bottom", {
	extend: "Ext.container.Container",
	xtype: "bottom",
	cls: "footer",
	
	initComponent: function() {
		Ext.apply(this, {
			height: 24,
			items: [{
				xtype: "label",
				text: "Copyright © 2019 凯鸣知识产权（深圳）有限公司 版权所有"
			}]
		});
		this.callParent(arguments);
	}
});
