// const http = require('http')
// //const qs  = require('querystring')
// const url= require('url')
// var server= http.createServer((req,res)=>{
//     let link=url.parse(req.url,true);
    
//     let path= link.pathname
//     console.log(path)
//     if(path=="/"){
//         res.end('welcome buddy');
//     }
//     else if(path=="/api/users"){
//         res.setHeader('content-Type','application/json');
//        var  data=JSON.stringify(getdata());
//         res.end(data)
//     }

// });
// server.listen(80)
// function getdata(){
//     id=1
//     return [
//         {id:id++,name:'joseph',email:'josephjbaa@gamasualcom'},
//      {id:id++,name:'jos',email:'josephbaa@gamasualcom'},
//      {id:id++,name:'jose',email:'josepjbaa@gamasualcom'}
//     ]
// }

// apiwith page detaisls*********
// const http=require('http');
// const fs=require('fs');
// const url=require('url');

// var server=http.createServer(function(req,res){
//     let address=url.parse(req.url,true);
//     //let query=address.query;
//     let path=address.pathname;

//     if(path=="/"){
    
//         res.end('welcome buddy');
//     }
//     else if(path=="/api/users"){
//         let users=getUsers();

//         let itemsPerPage=2
//         let totalPages=users.length/itemsPerPage;
//         let pageNumber=1;

//         let response={
//             itemsPerPage:itemsPerPage,
//             totalPages:totalPages,
//             pageNumber:pageNumber,
//             data:users
//         }
//         let json=JSON.stringify(response);
//         res.setHeader('content-Type','application.json');
//         res.end(json);

//     }
// });
// server.listen(80);
// function getUsers(){
//     let id=1;
//     return[
//         {id: id++,name:'zarina',email:'zarinamathew111@gmail.com'},
//         {id: id++,name:'Fida',email:'fida123@gmail.com'},
//         {id: id++,name:'Karthika',email:'karthika111@gmail.com'},
//     ]
// }

//**********pagination */
// const http=require('http');
// const fs=require('fs');
// const url=require('url');

// var server=http.createServer(function(req,res){
//     let address=url.parse(req.url,true);
//     //let query=address.query;
//     let path=address.pathname;

//     if(path=="/"){
    
//         res.end('Welcome');
//     }
//     else if(path=="/api/users"){
//         let users=getUsers();

//         let itemsPerPage=2
//         let totalPages=Math.ceil(users.length/itemsPerPage);
//         let pageNumber=parseInt(address.query.page);

//         let startIndex=((pageNumber-1)*itemsPerPage)+1;
//         let endIndex=pageNumber+itemsPerPage;

//         let response={
//             itemsPerPage:itemsPerPage,
//             totalPages:totalPages,
//             pageNumber:pageNumber,
//             data:users.slice(startIndex-1,endIndex)
//         }
//         let json=JSON.stringify(response);
//         res.setHeader('content-Type','application.json');
//         res.end(json);

//     }
// });
// server.listen(80);
// function getUsers(){
//     let id=1;
//     return[
//         {id: id++,name:'zarina',email:'zarinamathew111@gmail.com'},
//         {id: id++,name:'Fida',email:'fida123@gmail.com'},
//         {id: id++,name:'Karthika',email:'karthika111@gmail.com'},
//         {id: id++,name:'Finu',email:'karthika111@gmail.com'},
//         {id: id++,name:'Akshay',email:'karthika111@gmail.com'},
//     ]
// }

const http=require('http');
const fs=require('fs');
const url=require('url');

var server=http.createServer(function(req,res){
    let address=url.parse(req.url,true);
    //let query=address.query;
    let path=address.pathname;

    if(path=="/"){
    
        res.end('Welcome');
    }
    else if(path=="/api/users"){
        let users=getUsers();

        let itemsPerPage=2
        let totalPages=Math.ceil(users.length/itemsPerPage);
        let pageNumber=1
        let requestedPage = parseInt(address.query.page);
        if(!isNaN(requestedPage)){
            pageNumber=requestedPage
        }
        let startIndex=((pageNumber-1)*itemsPerPage );
        let endIndex=pageNumber+itemsPerPage;

        let response={
            itemsPerPage:itemsPerPage,
            totalPages:totalPages,
            pageNumber:pageNumber,
            data:users.slice(startIndex,endIndex)
        }
        let json=JSON.stringify(response);
        res.setHeader('content-Type','application/json');
        res.end(json);

    }
    else if(path=="/api/user" && req.method=='POST'){
        let formData=''
        req.on('data',function(data){
            formData+=data.toString();
        });
        req.on('end',function(){
            res.end(formData)
        })
    }
});
server.listen(80);
function getUsers(){
    let id=1;
    return[
        {id: id++,name:'zarina',email:'zarinamathew111@gmail.com'},
        {id: id++,name:'Fida',email:'fida123@gmail.com'},
        {id: id++,name:'Karthika',email:'karthika111@gmail.com'},
        {id: id++,name:'Finu',email:'karthika111@gmail.com'},
        {id: id++,name:'Akshay',email:'karthika111@gmail.com'},
    ]
}