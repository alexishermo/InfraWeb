/**
 * Created by Stevens06 on 14/05/2017.
 */
Ext.define('app.view.main.Menu',{
    extend: 'Ext.Panel',
    initComponent:function(){
        var mygrid=Ext.create('app.view.main.Grid');
        Ext.apply(this,{
            items: [{
                html:'<h1>La ferreteria :)</h1>'
            },mygrid]
        });
        this.callParent()
    }
    //layout:'ux.center'
});