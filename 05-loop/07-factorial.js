// ***** FACTORIAL *****
// let n = parseFloat(prompt("гараас утга оруул."))

let n = 4;
function factorial(n) {
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    } else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}
answer = factorial(n)
console.log(n + "'s factorial is " + answer);