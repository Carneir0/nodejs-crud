require("dotenv").config();
const sequelize = require("./src/modules/sequelize");
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  return res.status(200).send(`API [on]`);
});

(async () => {
  try {
    await sequelize.sync();
    console.log(`Conexão ao banco de dados realizada com sucesso`);
  } catch (error) {
    console.log(
      `Não foi possível sincronizar o Sequelize com o banco de dados: ${error.message}`
    );
  }
})();

app.listen(port, () => {
  console.log(`Listening on [:${port}]`);
});
