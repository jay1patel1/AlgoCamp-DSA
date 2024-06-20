var majorityElement = function(nums) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        if(map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }

    let halfVal = Math.floor (nums.length/2)

    for (let i in map) {
        if(map[i] > halfVal) {
            return i;
        }
    }

    return -1;
};

console.log(majorityElement([2,2,1,1,1,2,2]))