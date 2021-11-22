function uniqueLetter(str) {
    let res12 = str.split("");
    res12 = new Set(res12)
    res12 = Array.from(res12).join("")
    return res12
}

let word12 = "thequickbrownfoxjumpsoverthelazydog"
console.log(uniqueLetter(word12));