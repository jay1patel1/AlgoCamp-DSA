function sorting (arr) {
    let point_A = 0;
    let point_B = 0;

    while (point_B < arr.length) {
        if (arr[point_B] === 0) {
            [arr[point_A],arr[point_B]] = [arr[point_B],arr[point_A]];
            point_A++;
        }

        point_B++;
    }
    return arr
}

console.log(sorting([1,1,1,0,0,0,1,0,1,0,1,0,1,1]));
console.log(sorting([1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0]));
