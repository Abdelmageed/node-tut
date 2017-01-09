var fs = require('fs');
var path = process.argv[2];
var text = fs.readFileSync(path).toString();
console.log (text.split ('\n').length - 1);