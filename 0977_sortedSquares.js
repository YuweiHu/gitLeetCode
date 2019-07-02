// 120ms >86.77%
var sortedSquares = function(A) {
    var A2 = A.map(x => Math.pow(x, 2));
    A2.sort((a, b) => { return a - b })
    return A2
};