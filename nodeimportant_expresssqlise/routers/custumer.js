const express = require('express')

const router= express.Router();
const cc =require('../controllers/custumerController');

router.get('/custumer',cc.getAll)
router.get('/custumer/:id',cc.getOne);
// router.post('/custumer/add',cc.addOne);
router.post('/custumer/add', cc.validate('create'), cc.addOne);



module.exports = router;