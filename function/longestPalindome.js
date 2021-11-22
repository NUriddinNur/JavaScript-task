function longestPalindrome(str) {
    let result = []

    for (let i = 0; i < str.length; i++) {
        for (let j = i+1; j < str.length; j ++) {
            if (str.slice(i, j) === str.slice(i, j).split("").reverse().join("")) {
                if (str.slice(i, j).length > 2) {
                    result.push(str.slice(i, j))
                }
            }
        }
        
    }
    result = result.reduce((acc, currentValue) => {
        if (currentValue.length > acc.length) {
            acc = currentValue;
        }
        return acc;
    })
    return result
}

let result = longestPalindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE");
console.log(result);