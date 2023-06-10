var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticarNome) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticarNome.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticarNome)}`); // transforma JSON em String

                    if (resultadoAutenticarNome.length == 1) {
                        console.log(resultadoAutenticarNome);
                        res.json(resultadoAutenticarNome[0]);
                    //     aquarioModel.buscarAquariosPorUsuario(resultadoAutenticarNome[0].id)
                    //         .then((resultadoAquarios) => {
                    //             if (resultadoAquarios.length > 0) {
                    //                 res.json({
                    //                     id: resultadoAutenticarNome[0].id,
                    //                     email: resultadoAutenticarNome[0].email,
                    //                     nome: resultadoAutenticarNome[0].nome,
                    //                     senha: resultadoAutenticarNome[0].senha
                    //                 });
                    //             } else {
                    //                 res.status(204).json({ aquarios: [] });
                    //             }
                    //         })
                    } else 
                    if (resultadoAutenticarNome.length == 0) {
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

}

function autenticarNome(req, res) {
    var nome = req.body.nomeServer;
    var id = req.body.idServer;

    

        usuarioModel.autenticarNome(nome, id)
            .then(
                function (resultadoAutenticarNome) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticarNome.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticarNome)}`); // transforma JSON em String

                    if (resultadoAutenticarNome.length == 1) {
                        console.log(resultadoAutenticarNome);
                        res.json(resultadoAutenticarNome[0]);
                    //     aquarioModel.buscarAquariosPorUsuario(resultadoAutenticarNome[0].id)
                    //         .then((resultadoAquarios) => {
                    //             if (resultadoAquarios.length > 0) {
                    //                 res.json({
                    //                     id: resultadoAutenticarNome[0].id,
                    //                     email: resultadoAutenticarNome[0].email,
                    //                     nome: resultadoAutenticarNome[0].nome,
                    //                     senha: resultadoAutenticarNome[0].senha
                    //                 });
                    //             } else {
                    //                 res.status(204).json({ aquarios: [] });
                    //             }
                    //         })
                    } else 
                    if (resultadoAutenticarNome.length == 0) {
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

function cadastrarUsuario(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var altura = req.body.alturaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (altura == undefined) {
        res.status(400).send("Sua altura está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarUsuario(nome, altura)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function cadastrarLogin(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarLogin( email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
module.exports = {
    autenticar,
    autenticarNome,
    cadastrarUsuario,
    cadastrarLogin
}