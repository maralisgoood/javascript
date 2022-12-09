// ***** Тэмцээн *****
/* 
1. Хоёр багийн дундаж оноог олно уу. ( A team - 96, 108, 89; B team - 88, 91, 110 )
2. Багийн дундаж нөгөө багийхаас их бол тэр баг түрүүлсэн гэж хэвлэнэ үү. Багуудын оноо тэнцсэн тохиолдолд багууд тэнцсэн гэж хэвлэнэ үү.
Энэ дүрэм нь зөвхөн багийн дундаж 100 аас багагүй тохиолдолд энэхүү дүрэм хэрэгжэхийг анхаарна уу. Хэрвээ 2 баг 2 уулаа 100 аас бага тохиолдолд ялагч байхгүй. Тус бүрийн нөхцөлийг оноог өөрчилж туршиж үзээрэй.
*/

const teamA = [196, 108, 89];
const teamB = [188, 91, 110];

const averageA = teamA.reduce((a, b) => a + b, 0) / teamA.length;
const averageB = teamB.reduce((a, b) => a + b, 0) / teamB.length;

console.log('teamA: ' + averageA);
console.log('teamB: ' + averageB);

if (averageA < 100 && averageB < 100) {
    console.log('no winner');
} else if (averageA == averageB) {
    console.log('both winner')
} else if (averageA > averageB) {
    console.log('winner is "Team A"');
} else {
    console.log('winner is "Team B"');
}