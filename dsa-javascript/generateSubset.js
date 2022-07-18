function generateSubset(r) {
    if(r > n) {
        console.log(subset);
    } else {
        subset.push(r);
        generateSubset(r+1);

        subset.pop(r);
        generateSubset(r+1);
    }
}

let r = 1;
let n = 2;
let subset = [];

generateSubset(1);