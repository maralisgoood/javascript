// 1. "Comments can make code readable" - нэг мөртэй коммент болгох
// 2. "Javascript lesson begin" - нэг мөртэй коммент болгох
/* 3. "Comments can make code readable" олон мөртэй коммент болгох */

// 4. Variable.js нэртэй файл үүсгэх, number, string, boolean, undefined, null зэрэг утгуудыг өгөх

// 5. Datatypes.js нэртэй файл үүсгэх, typeof ашиглан өөр, өөр, төрлийн утгуудыг шалгах, number, string, boolean, undefined,  null гэх мэт

// 6. Утга оноогоогүй хувьсагч зарлах
let str;

// 7. Утга оноосон хувьсагч зарлах
let num = 5;

// 8. Олон мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах
let firstName = "Maral";
let lastName = "Jargalsaikhan";
let maritalStatus = "single";
let country = "Mongolia";
let age = 21;

// 9. Нэг мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах
let fName = "Maral",
  lName = "Jargalsaikhan",
  marital = "single",
  myCountry = "Mongolia",
  myAge = 21;

// 10. Гурвалжингийн периметрийг олох
let a = 4,
  b = 5,
  c = 6;
console.log("Perimeter of a triangle is:" + " " + (a + b + c));

// 11. Тойргийн талбайг олох
let radius = 5;
const PI = 3.14;
console.log("Area of a circle is: " + PI * radius * radius);

// 12. m = y2-y1/x2-x1 хариуг олох
let m;
let x = parseFloat(prompt("x = "));
let y = parseFloat(prompt("y = "));
alert("m = y2 - y1 / x2 - x1 = " + y2 - y1 / x2 - x1);

// 13. 15 Gegabyte нь хэдэн биттэй тэнцүү вэ ?
let bit;
let gigabyte = 8 * Math.pow(2, 30);
console.log("15 gigabyte = " + 15 * gigabyte + " bit");

// 14. 15 МB дата 3 секундэд манай интернэт онлайнаар татаж чаддаг бол түүнийг BIT Rate-ийг олно уу.
// Bitrate = file size / (number of minutes * .0075).
let t = 0.05; // 0.05min = 3sec
let s = 0.015; // 0.015gb = 15mb
console.log("BIT Rate: " + s / (t * 0.0075));

// 15. side1, side2, side3 гэсэн хувьсагчдад гурвалжны гурван талыг онооно. Ийнхүү гурван тал өгөдсөн байхад үед гурвалжны талбайг ол.
let side1 = parseFloat(prompt("enter side one: "));
let side2 = parseFloat(prompt("enter side two: "));
let side3 = parseFloat(prompt("enter side three: "));
alert("Area of Triangle is: " + (side1 + side2 + side3) / 2);

// 16. Өгсөн тоог цельсээс фаренгейт рүү хөрвүүл.
let celsius = parseFloat(prompt("enter ceslsius: "));
alert("Given temperature is: " + (celsius * (9 / 5) + 32) + " fahrenheit");

// 17. Өгсөн тоог фаренгейтээс цельс рүү хөрвүүл.
let fahrenheit = parseFloat(prompt("enter fahrenheit: "));
alert("Given temperature is: " + ((fahrenheit - 32) * (5 / 9) + " celsius"));

// 18. 2 хувьсагч зарлан 2 тоон утга өг. Тухайн 2 хувьсагчдаар Math-ийн 5н үйлдэлүүдийг (+-*/%) гүцэтгээд үр дүнг нь дараах байдлаар харуул:
// Өгөгдсөн 2 тооны нийлбэр нь 25
// Өгөгдсөн 2 тооны ялгавар нь 5
let myNum1 = 10;
let myNum2 = 4;
console.log("Addition of given 2 numbers is " + (myNum1 + myNum2));
console.log("Subtraction of given 2 numbers is " + (myNum1 - myNum2));
console.log("Multiplication of given 2 numbers is " + myNum1 * myNum2);
console.log("Division of given 2 numbers is " + myNum1 / myNum2);
console.log("Modulus of given 2 numbers is " + (myNum1 % myNum2));

// 19. cm -г inch рүү хөрвүүлэх. inch -г cm рүү хөрвүүлэх
let cm = parseFloat(prompt("enter cm: "));
console.log(cm * 2.54 + " inch");

let inch = parseFloat(prompt("enter inch: "));
console.log(inch / 2.54 + " cm");

// 20. Гараас дугуйн радиус буюу r орж ирэхэд тухайн дугуйн эзэлхүүнийг ол. Гараас дугуйн радиус буюу r, орж ирэхэд тухайн дугуйн хүрээний уртыг ол.
const Pi = 3.14;
let circleRad = parseFloat(prompt("тойргийн радиусыг гараас оруул: "));
alert("тойргийн талбай нь: " + Pi * Math.pow(circleRad, 2));
alert("тойргийн хүрээний урт нь: " + 2 * Pi * circleRad);

// 21. 1 хувьсагч зарал тоон утга өг, тухайн тооны хамгийн эхний цифрийг олох expression-ууд бич
let num1 = parseFloat(prompt("гараас утга оруул: "));
let num2 = (num1 - (num1 % 10)) / 10;
let num3 = (num2 - (num2 % 10)) / 10;
alert("гараас оруулсан тооны эхний цифр нь " + num3);

// 22. Доорх Baby Shark дууны үгийг хамгийн ихдээ 12 хувьсагч ашиглан орлуулан бичээд console дээр дарааллуулан хэвлэж харуулна уу.
let baby = "Baby Shark",
  mommy = "Mommy Shark",
  daddy = "Daddy Shark",
  grandma = "Grandma Shark",
  grandpa = "Grandpa Shark",
  hunt = "Let's go hunt",
  run = "Run away",
  last = "Safe at last",
  end = "It's the end",
  doodoo = ", doo-doo, doo-doo";

console.log("BABY SHARK (Lyrics) \n");

console.log(baby + doodoo);
console.log(baby + doodoo);
console.log(baby + doodoo);
console.log(baby + "\n");

console.log(mommy + doodoo);
console.log(mommy + doodoo);
console.log(mommy + doodoo);
console.log(mommy + "\n");

console.log(daddy + doodoo);
console.log(daddy + doodoo);
console.log(daddy + doodoo);
console.log(daddy + "\n");

console.log(grandma + doodoo);
console.log(grandma + doodoo);
console.log(grandma + doodoo);
console.log(grandma + "\n");

console.log(grandpa + doodoo);
console.log(grandpa + doodoo);
console.log(grandpa + doodoo);
console.log(grandpa + "\n");

console.log(hunt + doodoo);
console.log(hunt + doodoo);
console.log(hunt + doodoo);
console.log(hunt + "\n");

console.log(run + doodoo);
console.log(run + doodoo);
console.log(run + doodoo);
console.log(run + " (ah!) \n");

console.log(last + doodoo);
console.log(last + doodoo);
console.log(last + doodoo);
console.log(last + " (phew) \n");

console.log(end + doodoo);
console.log(end + doodoo);
console.log(end + doodoo);
console.log(end);