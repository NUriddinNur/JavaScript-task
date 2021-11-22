function countAllLetter(word) {
    word = word.split("")

    for (let i of word){
        let result = 0
        if (i === undefined || i === " "){
            continue
        }
        for (let j = 0; j < word.length; j++) {
            if (i === word[j]){
                result++;
                delete word[j]
            }
        }
        console.log(`${i} ${result} ta`);
    }
}

countAllLetter("salom assalom");