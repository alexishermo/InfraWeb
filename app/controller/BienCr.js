/**
 * Created by Stevens06 on 27/05/2017.
 */
Ext.define('app.controller.BienCr', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.bienCr',

    login: function (btn) {
        var me = this;
        var forma = btn.up('button').getForm();
        console.info(forma);
        if (forma.isValid()) {
            Ext.create('Ext.container.Viewport', {
                layout: 'fit',
                anchor: '100%',
                scrollable: 'vertical',
                items: Ext.create('app.view.main.MyPanel1'),
                renderTo: Ext.getBody()
            });
        }
    }
});