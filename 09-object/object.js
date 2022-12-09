// :SPREAD operator

let person1 = [10, 20, 30];
let person2 = [...person1];
let person3 = { ...person1 };
// ... ni { } haaltiig awch baigaa
person2[0] = 100;

console.log(person1);
console.log(person2);
console.log(person3);

// console.log(Object.keys(person1));


/*
person = { ...person1 }
person2.name = "Od";
console.log(person1);
console.log(person2);
*/

/* 
let person1 = {
    name: 'Name',
};
let person2 = person1;

person2.name = 'Hulan';
console.log(person1.name);
console.log(person2.name);
*/

/*

let person1 = {
    firstName: 'Maral',
    lastName: 'Jargalsaikhan',
    age: 22,
    score: [77, 90, 85, 100],
    isMarried: false,
    shout: () => {
        // console.log("woooaah");
        return ("woooaah");
    },
    fullName: () => {
        return this.firstName + " " + this.lastName;
        // this gedeg ni tuhain object gesen utgatai
    },
    address: {
        country: 'Mongolia',
        city: 'Ulaanbaatar',
    },
};

let person2 = {
    firstName: 'Maral',
    lastName: 'Jargalsaikhan',
    age: 22,
    score: [77, 90, 85, 100],
    isMarried: false,
    shout: () => {
        console.log("yooohooo");
    },
};

console.log(person1.age);
console.log(person1["age"]);
console.log(person1.shout())

let func = () => {
    console.log("person");
};

function getPerson() {
    console.log("person");
}

*/



/*

{key:value}
let object

{key:value} key baiwal value baina
person dotor property uguhduu {key:value} gej zarlana
firstName ni person-nii property
ajilladag finction uchir shout ni method bolno 
object dotor function orohooroo method bolno
object dotor object orohoor nested object bolno

*/