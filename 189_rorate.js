var rotate = function(nums, k) {
    for (i = 0; i < k; i++) {
        //pop去除最後一個元素
        var a = nums.pop();
        //unshift增加元素到陣列前面
        nums.unshift(a);
    }
};