const http = require('http'),
      urls = [process.argv[2], process.argv[3], process.argv[4]],
      strs = new Array(3)
var completedRequests = 0
for (let i = 0; i < 3; i++) {
    http.get (urls[i], (response) => {
        response.setEncoding ('utf8')
        let str = ''
        response.on ('data', (data) => {
            str += data
        })
        response.on ('end', () => {
            strs[i] = str
            completedRequests++
            if (completedRequests == 3){
                for (let l = 0; l < 3; l++) {
                    console.log(strs [l])
                }
            }
        })
        response.on ('error', (error) => {
            console.log (error)
        })
    })
    .on('error', console.error)
}

