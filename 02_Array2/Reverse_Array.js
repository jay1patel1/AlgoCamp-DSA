const reverse = (arr) => {
    let a = 0;
    let b = arr.length-1;

    while (a < b) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
        a++; b--;
    }

    return arr;
}

console.log(reverse([1,5,3,56,34,78]));