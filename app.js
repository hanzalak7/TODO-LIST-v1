

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js'); //It carry data from data.js
const port = process.env.PORT || 3000
const app = express();

const listItems = ["buy food","cook","Eat"];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {

  const day = date.getDate(); //it comes from data.js

  res.render("list", {
    listTitle: day,
    listItems: listItems
  });
});

app.get("/work", function(req, res){
  res.render("list", {
    listTitle: "Work List",
    listItems: workItems});
});

app.post("/", function(req, res){

  if(req.body.listSubmit === "Work"){
    workItems.push(req.body.newTodo);
    res.redirect("/work");
  }else{
    listItems.push(req.body.newTodo);
    res.redirect("/");
    //    res.render("list",{newlistiteam:iteam});
// This line to refersh latest update
  }
});
app.get("/about",function(req,res){
    res.render("about");
})

app.listen(port,() => {
  console.log(`Server running at port `+port);
});
