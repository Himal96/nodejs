// const sequelize = require("sequelize");
// const sequelize = require("sequelize");
const todomodel = (sequelize, Datatypes) => {
  const todo = sequelize.define("todo", {
    task: {
      type: Datatypes.STRING,
    },
    description: {
      type: Datatypes.STRING,
    },
    date: {
      type: Datatypes.INTEGER,
      //BOOL (boolean), INTEGER
    },
  }); //yaha j lekhyo tey xampp ko table ma banxa

  return todo;
};

module.exports = todomodel;
