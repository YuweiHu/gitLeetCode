// 60ms >42.24%
var getRow = function(rowIndex) {
    function factorial(num) {
        var re = 1;
        if (num == 1 || num == 0) return 1;
        return num * factorial(num - 1);
    }
    var re = [];
    for (i = 0; i <= rowIndex; i++) {
        re[i] = factorial(rowIndex) / factorial(i) / factorial(rowIndex - i);
    }
    return re;
};