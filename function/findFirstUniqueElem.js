function findFirstUnicElem(word) {
    let res = 0;

    for (let i of word) {
        let count = 0;
        for (let j = 0; j < word.length; j++) {
            if (i === word[j]) {
                count++;
            }
        }
        if (count == 1) {
            res = i
            break;
        }
    }
    return res
}

let foo = "abacddbec"
let bar = findFirstUnicElem(foo)
console.log(bar);