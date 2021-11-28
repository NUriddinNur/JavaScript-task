function sumMultiplayArr(arr) {
    let sum = arr.reduce((acc, currentValue) => {
        return acc + currentValue
    }) 
    let res = arr.reduce((acc, currentValue) => {
        return acc * currentValue
    })

    return [sum, res]
}

console.log(sumMultiplayArr([1,2,3,4,5]));