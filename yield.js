function *display(){
    console.log("Hi");
    yield 20;
    console.log("Hello")
}
console.log("cvr")
var a=display()
console.log(a.next())
console.log("IT")
console.log(a.next())