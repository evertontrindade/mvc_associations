Ext.define('Aplicacao.view.cidade.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.cidadelist',
 
    title : 'Todas as Cidades',
    
    store: 'CidadeStore',

    columns : [
            {header: 'codigo',  dataIndex: 'codigo'},
            {header: 'nome', dataIndex: 'nome', flex: 1},
            {header: 'Uf', dataIndex: 'uf', 
                renderer : function(value, metaData, record){
            		return record.get('uf').sigla;
            	}
            }
        ]
});