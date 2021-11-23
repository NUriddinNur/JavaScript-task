function gcd(n1, n2) {
    let num;
    let res = 0;
    if (n1 > n2) {
        num = n1;
    }else {
        num = n2
    }

    for (let i = 0; i < num / 2; i ++) {
        if (n1 % i === 0 && n2 % i === 0) {
            res = i
        }
    }
    console.log(res);
}

gcd(8, 12)