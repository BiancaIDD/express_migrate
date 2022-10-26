import { Sequelize } from "sequelize";

import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Shop = db.define('Shop',{
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  createdOn: {
    type: DataTypes.DATE,
    field: 'created_on',
    defaultValue: Sequelize.NOW
  }
},{
  tableName: 'shop'
});


export default Shop;
