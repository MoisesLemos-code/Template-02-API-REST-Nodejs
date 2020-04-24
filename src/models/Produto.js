const { Schema, model } = require('mongoose');

const ProdutoSchema = new Schema({
    descricao: {
        type: String,
        required: true
    },
    tamanho: {
        type: String,
        required: true
    },
    estoque: {
        type: Number,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    itensVenda: [
        {
            type: Schema.Types.ObjectId,
            ref: 'ItemVenda'
        }
    ]
},
    {
        timestamps: true
    });

module.exports = model('Produto', ProdutoSchema);