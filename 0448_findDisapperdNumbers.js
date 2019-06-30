var findDisappearedNumbers = function (nums) {
    //數據不多可以用 Time Conplexity O(n^2)
    var dis = [];
    for (i = 1; i <= nums.length; i++) {
        var count = 0;
        for (j = 0; j < nums.length; j++) {
            if (nums[j] !== i) {
                count++;
            }
        }
        if (count == nums.length) {
            dis = dis.concat(i);
        }
    }
    return dis;
};

var findDisappearedNumbers = function (nums) {
    var result = [];
    for (i = 0; i < nums.length; i++) {
        if(nums.indexOf(i+1) == -1){
            result.push(i+1);
        }
    }
    return result;
};