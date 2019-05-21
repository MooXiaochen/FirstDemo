Ext.define('SimpleCMS.view.tag.TagModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.tag',

    requires: [
        'Ext.data.BufferedStore',
        // 'SimpleCMS.model.Tag'
    ],

    data: {
        selection: null,
        count: 0,
        tagName: ''
    },

    formulas: {
        isDisabled: function(get) {
            var v = get('tagName');
            return Ext.isEmpty(v) || (v.length > 255);
        }
    },

    stores: {

    }
});
