import { buildConfig } from 'payload/config'

export default buildConfig({
  serverURL: 'http://localhost:3000', // A URL onde seu servidor está rodando
  admin: {
    user: 'admins', // Coleção que será usada para usuários administrativos
  },
  db: {
    // Configurações do banco de dados para PostgreSQL
    client: 'pg', // Especifica que estamos usando PostgreSQL
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'nome_do_seu_banco_de_dados',
      user: 'seu_usuario',
      password: 'sua_senha',
    },
  },
  collections: [
    {
      slug: 'posts',
      labels: {
        singular: 'Post',
        plural: 'Posts',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'content',
          type: 'textarea',
          label: 'Content',
          required: true,
        },
      ],
    },
  ],
})
