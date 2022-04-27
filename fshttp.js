var fs=require('fs')
var http=require('http')
var server=http.createServer(function(req,res){
    fs.readFile('it-a.txt',function(err,data){
        res.write(data.toString())
        res.end();
    })
})
server.listen(1216)
console.log("server started");