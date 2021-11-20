function sumArray(arr, n = 0) {
    if (n === arr.length) {
        return 0
    }else {
        return arr[n] + sumArray(arr, n + 1)
    }
}

console.log(sumArray([1,2,3,4]));