var express = require("express");
var router = express.Router();
var dbOne = require("../database");
const { where } = require("sequelize");

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

router.post("/", async function (req, res) {
 
  try{
    console.log('post chegou')
    console.table(req.body)
  const { produto , valor , e_servico } = req.body
  console.log(produto , valor , e_servico)
  
  const retorno = await dbOne.Produto.create({
    produto: produto ,
    valor: valor,
    e_servico: e_servico
  });
  
  res.status(200);
}catch(err){
  return res.status(400).send(err);
}
});

router.delete("/", async function (req, res) {
 
  try{
    console.log('delete chegou')
    console.table(req.body)
  const { id } = req.body
  console.log('delete ',id)  

  const retorno = await dbOne.Produto.destroy({
   where : {
    id : id,
   }, force: true
  });
  console.log(retorno) 
  
  res.status(200);
}catch(err){
  return res.status(400).send(err);
}
});

router.put("/", async function (req, res) {
 
  try{
    console.log('put chegou')
    console.table(req.body)
  const { produto , valor , e_servico, id } = req.body
  console.log(produto , valor , e_servico, id )
  const dadosUP = {
    produto: produto ,
    valor: valor,
    e_servico: e_servico
  }
  
  const retorno = await dbOne.Produto.update(dadosUP,{where:{
        id: id
      }}
    );

    console.log(retorno)
  
  res.status(200);
}catch(err){
  return res.status(400).send(err);
}
});
module.exports = router;
