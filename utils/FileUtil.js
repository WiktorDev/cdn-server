const fs = require("fs");
const logger = require("sweet-logger");
const path = require("path");
const jsonFile = require('../tokens.json')

exports.makeid=(length)=>{
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

exports.findUserByUser=(user)=>{
    for (let jsonFileKey in jsonFile) {
        if(jsonFile[jsonFileKey].user == user){
            return jsonFile[jsonFileKey]
        }
    }
}

exports.findUserByToken=(token)=>{
    for (let jsonFileKey in jsonFile) {
        if(jsonFile[jsonFileKey].token == token){
            return jsonFile[jsonFileKey]
        }
    }
}

exports.addUser=(token, user)=>{
    let mynotes = { token: token, user: user };
    fs.readFile('tokens.json','utf8', function(err,data){
        let obj = JSON.parse(data);
        obj.push(mynotes);
        let strNotes = JSON.stringify(obj);
        fs.writeFile('tokens.json',strNotes, function(err){
            if(err) return console.log(err);
            logger.info("Data saved!")
        });
    })
}

exports.mkdir=(name)=>{
    let location = path.join('./public/files', name);
    fs.mkdir(location, 0o777, (err) => {
        if(err) console.log(err)
        logger.info("Directory created!")
    });
}