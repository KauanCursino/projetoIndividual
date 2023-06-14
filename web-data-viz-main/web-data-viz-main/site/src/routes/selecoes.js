var selecoesController = require("../controllers/selecoesController");

router.post("/listarTitulos", function (req, res) {
    selecoesController.cadastrarUsuario(req, res);
});

router.post("/listarDescBrasil", function (req, res) {
    selecoesController.listarDescBrasil(req, res);
});
module.exports = router;