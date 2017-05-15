/**
 * Created by Stevens06 on 28/02/2017.
 */

Ext.define('app.controller.LoginCr',{
    extend: 'Ext.app.ViewController',

    alias: 'controller.loginCr',

    aceptar: function (btn) {
        var me = this;
        var forma = btn.up('form').getForm();
        console.info(forma);


        if(forma.isValid())

        Ext.Ajax.request({
            url: '/server/Login',
            scope: this,
            params: {
                nombre: forma.findField('login').getValue(),
                contrasena: forma.findField('password').getValue()

            },
            callback: function (request, success, response) {
                //console.info(response);
                var r = Ext.decode(response.responseText);

                /*me.getView().close();*/
                console.info(r);
                if (r.AccesoPermitido) {
                    me.getView().close();

                    Ext.create('Ext.container.Viewport',{
                        layout: 'fit',
                        anchor: '100%',
                        scrollable: 'vertical',
                        items: Ext.create('app.view.main.Menu'),
                        renderTo: Ext.getBody()
                    });
                } else {
                    Ext.Msg.alert({
                        title: 'Acceso denegado',
                        message: 'El usuario o la contraseña son incorrectos',
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                }//else
            }//callback
        });//resquest

    }


});