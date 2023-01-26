const dateTime = require("node-datetime");

const User = require("../models/usuarios.model");

module.exports = {
  async create(nome, cpf, email, telefone) {
    // Verificação de duplicidade pelo email
    const user = await User.findOne({
      where: {
        email: email,
      },
      raw: true,
    });

    if (user) {
      return {
        status: 400,
        mensagem: "Email já utilizado",
      };
    } else {
      const created_at = dateTime.create().format("Y-m-d H:M:S");
      const updated_at = dateTime.create().format("Y-m-d H:M:S");

      // Registra o usuário na base de dados
      const user = await User.create({
        nome,
        cpf,
        email,
        telefone,
        created_at,
        updated_at,
      });

      if (user) {
        return {
          status: 201,
          mensagem: user,
        };
      } else {
        return {
          status: 500,
          mensagem: "Erro ao criar novo usuário",
        };
      }
    }
  },
  async getAll() {
    const usuarios = await User.findAll({
      raw: true,
    });

    if (usuarios) {
      return {
        status: 200,
        mensagem: usuarios,
      };
    } else {
      return {
        status: 400,
        mensagem: "Nenhum usuário encontrado",
      };
    }
  },
};
