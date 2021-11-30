function differenceArray(arr1, arr2) {

    let newArr1 = arr1.flat(Infinity)
    let newArr2 = arr2.flat(Infinity)

    let res1 = newArr1.filter((value) => !newArr2.includes(value))
    let res2 = newArr2.filter((value) => !newArr1.includes(value))

    console.log(res1.concat(res2));
}

differenceArray([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]);
