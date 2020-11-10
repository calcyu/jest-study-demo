var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({code:200,data:[
    {id:1,name:'zs',age:18},
    {id:2,name:'wr',age:19},
  ]})
});

module.exports = router;
