function countLetter(word, let) {
    const res = word.split("");
    return res.reduce((acc, currentValue) => {
        currentValue === let ? acc++ : acc
        return acc
    },0)
}