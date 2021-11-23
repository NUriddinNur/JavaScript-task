function log_2 (n) {
    let res = Math.log2(n);
    return res === +res && res === (res|0)
}

console.log(log_2(256));