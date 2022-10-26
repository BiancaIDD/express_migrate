import { Sequelize } from "sequelize";

import db from "../config/database.js";

import Shop from "./Shop.js"

const { DataTypes } = Sequelize;

const User = db.define('User',{
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING
  },
  shopId:{
    type: DataTypes.INTEGER,
    field: 'shop_id',
    references: {
      model: Shop,
      key:'id'
    }
  },
  createdOn: {
    type: DataTypes.DATE,
    field: 'created_on',
    defaultValue: Sequelize.NOW
  }
},{
  tableName: 'user'
});


export default User;
