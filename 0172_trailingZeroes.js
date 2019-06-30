// 法一：數字不大時可使用
// 問題：算出階乘值會超出js之數值最大值
var trailingZeroes = function(n) {
    //Use recursive function to caculate factorial
    function factorial(n) {
        if (n == 1) {
            return n;
        } else {
            return n * factorial(n - 1);
        }
    }
    var result = factorial(n);

    var count = 0;
    while (result % 10 == 0) {
        count++;
        result = result / 10;
    }
    return count;
};
// 法二：計算每階乘有幾個2跟5(其實不用計算2，因為5一定比較少)
var trailingZeroes = function(n) {
    var count = 0;
    if (n < 5) {
        return 0;
    }
    //一直除下去 除一次代表5的倍數 兩次代表25的倍數
    while (n >= 5) {
        count += Math.floor(n / 5);
        n = Math.floor(n / 5);
    }
    return count;
};