const twoSum = function(nums, target) {
    for (let i = 0; i < nums; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
};

twoSum([3,2,4],6);