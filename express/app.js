const express = require('express')
const path= require('path')
const parser = require('body-parser')
const app= express();

app.use(parser.urlencoded({extended:false}));
app.use('static',express.static(path.join(__dirname,'static')));
app.get("/",(req,res)=>{
    res.send("hello from node")
    
});
app.get("/about",(req,res)=>{
    //res.send("'welcom ro aaboutttttttttttttttttt");
    res.json({indai:'abjoth'})
});

app.get("/create",(req,res)=>{
    var loc=path.join(__dirname,'views','index.html');
    res.sendFile(loc)
});

app.post("/create",(req,res)=>{
    console.log(req.body)
    
    res.json(req.body)
});
app.listen(80)