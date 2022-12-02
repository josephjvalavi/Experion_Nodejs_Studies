const http=require('http')
const read=require('readline-sync')
const mysql=require('mysql2')
const url=require('url')
const qs=require('querystring')
    
// const dbDetails={
//     host:'localhost',
//     user:'root',
//     password:'Valavi@18',
//     database:'experion'
//                     }



//var querry="select * from custumers ORDER BY id DESC";
// connection.query(querry,(err,result)=>{
//     console.table(result)
//     let email=read.question('enter the email')
//     email=mysql.escape(email)
//     console.log(email)
//     var querry2=`select * from custumers WHERE email=${email}`;

//     let connection=mysql.createConnection(dbDetails)
//     connection.connect((err)=>{
//         console.log(err)
//     })
//     connection.query(querry2,(err,result)=>{
//         console.table(result)

// });
// connection.end();

///more secure and low coding method with out escaping**************8888

// let email=read.question('enter the email')
//     //email=mysql.escape(email)
//     console.log(email)
//     var querry=`select * from custumers WHERE email=? OR id>?`;

//     let connection=mysql.createConnection(dbDetails)
//     connection.connect((err)=>{
//         console.log(err)
//     })
//     connection.query(querry,[email,6],(err,result)=>{
//         console.table(result)

// });
// connection.end();


///api eith database***************

