/*
 * Application's entrance
 */

Ext.application({
	name: "App",

    extend: 'app.Application',

    autoCreateViewport: 'app.view.main.Main'
});