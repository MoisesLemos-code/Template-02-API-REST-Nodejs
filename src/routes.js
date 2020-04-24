const express = require('express');

const ClienteController = require('./controllers/ClienteController');
const ProdutoController = require('./controllers/ProdutoController');
const VendaController = require('./controllers/VendaController');
const ItemVendaController = require('./controllers/ItemVendaController')


const routes = express.Router();


routes.post("/cliente/create/", ClienteController.store);
routes.get("/cliente/list/", ClienteController.list);
routes.get("/cliente/:id", ClienteController.index);
routes.delete("/cliente/delete/:id", ClienteController.destroy);
routes.put("/cliente/update/:id", ClienteController.update);

routes.post("/produto/create/", ProdutoController.store);
routes.get("/produto/list/", ProdutoController.list);
routes.get("/produto/:id", ProdutoController.index);
routes.delete("/produto/delete/:id", ProdutoController.destroy);
routes.put("/produto/update/:id", ProdutoController.update);

routes.post("/venda/create/", VendaController.store);
routes.get("/venda/list/", VendaController.list);
routes.get("/venda/:id", VendaController.index);
routes.get("/produto/search/:descricao", ProdutoController.indexName);
routes.delete("/venda/delete/:id", VendaController.destroy);
routes.put("/venda/update/:id", VendaController.update);

routes.get("/itemVenda/list/", ItemVendaController.list);
routes.get("/itemVenda/:id", ItemVendaController.index);
routes.delete("/itemVenda/delete/:id", ItemVendaController.destroy);




module.exports = routes;
