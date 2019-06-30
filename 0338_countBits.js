var countBits = function (num) {
    //不找規律硬幹法
    var result = [];
    for (i = 0; i <= num; i++) {
        var count = 0;
        for (j = 0; j < i.toString(2).length; j++) {
            if (i.toString(2)[j] == 1) {
                count++;
            }
        }
        result[i] = count;
    }
    return result;
};
var countBits = function (num) {
    //找規律 偶數除以二所對應之值 奇數等於上一個數+1
    // 0    0000    0
    // -------------
    // 1    0001    1
    // -------------
    // 2    0010    1
    // 3    0011    2
    // -------------
    // 4    0100    1
    // 5    0101    2
    // 6    0110    2
    // 7    0111    3
    // -------------
    // 8    1000    1
    // 9    1001    2
    // 10   1010    2
    // 11   1011    3
    // 12   1100    2
    // 13   1101    3
    // 14   1110    3
    // 15   1111    4
    var result = [0, 1];
    if (num == 0) {
        return [0];
    } else if (num == 1) {
        return [0, 1];
    } else {
        for (i = 2; i <= num; i++) {
            if (i % 2 == 0) {
                result[i] = result[i / 2];
            } else {
                result[i] = result[i - 1] + 1;
            }
        }
    }
    return result;
};