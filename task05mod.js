var fs = require('fs')
var path = require('path');

module.exports = function (dirName, extName, callback) {
    fs.readdir (dirName, function (err, data){
        if (err) {
            return callback (err);
        }
        var filteredFiles = data.filter (function(filename){
            return path.extname(filename) === '.'+extName
        })
        return callback (null, filteredFiles);
    });
}