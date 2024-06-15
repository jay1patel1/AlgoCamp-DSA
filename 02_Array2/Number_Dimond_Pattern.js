const dimondNumberPrint = (num) => {
    for (let i = 0; i < num; i++) {
        let str = "";
        for (let j = 0; j < i; j++) {
            str += " ";
        }
        for (let j = i + 1; j < num + 1; j++) {
            str += j + " ";
        }

        console.log(str);
    }

    for (let i = 1; i < num; i++) {
        let str = "";
        for (let j = 1; j < num-i; j++) {
            str += " ";
        }
        for (let j = num-i; j < num + 1; j++) {
            str += j + " "
        }

        console.log(str);
    }
}

dimondNumberPrint(6)
dimondNumberPrint(3)
dimondNumberPrint(2)
dimondNumberPrint(1)