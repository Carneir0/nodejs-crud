module.exports = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "NodeJS API",
    description: "Documentação da API",
  },
  host: "http://pudim.com.br/",
  basePath: "/",
  tags: [
    {
      name: "Usuários",
      description: "Funções dos usuários",
    },
  ],
  schemes: ["https"],
  consumes: ["application/json"],
  produces: ["application/json"],

  paths: {
    "/usuarios": {
      post: {
        tags: ["Usuários"],
        summary: "Cria um novo usuário",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UsuarioInput",
              },
            },
          },
        },
        responses: {
          201: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Usuario",
            },
          },
        },
      },
      get: {
        tags: ["Usuários"],
        summary: "Retorna todos os usuários do sistema",
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Usuarios",
            },
          },
        },
      },
    },
    "/usuarios/{id}": {
      get: {
        tags: ["Usuários"],
        summary: "Retorna um usuário",
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              $ref: "#/components/schemas/id",
            },
            required: true,
            description: "ID do usuário",
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Usuario",
            },
          },
        },
      },
      put: {
        tags: ["Usuários"],
        summary: "Atualiza um usuário",
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              $ref: "#/components/schemas/id",
            },
            required: true,
            description: "ID do usuário",
          },
          {
            name: "data",
            in: "body",
            schema: {
              $ref: "#/components/schemas/UsuarioUpdate",
            },
            required: true,
            description: "Informações a serem atualizadas",
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Usuario",
            },
          },
        },
      },
      delete: {
        tags: ["Usuários"],
        summary: "Remove um usuário",
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              $ref: "#/components/schemas/id",
            },
            required: true,
            description: "ID do usuário",
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Usuario",
            },
          },
        },
      },
    },
  },
  definitions: {
    Usuario: {
      required: ["nome", "cpf", "email", "telefone"],
      properties: {
        nome: {
          type: "string",
        },
        cpf: {
          type: "string",
        },
        email: {
          type: "string",
          uniqueItems: true,
        },
        telefone: {
          type: "string",
        },
      },
    },
    Usuarios: {
      type: "array",
      $ref: "#/definitions/Usuario",
    },
  },
  components: {
    schemas: {
      id: {
        type: "integer",
        description: "ID do usuário",
        example: "1",
      },
      UsuarioInput: {
        type: "object",
        properties: {
          nome: {
            type: "string",
            description: "Nome do usuário",
            example: "Jane Doe",
          },
          cpf: {
            type: "string",
            description: "CPF do usuário",
            example: "123.456.789-01",
          },
          email: {
            type: "string",
            description: "Email do usuário",
            example: "email@example.com",
          },
          telefone: {
            type: "string",
            description: "Telefone do usuário",
            example: "99999-9999",
          },
        },
      },
      UsuarioUpdate: {
        type: "object",
        properties: {
          nome: {
            type: "string",
            description: "Nome do usuário",
            example: "Jane Doe",
          },
          cpf: {
            type: "string",
            description: "CPF do usuário",
            example: "123.456.789-01",
          },
          email: {
            type: "string",
            description: "Email do usuário",
            example: "email@example.com",
          },
          telefone: {
            type: "string",
            description: "Telefone do usuário",
            example: "99999-9999",
          },
        },
      },
    },
  },
};
