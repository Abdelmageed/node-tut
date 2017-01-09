var fs = require('fs');
var mod = require('./task05mod');

mod (process.argv[2], process.argv[3], filterExtension)
function filterExtension (err, data){
    if (err) {
        console.log (err);
        return;
    }
    data.forEach (function (filename) {
//        if (path.extname(filename) === '.'+process.argv[3]) {
            console.log (filename)
//        }
    })
}