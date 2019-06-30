var majorityElement = function (nums) {
    //將array排好，從前面開始算，一樣的slice掉，重複到有值大過majorNumber
    var majorNumber = nums.length/2;
    var count = 0;
    nums = nums.sort((a, b) => { a - b });

    while (nums.length > 0) {
        for (i = 0; i < nums.length; i++) {
            if (nums[0] == nums[i]) {
                count++;
            }
        }
        if (count >= majorNumber) {
            return nums[0];
        } else {
            nums = nums.slice(count);
        }
    }
};
