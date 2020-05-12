const express =  require('express');
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.send("<h1>Welcome to express.js mini project</h1><br/>Change url to http://localhost:3000/calculator to go to BMI INDEX Application page");
})
app.get("/about",function(req,res){
    res.send("You are on about us page");
})
app.get("/contact",function(req,res){
    res.send("You are on contact us page");
})
app.get("/calculator",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.post("/calculator",function(req,res){
    let height = Number(req.body.v1);
    let weight = Number(req.body.v2);
    let bmi = weight/(height*height);

    res.send("Your BMI index is:-"+bmi);
})
app.listen(3000,function(req, res){
    console.log('server is running on port 3000');
});