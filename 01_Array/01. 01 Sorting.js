function sorting (arr) {
    let point_A = 0;
    let point_B = arr.length-1;

    while (point_A < point_B) {
        if (arr[point_A] === 1) {
            [arr[point_A],arr[point_B]] = [arr[point_B],arr[point_A]];
            point_B--;
        }
            point_A++;
    }
    return arr
}

console.log(sorting([1,1,1,0,0,0,1,0,1,0,1,0,1,1]));
console.log(sorting([1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0]));
