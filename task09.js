const net = require('net'),
      server = net.createServer ((socket)=>{
          let d = new Date()
          let timeString = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`
          socket.end (timeString+'\n')
      })
      .listen (process.argv[2])

function pad (num) {
    return ('00' + num).slice(-2)
}