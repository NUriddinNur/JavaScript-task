function sortByAlphabet(word) {
    return  word.split("").sort().join("");
}

let result = sortByAlphabet("webmaster")
console.log(result);