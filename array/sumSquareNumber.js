function sumSquareNumber(arr) {
    return arr.reduce((acc, currentValue) => {
        return acc += currentValue ** 2
    }, 0)
}

console.log(sumSquareNumber([1,2,3,4]));