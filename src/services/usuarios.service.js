const dateTime = require("node-datetime");

const Usuario = require("../models/usuarios.model");

module.exports = {
  async create(nome, cpf, email, telefone) {
    // Verificação de duplicidade pelo email
    const usuarioExistente = await Usuario.findOne({
      where: {
        email: email,
      },
      raw: true,
    });

    if (usuarioExistente) {
      return {
        status: 400,
        mensagem: "Email já utilizado",
      };
    }

    // TODO: melhorar essa criação de data aqui
    const created_at = dateTime.create().format("Y-m-d H:M:S");
    const updated_at = dateTime.create().format("Y-m-d H:M:S");

    // Registra o usuário na base de dados
    const usuarioNovo = await Usuario.create({
      nome,
      cpf,
      email,
      telefone,
      created_at,
      updated_at,
    });

    if (!usuarioNovo) {
      return {
        status: 500,
        mensagem: "Erro ao criar novo usuário",
      };
    }

    return {
      status: 201,
      mensagem: usuarioNovo,
    };
  },
  async getAll() {
    const usuarios = await Usuario.findAll({
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
  async getOne(usuarioId) {
    const usuario = await Usuario.findOne({
      where: {
        id: usuarioId,
      },
    });

    if (!usuario) {
      return {
        status: 400,
        mensagem: `Usuário ${usuarioId} não encontrado!`,
      };
    }

    return {
      status: 200,
      mensagem: usuario,
    };
  },
  async update(usuarioId, nome, cpf, email, telefone) {
    const usuarioExistente = Usuario.findOne({
      where: {
        id: usuarioId,
      },
    });

    if (!usuarioExistente) {
      return {
        status: 400,
        mensagem: `Usuário ${usuarioId} não encontrado!`,
      };
    }

    if (nome) usuarioExistente["nome"] = nome;
    if (cpf) usuarioExistente["cpf"] = cpf;
    if (telefone) usuarioExistente["telefone"] = telefone;

    if (email) {
      const emailExistente = await Usuario.findOne({
        where: {
          email: email,
        },
        raw: true,
      });

      if (emailExistente) {
        return {
          status: 400,
          mensagem: `Email já utilizado!`,
        };
      }

      usuarioExistente["email"] = email;
    }

    const usuarioAtualizado = await Usuario.update(
      {
        nome,
        cpf,
        email,
        telefone,
      },
      {
        where: {
          id: usuarioId,
        },
        raw: true,
      }
    );

    if (!usuarioAtualizado) {
      return {
        status: 500,
        mensagem: `Erro ao atualizar usuário ${usuarioId}!`,
      };
    }

    return {
      status: 200,
      mensagem: `Usuário atualizado com sucesso!`,
    };
  },
  async delete(usuarioId) {
    const usuarioExistente = await Usuario.findOne({
      where: {
        id: usuarioId,
      },
      raw: true,
    });

    if (!usuarioExistente) {
      return {
        status: 400,
        mensagem: `Usuário ${usuarioId} não encontrado!`,
      };
    }

    const usuarioDeletado = await Usuario.destroy({
      where: {
        id: usuarioId,
      },
    });

    if (!usuarioDeletado) {
      return {
        status: 400,
        mensagem: `Erro ao remover usuário ${usuarioId}!`,
      };
    }

    return {
      status: 200,
      mensagem: `Usuário ${usuarioId} removido com sucesso!`,
    };
  },
};
