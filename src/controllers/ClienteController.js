const Cliente = require('../models/Cliente')

module.exports = {
  async store(req, res) {
    const { nome, endereco, email } = req.body;
    const obj = await Cliente.create({ nome, endereco, email });

    return res.json(obj);
  },
  async index(req, res) {
    const obj = await Cliente.findByPk(req.params.id);

    return res.json(obj)
  },
  async list(req, res) {
    const obj = await Cliente.findAll();

    return res.json(obj)
  }
};