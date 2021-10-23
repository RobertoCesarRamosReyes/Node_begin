'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Phone.belongsTo(models.People,{
        foreignKey: 'id',
        onDelete:"CASCADE"
      })
    }
  };
  Phone.init({
    numero: DataTypes.STRING,
    tipo: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
    people_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Phone',
  });
  return Phone;
};