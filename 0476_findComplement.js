// 56ms >80.82%
var findComplement = function(num) {
    var bi = num.toString(2);
    var re = 0;
    for (i = 0; i < bi.length; i++) {
        if (bi[i] == 0) {
            re += Math.pow(2, bi.length - 1 - i);
        }
    }
    return re;
};