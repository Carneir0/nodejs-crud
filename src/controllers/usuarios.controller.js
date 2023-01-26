module.exports = {
  async criaUsuario(req, res) {
    res.status(201).send(`Cria um novo usuário`);
  },
  async retornaUsuarios(req, res) {
    res.status(201).send(`Retorna todos os usuários`);
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
