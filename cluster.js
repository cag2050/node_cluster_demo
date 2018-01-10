let os = require('os')
let cluster = require('cluster')
let http = require('http')

if (cluster.isMaster) {
    let len = os.cpus().length
    for (let i = 0; i < len; i++) {
        cluster.fork()
    }
} else {
    http.createServer((req, res) => {
        res.writeHead(200)
        res.end("hello node's cluster!")
    }).listen(11111)
}