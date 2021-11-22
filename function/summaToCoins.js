
function summaToCoins(sum, coins) {
    let res = [];
    while (coins.length != 0) {
        if (sum >= coins[0]) {
            sum -= coins[0];
            res.push(coins[0])
        }else {
            coins.shift()
        }
    }
    return res;
}
let coins = [25, 10, 5, 2, 1]

console.log(summaToCoins(46, coins));