const prompt = require('prompt');
const logger = require("sweet-logger")
const { findUserByUser, addUser, mkdir, makeid } = require('./utils/FileUtil')
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