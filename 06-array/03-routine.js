// ***** Routine *****

let activities = [['work', 10], ['eat', 1], ['talk', 2], ['play', 3], ['sleep', 8]];

activities.forEach(activity => {
    let percentage = ((activity[1] / 24) * 100).toFixed();
    activity[2] = percentage + '%';
});

console.table(activities);