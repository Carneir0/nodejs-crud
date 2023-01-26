const DataTypes = require("sequelize");
const sequelize = require("../modules/sequelize");

//TODO: Arrumar o tipo dos campos created_at e updated_at
const Usuario = sequelize.define(
  "Usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
  },
  {
    tableName: "usuarios",
    timestamps: true,
  }
);

module.exports = Usuario;
