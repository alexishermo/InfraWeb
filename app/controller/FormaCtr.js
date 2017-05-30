Ext.define('app.controller.FormaCtr',{
	extend: 'Ext.app.ViewController',
	alias: 'controller.formacontroller',
	//Funciones que se usan con handler en el grid
    //se puede handler: function......
	agregar:function(btn){
	    var panel=this.getView();
	    //console.log("panel.combodepto.getDisplayField()"+panel.combodepto.getSelection().get("abreviado"));
		var forma=Ext.create('app.view.main.Forma',{ //el app view Forma
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