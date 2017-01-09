var fs = require ('fs');
fs.readFile (process.argv[2], 'utf8', function callbakc (err, data){
    if (err) {
        console.log (err)
        return
    }
    console.log (data.split ('\n').length - 1);    
})