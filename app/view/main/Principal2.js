/**
 * Created by Stevens06 on 28/05/2017.
 */
Ext.define('app.view.main.Principal2',{

    extend: 'Ext.Panel',
    xtype: 'principal',
    controller: 'loginCr',

    requires: [
        'Ext.plugin.Viewport'
    ],

    layout:'ux.center',
    bodyStyle: 'background-image: url("http://www.impresionantescr.com/imgs/fondos_f02.jpg");',

    initComponent : function() {

        var login = Ext.create('Ext.form.Text', {
            name: 'login',
            fieldLabel: 'Nombre de usuario',
            labelWidth: 120,
            width: 300,
            maxLength: 12,
            minLength: 4,
            allowBlank: false,
            msgTarget: 'side',
            autoFitErrors: false
        });
        var pass = Ext.create('Ext.form.Text', {
            inputType: 'password',
            name: 'password',
            fieldLabel: 'Contraseña',
            labelWidth: 120,
            width: 300,
            maxLength: 12,
            minLength: 4,
            allowBlank: false,
            msgTarget: 'side',
            autoFitErrors: false
        });

        Ext.apply(this, {
            items: {

                title: 'Ingreso al sistema',
                width: 400,
                bodyPadding: 10,
                border: true,

                items: [{
                    xtype: 'form',

                    items: [login,pass],

                    bbar: ['->', {
                        text: 'Aceptar',
                        handler: 'empleado'
                    }
                        , {
                            text: 'Limpiar'
                        }, '->']
                }]
            }
        });

        this.callParent();


    }


});
