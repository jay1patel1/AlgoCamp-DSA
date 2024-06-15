const singleNumber = function(nums) {
    const map = {};

    for (const i of nums) {
        if (!map[i]) {
            map[i] = 1;
        } else {
            map[i]++;
        }
    }

    for (const j in map) {
        if (map[j] === 1) {
            return j;
        }
    }
};

let singleNumber2 = function(nums) {
    let result = 0;

    for (const i of nums) {
        result = result ^ i;
    }

    return result;
};

console.log(singleNumber2([4,1,2,1,2]))