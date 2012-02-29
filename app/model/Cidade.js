Ext.define('Aplicacao.model.Cidade',{
	extend: 'Ext.data.Model',
	
	fields : ['codigo', 'nome', 'uf'],
	
	belongsTo : {model : 'Uf', foreignKey: 'uf', name: 'uf'}
	
});