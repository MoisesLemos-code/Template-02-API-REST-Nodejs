const { Model, DataTypes } = require('sequelize');

class Venda_item extends Model {
  static init(sequelize) {
    super.init({
      desconto: DataTypes.DOUBLE,
      acrescimo: DataTypes.DOUBLE,
      quantidade: DataTypes.DOUBLE,
      valor: DataTypes.DOUBLE,
      total_item: DataTypes.DOUBLE,
    }, {
      sequelize,
      tableName: 'venda_itens'
    })
  }
  static associate(models) {
    this.belongsTo(models.Venda, {
      foreignKey: 'venda_id',
      as: 'venda'
    }),
      this.belongsTo(models.Produto, {
        foreignKey: 'produto_id',
        as: 'produto'
      })
  }

}

module.exports = Venda_item;