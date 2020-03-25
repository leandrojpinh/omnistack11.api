# omnistack11.api

install knex.js para utilização de query builder
npm i knex
npm i [driver_name]
npm i sqlite3

inicializar o banco
npx knex init

configurar o caminho do banco:
ir no arquivo knexfile e adicionar o caminho no objeto:
development: {
    client: 'sqlite3',
    connection: {
        //caminho
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

migrations:
npx knex migrate:make [migration_name]

npx knex migrate:make create-ongs

configuração para setar para nulo os valores padrões da coluna
useNullAsDefault: true

executar o migration
npx knex migrate:latest

para fazer rollback
npx knex migrate:rollback

listar todas as migrates executas
npx knex migrate:status
