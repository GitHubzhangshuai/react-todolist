const http = require('http')
const server = http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*')
    if(req.url === '/init' ){
        let data = ['hello', 'world']
        res.end(JSON.stringify(data))
    }
})
server.listen(1234)