var reverseWords = function (s) {
    var str = s.split(' ');
    for (i = 0; i < str.length; i++) {
        str[i] = str[i].split('').reverse().join('');
    }
    return str.join(' ');
};