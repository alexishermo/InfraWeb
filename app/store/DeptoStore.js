Ext.define("app.store.DeptoStore",{
	extend: "Ext.data.Store",
	model: "app.model.DeptoModel",
	proxy: {
	    type:"ajax",
	    url:"resources/Datos",
	    reader:{
	        type:"json",
	        rootProperty:"data",
	        totalProperty:"numFilas"
	    }
	}
	/*
	,
	listeners: {
	    load: function(store, records, successful, operation){
	        var r=Ext.decide(operation.getResponse().responseText);


	        if(r.estatus && (r.estatus.error || !successful)){
	            console.log("ocurrio un error");
	            Ext..Msg.alert({
	                title: "ERROR",
	                message: r.estatus.msg,
	                icon: Ext.Msg.ERROR,
	                button: Ext.Msg.OK,
	                r: function(btn){
	                    if(r.estatus.sesionError) window.location.reload();
	                }
	            });
	        }*/
});
