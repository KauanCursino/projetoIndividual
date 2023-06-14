var selecoesModel = require("../models/selecoesModel");

function listarTitulos(req, res) {
    var qtdTitulosmundiais = req.body.qtdTitulosMundiaisServer;
    if (qtdTitulosmundiais == undefined) {
        res.status(400).send("Seus titulos estão undefined!");
    }
    selecoesModel.autenticar(qtdTitulosMundiais)
        .then(
            function (resultadoListarTitulos) {
                console.log(`\nResultados encontrados: ${resultadoListarTitulos.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoListarTitulos)}`); // transforma JSON em String


                if (resultadoListarTitulos.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );


}
function listarDesc(req, res) {
    var descricaoSelecao = req.body.descricaoSelecao
    if (descricaoSelecao == undefined) {
        res.status(400).send("Sua Descrição está undefined");
    }
    selecoesModel.listarDesc(descricaoSelecao)
        .then(
            function (resultadoListarDesc) {
                console.log(`\nResultados encontrados: ${resultadolistarDesc.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadolistarDesc)}`);
                if (resultadoListarDesc.length == 0) {
                    res.status(403).send("Desc inválida")
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao plotar a desc Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        )
}

module.exports = {
    listarTitulos,
    listarDesc
}
