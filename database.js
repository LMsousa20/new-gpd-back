require("dotenv").config();

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // <<<<<<< YOU NEED THIS
      },
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("conectou");
  })
  .catch((e) => {
    console.log("não conectou", e);
  });

  const Cliente = sequelize.define("cliente", {
    cnpj: { type: Sequelize.STRING },
    fantasia: { type: Sequelize.STRING },
    cidade: { type: Sequelize.STRING },
    razao: { type: Sequelize.STRING },
    contato: { type: Sequelize.STRING },
    telefone: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    bandeira: { type: Sequelize.STRING },
    celular: { type: Sequelize.STRING },
    ti: { type: Sequelize.STRING },
    emissao: { type: Sequelize.STRING },
    solicitante: { type: Sequelize.STRING },
    sistema: { type: Sequelize.STRING },
    tefpdvm: { type: Sequelize.STRING },
    bombas: { type: Sequelize.STRING },
    concentrador: { type: Sequelize.STRING },
    identificado: { type: Sequelize.STRING },
    wireless: { type: Sequelize.STRING },
  });
  
  const Proposta = sequelize.define("proposta", {
    cliente: { type: Sequelize.DECIMAL, allowNull: false },
    cod_proposta: { type: Sequelize.DECIMAL, allowNull: false },
    dt_emissao: { type: Sequelize.DATEONLY, allowNull: false },
    assinada: { type: Sequelize.BOOLEAN },
    realizada: { type: Sequelize.BOOLEAN },
    pago: { type: Sequelize.BOOLEAN },
    finalizadora: { type: Sequelize.STRING },
    total: { type: Sequelize.STRING },
  });

    
module.exports = {
  sequelize: sequelize,
  Sequelize: Sequelize,
};

