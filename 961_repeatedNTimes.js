// 232ms >5.33%
var repeatedNTimes = function(A) {
    var temp = [];
    var result;
    A.map((element) => {
        if (temp.indexOf(element) < 0) {
            temp.push(element);
        } else {
            result = element;
        }
    });
    return result;
};