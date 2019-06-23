var lengthOfLastWord = function(s) {

    var result = s.split(' ');
    while (result[result.length - 1] == '') {
        result.pop();
    }
    //如果result整理過後是個空集合
    if (result[0] == undefined) {
        return 0;
    } else {
        return result.pop().length;
    }
};