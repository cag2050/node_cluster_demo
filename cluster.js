let os = require('os')
let cluster = require('cluster')
let http = require('http')

let data = {key: 'value', hello: 'world'};

if (cluster.isMaster) {
    let len = os.cpus().length
    for (let i = 0; i < len; i++) {
        cluster.fork()
    }
} else {
    http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(data))
    }).listen(11111)
}