const {SHA256} = require('crypto-js');

var message = 'I am user number 3';
var hash = SHA256(message).toString();

console.log(message)
console.log(hash)

var data = {
    id: 4
};
var token = {
    data: data,
    hash: SHA256(JSON.stringify(data) + 'somesecret salt').toString()
}

var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret salt').toString();

if (resultHash === token.hash) {
    console.log('data was not changed');

} else {
    console.log('data was changed. Dont trust');
}