'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.User, {
        foreignKey: "shopId",
        as: "Users"
      })
    }
  }
  Shop.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Shop',
    tableName: "Shops"
  });
  return Shop;
};

export default Shop;
