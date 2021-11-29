function addArrayElements(arr1, arr2) {
    let result = []
    if (arr1.length < arr2.length) {
        result = arr1;
        arr1 = arr2;
        arr2 = result
    }
    result = []

    let res = arr1.map((value, index) => {
        if (arr2[index] === undefined) {
            return value
        }else {
            return value + arr2[index]
        }
    })


    for (let i = 0; i < arr1.length; i++) {
        if (arr2[i] === undefined) {
            result.push(arr1[i])
        }else {
            result.push(arr1[i] + arr2[i])
        }
    }
    return res
}


//  solution 2

function addArrayElements2(arr1, arr2) {
    if (arr1.length < arr2.length) {
        result = arr1;
        arr1 = arr2;
        arr2 = result
    }
    let res = arr1.map((value, index) => {
        if (arr2[index] === undefined) {
            return value
        }else {
            return value + arr2[index]
        }
    })
    return res
}


let a = [1,2,3]
let b = [5,6,1,1]
console.log(addArrayElements2(a, b));