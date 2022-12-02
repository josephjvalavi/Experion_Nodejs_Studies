const Handlebars = require('handlebars');
const http = require('http');
const url = require('url')
const fs = require('fs')
const path =  require('path')
const qs    = require('querystring')
const custumer = require('./data/custumer')
let template = Handlebars.compile("<p>{{msg}}</p>");
// var res = template({msg:"Hello from node"});
// console.log(res);
//var path="templates/index.hbs";
registerpartials('navbar','navbar.hbs');
registerpartials('sucsess','suc.hbs')
registerpartials('error','error.hbs')

const server = http.createServer((req,res)=>{
    const link = url.parse(req.url,true);
    const query = link.query;
    const page = link.pathname;

if(page == '/'){
    
  custumer.getAll((err,result)=>{
    var context = {data:result}
 var t = renderTemplate("index",context)
 console.log(result)
 res.end(t)
});
}
else if(page=="/custumers/create" && req.method=='GET'){
    let template=renderTemplate('create',{});
    res.end(template);
}
else if(page=="/custumers/create" && req.method=='POST'){
    let formData='';
    req.on('data',(res)=>{
        formData+=res.toString();
    });
req.on('end',function(){
    let userdata = qs.parse(formData);
    custumer.addOne(userdata.name,userdata.email,userdata.country,(err,result)=>{
        var context ={
            result:{
            success:true,
            error:[]
        }}
        if(err){

            console.log(err)
            context.result.success=false;
            

            
        }
        
        let t = renderTemplate('create',context);
            res.end(t);
    })

})
}

});
server.listen(80)

function renderTemplate(name,data){
    var filePath = path.join(__dirname,"templates",name+ ".hbs");
    console.log(filePath)
    let templateText=fs.readFileSync(filePath,"utf-8");
    let template = Handlebars.compile(templateText);
    return template(data)

}
function registerpartials(handleName,fileName){
    var filePath = path.join(__dirname,"templates","partials" ,fileName);
    console.log(filePath)
    let templateText=fs.readFileSync(filePath,"utf-8");
    Handlebars.registerPartial(handleName,templateText)
}
