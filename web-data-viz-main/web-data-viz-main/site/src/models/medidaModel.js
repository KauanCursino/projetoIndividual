var database = require("../database/config");

function buscarUltimasMedidas(idUsuario) {
    var instrucaoSql = `
    SELECT (SELECT altura FROM usuario WHERE idUsuario = ${idUsuario}) Você,
    (SELECT ROUND(AVG(altura)) FROM usuario) Usuários, 
    (SELECT ROUND(AVG(altura)) FROM jogador WHERE fkSelecao = 1) Brasil,
    (SELECT ROUND(AVG(altura)) FROM jogador WHERE fkSelecao = 2) Japão,
    (SELECT ROUND(AVG(altura)) FROM jogador WHERE fkSelecao = 3) Polônia,
    (SELECT ROUND(AVG(altura)) FROM jogador WHERE fkSelecao = 4) Alemanha;
    `

    // if (process.env.AMBIENTE_PROCESSO == "producao") {
    //     instrucaoSql = `select top ${limite_linhas}
    //     AVG(altura)
    //                 from jogador
    //                 where fkSelecao = ${idSelecao}
    //                 order by id desc`;
    // } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    //     instrucaoSql = `select 
    //     AVG(altura)
    //                 from jogador
    //                 where fkSelecao = ${idSelecao}
    //                 order by id desc limit ${limite_linhas}`;
    // } else {
    //     console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
    //     return
    // }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function buscarMedidasEmTempoReal(idAquario) {

//     instrucaoSql = ''

//     if (process.env.AMBIENTE_PROCESSO == "producao") {
//         instrucaoSql = `select top 1
//         AVG(altura), 
//                         fkSelecao
//                         from jogador where fkSelecao= ${idSelecao} 
//                     order by id desc`;

//     } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
//         instrucaoSql = `select 
//         AVG(altura), 
//                         fkSelecao
//                         from medida where fkSelecao= ${idSelecao} 
//                     order by id desc limit 1`;
//     } else {
//         console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
//         return
//     }

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }


module.exports = {
    buscarUltimasMedidas
}
