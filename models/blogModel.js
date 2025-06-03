const sequelize = require("sequelize");
const makeBlogTable = (sequelize, Datatypes) => {
  const Blog = sequelize.define("blog", {
    title: {
      type: Datatypes.STRING,
    },
    description: {
      type: Datatypes.STRING,
    },
    subtitile: {
      type: Datatypes.STRING, //BOOL (boolean), INTEGER
    },
  }); //yaha j lekhyo tey xampp ko table ma banxa

  return Blog;
};

module.exports = makeBlogTable;
