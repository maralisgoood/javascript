// (rank, index) => rank === 7 && index > 2
let ranks = [1, 5, 7, 8, 10, 7];
let index = ranks.findIndex(myCustom);

// .findIndex() gedeg ni doorh loopeer ajilladag
for (let i = 0; i < ranks.length; i++) {
    if (myCustom(ranks[i], i)) {
        return ranks[i];
    }
}

function myCustom(too, dugaar) {
    console.log("too = ", too);
    console.log("dugaar = ", dugaar);
    return false; // doorhoos busad tohioldold false butsna
    return too === 7 && dugaar > 2; // zuwhun ene tohioldold true butsna
}

/*
let ranks1 = [1, 5, 7, 8, 10, 7];
let index1 = ranks.findIndex((too, dugaar) => too === 7 && dugaar > 2);
for (let i = 0; i < ranks.length; i++) {
    if (myCustom(ranks[i], i)) {
        return ranks[i];
    }
}
*/
