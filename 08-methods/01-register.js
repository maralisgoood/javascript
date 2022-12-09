const alphabet = ["А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "Ф", "Х", "У", "Ц"];

/*
let alphabet = [
    ['А', 'Архангай']
    ['Б', 'Баян-Өлгий']
    ['В', 'Баянхонгор']
    ['Г', 'Булган']
    ['Д', 'Говь-Алтай']
    ['Е', 'Дорноговь']
    ['Ж', 'Дорнод']
    ['З', 'Дундговь']
    ['И', 'Завхан']
    ['Й', 'Өвөрхангай']
    ['К', 'Өмнөговь']
    ['Л', 'Сүхбаатар']
    ['М', 'Сэлэнгэ']
    ['Н', 'Төв']
    ['О', 'Увс']
    ['П', 'Ховд']
    ['Р', 'Хөвсгөл']
    ['С', 'Хэнтий']
    ['Т', 'Дархан-Уул']
    ['Ф', 'Орхон']
    ['Х', 'Говьсүмбэр']
    ['У,Ц', 'Улаанбаатар']];
*/

const myRegister = "ИЭ01261307";

function isCorrectReg(reg) {
    console.log('РД:', myRegister);

    if (reg.length == 10 &&
        (alphabet.includes(reg[0])) &&
        (alphabet.includes(reg[1])) &&
        Number.isInteger(Number(reg.slice(2, 10)))) {

        //getRegisterInfo(myRegister);

    } else {
        console.log('РД буруу байна!');
    }
} isCorrectReg(myRegister);

function getRegisterInfo(reg) {
    const gender = getGender(reg[9]);
    const getBirthDay = getBirthDay();
    const getBirthRegion = getBirthRegion();

    console.log(`gender: ${gender}`);
}

function getGender(register) {
    if (myRegister[9] % 2 == 0) {
        return "female";
    } else {
        return "male";
    }
}

function getBirthDay(reg) {
    if (reg[5] == 2 || reg[5] == 3) {
        console.log("2000 оноос хойш төрсөн");
    } else {
        console.log("2000 оноос өмнө төрсөн");
    }
} getBirthDay(myRegister);

function getBirthRegion(reg) {
    return '';
}

