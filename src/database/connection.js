const knex = require('knex');
const config = require('../../knexfile');

const enviroment = process.env.NODE_ENV === 'test' ? config.test : config.development;

const connection = knex(enviroment);

module.exports = connection;