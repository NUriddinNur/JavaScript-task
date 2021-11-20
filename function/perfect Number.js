function perfectNumber(num) {

    for (let i = 1; ; i++) {
        if (i % 2 === 1) {
            continue;
        }
        let res1 = 0
        for (let j = 1; j <= i/2; j++) {
            if (i % j === 0) {
                res1 += j;
            }
        }
        if (res1 === i){
            console.log(i);
        }
    }
}
perfectNumber()