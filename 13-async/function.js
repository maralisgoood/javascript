function prepare_breakfast() {
    let coffee_promise = new Promise((resolve, reject) => resolve("coffee done"));
    let egg_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("eggs done");
        }, 1000);
    });
    let bacon_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("bacon done");
        }, 2000);
    });
    let toast_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("toast pops");
        }, 1000);
    });
    let combined_promise = Promise.all([coffee_promise, egg_promise, bacon_promise, toast_promise]);
    return combined_promise;
}

async function morning() {
    let result = await prepare_breakfast();
    console.log(result);
}

morning();