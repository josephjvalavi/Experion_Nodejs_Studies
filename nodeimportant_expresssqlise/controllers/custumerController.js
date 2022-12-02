const db= require('../models/custumer');
const {body, validationResult} = require('express-validator');


module.exports.getAll = (req,res,next)=>{
    // res.json({sucess:'ok all custumers are ready'})
    db.findAll()
    .then(result=>{
        res.json(result)
    });
    
};

module.exports.getOne=(req,res,next)=>{
    let id = req.params.id;
    db.findByPk(id)
    .then(result=>{
        res.status(result==null?404:200)
        res.json(result)
})
}
module.exports.addOne=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400)
        .json({ 
            errors: errors.array()
        });
    }
    db.create({
        Firstname:req.body.Firstname,
        Lastname:req.body.Lastname,
        emial:req.body.email,
        country:req.body.country

    }).then(result=>{
        res.json(result)
    })
}
module.exports.validate = function(action){
    switch(action){
        case 'create':
            return [
                body('firstName', "Invalid First Name").exists().isLength({min: 4, max: 15}),
                body('email', "Invalid Email.").exists().isEmail()
            ]
    }
}