function arrayClone(arr) {
    let clonArr = Array(...arr)
    return clonArr
}

let a = [1,2,3]
let b = arrayClone(a)
a[0] = 5

console.log(a, b);