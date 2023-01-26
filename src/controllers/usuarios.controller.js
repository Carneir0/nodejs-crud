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
    res.status(201).send(`Retorna um usuário`);
  },
  async atualizaUsuario(req, res) {
    res.status(201).send(`Atualiza um usuário`);
  },
  async deletaUsuario(req, res) {
    res.status(201).send(`Deleta um usuário`);
  },
};
