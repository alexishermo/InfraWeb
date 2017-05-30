/**
 * Created by Stevens06 on 28/02/2017.
 */

Ext.define('app.controller.LoginCr',{
    extend: 'Ext.app.ViewController',

    alias: 'controller.loginCr',

    admin:function (btn) {
        var me = this;
        var forma = btn.up('form').getForm();
        console.info(forma);
        if(forma.isValid())
            me.getView().close();
        Ext.create('Ext.container.Viewport',{
            layout: 'fit',
            anchor: '100%',
            scrollable: 'vertical',
            items: Ext.create('app.view.main.Principal'),
            renderTo: Ext.getBody()
        });
    },
    empleados:function (btn) {
        var me = this;
        var forma = btn.up('form').getForm();
        console.info(forma);
        if(forma.isValid())
            me.getView().close();
        Ext.create('Ext.container.Viewport',{
            layout: 'fit',
            anchor: '100%',
            scrollable: 'vertical',
            items: Ext.create('app.view.main.Grid'),
            renderTo: Ext.getBody()
        });
    },
    tienda:function (btn) {
        var me = this;
        var forma = btn.up('form').getForm();
        console.info(forma);
        if(forma.isValid())
            me.getView().close();
        Ext.create('Ext.container.Viewport',{
            layout: 'fit',
            anchor: '100%',
            scrollable: 'vertical',
            items: Ext.create('app.view.main.Tienda'),
            renderTo: Ext.getBody()
        });
    },
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
                        items: Ext.create('app.view.main.MyPanel1'),
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

    },
    empleado: function (btn) {
        var me = this;
        var forma = btn.up('form').getForm();
        console.info(forma);

        if(forma.isValid())

            Ext.Ajax.request({
                url: '/server/Login2',
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
                            items: Ext.create('app.view.main.MyPanel1'),
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

    },
    agregar:function(btn){
        var panel=this.getView();
        //console.log("panel.combodepto.getDisplayField()"+panel.combodepto.getSelection().get("abreviado"));
        var forma=Ext.create('app.view.Forma',{ //el app view Forma
            tipoOper:'agregar',
            iddepto: panel.combodepto.getValue(),
            //desdepto: panel.combodepto.getSelection().get('desdepto')
        });
        var ventana=Ext.create('app.lib.Window',{
            title:'Agregar registro',
            icon: '/url',
            width:400,
            height:400,
            items: forma
        });
    },

    editar: function(view,rowIndex,colIndex){ //editar se encuentra en el handler del boton de la columna
        var rec=view.getStore().getAt(rowIndex);//obtener el dato del grid
        var forma=Ext.create('app.view.Forma',{
            tipoOper:'editar'
        });
        forma.loadRecord(rec);
        var ventana=Ext.create('app.lib.Window',{
            title:'Modificar registro',
            width:400,
            height:400,
            items: forma,
            bodyPadding: 10
        });
    },

    borrar: function(view,rowIndex,colIndex){ //editar se encuentra en el handler del boton de la columna
        var rec=view.getStore().getAt(rowIndex);//obtener el dato del grid

        var forma=Ext.create('app.view.Forma',{
            tipoOper:'borrar'
        });
        forma.loadRecord(rec);
        var ventana=Ext.create('app.lib.Window',{
            title:'Eliminar registro',
            width:400,
            height:400,
            items: forma,
            bodyPadding: 10
        });
    }

});