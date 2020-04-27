const { Model, DataTypes } = require('sequelize');

class Venda extends Model {
  static init(sequelize) {
    super.init({
      status: DataTypes.STRING,
      total_acrescimo: DataTypes.DOUBLE,
      total_desconto: DataTypes.DOUBLE,
      total_liquido: DataTypes.DOUBLE,
    }, {
      sequelize
    })
  }
  static associate(models) {
    this.belongsTo(models.Cliente, {
      foreignKey: 'cliente_id',
      as: 'cliente'
    }),
      this.belongsToMany(models.Produto, {
        through: models.Venda_item,
        as: 'produtos',
        foreignKey: 'venda_id'
      })
  }
}

module.exports = Venda;