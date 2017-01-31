'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    name: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
          // associations can be defined here
          Todo.hasMany(models.Attachment, {
              onDelete: 'cascade'
          });
      }
    }
  });
  return Todo;
};