'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      People.hasMany(models.Phone,{
        foreignKey:"people_id"
      })
    }
  };
  People.init({
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    edad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'People',
  });
  return People;
};