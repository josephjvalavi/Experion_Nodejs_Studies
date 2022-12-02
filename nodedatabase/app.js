const http=require('http')
const read=require('readline-sync')
const mysql=require('mysql2')
const url=require('url')
const qs=require('querystring')
const db= require('./dbHandler')
const custumer = require('./modules/custumer')

const server=http.createServer((req,res)=>{
    var link=url.parse(req.url,true);
    var query=link.query;
    var path=link.pathname;

//var sql="select * from custumers"; 
if(path=='/api/users'){
custumer.getAll((err,response)=>{
res.end(JSON.stringify(response))
});
}

 else if(path=='/api/user' && req.method=="GET"){
let id=query.id
custumer.getUser(id,(err,response)=>{
    res.end(JSON.stringify(response))


});
 }

    else if(path == "/api/user" && req.method == "POST"){
        formData = '';
        req.on('data', (data)=>{
            formData += data.toString();
        });

        req.on('end', ()=>{
            var query = qs.parse(formData);
            custumer.createOne(query, (err, result)=>{
                if(!err){
                    res.end(JSON.stringify({status: "OK"}))
                    console.log(result)
                }
                else{
                    console.log(err)
                    res.end(JSON.stringify({status: "FAILED"}))
                }
            })
        })
    }

else if('/api/update'&& req.method=="PUT"){
    formData = '';
        req.on('data', (data)=>{
            formData += data.toString();
        });
        req.on('end', ()=>{
            var query = qs.parse(formData);
            console.log(query)
            custumer.createUpdate(query, (err, result)=>{
                
                if(!err){
                    res.end(JSON.stringify({status: "OK"}))
                    console.log(result)
                }
                else{
                    console.log(err)
                    res.end(JSON.stringify({status: "FAILED"}))
                }
            })
        })


}
else if('/api/delete'&& req.method=="DELETE"){
    formData = '';
        req.on('data', (data)=>{
            formData += data.toString();
        });
        req.on('end', ()=>{
            var query = qs.parse(formData);
            console.log("PPPPPPPPPPPPPPPPPPPPPPPPP",query)
            custumer.deleteUser(query.id, (err, result)=>{
                
                if(!err){
                    res.end(JSON.stringify({status: "OK"}))
                    console.log(result)
                }
                else{
                    console.log(err)
                    res.end(JSON.stringify({status: "FAILED"}))
                }
            })
        })
    }

});
// }
// });
/////////////////////////////////////////////////////////////////////////////////////
// if(path=='/api/user' && req.method=='POST'){
//     formData=''
//     req.on('data',(data))

// }
// })

// db.executeQuery("select * from custumers",null,(err,result)=>{
//     //empty array cn slso place for null here
//     console.log(err)
//     console.log(result)

 server.listen(80);
