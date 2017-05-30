Ext.define('app.store.GridStore',{
	extend: 'Ext.data.Store',
	model: 'app.model.GridModel',
	proxy:{
		type: 'ajax',
		url: 'resources/unjson.json',
		reader: {
			type:'json',
			rootProperty:'Clientes',
			totalProperty:'numFilas'
		}
	}
});