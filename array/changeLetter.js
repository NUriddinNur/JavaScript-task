function changeLetter(str) {
    let result = "";
    for (let i of str) {
        if (i === i.toUpperCase()) {
            result += i.toLowerCase()
        }else {
            result += i.toUpperCase()
        }
    }
    return result;
}

console.log(changeLetter("SalOm"));