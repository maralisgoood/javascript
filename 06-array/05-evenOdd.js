// ***** Тэгш сондгой тоог хэвлэх *****

let array = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
let even = 0, odd = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        even++;
    } else {
        odd++;
    }
}
console.log(`сондгой тоо хэд байгаа вэ? \t${even}\nтэгш тоо хэд байгаа вэ? \t${odd}`);