//to read data from text file
var fs=require('fs');
fs.readFile('it-a.txt',function(err,data){
    console.log(data.toString());   //this is from it-a
})
//to write data by replacing existing data
fs.writeFile('it-a.txt',"Welcome to cvr",function(err,data){
    console.log ("data inserted");
})
//to append the data to a file
fs.appendFile('it-a.txt'," Welcome to IT department",function(err,data){
    console.log("data appended")
})