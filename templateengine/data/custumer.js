const db=require('./db')
function getAll(callback){
let sql = "SELECT  * FROM custumers"
db.executeQuery(sql,[],callback)
}

function addOne(name,email,country,callback){
    let sql= 'INSERT INTO custumers (name,email,country) VALUES (?,?,?)';
    db.executeQuery(sql,[name,email,country],callback)
}

module.exports.getAll = getAll
module.exports.addOne = addOne