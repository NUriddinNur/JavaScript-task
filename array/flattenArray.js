function flattenArray(arr) {
    
    let newArray = arr.reduce((acc, value) => {
        if (Array.isArray(value)) {
            acc = acc.concat(flattenArray(value))
        }else {
            acc.push(value)
        }
        return acc
    }, [])
    return newArray
}

console.log(flattenArray( [1, [2], [3, [[4]]],[5,6]]));







