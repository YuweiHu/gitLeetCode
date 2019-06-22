var fizzBuzz = function (n) {
    var arr = [];
    for (i = 0; i < n; i++) {
        if ((i + 1) % 3 == 0 && (i + 1) % 5 !== 0) {
            arr[i] = 'Fizz';
        } else if ((i + 1) % 3 !== 0 && (i + 1) % 5 == 0) {
            arr[i] = 'Buzz';
        } else if ((i + 1) % 3 == 0 && (i + 1) % 5 == 0) {
            arr[i] = 'FizzBuzz';
        } else {
            arr[i] = (i + 1).toString();
        }
    }
    return arr;
};