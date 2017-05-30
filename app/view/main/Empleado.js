/**
 * Created by Stevens06 on 28/05/2017.
 */
Ext.define('app.view.main.Empleado', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mypanel1',
    controller: 'loginCr',

    requires: [
        'app.model.MyPanel1ViewModel',
        'Ext.form.Label',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'mypanel1'
    },
    autoShow: true,
    height: 750,
    width: 1356,
    layout: 'absolute',
    bodyStyle: 'background-image: url("http://www.impresionantescr.com/imgs/fondos_f02.jpg");',
    title: 'WELCOME',
    titleAlign: 'center',

    initComponent : function() {
        Ext.apply(this, {
            items: {
                width: 400,
                x:500,
                y:120,
                bodyStyle: 'background-image: url("http://www.impresionantescr.com/imgs/fondos_f02.jpg");',
                bodyPadding: 10,
                items: [{
                    xtype: 'form',
                    bodyStyle: 'background-image: url("http://www.impresionantescr.com/imgs/fondos_f02.jpg");',
                    bbar: ['->',
                        {

                            x: 470,
                            y: 170,
                            height: 270,
                            itemId: 'mybutton',
                            //style: 'background: url(http://www.fancyicons.com/free-icons/142/network/png/256/user_group_256.png);\nbackground-size: 300px 300px;',
                            style: 'background: url(https://cdn4.iconfinder.com/data/icons/VISTA/project_managment/png/400/deliverables.png);\nbackground-size: 300px 300px;',
                            width: 270,
                            icon: 'products',
                            text: '',
                            handler:'productos'
                        }, {
                            xtype: 'label',
                            x: 910,
                            y: 440,
                            text: 'PRODUCTOS'
                        },
                    ],
                }]
            }
        });
        this.callParent();
    }


});
