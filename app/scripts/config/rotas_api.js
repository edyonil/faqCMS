'use strict';

/**
 * Arquivo de configuração das rotas padrão do Backend RestFull
 * Cada url para o servidor deve ser configurado aqui e aplicação funcionará independente da URI
 */
angular.module('faqCmsApp').constant('uriConfig', {
    defaultUrl : "http://localhost:8000/",
    questions: 'perguntas'
});