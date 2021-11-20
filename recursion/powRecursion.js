function pow(n1, n2) {
    if (n2 === 1) {
        return n1
    }
    return n1 * pow(n1, n2-1)
}

console.log(pow(8, 3));