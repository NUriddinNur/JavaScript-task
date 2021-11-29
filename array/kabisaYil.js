const kabisaYil = function (yil1, yil2) {

    for (let i = yil1; i <= yil2; i++) {
        if (i % 4 === 0 && 1 % 100 !== 0 || i % 400 === 0) {
            console.log(`${i} kabisa yili`);
        }
    }
}

kabisaYil(1000, 2021)