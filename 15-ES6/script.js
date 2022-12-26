// rest parameter ...args buyu vldsen bvh utgiig away gsen utgatai
function show(a, b, ...args) {
    console.log(a);
    console.log(b);
    console.log(args);
}
show('one', 'two', 'three', 'four', 'five', 'six');

// spread operator
let arr1 = ['one', 'two'];
let arr2 = [...arr1, 'three', 'four', 'five'];    // ... ni arr1-n haaltiig zadlah
console.log(arr2);

// .then => aldaa zaahgvi promise butsaah vyd
// .catch => aldaatai baih vyd

fetch("link")
    .then((fact) => fact.json())
    .then((fact) => console.log(fact))
    .catch((error) => console.log(error));
// 

setInterval(
    () =>
        fetch("link")
            .then((fact) => fact.json())
            .then((fact) => console.log(fact))
            .catch((error) => console.log(error))
)

let count = 0;
async function doingSomething(data) {
    count++;
    let too = data.bpi.USD.rate;

    too = too.replace(",", "");
    too = parseFloat(too);
    if (too < 16775.4143) {
        // console.log("purchase bitcoin");
        document.getElementById("root").innerHTML = "<h1>purchase bitcoin ${count}</h1>";
    } else {
        // console.log("wait a little bit");
        document.getElementById("root").innerHTML = "<h1>purchase bitcoin ${count}</h1>";
    }
}