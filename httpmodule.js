var http=require('http')
var server=http.createServer(function(req,res){
    res.write("Welcome to Home page")
    res.end();
})
server.listen(1207)
console.log("server started");