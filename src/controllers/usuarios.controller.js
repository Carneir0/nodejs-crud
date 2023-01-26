const userService = require("../services/usuarios.service");

module.exports = {
  async criaUsuario(req, res) {
    try {
      // TODO: Verificação e validação dos campos
      const { nome, cpf, email, telefone } = req.body;

      // Cria o usuário
      const response = await userService.create(nome, cpf, email, telefone);

      // Retorna o resultado da operação
      return res.status(response.status).send(response.mensagem);
    } catch (error) {
      console.log(`Erro inesperado: ${error.message}`);
      return res.status(500).send(`Erro ao criar usuário!`);
    }
  },
  async retornaUsuarios(req, res) {
    try {
      // Busca todos os usuários
      const response = await userService.getAll();

      // Retorna o resultado da operação
      return res.status(response.status).send(response.mensagem);
    } catch (error) {
      console.log(`Erro ao retornar usuários: ${error.message}`);
      return res.status(500).send(`Erro ao retornar usuários!`);
    }
  },
  async retornaUsuario(req, res) {
    try {
      // Busca todos os usuários
      const response = await userService.getOne(req.params.id);

      // Retorna o resultado da operação
      return res.status(response.status).send(response.mensagem);
    } catch (error) {
      console.log(`Erro ao retornar usuário: ${error.message}`);
      return res.status(500).send(`Erro ao retornar usuário!`);
    }
  },
  async atualizaUsuario(req, res) {
    try {
      const { nome, cpf, email, telefone } = req.body;

      // Busca todos os usuários
      const response = await userService.update(
        req.params.id,
        nome,
        cpf,
        email,
        telefone
      );

      // Retorna o resultado da operação
      return res.status(response.status).send(response.mensagem);
    } catch (error) {
      console.log(`Erro ao atualizar usuário: ${error.message}`);
      return res.status(500).send(`Erro ao atualizar usuário!`);
    }
  },
  async deletaUsuario(req, res) {
    try {
      // Busca todos os usuários
      const response = await userService.delete(req.params.id);

      // Retorna o resultado da operação
      return res.status(response.status).send(response.mensagem);
    } catch (error) {
      console.log(`Erro ao remover usuário: ${error.message}`);
      return res.status(500).send(`Erro ao remover usuário!`);
    }
  },
};
