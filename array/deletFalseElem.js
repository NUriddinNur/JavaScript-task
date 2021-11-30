function deleteFalseElem(arr) {

    return arr.filter((value) => value)
}

console.log(deleteFalseElem([NaN, 0, 15, false, -22, '', undefined, 47, null]));
