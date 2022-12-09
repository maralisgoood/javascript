var input = "tHis iS TeSt STRing";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";

// console.log(upper.includes(""));

function converter(str) {
    let result = "";
    for (i = 0; i < str.length; i++) {
        if (upper.includes(str[i])) {
            result += str[i].toLowerCase();
        } else if (lower.includes(str[i])) {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
} console.log(converter(input))


/*
function isalpha(input) {
    let input_char = input.charCodeAt(0);
    if ((input_char >= 65 && input_char <= 90) || (input_char >= 97 && input_char <= 122)) {
        return true;
    } else {
        return false;
    }
}
function toggleChars(S) {
    let s = "";
    for (let it = 0; it < S.length; it++) {
        if (isalpha(S.charAt(it))) {
            s += String.fromCharCode(S.charCodeAt(it) ^ (1 << 5))
        } else {
            s += S.charAt(it);
        }
    } return s;
}
let S = "This Is STRING!";
console.log(toggleChars(S));
*/