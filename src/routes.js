const express = require('express');

const ClienteController = require('./controllers/ClienteController')
const ProdutoController = require('./controllers/ProdutoController')
const VendaController = require('./controllers/VendaController')


const routes = express.Router();

routes.post('/cliente/insert', ClienteController.store)
routes.get('/cliente/list', ClienteController.list)
routes.get('/cliente/index/:id', ClienteController.index)
routes.put('/cliente/update/:id', ClienteController.update)
routes.delete('/cliente/delete/:id', ClienteController.destroy)

routes.post('/produto/insert', ProdutoController.store)
routes.get('/produto/list', ProdutoController.list)
routes.get('/produto/index/:id', ProdutoController.index)
routes.put('/produto/update/:id', ProdutoController.update)
routes.delete('/produto/delete/:id', ProdutoController.destroy)

routes.post('/venda/insert/', VendaController.store)
routes.post('/venda/insert/item/:id', VendaController.storeItems)
routes.get('/venda/list', VendaController.list)
routes.get('/venda/index/:id', VendaController.index)
routes.put('/venda/update/:id', VendaController.update)
routes.delete('/venda/delete/:id', VendaController.destroy)
routes.delete('/delete/venda/:id_venda/item/:id_item',
  VendaController.destroyItemVenda)

module.exports = routes;
