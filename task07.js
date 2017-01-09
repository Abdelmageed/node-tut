var bl = require('bl'),
    http = require('http'),
    url = process.argv[2]

//http.get (url, (response) => {
//    response.pipe (bl((err, data) => {
//        if (err)
//            console.error (err.toString())
//        console.log (data.toString())
//    }))
//})

http.get (url, (response) => {
    response.setEncoding ('utf8')
    var str = ''
    response.on('error', (error) => {
        console.log (error)
    })
    response.on('data', data => {
        str += data
    })
    response.on('end', () => {
        console.log (str.length)
        console.log (str)
    })
})
.on('error', (e) => {
    console.log (e)
})