const Venda = require('../models/Venda')
const Cliente = require('../models/Cliente')
const Produto = require('../models/Produto')
const Venda_item = require('../models/Venda_item')

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
  async storeItems(req, res) {
    //O corpo da requisição deve possuir um vetor de produtos.
    const { produtos } = req.body

    const venda = await Venda.findByPk(req.params.id);
    if (!venda) {
      return res.status(400).json({ error: 'Venda não encontrada!', id: req.params.id })
    }

    if (produtos && produtos.length > 0) {

      let produto = null;

      for (let i = 0; i < produtos.length; i++) {
        produto = await Produto.findByPk(produtos[i].produto_id)
        if (!produto) {
          return res.status(400).json({ error: 'Produto não encontrado!', id: produtos[i].produto_id })
        }
        venda.addProdutos(produto, {
          through: {
            desconto: produtos[i].desconto,
            acrescimo: produtos[i].acrescimo,
            quantidade: produtos[i].quantidade,
            valor: produtos[i].valor,
            total_item: produtos[i].total_item
          }
        })
      }
    }
    return res.json(produtos)
  },
  async index(req, res) {
    const obj = await Venda.findByPk(req.params.id, {
      include: [
        {
          model: Cliente,
          as: 'cliente'
        },
        {
          model: Produto,
          as: 'produtos'
        }
      ],
    });

    return res.json(obj)
  },
  async list(req, res) {
    const obj = await Venda.findAll();

    return res.json(obj)
  },
  async update(req, res) {
    try {
      const { produtos, ...data } = req.body;

      const venda = await Venda.findByPk(req.params.id);
      venda.update(data)
      for (let i = 0; i < produtos.length; i++) {
        produto = await Produto.findByPk(produtos[i].produto_id)
        if (!produto) {
          return res.status(400).json({ error: 'Produto não encontrado!', id: produtos[i].produto_id })
        }
        venda.addProdutos(produto, {
          through: {
            desconto: produtos[i].desconto,
            acrescimo: produtos[i].acrescimo,
            quantidade: produtos[i].quantidade,
            valor: produtos[i].valor,
            total_item: produtos[i].total_item
          }
        })
      }
      return res.status(200).json(venda);
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Falha ao atualizar venda!' })
    }
  },
  async destroy(req, res) {
    await Venda.destroy({
      where: { id: req.params.id }
    });
    return res.json({ success: "ok" });
  },
  async destroyItemVenda(req, res) {

    const venda = await Venda.findByPk(req.params.id_venda);
    if (!venda) {
      return res.status(400).json({ error: 'Venda não encontrada!', id: req.params.id })
    }
    item_venda = await Venda_item.findOne({
      where: { venda_id: req.params.id_venda, produto_id: req.params.id_item }
    })
    if (!item_venda) {
      return res.status(400).json({ error: 'Item não encontrado!', id: req.params.id_item })
    }
    await Venda_item.destroy({
      where: { venda_id: req.params.id_venda, produto_id: req.params.id_item }
    })
    return res.json({ success: "ok" });
  }
};