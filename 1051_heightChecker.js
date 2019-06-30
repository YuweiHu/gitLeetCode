// 56ms >86.44%
var heightChecker = function(heights) {
    var count = 0;
    var ori = heights.slice(0);
    var sort = heights.sort((a, b) => { return a - b });
    for (i = 0; i < heights.length; i++) {
        if (sort[i] != ori[i]) {
            count++;
        }
    }
    return count;
};