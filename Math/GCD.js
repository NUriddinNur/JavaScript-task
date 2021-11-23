
function gcd(arr) {
    let result = 0;
    arr.sort(function (a, b) {return a - b})

    for (let i = 0; i < arr[arr.length-1] / 2 + 1; i++) {
        let res = 0
        for (let j of arr) {
            if (j % i === 0) {
                res++;
            }
        }
        if (res === arr.length) {
            result = i
        }
    }
    return result;
}

console.log(gcd([5,10,25,15,]));