// ***** Easy *****
// 3. Өгөгдсөн эерэг тоо нь 3-ын үржвэр эсвэл 7-ын үржвэр эсэхийг шалгана уу

let n = prompt("positive toog garaas oruul:");

if (n > 0) {
    if (n % 3 == 0 || n % 7 == 0) {
        alert('garaas oruulsan too 3 eswel 7giin vrjwer mun baina!');
    } else {
        alert('garaas oruulsan too 3 eswel 7giin vrjwer bish baina!');
    }
} else {
    alert('positive too oruul!');
}