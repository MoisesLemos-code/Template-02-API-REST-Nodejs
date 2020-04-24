const { Schema, model } = require('mongoose');

const VendaSchema = new Schema({
	numero: {
		type: Number,
		required: true
	},
	statusVenda: {
		type: Boolean,
		required: true,
		default: false
	},
	totalBruto: {
		type: Number,
		required: true
	},
	totalFinal: {
		type: Number,
		required: true
	},
	produtos: [
		{
			type: Schema.Types.ObjectId,
			ref: 'ItemVenda'
		}
	],
	cliente_id: {
		type: Schema.Types.ObjectId,
		ref: 'Cliente',
		required: false
	}
},
	{
		timestamps: true
	});

module.exports = model('Venda', VendaSchema);