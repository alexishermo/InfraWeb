Ext.define('app.view.Forma',{
	extend: 'Ext.form.Panel',
	initComponent: function(){
		var me=this; //Si requiero hacer referencia a la forma
		Ext.apply(me,{
			defaultType: 'textfield',
			fieldDefaults:{
				//disabled: me.tipoOper=='borrar',
				allowBlank: false,
				labelWidth:100
			},
			items:[{ //Por defaul, los campos se toman como textfield
				xtype: 'textfield',
				name: 'Nombre',
				fieldLabel: 'Nombre',
				labelWidth: 100,
				width: "100%",
				allowBlank: false,
				maxLength:50,
				minLength:5,
				msgTarget:'side'
				//disabled:me.tipoOper=='borrar'//tipo de operación de encuentra en el controlador
			},{
			    xtype:"displayfield",
			    fieldLabel: 'ID',
			    width:"100%",
			    //value:me.desdepto
			},{
			    name:"Telefono",
			    fieldLabel:"Telefono",
			    width:"100%",
			    maxLength:15,
			    minLength:7
			},
			{
				xtype: 'textfield',
				name: 'Domicilio',
				fieldLabel: 'Domoicilio',
				labelWidth: 100,
				width: '100%',
				allowBlank: false,
				maxLength:30,
				minLength:3,
				disabled:me.tipoOper=='borrar'
			},{
				xtype: 'textfield',
				name: 'Telefono',
				fieldLabel: 'Telefono',
				labelWidth: 100,
				width: '100%',
				allowBlank: false,
				maxLength:30,
				minLength:3,
				disabled:me.tipoOper=='borrar'
			},{
				xtype: 'textfield',
				name: 'Correo',
				fieldLabel: 'Correo',
				labelWidth: 100,
				width: '100%',
				allowBlank: false,
				maxLength:30,
				minLength:3,
				disabled:me.tipoOper=='borrar'
			}],
			bbar:[{
				text:"Cancelar",
				handler: function(btn){
					btn.up('window').close();
				}
			},{
				text:'Aceptar',
				handler:function(){
					if(me.isvalid()){
					    /*
					    Con el ajax
					    Ext.Ajax.request({
					        url:"url",
					        params:{
					            //INSTRUCCIONES
					        },
					        callback: function(request, success, response){
					            //instrucciones
					        }
					    });*/
                        //SEGUN ESTE CODIGO QUE DIO EL MAESTRO GUARDA :V
					    me.submit({
					        url:"/resource/guardar",
					        success: function(){ //success: function(form.response){
					            var r=response.result;
					            if(r.estatus && r.estatus.error){
					                Ext.Msg.alert({
					                   title:"la operacion se completo",
					                   message:"ocurrio un error",
					                   icon: Ext.Msg.ERROR,
					                   button:Ext.Msg.OK
					                });
					            } else{
					                me.grid.getStore().reload();
					                me.up("window").close();
					            }
					        },
					        failure: function(){ //failure: function(form.response){
					            console.log("ERROR AL GUARDAR");
					        }
					    });
					}
				}
			}]
		});
		me.callParent();
	}
});