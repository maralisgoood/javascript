let arr = [
    { name: "Eddy", age: 31 },
    { name: "Zaya", age: 20 },
];

// let newArr = new Array(...arr);
let newArr = [...arr];
newArr[1].name = "Zaya1";

console.log(arr[1].name);
console.log(newArr);