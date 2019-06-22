var maxArea = function (height) {
    // var height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    var water = 0;
    var container = 0;
    for (i = 0; i < height.length; i++) {
        for (j = i + 1; j < height.length; j++) {
            container = (j - i) * Math.min(height[i], height[j]);
            if (container > water) {
                water = container;
            }
        }
    }
    return water;
};