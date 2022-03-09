class Student{
    name="manasa"
    display(){
        console.log("student name :"+this.name);
    }
}

class Student1 extends Student{
    display1(){
        super.display();
        console.log("child class");
    }
}


let s1=new Student1();
s1.display1();