var http=require('http')
var server=http.createServer(function(req,res){
    if(req.url=='/'){
        res.write("WELCOME TOO HOME PAGE")
        res.end();
    }
    if(req.url=='/it'){
        res.write("WELCOME TO IT")
        res.end();
    }
})
server.listen(1207)
console.log("server started");