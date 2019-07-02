// 108ms >33.85%
var reconstructQueue = function(people) {
    var result = [];
    //sort裡面放入compare function,若回傳<0 a放在b之前
    people.sort((a, b) => {
        if (a[0] != b[0]) {
            return b[0] - a[0];
        } else if (a[0] == b[0]) {
            return a[1] - b[1];
        }
    });
    for (i = 0; i < people.length; i++) {
        result.splice(people[i][1], 0, people[i]);
    }
    return result;
};