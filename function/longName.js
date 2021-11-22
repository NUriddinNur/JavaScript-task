function longName(arr) {
    let result = arr.reduce((acc, currentValue) => {
        if (currentValue.length > acc.length) {
            acc = currentValue;
        }
        return acc
    })
    return result
}

let result = longName(["Avstraliya", "Germaniya", "Amerika Qo'shma Shtatlari"])
console.log(result);