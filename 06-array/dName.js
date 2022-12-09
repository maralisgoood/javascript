// 'd' vsgeer ehlesen nerseer array vvsgeh

let students = ['boldoo', 'dorjoo', 'tsetsegee', 'dulmaa', 'drake'];
let dName = [];
let i = 0, j = 0;

while (i < students.length) {
    if (students[i][0] === 'd') {
        dName[j] = students[i];
        j++;
    }
    i++;
} console.log(dName);
