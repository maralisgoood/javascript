// ***** Easy *****
/* 8. Нас тооцоолох бодлого: yearOfBirth гэсэн хувьсагчид гараас төрсөн онийг ав. Тухайн оноос тухайн хүний насыг нь бодож гаргаад үр дүнгээ old гэсэн хувьсагчид оноо. Насанд нь харгалзах утгыг хэвлэ.
0 <= old <= 1 үед "Infant"  
1 < old <= 3 үед "Toddler" 
3 < old <= 5 үед "Preschool"
5 < old <=12 үед "Gradeschooler"
12 <old <= 18 үед "Teen"
18 < old <=21 үед "Young adult"
21 < old үед "Adult" */

// let yearOfBirth = prompt("enter your birthyear:");
let yearOfBirth = 2001;
let currentYear = new Date().getFullYear();
let old = currentYear - yearOfBirth;

console.log(old, "years old");

if (0 <= old || old <= 100) {
    if (0 <= old || old <= 1) {
        console.log('"Infant"');
    } else if (1 < old || old <= 3) {
        console.log('"Toddler"');
    } else if (3 < old || old <= 5) {
        console.log('"Preschool"');
    } else if (5 < old || old <= 12) {
        console.log('"Gradeschooler"');
    } else if (12 < old || old <= 18) {
        console.log('"Teen"');
    } else if (18 < old || old <= 21) {
        console.log('"Young adult');
    } else if (21 < old) {
        console.log('"Adult"');
    }
} else {
    console.log("Таны нас 100-с өндөр ЭСВЭЛ оруулсан утга алдаатай байна")
}