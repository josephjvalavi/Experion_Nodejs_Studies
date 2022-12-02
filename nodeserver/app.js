const http = require('http');
const fs= require('fs');
const url= require('url')

//const { kMaxLength } = require('buffer');
//const { DEFAULT_MAX_VERSION } = require('tls');
var server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
//     for(let i=0;i<10;i++){
//     res.write(`<h1>joseph${i}<h1/>`)
//     }
//     res.end()
// });
//routing
// if(req.url=="/"){
//     res.write(`<html>
//     <head>
//         <title>${req.url}</title>
//     </head>
//     <body>
//     <h1> welcome Joseph</h1>
//     </body>
//     <html>`)
//     res.end();
// }
// if(req.url=="/about"){
//     res.end("<h1>About us<h1/>");
// }
// if(req.url=="/contact"){
//     res.end("<h1>ContactUs<h1/>");
// }
// });
// server.on('listening',()=>{
//     console.log("listning")
// })
// server.on('request',(req,res)=>{
//     console.log(`${req.method} is of ${req.url}`)
//  })
// if(req.url=="/"){
//         res.write(`<html>
//         <head>
//             <title>${req.url}</title>
//         </head>
//         <body>
//         <h1> welcome Joseph</h1>
//         </body>
//         <html>`)
//         res.end();
//     }

// if(req.url=="/about"){
//     var  content=fs.readFileSync("templates/home.html",'utf-8');
//         res.end(content)
       
//     }
//     // if(req.url=="/contact"){
//     //     res.end("templates/home.html",'utf-8');
//     // }
// })

 //let  url= req.url.split('?')[0]
// console.log(url)
// if(url==="/about"){
//     var content = fs.readFileSync("templates/home.html",'utf-8');
//     res.end(content)

// }})
let adress=url.parse(req.url,true);
let query = adress.query
let path= adress.pathname

if(path==='/login'){
    var content = fs.readFileSync('templates/home.html','utf-8');
    res.end(content);
}else if(path==='/result'){
    res.end(query.email)
}
})

server.listen(3000);

