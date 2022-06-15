const express = require('express');
const router = express.Router();
const { findUserByToken } = require('../utils/FileUtil')
const config = require('../config.json')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', (req, res)=>{
  if (!req.files) {
    return res.status(500).send({ msg: "file is not found" })
  }
  let user = findUserByToken(req.body.token);
  if(!user){
    return res.status(401).send('Invalid token!')
  }

  let file = req.files.file;
  file.mv(`./public/files/${user.user}/${file.name}`, function (err) {
    if (err) {
      console.log(err)
      return res.status(500).send({ msg: "Error occured" });
    }
    return res.status(201).send(`${config.APP_URL}/files/${user.user}/${file.name}`)
  });
})

module.exports = router;
