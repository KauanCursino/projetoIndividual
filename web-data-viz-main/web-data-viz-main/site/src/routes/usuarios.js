var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarUsuario", function (req, res) {
    usuarioController.cadastrarUsuario(req, res);
})
router.post("/cadastrarLogin", function (req, res) {
    usuarioController.cadastrarLogin(req, res);
});
router.get("/listarUltimoIdLoginTabela", function (req, res) {
    loginTabelaController.listarUltimoIdLoginTabela(req, res);
});
router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});
router.post("/autenticarNome", function(req, res){
    usuarioController.autenticarNome(req, res)
});
module.exports = router;