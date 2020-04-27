const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      estoque: DataTypes.DOUBLE,
      valor: DataTypes.DOUBLE,
    }, {
      sequelize
    })
  }
  static associate(models) {
    this.belongsToMany(models.Venda, {
      through: models.Venda_item,
      as: 'vendas',
      foreignKey: 'produto_id',
    })
  }
}

module.exports = Produto;