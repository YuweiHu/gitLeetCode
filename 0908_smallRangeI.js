// 68ms >32.71%
var smallestRangeI = function(A, K) {
    var max = Math.max(...A);
    var min = Math.min(...A);
    if (A.length == 1) return 0;
    if (max + min <= 2 * K) return 0;
    if (max + min > 2 * K) return max - min - 2 * K;
};