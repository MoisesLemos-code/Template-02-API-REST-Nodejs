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
}

module.exports = Produto;