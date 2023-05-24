var express = require("express");
var router = express.Router();
var dbOne = require("../database");

/* GET users listing. */
router.get("/", async (req, res) => {
  try {
    const retorno = await dbOne.sequelize.query("Select * from produto");
    console.log(retorno[0]);
    const reposta = res.status(200).send(retorno[0]);
    return reposta;
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.get("/f", function (req, res, next) {
  res.send(fechamento);
});

module.exports = router;
