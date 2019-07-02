// 56ms >92.74%
const selfDivide = (num) => {
    let x = num;
    while (num > 0) {
        if (x % (num % 10) !== 0) { return false; }
        num = Math.floor(num / 10);
    }
    return true;
}

var selfDividingNumbers = function(left, right) {
    var res = [];
    for (i = left; i <= right; i++) {
        if (selfDivide(i) == true) {
            res.push(i);
        }
    }
    return res;
};