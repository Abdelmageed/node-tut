const http = require('http'),
      map = require('through2-map'),
      port = process.argv[2]
http.createServer ((request, response) => {
    request.pipe (map ((chunk) => {
        return chunk.toString ().toUpperCase ()   
    }))
    .pipe (response)
})
.listen (port)