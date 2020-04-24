const Venda = require('../models/Venda');
const ItemVenda = require('../models/ItemVenda');


module.exports = {
	async index(req, res) {
		try {
			const vendaInc = await Venda.findOne({ _id: req.params.id }).populate(['produtos']);
			return res.json(vendaInc);
		} catch (err) {
			return res.status(400).send({ error: 'Falha ao identificar a venda!' })
		}
	},
	async list(req, res) {
		try {
			const vendaInc = await Venda.find({}).populate(['produtos']);
			return res.json({ vendaInc });
		} catch (err) {
			return res.status(400).send({ error: 'Falha ao listar vendas!' })
		}
	},
	async store(req, res) {
		try {

			const { numero, statusVenda, totalBruto, totalFinal, produtos, cliente_id } = req.body

			//Inserir no banco de dados
			const vendaInc = await Venda.create({ numero, statusVenda, totalBruto, totalFinal, cliente_id });

			await Promise.all(produtos.map(async item => {
				const vendaItens = new ItemVenda({ ...item, venda_id: vendaInc._id });

				await vendaItens.save();

				vendaInc.produtos.push(vendaItens);
			}));

			await vendaInc.save();

			return res.json(vendaInc);
		} catch (err) {
			console.log(err)
			return res.status(400).send({ error: 'Falha ao criar uma nova venda!' })
		}
	},
	async destroy(req, res) {
		try {
			await ItemVenda.deleteMany({ venda_id: req.params.id })
			await Venda.deleteOne({ _id: req.params.id });
			return res.json({ success: "Registro removido com sucesso!" });
		} catch (err) {
			return res.status(400).send({ error: 'Falha ao remover o registro!' })
		}
	},
	async update(req, res) {
		try {

			const { numero, statusVenda,
				totalBruto, totalFinal, produtos,
				cliente_id } = req.body;

			//Atualizar no banco de dados
			const vendaInc = await Venda.findByIdAndUpdate({ _id: req.params.id }, {
				numero,
				statusVenda,
				totalBruto,
				totalFinal,
				cliente_id
			}, { useFindAndModify: false });

			vendaInc.produtos = [];
			await ItemVenda.deleteMany({ venda_id: vendaInc._id })

			await Promise.all(produtos.map(async item => {
				const vendaItens = new ItemVenda({ ...item, venda_id: vendaInc._id });

				await vendaItens.save();

				vendaInc.produtos.push(vendaItens);
			}));

			await vendaInc.save();

			return res.json(vendaInc);
		} catch (err) {
			console.log(err)
			return res.status(400).send({ error: 'Falha ao atualizar a venda!' })
		}

	},

}