'use strict';
module.exports = function(sequelize, DataTypes) {
  var Attachment = sequelize.define('Attachment', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    attachment_date: DataTypes.DATE,
    description: DataTypes.TEXT,
    todo_id: DataTypes.INTEGER
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Attachment;
};