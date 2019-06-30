var findDuplicate = function (nums) {
    nums = nums.sort((a, b) => { return a - b; })
    for (i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            return nums[i];
        }
    }
};