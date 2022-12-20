let inCome = 5_000_000;

let doPromise = new Promise((resolve, reject) => {
    //          ^^^ object oriented bolgoj baigaa
    setTimeout(() => {
        if (inCome > 1_000_000) {
            resolve("success");
        } else {
            reject("not enough funds to release new album");
        }
    }, 2000);
});

console.log(doPromise);

doPromise
    .then((res) => {            // resolve - promise biylsen vyd
        console.log(res);
    })
    .catch((error) => {         // reject - promise biyleegvi vyd
        console.log(error);
    })
    // promise biylsen biyleegvi ymar ch tohioldold ajillana
    .finally((finished) => {
        console.log(finished);
    });


// PROMISE
// pending
// fullfilled
// rejected