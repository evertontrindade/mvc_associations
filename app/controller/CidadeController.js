Ext.define('Aplicacao.controller.CidadeController', {
    extend: 'Ext.app.Controller',

    stores: ['CidadeStore'],
    models: ['Cidade', 'Uf'],
    views: ['cidade.List']

});