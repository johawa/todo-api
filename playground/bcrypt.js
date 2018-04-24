const bcrypt = require('bcryptjs');


var password = '123abc';

bcrypt.genSalt(10, (err, salt ) =>{
    bcrypt.hash(password, salt, (err, hash) =>{
        console.log(hash);
    });
});

var hashedPassword = '$2a$10$sTFS.Qz8xF1crHauQEGdnuJy0ACpAUrHsrtxq5S.dKxnYlSlYgIaC';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);//returns true if they are the same
});