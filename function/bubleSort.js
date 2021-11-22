function bubleSort(arr) {
    let res = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                res = arr[i],
                arr[i] = arr[j],
                arr[j] = res
            }
        }
    }
    return arr
}

let res19 = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
let rec = bubleSort(res19)
console.log(rec);