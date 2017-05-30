/*
 * File: app/view/MyPanel.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('app.view.main.MyPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mypanel',

    requires: [
        'app.view.main.MyPanelViewModel',
        'Ext.form.field.Spinner',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'mypanel'
    },
    height: 389,
    width: 396,
    layout: 'absolute',
    title: 'Productos',
    defaultListenerScope: true,

    items: [
        {
            xtype: 'textfield',
            x: 30,
            y: 150,
            fieldLabel: 'Precio:'
        },
        {
            xtype: 'textfield',
            x: 30,
            y: 40,
            fieldLabel: 'Codigo:'
        },
        {
            xtype: 'spinnerfield',
            x: 30,
            y: 90,
            fieldLabel: 'Nombre Produto:'
        },
        {
            xtype: 'button',
            x: 140,
            y: 320,
            width: 100,
            text: 'Aceptar',
            listeners: {
                click: 'onButtonClick'
            }
        },
        {
            xtype: 'textfield',
            x: 30,
            y: 210,
            fieldLabel: 'Imagen:'
        },
        {
            xtype: 'textfield',
            x: 30,
            y: 260,
            fieldLabel: 'Vendedor:'
        }
    ],

    onButtonClick: function(button, e, eOpts) {

    }

});