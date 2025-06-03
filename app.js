const express  = require("express")
const app = express()
require("./database/db")


//const app=require("express")()


app.set("view engine","ejs") //tells express js to set environment for ejs to run
//get todos-page

app.get("/todo-home", (req, res) => {
res.render("todo/todohome.ejs")
})

//add todo-page
app.get("/add-todo",(req,res)=>{
res.render("todo/add.ejs")
})

//update todo-page
app.get("/update-todo", (req, res) => {
res.render("todo/update.ejs")
})

//login page
app.get("/login-page", (req, res) => {
res.render("authentication/login.ejs")
})

//register page
app.get("/register-page", (req, res) => {
res.render("authentication/register.ejs")
})

// //       first request|   |response hunxa
// app.get("/",function(hey, byee){
// byee.render("home.ejs",{age:23,name:"himal"}) 
// })


//  app.get("/about",function(req,res){
// res.render("about.ejs",{text:"about"})
//  })


app.listen(3000, function(){
    console.log("backend has started at port 3000")
})





