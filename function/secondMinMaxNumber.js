function getNumber7(numbers) {
    let res = new Set(numbers.sort((a, b) => {return a - b}));
    res = [...res]

    console.log(res[1], res[res.length - 2]);
}
const arr7 = [11,12,45,-1,-2,1,1,1,2,5,4,6,3,7,3];
getNumber7(arr7);