'use strict';
import { DataTypes, Model, Sequelize } from 'sequelize';
import db from '../config/database.js';

class User extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    this.belongsTo(models.Shop, {
      foreignKey: 'shopId',
      as: 'Shops',
    });
  }
}
User.init(
  {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      field: "createdAt",
      defaultValue: Sequelize.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updatedAt",
      defaultValue: Sequelize.NOW
    }
  },
  {
    sequelize: db,
    modelName: 'User',
    tableName: 'Users',
  }
);

export default User;
