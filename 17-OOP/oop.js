// OBJECT ORIENTED PROGRAMMING

// creat an object
class Student {
    constructor(incomingfName, age, grade) {
        this.name = incomingfName;
        this.age = age;
        this.grade = grade;
    }
    // initial value buyu anhnii utga
    age = 15; // baiwal utga ugugduugviol age = 15 baina gsen utgatai
}

let boldo = new Student("Boldo", "Dorjo");
let dulma = new Student("Dulma", "Bata", 15, "female");
console.log(boldo.name);
console.log(dulma);


let students = [
    { name: "Boldo", age: 15, grade: 100 },
    { name: "Dorjo", age: 18, gender: "male" }
];

let oopStudents = students


class Animal {
    type;
    age;
    gender;
    isWater;
}

class Dog extends Animal {
    constructor(breed, name, type, age) {
        super(type, age, gender);
        this.breed = breed;
        this.name = name;
    }

}
let jamiesDog = new Dog("dogBreed", "dogName", "dogType", 5);
console.log(jamiesDog);