require("dotenv").config();

const cors = require("cors");
const express = require("express");
const { default: helmet } = require("helmet");

const sequelize = require("./src/modules/sequelize");
const usuariosRouter = require("./src/routes/usuarios.routes");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use("/usuarios", usuariosRouter);

app.get("/", (req, res) => {
  return res.status(200).send(`API [on]`);
});

(async () => {
  try {
    // FIX: Testar se essa linha é necessária
    await sequelize.sync({ forced: true });
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
