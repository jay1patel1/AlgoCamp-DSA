function printSubArray (arr) {
    for (let i = 0; i < arr.length; i++) {
        let str = "";
        for (let j = i; j < arr.length; j++) {
            str += arr[j] + " "
            console.log(str);
        }
    }
}

printSubArray([1,2,3,4])