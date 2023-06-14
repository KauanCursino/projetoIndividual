var selecoesController = require("../controllers/selecoesController");

router.post("/listarTitulos", function (req, res) {
    selecoesController.cadastrarUsuario(req, res);
});

router.post("/listarDesc", function (req, res) {
    selecoesController.listarDesc(req, res);
});
module.exports = router;