var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', (req, res)=>{
  res.send(req.body.token)
})

module.exports = router;
