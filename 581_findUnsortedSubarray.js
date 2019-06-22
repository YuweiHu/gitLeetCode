var findUnsortedSubarray = function (nums) {
    var sorted = nums.slice(0).sort((a, b) => {
        return a - b;
    });
    var arr = [];
    // 用toString使之相等
    if (nums.toString() == sorted.toString()) {
        return 0;
    } else {
        for (i = 0; i < nums.length; i++) {
            if (nums[i] !== sorted[i]) {
                arr = arr.concat(i);
            }
        }

        return arr[arr.length - 1] - arr[0] + 1;
    }
};