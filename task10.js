const http = require ('http'),
      fs = require ('fs'),
      port = process.argv[2],
      path = process.argv[3]
http.createServer ((request, response) => {
    const src = fs.createReadStream (path)
    src.pipe (response)
})
.listen (port)