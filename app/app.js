Ext.Loader.setPath({
	'Ext' : 'extjs/src'
});

Ext.application({
	name : 'Aplicacao',
	appFolder : 'app',

	requires : ['Ext.container.Viewport'],
	
	controllers: ['CidadeController'],
	
	launch : function() {
		
		Ext.create('Ext.container.Viewport', {
			layout: 'fit',
			items : [{
				xtype: 'cidadelist'
			}]
		});
	}
});