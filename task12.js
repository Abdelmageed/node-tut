const http = require ('http'),
      url = require ('url'),
      parseTime = (iso) => {
          let d = new Date (iso)
        return {
            "hour": d.getHours(),
            "minute": d.getMinutes(),
            "second": d.getSeconds()
        }
      },
      unixTime = (iso) => {
        return {
            "unixtime": new Date (iso).getTime()
        }
      }
      routes = {
            unixtime: unixTime,
            parsetime: parseTime
      },
      route = (endpoint, data) => {
//          console.log (endpoint)
          return routes[endpoint](data)
      }
http.createServer ((req, res) => {
//    console.log (req)
    let par = url.parse(req.url, true),
        endpoint = par.pathname,
        data = par.query.iso
//    console.log (endpoint)
    let time = route (endpoint.split('/')[2], data)
    res.writeHead (200, {'Content-Type': 'application/json'})
    res.write (JSON.stringify(time))
})
.listen (process.argv[2])