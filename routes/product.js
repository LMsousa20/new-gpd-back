var express = require("express");
var router = express.Router();
var dbOne = require("../database");

/* GET users listing. */
router.get("/", async (req, res) => {
  try {
    const retorno = await dbOne.sequelize.query("Select * from produtos");
    console.log(retorno[0]);
    const reposta = res.status(200).send(retorno[0]);
    return reposta;
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.post("/", function (req, res, next) {
  console.log('post chegou')
  console.log(req.body)
  console.table(req.body)
  res.send(req.body);
});

module.exports = router;
