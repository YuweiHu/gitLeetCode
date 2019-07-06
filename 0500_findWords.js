// 48ms >94.47%
var findWords = function(words) {
    const compare = ['qwertyuiop[]', 'asdfghjkl;', 'zxcvbnm,./'];
    var re = [];
    for (let i = 0; i < words.length; i++) {
        var temp = words[i].toLowerCase();
        var count0 = 0;
        var count1 = 0;
        var count2 = 0;
        for (let j = 0; j < words[i].length; j++) {
            if (compare[0].indexOf(temp[j]) >= 0) {
                count0++;
            } else if (compare[1].indexOf(temp[j]) >= 0) {
                count1++;
            } else if (compare[2].indexOf(temp[j]) >= 0) {
                count2++;
            }
        }
        if (count0 == words[i].length || count1 == words[i].length || count2 == words[i].length) {
            re.push(words[i]);
        }
    }
    return re;
};