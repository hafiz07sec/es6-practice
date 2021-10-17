class Student{
    constructor(sId, sName){
        this.id = sId; 
        this.name = sName;
        this.school = "School Name"; 
    }
}

const student1 = new Student(12, "Showmik");
const student2 = new Student(17, "Kajol");

console.log(student1.name, student2); 