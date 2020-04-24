const Cliente = require('../models/Cliente');


module.exports = {
  async index(req, res) {
    const cliente = await Cliente.findOne({ _id: req.params.id });
    return res.json(cliente);
  },
  async list(req, res) {
    const Clientes = await Cliente.find({});
    return res.json(Clientes);
  },
  async store(req, res) {
    //Inserir no banco de dados
    const cliente = await Cliente.create(req.body);

    return res.json(cliente);
  },
  async destroy(req, res) {
    await Cliente.deleteOne({ _id: req.params.id });
    return res.json({ success: "ok" });
  },
  async update(req, res) {
    const cliente = await Cliente.updateOne({ _id: req.params.id }, req.body);
    return res.json(cliente);
  },

}