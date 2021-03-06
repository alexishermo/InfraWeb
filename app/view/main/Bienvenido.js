/**
 * Created by Stevens06 on 26/05/2017.
 */

Ext.define('app.view.main.Bienvenido', {

    extend: 'Ext.Panel',
    xtype: 'bienvenido',
    controller: 'loginCr',

    requires: [
        'Ext.button.Button',
        'Ext.plugin.Viewport'
    ],

    initComponent : function() {

        Ext.apply(this, {
         items:[{
             xtype: 'form',
             items: [
                 {
                     title: 'FERRETERIA SANDOVAL',
                     titleAlign: 'center',
                     width: 1370
                 },
                 {
                     /*
                      xtype: 'button',
                      x: 1000,
                      text: 'ADMINISTRADOR',
                      handler:'Admin'
                      */
                     items: [

                         {
                         xtype: 'form',
                         bbar: ['->',{
                             xtype: 'label',
                             x: 990,
                             y: 11,
                             text: 'INGRESO AL SISTEMA'
                         }, {
                             text: 'Administrador',
                             handler:'admin',
                         }
                             , {
                                 text: 'Empleado',
                                 handler:'empleados',
                             },   ]
                     }]
                 },
                 {
                     xtype: 'image',
                     src: '/resources/imagen/ferreteriaa.jpg',
                     height: 200,
                     width: 1370
                 },

                 {
                     items:[{
                         xtype: 'form',
                         bbar: [
                             {
                                 xtype: 'button',
                                 //src: 'http://www.redferretera.com.ec/images/2015/10/ferretero-f.png',
                                 style: 'background: url(/resources/imagen/empleadoo.jpg);',
                                 x: 60,
                                 height: 200,
                                 width: 200
                             },
                             {
                                 xtype: 'panel',
                                 x: 20,
                                 y: 20,
                                 flex: 2,
                                 html: 'Bienvenidos a la Ferretería Sandoval.<br/><br/>Le damos la más cordial bienvenida a nuestra página web,<br/> ferretería el Sandoval ha ampliado sus instalaciones, lo <br/> invitamos a que conozca nuestros productos y excelentes servicios.<br/> Gracias por visitarnos!!!'
                             },

                              {
                                 style: 'background: url(/resources/imagen/carrito.png);',
                                 x: 375,
                                 height: 200,
                                 width: 200,
                                  handler:'tienda',
                             },
                             {
                                 xtype: 'panel',
                                 x: 520,
                                 y: -82,
                                 flex: 2,
                                 html: 'Ingresa a nuestro Produtos.<br/><br/>Contamos con una Gran Variedad de Productos en el sistema,<br/> los productos cuenta con la mejor calidad y garantazamos su eficacia. <br/>.'
                             },
                             {
                                 xtype: 'button',
                                 style: 'background: url(/resources/imagen/ubicacionn.jpg);',
                                 x: 690,
                                 height: 200,
                                 width: 200
                             },
                             {
                                 xtype: 'panel',
                                 x: 1055,
                                 y: -170,
                                 flex: 2,
                                 html: 'UBICACION.<br/><br/>FERRETERIA SANDOVAL INC,<br/> Calle Mar Artico Numero 18, Tepic Nayarit. Mexico <br/>.Telefono: 31100000 <br/> '
                             }
                         ]

                     }]
                 },


             ],
         }],


        });


        this.callParent();
    },







});
