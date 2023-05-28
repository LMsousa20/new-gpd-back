var express = require("express");
var router = express.Router();
var dbOne = require("../database");

/* GET users listing. */
router.get("/", async (req, res) => {
  try {
    const retorno = await dbOne.sequelize.query("Select * from clientes limit 100");
    console.log(retorno[0]);
    const reposta = res.status(200).send(retorno[0]);
    return reposta;
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.get("/:idclient", async (req, res) => {
  try {
    var client = req.params.idclient;
    console.log(client)
    const retorno = await dbOne.sequelize.query(`Select * from clientes where cnpj='${client}'`);
    console.log(retorno[0]);
    const reposta = res.status(200).send(retorno[0]);
    return reposta;
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.get("/createclient", function (req, res, next) {
  //dbOne.createClient();
  res.send(fechamento);
});

module.exports = router;
