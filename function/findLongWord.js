function findLongWord(word) {
    
    return word.split(" ").reduce((acc, value) => {
        return acc.length < value.length ? acc = value : acc
    })
    
}

console.log(findLongWord("Vaqtingizni devorga urib, undan eshik paydo qilishga sarflamang"));