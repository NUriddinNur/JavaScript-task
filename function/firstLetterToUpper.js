function firstLetterToUpper(word) {
    let res = word.split("");
    res[0] = res[0].toUpperCase();
    return res.join("");
}

console.log(firstLetterToUpper("salom assalom"));