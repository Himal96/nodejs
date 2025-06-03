const sequelize = require("sequelize");
const makeProductTable = (sequelize, Datatypes) => {
  const Product = sequelize.define("product", {
    name: {
      type: Datatypes.STRING,
    },
    price: {
      type: Datatypes.INTEGER,
    },
    quantity: {
      type: Datatypes.INTEGER, 
    },
    description:{
        type:Datatypes.STRING
    }
  }); 

  return Product;
};

module.exports = makeProductTable;
