var productExceptSelf = function (nums) {
    var product = 1;
    var arr = new Array(nums.length);
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {
            if (i != j) {
                product *= nums[j];
            }
        }
        arr[i] = product;
        product = 1;
    }
    return arr;
};
// 用除法解
// var productExceptSelf = function (nums) {
//     var product = 1;
//     for (i = 0; i < nums.length; i++) {
//         product *= nums[i];
//     }
//     return nums.map(x=>product/x);
// };