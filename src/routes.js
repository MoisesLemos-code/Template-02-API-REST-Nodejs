const express = require('express');

const ClienteController = require('./controllers/ClienteController')
const ProdutoController = require('./controllers/ProdutoController')
const VendaController = require('./controllers/VendaController')


const routes = express.Router();

routes.post('/cliente/insert', ClienteController.store)
routes.get('/cliente/list', ClienteController.list)
routes.get('/cliente/index/:id', ClienteController.index)


routes.post('/produto/insert', ProdutoController.store)
routes.get('/produto/list', ProdutoController.list)
routes.get('/produto/index/:id', ProdutoController.index)

routes.post('/venda/insert/', VendaController.store)
routes.get('/venda/list', VendaController.list)
routes.get('/venda/index/:id', VendaController.index)


module.exports = routes;
