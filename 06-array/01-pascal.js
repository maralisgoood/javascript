// ***** Паскалын гурвалжин *****

let num, row = 5, pascal = "";

for (var i = 0; i < row; i++) {
     for (var j = row - i; j > 0; j--) {
          pascal += " ";
     }
     num = 1;
     for (let number = 0; number <= i; number++) {
          if (number == 0 || number == i - 1) {
               pascal += `${num} `;
          } else {
               pascal += `${num} `;
          } num = num * (i - number) / (number + 1);
     } pascal += "\n";
} console.log(pascal);


/* Pascal's triangle
     1
    1 1 
   1 2 1
  1 3 3 1
 1 4 6 4 1
 */