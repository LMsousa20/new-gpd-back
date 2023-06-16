var express = require("express");
var router = express.Router();
var dbOne = require("../database");
const { where } = require("sequelize");

/* GET users listing. */
router.get("/", async (req, res) => {
  try {
    const retorno = await dbOne.sequelize.query("Select * from tecnicos");
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
  const { nome , cargo , telefone } = req.body
  console.log(nome , cargo , telefone)
  
  const retorno = await dbOne.Tecnicos.create({
    nome: nome,
    cargo: cargo,
    telefone: telefone,
  });
  
  res.status(200).send(retorno);
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

  const retorno = await dbOne.Tecnicos.destroy({
   where : {
    id : id,
   }, force: true
  });
  console.log(retorno) 
  
  res.status(200).send(retorno);
}catch(err){
  return res.status(400).send(err);
}
});

router.put("/", async function (req, res) {
 
  try{
    console.log('put chegou')
    console.table(req.body)
    const { nome , cargo , telefone, id } = req.body
    console.log(nome , cargo , telefone, id)
  const dadosUP = {
    nome: nome,
    cargo: cargo,
    telefone: telefone,
  }
  
  const retorno = await dbOne.Tecnicos.update(dadosUP,{where:{
        id: id
      }}
    );

    console.log(retorno)
  
  res.status(200).send(retorno);
}catch(err){
  return res.status(400).send(err);
}
});
module.exports = router;
