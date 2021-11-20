function randomWord(limit) {
    let word = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("")
    let res15 = "";

    for (let i = 0; i < limit; i++) {
        res15 = res15 + word[Math.floor(Math.random() * word.length)]
    }
    console.log(res15);
    console.log(res15.length);
}

randomWord(10)