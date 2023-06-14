var database = require("../database/config")
function listarTitulos(qtdTitulosMundiais){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function titulosMundias(): ", qtdTitulosMundiais)
    var instrucaoSql = `
    SELECT	(SELECT qtdTitulosMundiais from selecao WHERE idSelecao = 1) Brasil,
    (SELECT qtdTitulosMundiais from selecao WHERE idSelecao = 2) Japão,
    (SELECT qtdTitulosMundiais from selecao WHERE idSelecao = 3) Polônia,
    (SELECT qtdTitulosMundiais from selecao WHERE idSelecao = 4) Alemanha;
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}   
function listarDesc(descricaoSelecao){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function titulosMundias(): ", descricaoSelecao)
    var instrucaoSql = `
    SELECT (SELECT descricaoSelecao FROM selecao WHERE idSelecao = 1) Brasil,
    (SELECT descricaoSelecao FROM selecao WHERE idSelecao = 2) Japão,
    (SELECT descricaoSelecao FROM selecao WHERE idSelecao = 3) Polônia,
    (SELECT descricaoSelecao FROM selecao WHERE idSelecao = 4) Alemanha;
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    listarTitulos,
    listarDesc
};