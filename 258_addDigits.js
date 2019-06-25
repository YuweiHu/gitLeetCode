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