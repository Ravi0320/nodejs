var express = require('express');

var router = express.Router();

var {insert,select,update,delete_data,search_data} = require('../controller/usercontroller');


router.post('/',insert);
router.get('/',select);
router.post('/update/:id',update);
router.get('/delete/:id',delete_data);
router.get('/search/:name',search_data);

module.exports = router;