
var diameterOfBinaryTree = function(root) {
    const res = [0]
    dfs(root,res)
    return res[0]
};

var dfs = function(root, res) {
    if (root === null) return 0
    let left = dfs(root.left, res)
    let right = dfs(root.right, res)
    res[0] = Math.max(res[0], left + right)
    return Math.max(right, left)  + 1 
}
