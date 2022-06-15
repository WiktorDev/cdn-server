const prompt = require('prompt');
const fs = require('fs');
const logger = require("sweet-logger")
const path = require("path");

prompt.start();

prompt.get(['user', 'token_length'], function (err, result) {
    if (err) {
        return onErr(err);
    }
    let token = makeid(result.token_length)
    if(findUserByUser(result.user) == null){
        console.log('Success! Account created');
        console.log('  Username: ' + result.user);
        console.log('  Token: ' + token);
        addUser(token, result.user)
        mkdir(result.user)
    }else{
        logger.error("This user already exists!")
    }
});

function onErr(err) {
    console.log(err);
    return 1;
}
function makeid(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function findUserByUser(user){
    let jsonFile = require('./tokens.json')
    for (let jsonFileKey in jsonFile) {
        if(jsonFile[jsonFileKey].user == user){
            return jsonFile[jsonFileKey]
        }
    }
}

function addUser(token, user){
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

function mkdir(name){
    let location = path.join(__dirname,'public/files', name);
    fs.mkdir(location, 0o777, (err) => {
        if(err) console.log(err)
        logger.info("Directory created!")
    });
}