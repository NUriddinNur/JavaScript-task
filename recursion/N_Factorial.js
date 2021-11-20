function nFactorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * nFactorial(n - 1);
}

let zet = nFactorial(5);
console.log(zet);
