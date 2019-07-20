var distributeCandies = function(candies, num_people) {
    var temp = [];
    for (i = 0; i < num_people; i++) {
        temp.push(0);
    }
    var i = 0;
    while (temp.reduce((acc, cur) => { return acc + cur }) < candies) {
        temp[i % num_people] += (i + 1);
        i++;
    }
    if (i % num_people - 1 == -1) {
        temp[num_people - 1] -= (temp.reduce((acc, cur) => { return acc + cur }) - candies);
    } else {
        temp[(i % num_people) - 1] -= (temp.reduce((acc, cur) => { return acc + cur }) - candies);
    }
    return temp;
};