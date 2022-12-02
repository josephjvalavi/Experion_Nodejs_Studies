// console.log(process)
// console.log(module)
// creating modules in node
// const fs = require('fs');
// fs.writeFileSync('myfile.txt','hello worlsd');
// function greet(){
//     console.log("hello from node")
// }
// greet();
// const sec= require('./second')
// sec.greet()
// sec.sayhi()
//const sec= require('./second')
// // console.table(sec)
 //sec.greet();
//sec.sayHi();
// console.log(sec.person.name)

// console.log("hello nodemon")

//es6 method
// import {greet} from './second.mjs';
// greet()


///calling mutiple function my way recomeended

// import sec from './second.mjs'

// sec.greet();
// sec.say()


/// write file/read file/append file

// const fs = require('fs');
//  //fs.writeFileSync('myfile2.txt','\n sneka is a onnunm theriyilaye');
//   //fs.appendFileSync('myfile2.txt','\n dgvnmn ')
//  var a= fs.readFileSync('myfile2.txt','utf-8')
// //  var a= fs.readFileSync('myfile2.txt','utf-8')
//  console.log(a)

//Asysnkc file read operation
//  fs.readFile('myfile.txt','utf-8',(err,data)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log(data)
//  })
//  const fs= require('fs')
// var obj={
//     name:'pep',
//     age:34,
   
// }
// var string=JSON.stringify(obj);
// console.log(string)
// fs.writeFileSync('data.json',string);


//asynchrounos manner
// fs.readFile("data.json",(err,data)=>{
//     console.log(data)
// })


/// to print insame line

// ------------------------------------------\\\\\
// process.stdout.write("one")
// process.stdout.write("one")

// var c= fs.readFileSync("data.json"); /// without encoding
// console.log(c.toString());


///////fetchibg data from api***********

// const http= require('https')
// http.get('https://reqres.in/api/users',(res)=>{

//     var content=''
//     res.on('data',(data)=>{
//         content+=data

//     });
//     res.on('end',()=>{
//         console.log(content)
//     });
// });

//-----------------------

///using axios l;ibrdary----------------------------------------
// const axios = require('axios');
// axios.get('https://reqres.in/api/users')
//   .then(function (response) {
//     // handle success
//     console.log(response.data.data);
    
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });
//---------------------------------------------------------------------



///services file

const service=require('./apiservice')
var page ='1'
service.getData(page);