class Student{
    name="manasa"
    constructor(){
        console.log("This is the default constructor");
    }
    display(){
        console.log("student name :"+this.name);

    }
}

class Student1 extends Student{
    display1(){
        console.log("child class");
    }
}

let s1=new Student1();
s1.display();

