var singleNumber = function (nums) {
    nums = nums.sort((a, b) => { return a - b });
    for (let i = 0; i < nums.length; i = i + 2) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i];
        }
    }
};  
