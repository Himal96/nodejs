const express = require("express");
const app = express();
const db = require("./database/db");

//const app=require("express")()

app.set("view engine", "ejs"); //tells express js to set environment for ejs to run
//get todos-page
app.use(express.urlencoded({ extended: true })); /*to run form data*/
const bcrypt = require("bcrypt");

//login page

// app.get("/login-page", (req, res) => {
//   res.render("authentication/login.ejs");
// });
app.get("/",async (req, res) => {
  const datas= await db.todos.findAll()//select *from todos
  res.render("todoauthentication/home.ejs",{todos:datas})
})

app.get("/login", (req, res) => {
  res.render("todoauthentication/login.ejs");
});
//register page
app.get("/register-page", (req, res) => {
  res.render("authentication/register.ejs");
});

app.post("/register-page", async (req, res) => {
  console.log(req.body);
  const { username, email, password, confirm_password } = req.body;
  if (password !== confirm_password) {
    res.send("passwrod and conform pass doesnt match");
  }

  await db.users.create({
    //await halnai parxa data halna ko lai ani 35 line ma async pani lekhna parxa

    username,
    email,
    password: bcrypt.hashSync(password, 10),
    confirm_password, //inert into users
  });
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  const { task, description, date } = req.body;

  await db.todos.create({
    //await halnai parxa data halna ko lai ani 35 line ma async pani lekhna parxa

    task,
    description,
    date,
  });
});
// //       first request|   |response hunxa
// app.get("/",function(hey, byee){
// byee.render("home.ejs",{age:23,name:"himal"})
// })

//  app.get("/about",function(req,res){
// res.render("about.ejs",{text:"about"})
//  })

app.listen(4000, function () {
  console.log("backend has started at port 3000");
});
