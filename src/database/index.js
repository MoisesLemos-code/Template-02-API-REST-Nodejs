const Sequelize = require('sequelize')
const dbConfig = require('../config/database');

const Cliente = require('../models/Cliente')
const Venda = require('../models/Venda')
const Produto = require('../models/Produto')
const Venda_item = require('../models/Venda_item')

const connection = new Sequelize(dbConfig);

Cliente.init(connection);
Venda.init(connection)
Produto.init(connection)
Venda_item.init(connection)

Cliente.associate(connection.models)
Venda.associate(connection.models)
Produto.associate(connection.models)
Venda_item.associate(connection.models)

module.exports = connection;