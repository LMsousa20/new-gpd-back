var express = require("express");
var router = express.Router();

let abertura = "abertura";
let fechamento = "fechamento";

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(abertura);
});

router.get("/f", function (req, res, next) {
  res.send(fechamento);
});

module.exports = router;
