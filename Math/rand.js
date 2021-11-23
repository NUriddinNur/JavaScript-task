
function rand(n1, n2) {
    let res = Math.floor(Math.random() * (n1 - n2) + n2)
    console.log(res);
}

rand(20, 15)