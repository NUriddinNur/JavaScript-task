function getNum(arr, n) {
    let res = [];
    arr.forEach((value) => {
        if (value > n) {
            res.push(value)
        }
    })
    return res
}

console.log(getNum([1,4,5,7,9], 4));