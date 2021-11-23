function lcm(n1, n2) {
    let res = 0;
    let max;
    if(n1 > n2) {
        max = n1;
    }else {
        max = n2
    }

    for (let i = max; ; i++) {
        if (i % n1 === 0 && i % n2 === 0) {
            res = i;
            break;
        }
    }
    return res;
}

let lcmResult = lcm(10, 15)
console.log(lcmResult);