function nestFoor(arr) {

    for (let i = 0; i < arr.length; i++) {
        console.log(`${i} qator`);
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}

nestFoor([[1,2,3], [3,4,2], [5,3]])