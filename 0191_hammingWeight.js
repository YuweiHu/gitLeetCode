var hammingWeight = function (n) {
    var a = n.toString(2).split('');
    var count = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i] == 1) {
            count++;
        }
    }
    return count;
};

var hammingWeight = function (n) {
    var a = n.toString(2).split('');
    var count = 0;
    a.map(item => {
        if (item == 1) {
            count++;
        }
    });
    return count;
};