module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Site', {
    sitename: DataTypes.STRING,
    claiming: DataTypes.STRING,
    description: DataTypes.STRING
  });
}
