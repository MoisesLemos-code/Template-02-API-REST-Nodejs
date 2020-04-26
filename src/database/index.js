const Sequelize = require('sequelize')
const dbConfig = require('../config/database');

const Cliente = require('../models/Cliente')
const Venda = require('../models/Venda')
const Produto = require('../models/Produto')

const connection = new Sequelize(dbConfig);

Cliente.init(connection);
Venda.init(connection)
Produto.init(connection)

Venda.associate(connection.models)

module.exports = connection;