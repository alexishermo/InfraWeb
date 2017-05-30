Ext.define('app.view.main.Grid',{ //El gris es como una especie de tabla
	extend:"Ext.grid.Panel",
	controller: 'formacontroller', //asi es como nos referimos por su alias a lo que contiene "FormaCtr"
	title: "FerreteriaSandoval",
	width: 900,
	height: 450,
	border: true,
	columnLines: true,
	rowLines: true,
	padding: 5, //borde entre los elementos
	
	initComponent: function(){
		var storegrid=Ext.create("app.store.GridStore");
		var storecombo=Ext.create("app.store.DeptoStore");
		var btn=Ext.create("Ext.Button",{
		    text: "Agregar",
		    icon: "url",
		    handler: "agregar",
		    disabled:true
		});
		this.combodepto=Ext.create("Ext.form.ComboBox",{
		    store: storecombo,
		    valueField: "id",
		    displayField: "nombre",
		    name:"iddepto",
		    fieldLabel: "Departamento",
		    width: 300,
            listeners:{
                select: function(combo, rec){
                    storegrid.getProxy().setExtraParams({//se manda en tiempo de ejecución
                        iddepto: combo.getValue
                    });
                    storegrid.load();
                    btn.enable();
                },
                change: function(combo, nuevo, anterior){
                    //storegrid.removeAll()
                    //btn.disable();
                }
            }
		})
		Ext.apply(this,{
		    store:storegrid,
			columns:[{
            		text: "Cliente",
            		//flex:1,
            		width: 150,
            		dataIndex: 'Nombre'
            	},{
            		text: "Codigo",
            		width: 100,
            		dataIndex: 'Codigo'
            	},{
            		text: "Telefono",
            		width: 120,
            		dataIndex: 'Telefono'
            	},{
            		text: "Edad",
            		width: 80,
            		dataIndex: 'Edad'
            	},{
            		text: "Correo",
            		width: 230,
            		dataIndex: 'Correo'
            	},{
            		xtype:'actioncolumn',
            		text:'Editar',
            		width:80,
            		align:'center',
            		items:[{
            			icon: 'url'
            		}],
            		handler: 'editar' //funcion traida con el "controller" de arriba
            	},{
            		xtype:'actioncolumn',
            		text:'Borrar',
            		width:80,
            		align:'center',
            		items:[{
            			icon: 'url'
            		}],
            		handler: 'borrar'
            	}],
            	dockedItems:[{
            		xtype:'pagingtoolbar',
            		store:storegrid,
            		dock:'bottom',
            		displayInfo: true
            	}],
            	//tbar:[this.combodepto,"->",btn]

            	tbar:[{
            		xtype: "combobox",
            		store: storecombo,
            		valueField: "id",
            		displayField: "nombre",
            		name:"iddepto",
            		fieldLabel: "Opciones",
            		width: 300,
            		listeners:{
            			select: function(combo, rec){
            				storegrid.getProxy().setExtraParams({//se manda en tiempo de ejecución
            					iddepto: combo.getValue
            				});
            				storegrid.load();
            				btn.enable();
            			},
            			change: function(combo, nuevo, anterior){
            				storegrid.removeAll()
            				btn.disable();
            			}
            		}
            	},"->",{
            	    name: 'btnAceptar',
            		text: 'Agregar',
            		handler: 'agregar'
            	}]

		});
		this.callParent();
	}
});