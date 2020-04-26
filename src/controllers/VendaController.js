const Venda = require('../models/Venda')
const Cliente = require('../models/Cliente')

module.exports = {
  async store(req, res) {
    const {
      status,
      total_acrescimo,
      total_desconto,
      total_liquido,
      cliente_id
    } = req.body;

    if (cliente_id != null) {
      const cliente = await Cliente.findByPk(cliente_id)

      if (!cliente) {
        return res.status(400).json({ error: 'Cliente não encontrado!' })
      }
    }
    const obj = await Venda.create({
      status,
      total_acrescimo,
      total_desconto,
      total_liquido,
      cliente_id
    });

    return res.json(obj);
  },
  async index(req, res) {
    const obj = await Venda.findByPk(req.params.id);

    return res.json(obj)
  },
  async list(req, res) {
    const obj = await Venda.findAll();

    return res.json(obj)
  }
};