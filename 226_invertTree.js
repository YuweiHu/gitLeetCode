// 44ms >98.98%
var invertTree = function(root) {
    if (root == null || (root.left == null && root.right == null)) {
        return root;
    }
    var temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
    return root;
};