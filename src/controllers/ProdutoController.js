const Produto = require('../models/Produto')

module.exports = {
  async store(req, res) {
    const { nome, estoque, valor } = req.body;
    const obj = await Produto.create({ nome, estoque, valor });

    return res.json(obj);
  },
  async index(req, res) {
    const obj = await Produto.findByPk(req.params.id);

    return res.json(obj)
  },
  async list(req, res) {
    const obj = await Produto.findAll();

    return res.json(obj)
  }
};