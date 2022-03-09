class Student{
    constructor(name)
    {
        this.name=name;
    }
    static display(a){
        console.log("student name :"+a.name);
    }
}
let s=new Student("Manasaa");
Student.display(s);



