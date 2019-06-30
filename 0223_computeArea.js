var computeArea = function(A, B, C, D, E, F, G, H) {
    var area1 = Math.abs((A - C) * (B - D));
    var area2 = Math.abs((E - G) * (F - H));
    //沒有重疊直接回傳相加
    if (A >= G || B >= H || C <= E || D <= F) {
        return area1 + area2;
    }
    var areaOverlap = Math.abs((Math.max(A, E) - Math.min(C, G)) * (Math.max(B, F) - Math.min(D, H)))
    return area1 + area2 - areaOverlap;
};