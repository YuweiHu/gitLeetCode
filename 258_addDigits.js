var addDigits = function(num) {
    while (num >= 10) {
        //將參數設置於迴圈內
        var result = 0;
        //將數字轉成分開之陣列 38轉成['3','8']
        num.toString().split('').forEach(element => {
            result += parseInt(element);
        });
        num = result;
    }
    return num;
};

// Another Solution
var addDigits = function(num) {
    if (num == 0) {
        return 0;
    } else if (num % 9 == 0) {
        return 9;
    } else {
        return num % 9;
    }
};