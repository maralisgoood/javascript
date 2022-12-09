// ***** Tip *****
// Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг, бусад үед 20% - ийг нэмж төлдөг бол. Эдгээр тохиолдолуудад нийт хэдийг төлөхийг олно уу. Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ? 3000₮, 27500₮, 100000₮. (if else ашиглахгүй ternary operator ашиглаарай).

let total;
let n = 10000;
let tip1 = n < 5000 ? precent = n * .1
    : 5000 < n < 30000 ? precent = n * .15
        : n > 30000 ? precent = n * .2
            : "tip undefined";
console.log("price: ", n, "\t", "tip: ", precent, "\t", "total:", (n + tip1));

n = 3000;
let tip2 = n < 5000 ? precent = n * .1
    : 5000 < n < 30000 ? precent = n * .15
        : n > 30000 ? precent = n * .2
            : "tip undefined";
console.log("price: ", n, "\t", "tip: ", precent, "\t\t", "total:", (n + tip2));

n = 27500;
let tip3 = n < 5000 ? precent = n * .1
    : 5000 < n < 30000 ? precent = n * .15
        : n > 30000 ? precent = n * .2
            : "tip undefined";
console.log("price: ", n, "\t", "tip: ", precent, "\t", "total:", (n + tip3));

n = 100000;
let tip4 = n < 5000 ? precent = n * .1
    : 5000 < n < 30000 ? precent = n * .15
        : n > 30000 ? precent = n * .2
            : "tip undefined";
console.log("price: ", n, "\t", "tip: ", precent, "\t", "total:", (n + tip4));