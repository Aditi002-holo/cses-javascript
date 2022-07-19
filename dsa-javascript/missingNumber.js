function missingNumber(n, l) {
    // sort the given array
    let arr = l.sort(function(a,b) { return a-b; });


    for(let i = 1; i <= n; i++) {
        // array elements match index+1 (index starts from zero) --> continue
        if(arr[i-1] === i) continue;
        else {
            // return current number
            return i;
        }
    }
}

function missingNumberMath(n, l) {
    // find the total sum from 1 to n
    let sum = (n*(n+1))/2;

    // find the sum of the given array
    let sumOfList = l.reduce((acc,e) => {
        return acc+e;
    },0);

    // display the difference: missing number
    return sum - sumOfList;
}


let n = 5;
let list = [2,3,1,5];

console.log(missingNumber(n, list));
console.log(missingNumberMath(n,list));