function combinationString(str) {
    let res = str.split("")
    let resF1 = "";
    for (let i = 0; i < res.length; i++) {
        resF1 += res[i];
        console.log(resF1);
    }

    resF1 = ""
    for (let i = 1; i <= res.length; i++) {
        if (i === res.length) {
            console.log(res[i-1]);
        }else {
            resF1 += res[i];
        console.log(resF1);
        }
    }
}
let f1 = combinationString("dog");