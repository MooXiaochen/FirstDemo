/* 
 * The Application Class contains global settings for your application, such as app's namespace, shared stores, etc. 
 */

Ext.define("App.Application", {
	extend: "Ext.app.Application",
	name: "App",
	
	stores: [
		//add global/shared stores here
	],
	launch: function() {
		//launch the application
		//Ext.setGlyphFontFamily('FontAwesome');
	}
});
