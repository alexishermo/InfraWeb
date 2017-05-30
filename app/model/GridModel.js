Ext.define("app.model.GridModel",{
	extend: "Ext.data.Model",
	fields:[
	{name: 'Nombre', type: 'string'},
	{name: 'Codigo', type: 'int'},
	{name: 'Telefono', type: 'string'},
	{name: 'Edad', type: 'int'},
	{name: 'Correo', type: 'string'}
	]
});