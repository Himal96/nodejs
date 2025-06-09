//database connection ko code lekxam
const { Sequelize, DataTypes } = require("sequelize");

//const Sequelize=require("sequelize").Sequelize
require("dotenv").config();

const sequelize = new Sequelize({
  database: process.env.database_name,
  username: process.env.database_username,
  password: process.env.database_password,
  port: process.env.database_port,
  host: process.env.database_host,
  dialect: "mysql",
}); //making object forkm sequalize
//sequalize connect huna try garr vanera vannu parxa
sequelize
  .authenticate()
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log("error aayo", err);
  });
const db = {};

db.blogs = require("./../models/blogModel")(sequelize, DataTypes);
db.users = require("./../models/userModel")(sequelize, DataTypes);
db.todos = require("./../models/todomodel")(sequelize,DataTypes);
sequelize.sync({ alter: false }).then(() => {
  console.log("migrated successfully"); //yo code ratta handa pani vay)
}); //migration code

module.exports = sequelize;
module.exports = db;
