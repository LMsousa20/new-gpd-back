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

  const Itens_Proposta = sequelize.define("itensproposta", {
    codproposta: { type: Sequelize.DECIMAL, allowNull: false },
    codproduto: { type: Sequelize.DECIMAL, allowNull: false },
    quantidade: { type: Sequelize.DECIMAL, allowNull: false },
    valor: { type: Sequelize.DECIMAL },
  });

  const Produto = sequelize.define("produtos", {
    produto: { type: Sequelize.STRING },
    valor: { type: Sequelize.DECIMAL },
    e_servico: { type: Sequelize.BOOLEAN },
    
  });

  const Tecnicos = sequelize.define("tecnicos", {
    nome: { type: Sequelize.STRING },
    cargo: { type: Sequelize.STRING },
    telefone: { type: Sequelize.STRING },
    
  });

  const Ticket = sequelize.define("tickets", {
    fantasia: { type: Sequelize.STRING },
    cnpj: { type: Sequelize.STRING },
    motivo: { type: Sequelize.STRING },
    tecnico: { type: Sequelize.STRING },
    previsão: { type: Sequelize.STRING },
    
  });

  // Ticket.sync();
  // Tecnicos.sync();
  // console.log('creou tecnicos')

  // Tecnicos.create({
  // nome: 'davi',
  //   cargo: 'tecnico nivel 1',
  //   telefone: '85 9 88250829',
  // });

module.exports = {
  sequelize: sequelize,
  Sequelize: Sequelize,
  Produto: Produto,
  Tecnicos:Tecnicos,
  Ticket:Ticket

};


