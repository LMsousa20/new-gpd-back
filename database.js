require("dotenv").config();

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.host,
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


module.exports = {
  sequelize: sequelize,
  Sequelize: Sequelize,
};
