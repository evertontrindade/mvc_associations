Ext.define('Aplicacao.store.CidadeStore', {
    extend: 'Ext.data.Store',

    model : 'Aplicacao.model.Cidade',
    
    autoLoad : true,
    proxy : {
    	type: 'ajax',
    	api: {
    		read : 'data/cidades.json'
    	},
    	
    	reader : {
    		type: 'json',
    		root: 'data',
    		idProperty: 'codigo'
    	}
    }

});