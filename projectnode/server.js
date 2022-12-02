const https= require('https')

var app = https.createServer((req,res)=>{
    // res.end("hello from node")
    console.log(res)
});
app.listen(3000,'127.0.0.1')