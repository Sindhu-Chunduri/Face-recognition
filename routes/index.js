var express = require('express');
var monk=require('monk');
var db=monk('localhost:27017/first');
var collect=db.get("collection");

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.post('/insert', function(req,res){
	var id = req.body.dat;
	var a = id.slice(0,10)
	//console.log(typeof(a))
	collect.findOne({"rollno":a},function(err,docs){
		console.log(docs);
		res.send(docs);
	})
})
module.exports = router;
