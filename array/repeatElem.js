function repeatElem(arr) {
    let result = arr.filter((value) => {
        let acc = arr.reduce((acc, val) => {
            // console.log(val, value)
            if (val === value) {
                return acc += 1
            }
            return acc
        }, 0)
        return acc > 1
    })
    return Array.from(new Set(result))
}

let a = [1,2,1,2]

console.log(repeatElem(a));