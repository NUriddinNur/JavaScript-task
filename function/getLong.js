function getLong(str) {
    let arrStr = str.split("");
    let result = [];

    for (let i = 0; i < arrStr.length; i++) {
        let str = [];
        for (let j = i; j < arrStr.length; j++) {
            if (!str.includes(arrStr[j])) {
                str.push(arrStr[j])
            }else {
                break;
            }
        }
        result.push(str.join(""))
    }

    let rest = result.reduce((acc, currentvalue) => {
        if (currentvalue.length > acc.length) {
            acc = currentvalue
        }
        return acc
    })
    return rest;
}

let result = "google.com";
console.log("-->", getLong(result));