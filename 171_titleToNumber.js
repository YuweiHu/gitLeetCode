var titleToNumber = function (s) {

    var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = 0;

    for (i = 0; i < s.length; i++) {
        result += (alpha.indexOf(s[i]) + 1) * Math.pow(26, s.length - i - 1);
    }
    return result;
};