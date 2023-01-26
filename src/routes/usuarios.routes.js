const express = require("express");
const usuariosController = require("../controllers/usuarios.controller");

const router = express.Router();

router.post("/", usuariosController.criaUsuario);
router.get("/", usuariosController.retornaUsuarios);
router.get("/:id", usuariosController.retornaUsuario);
router.put("/:id", usuariosController.atualizaUsuario);
router.delete("/:id", usuariosController.deletaUsuario);

module.exports = router;
