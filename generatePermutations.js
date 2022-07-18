function generatePermutations(permutation, elements, positions) {
    if(permutation.length === elements.length) {
        console.log(permutation);
    } else {
        for(let i = 0; i < elements.length; i++) {
            if(positions[i]) continue;

            // set pos --> true; push element to permutation array
            positions[i] = true;
            permutation.push(elements[i]);

            // recursive call to get different permutations for current perm, pos array
            generatePermutations(permutation, elements, positions);

            // remove element from permutation array; set pos --> false
            permutation.pop();
            positions[i] = false;
        }
    }
}

let elements = [1,2,3];
permutation = [];
let size = 3;
// fill an array with false 
positions = new Array(size).fill(false);

console.log("\npermutations\n");
generatePermutations(permutation,elements,positions);