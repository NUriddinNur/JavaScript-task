function countLotElem(arr) {
    let count = 0;
    let element = 0;

    for (let i of arr) {
        let foo = arr.filter(x => x === i).length
        if (foo > count) {
            element = i
            count = foo
        }
    }
    return {count, element}
}
console.log(countLotElem([1,2,3,1,1,2,2,2,3,3,3,3]));