function lcm(arr) {
    let result = 0;
    arr.sort(function (a, b) {return a - b})

    for (let i = arr[arr.length-1]; ; i++) {
        let res = 0
        for (let j of arr) {
            if (i % j === 0) {
                res++
            }
        }
        if (res === arr.length) {
            result = i
            break;
        }
    }
    return result
}

console.log(lcm([100,90,80,7]));