// longest name in our class

let string = [
    'Шаравнямбуу', 'Батням', 'Энхтуул', 'Жамьянпүрэв', 'Мөнхбат', 'Ууган-Эрдэнэ', 'Юмжир', 'Намнанцэрэн', 'Өсөхбаяр', 'Мөнхсүлд', 'Баянмөнх', 'Мөрөн', 'Номин', 'Нарандэлгэрэх', 'Батсүх', 'Балжинням', 'Отгонбаяр', 'Ялалт', 'Мөнхтулга', 'Марал'
];

let j = 0;
let longestName = string[0];
let max = longestName.length

for (let i = 1; i < string.length; i++) {
    if (string[i].length > j) {
        j = string[i].length;
        longestName = string[i];
    }
}
console.log("longest name is: " + longestName);