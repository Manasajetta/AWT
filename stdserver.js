const http=require('http')
const fs=require('fs')
const url=require('url')
let result;
function write(result){
    fs.writeFile("std.json",JSON.stringify(result),function(err){
        console.log(err);
    })
}