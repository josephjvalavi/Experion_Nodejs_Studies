const db = require('../dbHandler')
function getAll(callback){
    var sql ="select * from custumers ";
    db.executeQuery(sql,[],callback)
}
function getUser(id,callback){
    var sql ="select * from custumers WHERE id=?";
    
    db.executeQuery(sql,[id],callback)
}
function createOne(data, callback) {
    var sql = "INSERT INTO custumers (name, email, country, dob) VALUES (?, ?, ?, ?)";

    var values = [
        data.name,
        data.email,
        data.country,
        data.age
    ];
    db.executeQuery(sql, values, callback)
}
function createUpdate(param,callback){
    sql='UPDATE custumers  set name=? WHERE id=? '
    db.executeQuery(sql,[param.name,param.id],callback)
}
function deleteUser(id,callback){
    sql='DELETE from custumers WHERE id=?'
    db.executeQuery(sql,[id],callback)
}
module.exports.getAll = getAll
module.exports.getUser = getUser
module.exports.createOne =createOne
module.exports.createUpdate = createUpdate
module.exports.deleteUser = deleteUser