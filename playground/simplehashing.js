const jwt = require('jsonwebtoken');

var data = {
    id: 10
};

// create Token
var token = jwt.sign(data, 'secretSalt');
console.log(token);

var decoded = jwt.verify(token, 'secretSalt'); 
console.log(decoded);//only console.logs when token is the same like decoded !!

