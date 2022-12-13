function addTwoNumber(a, b) {
    return a + b;
}
function findSum(k, j) {
    return 2 * addTwoNumber(k, j);
}
let result = findSum(10, 20);
console.log(result);

// 

function findSum(l, m) {
    if (l > m) {
        return 0;
    }
    return findSum(l + 1, m);
    return l + findSum(l + 1, m);
}
let result2 = findSum(10, 20);
console.log(result2);