function addArrayElements(arr1, arr2) {
    let result = []
    if (arr1.length < arr2.length) {
        result = arr1;
        arr1 = arr2;
        arr2 = result
    }
    result = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr2[i] === undefined) {
            result.push(arr1[i])
        }else {
            result.push(arr1[i] + arr2[i])
        }
    }
    return result
}

let a = [1,2,3]
let b = [5,6,1,1]

console.log(addArrayElements(a, b));