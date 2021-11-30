function concatArray(arr1, arr2) {
    let result = arr1.concat(arr2)

    return Array.from(new Set(result)).sort((a, b) => a - b)
}

console.log(concatArray([1,2,3], [100,2,1,10]));