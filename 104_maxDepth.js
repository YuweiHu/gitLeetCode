var maxDepth = function (root) {
    //遞回函式
    if (root == null) {
        return 0;
    }
    //
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};